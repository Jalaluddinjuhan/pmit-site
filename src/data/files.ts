// Build-time scan of public/files/t<trimester>/<PMIT-CODE>/<week folder>/...
// Example: public/files/t1/PMIT-6204/13 Nov 2026 - Week 01/lecture-1.pptx
//
// Files directly inside a week folder are shown under "Lectures".
// Put them in a sub-folder to choose the section instead:
//   documents/ (or docs/)  -> Important documents
//   others/                -> Others
//   lectures/              -> Lectures
import fs from 'node:fs';
import path from 'node:path';

export interface FileItem { name: string; url: string; ext: string; size: string; }
export interface WeekGroup { week: string; time: number; files: FileItem[]; }
export interface FileSections { lectures: WeekGroup[]; documents: WeekGroup[]; others: WeekGroup[]; total: number; }

const root = path.join(process.cwd(), 'public', 'files');
const MONTHS: Record<string, number> = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };

function weekTime(name: string): number {
  const m = name.match(/^(\d{1,2})\s+([A-Za-z]{3})[a-z]*\s+(\d{4})/);
  if (!m) return 0;
  const mon = MONTHS[m[2].toLowerCase()];
  return mon === undefined ? 0 : new Date(Number(m[3]), mon, Number(m[1])).getTime();
}

function fmtSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function entries(dir: string): fs.Dirent[] {
  try {
    return fs.readdirSync(dir, { withFileTypes: true }).filter((e) => !e.name.startsWith('.'));
  } catch {
    return [];
  }
}

function toItem(parts: string[], file: string, full: string): FileItem {
  const ext = path.extname(file).replace('.', '').toUpperCase();
  return {
    name: path.basename(file, path.extname(file)),
    ext: ext || 'FILE',
    size: fmtSize(fs.statSync(full).size),
    url: '/files/' + [...parts, file].map(encodeURIComponent).join('/'),
  };
}

const sectionOf = (folder: string): 'lectures' | 'documents' | 'others' => {
  const f = folder.toLowerCase();
  if (['documents', 'document', 'docs', 'doc', 'important'].includes(f)) return 'documents';
  if (['lectures', 'lecture', 'slides'].includes(f)) return 'lectures';
  return 'others';
};

export function getFiles(trimester: number, code: string): FileSections {
  const base = [`t${trimester}`, code];
  const codeDir = path.join(root, ...base);
  const buckets: Record<'lectures' | 'documents' | 'others', Record<string, WeekGroup>> = { lectures: {}, documents: {}, others: {} };
  let total = 0;

  const add = (sec: keyof typeof buckets, week: string, item: FileItem) => {
    const g = (buckets[sec][week] ??= { week, time: weekTime(week), files: [] });
    g.files.push(item);
    total++;
  };

  for (const e of entries(codeDir)) {
    if (e.isFile()) {
      add('lectures', 'General', toItem(base, e.name, path.join(codeDir, e.name)));
      continue;
    }
    const weekDir = path.join(codeDir, e.name);
    for (const f of entries(weekDir)) {
      if (f.isFile()) {
        add('lectures', e.name, toItem([...base, e.name], f.name, path.join(weekDir, f.name)));
      } else {
        const subDir = path.join(weekDir, f.name);
        const sec = sectionOf(f.name);
        for (const g of entries(subDir)) {
          if (g.isFile()) add(sec, e.name, toItem([...base, e.name, f.name], g.name, path.join(subDir, g.name)));
        }
      }
    }
  }

  const finish = (b: Record<string, WeekGroup>) =>
    Object.values(b)
      .map((g) => ({ ...g, files: g.files.sort((a, c) => a.name.localeCompare(c.name, undefined, { numeric: true })) }))
      .sort((a, c) => c.time - a.time || a.week.localeCompare(c.week, undefined, { numeric: true }));

  return { lectures: finish(buckets.lectures), documents: finish(buckets.documents), others: finish(buckets.others), total };
}
