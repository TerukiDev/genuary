Genuary p5.js sketches landing page

How to use

1. Install Node.js (if you don't have it).
2. From this folder (sketches/p5js), run:

   node generate-index.js

This will scan the `sketches/` subfolder for directories containing an `index.html` and generate `index.html` in this folder.

If you prefer a completely static, Node-free workflow (e.g., for GitHub Pages), you can update the `sketches.json` file in this folder by hand. The page will try to load `sketches.json` client-side and use it to build the landing cards (no server or Node needed). The Node generator (`generate-index.js`) is still available if you want to automatically recreate `sketches.json` or `index.html` locally.

Deploying to GitHub Pages

- Option A: Put this folder on the `gh-pages` branch or use the repository `Pages` settings and point to `main` / `docs` or the root depending on your setup.
- Option B: Copy the generated `index.html`, `styles.css` and the `sketches/` folder into a folder that GitHub Pages serves (e.g., `docs/`) and publish.

Notes

- The generator now only includes folders that contain the word `copy` (case-insensitive), so the original folder is excluded when you want only the copies.
- Folder names containing spaces or non-ASCII characters are URL-encoded automatically by the generator.
- Click the **Open** button on a card to view the sketch fullscreen in a lightweight overlay (Esc or the ✕ button closes it).
- If you prefer thumbnails instead of live previews, add `screenshot.png` inside each sketch folder and update the generator.
