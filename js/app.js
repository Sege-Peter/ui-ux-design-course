/**
 * UI/UX Design Master Course - Client Logic
 * Features:
 *  - Real-time WCAG 2.2 Color Contrast Calculator
 *  - 8pt Spatial Grid Visual Overlay Toggle
 *  - Theme Controller (Dark/Light mode)
 *  - Mobile Navigation Drawer
 */

'use strict';

// ==========================================================================
// 1. THEME SWITCHER
// ==========================================================================
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const saved = localStorage.getItem('uiux-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('uiux-theme', next);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

// ==========================================================================
// 2. 8PT SPATIAL GRID OVERLAY TOGGLE
// ==========================================================================
function initGridOverlay() {
  const gridBtn = document.getElementById('grid-toggle-btn');
  const gridOverlay = document.getElementById('grid-overlay');
  const gridStatus = document.getElementById('grid-status');

  if (!gridBtn || !gridOverlay) return;

  gridBtn.addEventListener('click', () => {
    const isHidden = gridOverlay.classList.toggle('hidden');
    gridStatus.textContent = isHidden ? 'Off' : 'On';
    gridBtn.classList.toggle('btn-primary', !isHidden);
    gridBtn.classList.toggle('btn-outline', isHidden);
  });
}

// ==========================================================================
// 3. MOBILE NAVIGATION
// ==========================================================================
function initNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  const links = navMenu.querySelectorAll('.nav-link');
  links.forEach(l => {
    l.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================================
// 4. WCAG 2.2 COLOR CONTRAST CALCULATOR
// ==========================================================================
function initContrastCalculator() {
  const textColorPicker = document.getElementById('text-color-picker');
  const textColorHex = document.getElementById('text-color-hex');
  const bgColorPicker = document.getElementById('bg-color-picker');
  const bgColorHex = document.getElementById('bg-color-hex');

  const contrastPreview = document.getElementById('contrast-preview');
  const ratioValue = document.getElementById('contrast-ratio-value');
  const badgeAANormal = document.getElementById('badge-aa-normal');
  const badgeAALarge = document.getElementById('badge-aa-large');
  const badgeAAA = document.getElementById('badge-aaa');

  if (!textColorPicker || !bgColorPicker) return;

  // Sync inputs
  textColorPicker.addEventListener('input', () => {
    textColorHex.value = textColorPicker.value.toUpperCase();
    calculateAndRender();
  });

  textColorHex.addEventListener('input', () => {
    if (isValidHex(textColorHex.value)) {
      textColorPicker.value = formatHex(textColorHex.value);
      calculateAndRender();
    }
  });

  bgColorPicker.addEventListener('input', () => {
    bgColorHex.value = bgColorPicker.value.toUpperCase();
    calculateAndRender();
  });

  bgColorHex.addEventListener('input', () => {
    if (isValidHex(bgColorHex.value)) {
      bgColorPicker.value = formatHex(bgColorHex.value);
      calculateAndRender();
    }
  });

  function isValidHex(hex) {
    return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex.trim());
  }

  function formatHex(hex) {
    let clean = hex.trim();
    if (!clean.startsWith('#')) clean = '#' + clean;
    if (clean.length === 4) {
      clean = '#' + clean[1] + clean[1] + clean[2] + clean[2] + clean[3] + clean[3];
    }
    return clean;
  }

  function hexToRgb(hex) {
    const formatted = formatHex(hex);
    const bigint = parseInt(formatted.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }

  // Calculate WCAG Relative Luminance
  function getLuminance(rgb) {
    const a = [rgb.r, rgb.g, rgb.b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  function calculateAndRender() {
    const textHex = formatHex(textColorPicker.value);
    const bgHex = formatHex(bgColorPicker.value);

    const lum1 = getLuminance(hexToRgb(textHex));
    const lum2 = getLuminance(hexToRgb(bgHex));

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    const ratio = (brightest + 0.05) / (darkest + 0.05);
    const formattedRatio = (Math.round(ratio * 10) / 10).toFixed(1);

    // Update UI Preview
    contrastPreview.style.backgroundColor = bgHex;
    contrastPreview.style.color = textHex;
    ratioValue.textContent = `${formattedRatio} : 1`;

    // Check Conformance thresholds
    // AA Normal Text: >= 4.5:1
    updateBadge(badgeAANormal, ratio >= 4.5, "AA Normal");

    // AA Large Text: >= 3.0:1
    updateBadge(badgeAALarge, ratio >= 3.0, "AA Large");

    // AAA: >= 7.0:1
    updateBadge(badgeAAA, ratio >= 7.0, "AAA");
  }

  function updateBadge(el, pass, label) {
    el.textContent = `${label}: ${pass ? 'PASS' : 'FAIL'}`;
    el.className = `badge ${pass ? 'badge-pass' : 'badge-fail'}`;
  }

  // Initial Calculation
  calculateAndRender();
}

// ==========================================================================
// 5. INITIALIZE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initGridOverlay();
  initNavigation();
  initContrastCalculator();
  console.log("UI/UX Design Master Course application initialized.");
});
