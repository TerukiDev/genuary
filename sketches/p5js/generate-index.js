const fs = require("fs");
const path = require("path");

const root = __dirname;
const sketchesDir = path.join(root, "sketches");
const outFile = path.join(root, "index.html");

function slug(name) {
  // use encodeURIComponent to make valid URL parts
  return encodeURIComponent(name);
}

const items = fs
  .readdirSync(sketchesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  // Include folders with "copy" or that look like a chatbot demo (case-insensitive)
  .filter(
    (name) =>
      (/copy/i.test(name) || /chatbot/i.test(name)) &&
      fs.existsSync(path.join(sketchesDir, name, "index.html")),
  )
  // Map to object with numeric copy index if present, otherwise large number so copies sort first
  .map((name) => {
    const m = name.match(/copy\s*(\d+)/i);
    return { name, num: m ? Number(m[1]) : 9999 };
  })
  .sort((a, b) => a.num - b.num)
  .map((o) => o.name);

console.log("Found", items.length, "'copy' sketches");

// Also write a static JSON file (`sketches.json`) so the landing page can be updated without Node
const jsonList = items.map(name => ({ name, url: `sketches/${slug(name)}/` }));
const jsonPath = path.join(root, 'sketches.json');
try{
  fs.writeFileSync(jsonPath, JSON.stringify(jsonList, null, 2), 'utf8');
  console.log('Wrote', jsonPath);
}catch(err){
  console.warn('Could not write sketches.json', err);
}

const cards = items
  .map((name) => {
    const url = `sketches/${slug(name)}/`;
    // data-src used for hover preview, data-full used for fullscreen overlay
    return `      <div class="card" data-name="${name}">
        <a class="thumb" href="#" data-src="${url}" data-full="${url}" aria-label="Preview ${name}"></a>
        <div class="meta">
          <a class="title" href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>
          <button class="open" data-full="${url}" aria-label="Open ${name} fullscreen">Open</button>
        </div>
      </div>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Genuary — p5.js sketches</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Genuary — p5.js sketches</h1>
    <p class="desc">A collection of sketches. Use the "Open" button to view a sketch fullscreen. Hover a card to preview (lazy-loaded).</p>
    <input id="search" placeholder="Filter sketches..." aria-label="Filter sketches">
  </header>
  <main id="grid">
${cards}
  </main>

  <!-- Fullscreen overlay -->
  <div id="overlay" class="overlay" aria-hidden="true">
    <button id="closeOverlay" class="close" aria-label="Close">✕</button>
    <iframe id="overlayFrame" class="overlay-frame" src="" frameborder="0" allowfullscreen></iframe>
  </div>

  <script>
  // Simple client-side filter
  const search = document.getElementById('search');
  const grid = document.getElementById('grid');
  const overlay = document.getElementById('overlay');
  const overlayFrame = document.getElementById('overlayFrame');
  const closeOverlayBtn = document.getElementById('closeOverlay');

  search.addEventListener('input', () => {
    const q = search.value.toLowerCase();
    Array.from(grid.children).forEach(card => {
      const title = card.querySelector('.title').textContent.toLowerCase();
      card.style.display = title.includes(q) ? '' : 'none';
    });
  });

  // Hover preview (lazy load iframe inside .thumb)
  let hoverTimer = null;
  grid.addEventListener('mouseover', e => {
    const card = e.target.closest('.card');
    if (!card) return;
    hoverTimer = setTimeout(() => {
      const thumb = card.querySelector('.thumb');
      if (thumb.dataset.loaded) return;
      const src = thumb.dataset.src;
      const ifr = document.createElement('iframe');
      ifr.src = src;
      ifr.loading = 'lazy';
      ifr.className = 'preview';
      thumb.appendChild(ifr);
      thumb.dataset.loaded = '1';
    }, 350);
  });
  grid.addEventListener('mouseout', e => {
    clearTimeout(hoverTimer);
  });

  // Open fullscreen overlay with the selected sketch
  function openOverlay(url){
    overlayFrame.src = url;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeOverlay(){
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    overlayFrame.src = '';
    document.body.style.overflow = '';
  }

  // Click on the open button
  grid.addEventListener('click', e => {
    const btn = e.target.closest('button.open');
    if (btn){
      const url = btn.dataset.full;
      openOverlay(url);
      return;
    }
    // allow clicking the thumb to open as well
    const card = e.target.closest('.card');
    if (card){
      const url = card.querySelector('.thumb').dataset.full;
      if (url) openOverlay(url);
    }
  });

  // Close handlers
  closeOverlayBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeOverlay();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeOverlay();
  });
  </script>
</body>
</html>`;

fs.writeFileSync(outFile, html, "utf8");
console.log("Wrote", outFile);
