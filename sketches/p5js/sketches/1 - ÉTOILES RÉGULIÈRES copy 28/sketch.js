// GENUARY DAY 28: HTML elements only
// Build a responsive grid of DIVs and style them procedurally

// Remove any existing canvas
window.onload = () => {
  const root = document.body;
  // clear body
  while (root.firstChild) root.removeChild(root.firstChild);
  const container = document.createElement("div");
  container.style.display = "grid";
  const cols = 12;
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.width = "480px";
  container.style.margin = "12px auto";
  container.style.gap = "6px";
  document.body.style.background = "#fbfbfb";
  document.body.appendChild(container);

  for (let i = 0; i < cols * cols; i++) {
    const d = document.createElement("div");
    const hue = Math.floor((i / (cols * cols)) * 360);
    d.style.paddingTop = "100%";
    d.style.width = "100%";
    d.style.background = `hsl(${hue}, 60%, ${40 + (i % cols) * 3}%)`;
    d.style.borderRadius = `${(i % 4) * 4}px`;
    d.style.boxShadow = `inset 0 0 6px rgba(0,0,0,0.06)`;
    container.appendChild(d);
  }
};
