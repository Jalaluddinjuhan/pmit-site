# PMIT Fall 2026 – Friday Batch site

Astro static site: trimester → subject pages, routine, exams, notices, bus schedule.

## Run locally (VS Code terminal)
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Where to edit
| What | File |
|---|---|
| Subjects, teachers, routine, exam dates | `src/data/courses.ts` |
| Lectures / important docs / others for a subject | `src/data/resources/PMIT-XXXX.json` |
| Notices (Friday batch, Fall 2026) | `src/data/notices.json` |
| Bus schedule | `src/data/bus.json` |

Resource item format (`lectures`, `documents`, `others`):
```json
{ "title": "Lecture 1 – Intro", "url": "https://drive.google.com/...", "date": "2026-11-20", "note": "optional" }
```

## Deploy (Git + Vercel)
```bash
git init && git add . && git commit -m "PMIT site"
git branch -M main
git remote add origin https://github.com/<you>/pmit-site.git
git push -u origin main
```
Then on vercel.com: **Add New → Project → import the repo**. Vercel detects Astro automatically
(build `npm run build`, output `dist`). Every `git push` redeploys.
