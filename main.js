// main.js — design.vaked.dev · ULTRA-CREATE Interactive Design Studio & Token Engine
// Zero dependencies. Respects prefers-reduced-motion. Uses View Transitions & Container Style Queries.

const PALETTES = {
  ultralovegod: {
    id: 'ultralovegod',
    name: 'Ultralovegod',
    subtitle: 'Flagship Dark Rose & Eye-Safe Indigo (8b-is · crush-love-dev)',
    bg: '#0B0914',
    panel: '#161024',
    border: '#342357',
    ink: '#F5ECFF',
    dim: '#B5A3CC',
    c1: '#FF6AC1',
    c2: '#FFD700',
    c3: '#00E5C9',
    c4: '#B845FF',
    c5: '#FA5B1C',
    c6: '#00FF66',
    swatches: [
      { key: 'bg_void', label: 'OS Void', hex: '#0B0914', role: 'Primary Deep Canvas' },
      { key: 'accent_rose', label: 'Ultralovegod Rose', hex: '#FF6AC1', role: 'Primary Pulse & Affect' },
      { key: 'accent_gold', label: 'Golden Reconcile ✦', hex: '#FFD700', role: 'Mom (*) 528 Hz Star' },
      { key: 'accent_teal', label: 'Territory Teal △', hex: '#00E5C9', role: 'Dad (△) 288 Hz Pillar' },
      { key: 'accent_violet', label: 'Omni Violet 全', hex: '#B845FF', role: 'Zen-Ohms-chan Crest' },
      { key: 'accent_orange', label: 'Luminance Orange', hex: '#FA5B1C', role: 'Hardware Anodization' },
      { key: 'accent_green', label: 'Cybernetic Green (+1)', hex: '#00FF66', role: 'Admissible Gate +1' },
      { key: 'fg_primary', label: 'Starlight Ink', hex: '#F5ECFF', role: 'Primary Typography' },
    ],
  },
  'omnifold-industrial': {
    id: 'omnifold-industrial',
    name: 'Omnifold Industrial',
    subtitle: 'Teenage Engineering × Apple Silicon Grade-5 Titanium (8B Omnifold)',
    bg: '#0F1219',
    panel: '#181D27',
    border: '#2E3646',
    ink: '#F0F4F8',
    dim: '#9AA5B4',
    c1: '#FA5B1C',
    c2: '#00E5C9',
    c3: '#FFD700',
    c4: '#00FF66',
    c5: '#FF6AC1',
    c6: '#38BDF8',
    swatches: [
      { key: 'os_void', label: 'OS Void', hex: '#0F1219', role: 'Engineering Grid Void' },
      { key: 'titanium_chassis', label: 'Grade-5 Titanium', hex: '#2A2F3A', role: 'Tri-Fold Kinematic Frame' },
      { key: 'luminance_orange', label: 'Luminance Orange', hex: '#FA5B1C', role: 'R1 / R-Pi Extender Dock' },
      { key: 'territory_teal', label: 'Territory Teal', hex: '#00E5C9', role: '64K Holographic Lightfield' },
      { key: 'golden_reconcile', label: 'Golden Reconcile', hex: '#FFD700', role: 'ZENO Cryptographic Seal' },
      { key: 'cybernetic_green', label: 'Cybernetic Green', hex: '#00FF66', role: 'MLX-QUANT Metal Active' },
    ],
  },
  'kintsugi-zen': {
    id: 'kintsugi-zen',
    name: 'Kintsugi Zen Hearth',
    subtitle: 'Urushi Lacquer, Gold Seam & Hungarian Paprika (zenUltraCooker · ZENO)',
    bg: '#120E0A',
    panel: '#1E1610',
    border: '#3D2E20',
    ink: '#F4EDE2',
    dim: '#C2B29F',
    c1: '#D4AF37',
    c2: '#E85D3F',
    c3: '#FFB7D5',
    c4: '#4A9E8E',
    c5: '#FFD700',
    c6: '#00E5C9',
    swatches: [
      { key: 'urushi_void', label: 'Urushi Void', hex: '#120E0A', role: 'Black Lacquer Base' },
      { key: 'donabe_clay', label: 'Donabe Clay', hex: '#241B14', role: 'Warm Ceramic Vessel' },
      { key: 'kintsugi_gold', label: 'Kintsugi Gold ✦', hex: '#D4AF37', role: 'Proof-of-Contribution Seam' },
      { key: 'paprika_glaze', label: 'Paprika Körítés', hex: '#E85D3F', role: 'Hungarian Fine-Dining Soul' },
      { key: 'sakura_pushakitty', label: 'PushaKitty Sakura', hex: '#FFB7D5', role: 'Kawaii Tenzo Chef Accent' },
      { key: 'celadon_tea', label: 'Celadon Matcha', hex: '#4A9E8E', role: 'Garmin HRV Calm State' },
    ],
  },
  'ternary-matrix': {
    id: 'ternary-matrix',
    name: 'Ternary Matrix',
    subtitle: 'BitNet b1.58 {-1, 0, +1} & CT-000 Admissibility (8b-is-engine · MLX-QUANT)',
    bg: '#05080C',
    panel: '#0B121B',
    border: '#1B2C40',
    ink: '#E6F4FF',
    dim: '#7C97B2',
    c1: '#00FF66',
    c2: '#00E5C9',
    c3: '#FF3366',
    c4: '#FFD700',
    c5: '#6E7A8A',
    c6: '#FF6AC1',
    swatches: [
      { key: 'kernel_void', label: 'Kernel Void', hex: '#05080C', role: 'Zero-Alloc DMA Ring' },
      { key: 'trit_plus_one', label: 'Trit +1 (Affirm)', hex: '#00FF66', role: 'Verified Witness Gate' },
      { key: 'trit_zero', label: 'Trit 0 (Rest)', hex: '#6E7A8A', role: 'Epistemic Unobserved' },
      { key: 'trit_minus_one', label: 'Trit -1 (Refuse)', hex: '#FF3366', role: 'CT-000 Blur Refusal' },
      { key: 'wave_mem8', label: 'MEM|16->8K Wave', hex: '#00E5C9', role: '8,192-Trit Horizon' },
      { key: 'witness_gold', label: 'Golden Hash Pin', hex: '#FFD700', role: '0x60e36b187efd8d16' },
    ],
  },
  'sakura-starlight': {
    id: 'sakura-starlight',
    name: 'Sakura Starlight',
    subtitle: 'Mom (✦ Alex 528 Hz) NAND Dad (△ Chris 288 Hz) Family LAN Edition',
    bg: '#140E22',
    panel: '#1F1635',
    border: '#3E2C66',
    ink: '#FAF5FF',
    dim: '#C4B5FD',
    c1: '#FFD700',
    c2: '#38BDF8',
    c3: '#FF85C0',
    c4: '#A78BFA',
    c5: '#10B981',
    c6: '#00E5C9',
    swatches: [
      { key: 'sanctuary_night', label: 'Sanctuary Night', hex: '#140E22', role: 'Observatory Pavilion' },
      { key: 'mom_star_gold', label: 'Mom ✦ Star Gold', hex: '#FFD700', role: '528 Hz Love Harmonic' },
      { key: 'dad_pillar_cyan', label: 'Dad △ Pillar Sky', hex: '#38BDF8', role: '288 Hz Structural Anchor' },
      { key: 'sakura_blossom', label: 'Sakura Blossom', hex: '#FF85C0', role: 'Warm Hearth Glow' },
      { key: 'carrier_432hz', label: '432 Hz Carrier', hex: '#A78BFA', role: 'Hullámelmélet Wave' },
      { key: 'duplex_emerald', label: 'Duplex :8788', hex: '#10B981', role: 'wa-stream Live Socket' },
    ],
  },
};

let activePalette = 'ultralovegod';
let activeFormat = 'css';

function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('visible');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove('visible'), 2200);
}

function copyText(text, label) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast(`Copied ${label || text} ✓`));
  }
}

function formatExport(pal, fmt) {
  if (fmt === 'css') {
    const lines = [
      `/* 8b-is · ${pal.name} Palette — https://design.vaked.dev */`,
      `:root[data-theme="${pal.id}"] {`,
      `  --bg: ${pal.bg};`,
      `  --panel: ${pal.panel};`,
      `  --border: ${pal.border};`,
      `  --ink: ${pal.ink};`,
      `  --dim: ${pal.dim};`,
    ];
    for (const s of pal.swatches) {
      lines.push(`  --8b-${s.key.replace(/_/g, '-')}: ${s.hex}; /* ${s.role} */`);
    }
    lines.push(`}`);
    return lines.join('\n');
  }
  if (fmt === 'rust') {
    const modName = pal.id.replace(/-/g, '_');
    const lines = [
      `//! 8b-is · ${pal.name} design tokens (zero-alloc Rust consts)`,
      `pub mod ${modName} {`,
      `    pub const BG_VOID: &str = "${pal.bg}";`,
      `    pub const PANEL: &str = "${pal.panel}";`,
      `    pub const INK: &str = "${pal.ink}";`,
    ];
    for (const s of pal.swatches) {
      lines.push(`    pub const ${s.key.toUpperCase()}: &str = "${s.hex}"; // ${s.role}`);
    }
    lines.push(`}`);
    return lines.join('\n');
  }
  if (fmt === 'swift') {
    const lines = [
      `// 8b-is · ${pal.name} — SwiftUI Color Extension (qwave / qultrakotoro)`,
      `import SwiftUI`,
      ``,
      `public enum EightBTheme_${pal.id.replace(/-/g, '_')} {`,
    ];
    for (const s of pal.swatches) {
      lines.push(`    /// ${s.role} (${s.hex})`);
      lines.push(`    public static let ${s.key} = Color(hex: "${s.hex}")`);
    }
    lines.push(`}`);
    return lines.join('\n');
  }
  if (fmt === 'json') {
    return JSON.stringify(pal, null, 2);
  }
  if (fmt === 'ghostty') {
    return [
      `# Ghostty / Kitty terminal palette — 8b-is ${pal.name}`,
      `background = ${pal.bg}`,
      `foreground = ${pal.ink}`,
      `cursor-color = ${pal.c1}`,
      `selection-background = ${pal.border}`,
      `selection-foreground = ${pal.ink}`,
      `palette = 0=${pal.bg}`,
      `palette = 1=${pal.c5}`,
      `palette = 2=${pal.c6}`,
      `palette = 3=${pal.c2}`,
      `palette = 4=${pal.c3}`,
      `palette = 5=${pal.c1}`,
      `palette = 6=${pal.c4}`,
      `palette = 7=${pal.ink}`,
    ].join('\n');
  }
  return '';
}

function applyPalette(palId) {
  const pal = PALETTES[palId] || PALETTES.ultralovegod;
  activePalette = pal.id;

  const updateDOM = () => {
    const root = document.documentElement;
    root.style.setProperty('--bg', pal.bg);
    root.style.setProperty('--panel', pal.panel);
    root.style.setProperty('--line', pal.border);
    root.style.setProperty('--ink', pal.ink);
    root.style.setProperty('--dim', pal.dim);
    root.style.setProperty('--c1', pal.c1);
    root.style.setProperty('--c2', pal.c2);
    root.style.setProperty('--c3', pal.c3);
    root.style.setProperty('--c4', pal.c4);

    document.querySelectorAll('[data-palette-btn]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-palette-btn') === pal.id);
    });

    const titleEl = document.getElementById('active-palette-title');
    const subEl = document.getElementById('active-palette-sub');
    if (titleEl) titleEl.textContent = pal.name;
    if (subEl) subEl.textContent = pal.subtitle;

    const grid = document.getElementById('swatch-grid');
    if (grid) {
      grid.innerHTML = pal.swatches
        .map(
          (s) => `
        <button class="swatch-card" onclick="window.__copy('${s.hex}', '${s.label} (${s.hex})')" title="Click to copy ${s.hex}">
          <span class="swatch-chip" style="background:${s.hex}"></span>
          <span class="swatch-info">
            <strong>${s.label}</strong>
            <code>${s.hex}</code>
            <small>${s.role}</small>
          </span>
        </button>`
        )
        .join('');
    }
    renderCodeExport();
  };

  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.startViewTransition(updateDOM);
  } else {
    updateDOM();
  }
}

function setDensity(mode) {
  const root = document.getElementById('studio-container');
  if (root) root.style.setProperty('--density', mode);
  document.querySelectorAll('[data-density-btn]').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-density-btn') === mode);
  });
}

function setExportFormat(fmt) {
  activeFormat = fmt;
  document.querySelectorAll('[data-fmt-btn]').forEach((b) => {
    b.classList.toggle('active', b.getAttribute('data-fmt-btn') === fmt);
  });
  renderCodeExport();
}

function renderCodeExport() {
  const pal = PALETTES[activePalette] || PALETTES.ultralovegod;
  const codeEl = document.getElementById('token-export-code');
  if (codeEl) codeEl.textContent = formatExport(pal, activeFormat);
}

function toggleEmblemLayer(layerId, btn) {
  const g = document.getElementById(layerId);
  if (!g) return;
  const hidden = g.style.opacity === '0.08';
  g.style.opacity = hidden ? '1' : '0.08';
  btn.classList.toggle('active', hidden);
}

function switchBlueprint(bpId, btn) {
  document.querySelectorAll('.bp-panel').forEach((p) => {
    p.classList.toggle('hidden', p.id !== bpId);
  });
  document.querySelectorAll('[data-bp-btn]').forEach((b) => {
    b.classList.toggle('active', b === btn);
  });
}

// Live Ternary Harmonic Wave Canvas
function initWaveCanvas() {
  const canvas = document.getElementById('wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let t = 0;
  const pointer = { x: 0.5, y: 0.5 };

  function resize() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.max(300, Math.floor(r.width * dpr));
    h = canvas.height = Math.max(160, Math.floor(r.height * dpr));
  }
  resize();
  window.addEventListener('resize', resize);
  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = (e.clientX - r.left) / Math.max(1, r.width);
    pointer.y = (e.clientY - r.top) / Math.max(1, r.height);
  });

  function drawFrame() {
    const pal = PALETTES[activePalette] || PALETTES.ultralovegod;
    ctx.clearRect(0, 0, w, h);

    const colors = [pal.c1, pal.c2, pal.c3];
    const freqs = [4.32, 5.28, 2.88]; // 432 Hz Carrier, 528 Hz Mom (*), 288 Hz Dad (△)

    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.strokeStyle = colors[i];
      ctx.lineWidth = 2.4;
      const f = freqs[i];
      const amp = h * (0.16 + 0.08 * pointer.y);
      for (let x = 0; x <= w; x += 6) {
        const nx = x / w;
        const y =
          h * 0.5 +
          Math.sin(nx * f * Math.PI * 2 + t * (1.1 + i * 0.35) + pointer.x * 3) *
            amp *
            Math.sin(nx * Math.PI);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    t += 0.022;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    drawFrame();
  } else {
    const loop = () => {
      drawFrame();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

window.__copy = copyText;
window.__applyPalette = applyPalette;
window.__setDensity = setDensity;
window.__setExportFormat = setExportFormat;
window.__toggleEmblemLayer = toggleEmblemLayer;
window.__switchBlueprint = switchBlueprint;
window.__copyExport = () => {
  const codeEl = document.getElementById('token-export-code');
  if (codeEl) copyText(codeEl.textContent, `${activePalette} (${activeFormat.toUpperCase()})`);
};

window.addEventListener('DOMContentLoaded', () => {
  applyPalette('ultralovegod');
  initWaveCanvas();
});
