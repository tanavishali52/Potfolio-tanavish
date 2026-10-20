# Tanavish Ali — Portfolio

React + Vite + Tailwind CSS (v4) portfolio.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Edit content
All text (projects, experience, skills, contact) lives in `src/data/profile.js`.

## Build
```bash
npm run build      # outputs to dist/
```

## Deploy to GitHub Pages (tanavishali.github.io)
1. Create a repo named `tanavishali.github.io`.
2. `npm run build`, then push the contents of `dist/` to that repo (or use the `gh-pages` package:
   `npm i -D gh-pages` and add `"deploy": "gh-pages -d dist"` to scripts).
3. Settings → Pages → choose the branch. Vercel/Netlify also work: build command `npm run build`, output `dist`.
