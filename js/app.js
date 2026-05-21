// ================================================================
// app.js — Shared Application Layer
// Theme, Navbar, Particles, Carousel, Toast, XP Badge, Tilt
// ================================================================

// ── THEME MANAGEMENT ─────────────────────────────────────────────
const ThemeManager = (() => {
  const KEY = 'bapo_theme';

  function get() {
    return localStorage.getItem(KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function set(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    // Update toggle button icon
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggle() {
    const current = get();
    const next = current === 'dark' ? 'light' : 'dark';
    set(next);
    if (window.SoundEngine) SoundEngine.click();
    return next;
  }

  function init() {
    set(get());
    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggle);
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(KEY)) set(e.matches ? 'dark' : 'light');
    });
  }

  return { init, get, set, toggle };
})();

// ── PARTICLE SYSTEM ──────────────────────────────────────────────
function initParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;

  const colors = ['#7C3AED','#EC4899','#06B6D4','#10B981','#F59E0B'];
  const count = window.innerWidth > 768 ? 20 : 10;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 2 + Math.random() * 4;
    const x = Math.random() * 100;
    const duration = 8 + Math.random() * 16;
    const delay = -Math.random() * 20;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      left:${x}%;
      width:${size}px;
      height:${size}px;
      background:${color};
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      opacity:${0.2 + Math.random() * 0.4};
    `;
    container.appendChild(p);
  }
}

// ── XP BADGE ─────────────────────────────────────────────────────
function updateXPBadge() {
  const badge = document.getElementById('xpBadge');
  if (!badge || !window.Engine) return;
  const state = Engine.getState();
  const title = Engine.getLevelTitle(state.level);
  badge.textContent = `⚡ ${state.xp} XP · ${title}`;
  badge.title = `Level ${state.level}: ${title}`;
}

// ── TOAST ─────────────────────────────────────────────────────────
function showToast(message, duration = 2500) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), duration);
}

// ── TILT EFFECT ──────────────────────────────────────────────────
function initTilt(el) {
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return; // Skip on touch devices

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    el.style.transition = 'transform 0.4s ease';
    setTimeout(() => el.style.transition = '', 400);
  });
}

// ── CAROUSEL ENGINE ──────────────────────────────────────────────
function createCarousel(sections, renderCard, opts = {}) {
  const wrapper = document.querySelector('.carousel-track-wrapper');
  const counterEl = document.querySelector('.carousel-counter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressEl = document.querySelector('.nav-progress');

  if (!wrapper) return;

  let current = 0;
  const total = sections.length;

  function update(direction = null) {
    // Remove old card with exit animation
    const existing = wrapper.querySelector('.content-card');
    if (existing && direction) {
      const exitClass = direction === 'next' ? 'card-exit-left' : 'card-exit-right';
      existing.classList.add(exitClass);
      setTimeout(() => existing.remove(), 250);
    } else if (existing) {
      existing.remove();
    }

    // Create new card
    setTimeout(() => {
      const card = renderCard(sections[current], current);
      const enterClass = direction === 'next' ? 'card-enter-right' : direction === 'prev' ? 'card-enter-left' : '';
      if (enterClass) card.classList.add(enterClass);
      wrapper.appendChild(card);

      // Init tilt on card
      initTilt(card);

      // Apply hourly theme
      if (window.Engine) {
        const theme = Engine.getHourlyThemeIndex(current);
        card.classList.add(theme);
      }

      // Update counters
      if (counterEl) counterEl.textContent = `${String(current + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
      if (progressEl) progressEl.textContent = `${current + 1} of ${total}`;

      // Update buttons
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current === total - 1;
    }, direction ? 200 : 0);
  }

  function goNext() {
    if (current < total - 1) {
      current++;
      update('next');
      if (window.SoundEngine) SoundEngine.swipe();
    }
  }

  function goPrev() {
    if (current > 0) {
      current--;
      update('prev');
      if (window.SoundEngine) SoundEngine.swipe();
    }
  }

  // Arrow buttons
  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext(); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); goPrev(); }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchStartY = 0;
  wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  wrapper.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext(); else goPrev();
    }
  }, { passive: true });

  // Initial render
  update();

  return { goNext, goPrev, getCurrent: () => current, total };
}

// ── CONTENT CARD RENDERER ────────────────────────────────────────
function renderContentCard(section, idx) {
  const card = document.createElement('div');
  card.className = 'content-card';
  card.dataset.sectionId = section.id;

  const themeClass = window.Engine
    ? Engine.getHourlyThemeIndex(idx)
    : window.BAData.SECTION_THEMES[idx % window.BAData.SECTION_THEMES.length];

  card.classList.add(themeClass);

  card.innerHTML = `
    <div class="card-header">
      <div class="card-header-top">
        <span class="card-tag">${section.tag}</span>
        <span class="card-section-num">${section.num}</span>
      </div>
      <h2 class="card-title">${section.title}</h2>
    </div>
    <div class="card-body">
      ${section.content}
    </div>
    <div class="card-footer">
      <div class="card-insight">${section.insight}</div>
    </div>
  `;

  return card;
}

// ── SOUND INIT ON FIRST INTERACTION ──────────────────────────────
function initSoundOnInteraction() {
  const firstInteraction = () => {
    if (window.SoundEngine) {
      SoundEngine.init();
      SoundEngine.resume();
    }
    document.removeEventListener('click', firstInteraction);
    document.removeEventListener('keydown', firstInteraction);
    document.removeEventListener('touchstart', firstInteraction);
  };
  document.addEventListener('click', firstInteraction);
  document.addEventListener('keydown', firstInteraction);
  document.addEventListener('touchstart', firstInteraction, { passive: true });
}

// ── SOUND TOGGLE BUTTON ──────────────────────────────────────────
function initSoundToggle() {
  const btn = document.getElementById('soundToggle');
  if (!btn || !window.SoundEngine) return;
  btn.addEventListener('click', () => {
    const enabled = SoundEngine.toggle();
    btn.textContent = enabled ? '🔊' : '🔇';
    btn.title = enabled ? 'Mute sounds' : 'Enable sounds';
  });
}

// ── HOVER SOUNDS ON NAV LINKS ────────────────────────────────────
function initHoverSounds() {
  document.querySelectorAll('.nav-link, .portal-card, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (window.SoundEngine) SoundEngine.buttonHover();
    });
  });
}

// ── ACTIVE NAV LINK ──────────────────────────────────────────────
function setActiveNavLink() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── INTERSECTION OBSERVER (fade in on scroll) ────────────────────
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.portal-card, .daily-card').forEach(el => {
    observer.observe(el);
  });
}

// ── MAIN INIT (called by each page) ─────────────────────────────
function initApp() {
  ThemeManager.init();
  initSoundOnInteraction();
  initSoundToggle();
  initParticles();
  setActiveNavLink();
  initScrollAnimations();

  // Update streak
  if (window.Engine) {
    Engine.updateStreak();
    updateXPBadge();
  }

  // Apply hourly accent color
  if (window.Engine) {
    const theme = Engine.getHourlyTheme();
    document.documentElement.style.setProperty('--hourly-accent', theme.accent);
  }
}

// ── PORTAL CARD INIT (for index page) ───────────────────────────
function initPortalCards() {
  document.querySelectorAll('.portal-card').forEach(card => {
    initTilt(card);
    card.addEventListener('mouseenter', () => {
      if (window.SoundEngine) SoundEngine.hover();
    });
  });
}

// ── RESULT FLASH ─────────────────────────────────────────────────
function showResultFlash(correct) {
  const flash = document.getElementById('resultFlash');
  if (!flash) return;
  flash.textContent = correct ? '✓' : '✗';
  flash.className = `result-flash show-${correct ? 'correct' : 'wrong'}`;
  setTimeout(() => { flash.className = 'result-flash'; }, 700);
}

// Export shared utilities
window.App = {
  ThemeManager,
  createCarousel,
  renderContentCard,
  showToast,
  showResultFlash,
  initApp,
  initPortalCards,
  updateXPBadge,
  initTilt
};
