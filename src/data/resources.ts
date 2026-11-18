// Loads src/data/resources/<PMIT-CODE>.json for each subject.
export interface Item { title: string; url: string; date?: string; note?: string; }
export interface Resources { lectures: Item[]; documents: Item[]; others: Item[]; }

const files = import.meta.glob('./resources/*.json', { eager: true }) as Record<string, { default: Resources }>;

export function getResources(code: string): Resources {
  const hit = files[`./resources/${code}.json`];
  return hit?.default ?? { lectures: [], documents: [], others: [] };
}
