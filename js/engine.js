// ================================================================
// engine.js — Game Logic, Seeding, Shuffling, Hourly Intelligence
// ================================================================

const Engine = (() => {

  // ── SEEDED PRNG (Mulberry32) ─────────────────────────────────
  function mulberry32(seed) {
    return function() {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function getDaySeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function getHourSeed() {
    const d = new Date();
    return getDaySeed() * 100 + d.getHours();
  }

  function seededShuffle(arr, seed) {
    const a = [...arr];
    const rng = mulberry32(seed);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function seededPick(arr, seed) {
    const rng = mulberry32(seed);
    return arr[Math.floor(rng() * arr.length)];
  }

  // ── DAILY & HOURLY CONTENT ───────────────────────────────────
  function getQuoteOfDay() {
    const { QUOTES } = window.BAData;
    return seededPick(QUOTES, getDaySeed());
  }

  function getQuestionOfDay() {
    const { QOTD_POOL } = window.BAData;
    return seededPick(QOTD_POOL, getDaySeed() + 7);
  }

  function getDailyRapidFire() {
    const { QUIZ_QUESTIONS } = window.BAData;
    return seededShuffle(QUIZ_QUESTIONS, getDaySeed() + 3);
  }

  function getHourlyTheme() {
    const hour = new Date().getHours();
    const themes = [
      { accent: '#7C3AED', name: 'midnight-violet' },  // 0
      { accent: '#6366F1', name: 'deep-indigo' },       // 1
      { accent: '#3B82F6', name: 'azure' },             // 2
      { accent: '#06B6D4', name: 'electric-cyan' },     // 3
      { accent: '#10B981', name: 'neon-emerald' },      // 4
      { accent: '#34D399', name: 'mint' },              // 5
      { accent: '#F59E0B', name: 'sunrise-amber' },     // 6
      { accent: '#F97316', name: 'sunrise-orange' },    // 7
      { accent: '#EF4444', name: 'morning-red' },       // 8
      { accent: '#EC4899', name: 'pink-energy' },       // 9
      { accent: '#A855F7', name: 'mid-purple' },        // 10
      { accent: '#7C3AED', name: 'noon-violet' },       // 11
      { accent: '#6366F1', name: 'afternoon-indigo' },  // 12
      { accent: '#06B6D4', name: 'afternoon-cyan' },    // 13
      { accent: '#10B981', name: 'afternoon-emerald' }, // 14
      { accent: '#F59E0B', name: 'late-amber' },        // 15
      { accent: '#F97316', name: 'golden-hour' },       // 16
      { accent: '#EF4444', name: 'sunset-red' },        // 17
      { accent: '#EC4899', name: 'dusk-pink' },         // 18
      { accent: '#8B5CF6', name: 'twilight-violet' },   // 19
      { accent: '#7C3AED', name: 'evening-purple' },    // 20
      { accent: '#6366F1', name: 'night-indigo' },      // 21
      { accent: '#A855F7', name: 'late-night' },        // 22
      { accent: '#7C3AED', name: 'midnight' }           // 23
    ];
    return themes[hour];
  }

  function getHourlyCardOrder(sections) {
    return seededShuffle(sections, getHourSeed());
  }

  // ── STREAK & XP SYSTEM ───────────────────────────────────────
  const STORAGE_KEY = 'bapo_state';

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || getDefaultState();
    } catch { return getDefaultState(); }
  }

  function getDefaultState() {
    return {
      xp: 0,
      level: 1,
      streak: 0,
      lastVisit: null,
      quizHighScore: 0,
      totalCorrect: 0,
      totalAnswered: 0,
      achievements: [],
      lastQuizDate: null
    };
  }

  function saveState(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }

  function getState() { return loadState(); }

  function updateStreak() {
    const state = loadState();
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastVisit === today) return state;
    if (state.lastVisit === yesterday) {
      state.streak = (state.streak || 0) + 1;
    } else if (state.lastVisit !== today) {
      state.streak = 1;
    }
    state.lastVisit = today;
    saveState(state);
    return state;
  }

  function addXP(amount) {
    const state = loadState();
    state.xp = (state.xp || 0) + amount;
    state.level = getLevel(state.xp);
    saveState(state);
    return state;
  }

  function recordQuizResult(correct, total) {
    const state = loadState();
    state.totalCorrect = (state.totalCorrect || 0) + correct;
    state.totalAnswered = (state.totalAnswered || 0) + total;
    const score = Math.round((correct / total) * 100);
    if (score > (state.quizHighScore || 0)) state.quizHighScore = score;
    state.lastQuizDate = new Date().toDateString();
    const xpEarned = correct * 10 + (score === 100 ? 50 : 0);
    state.xp = (state.xp || 0) + xpEarned;
    state.level = getLevel(state.xp);
    saveState(state);
    return { state, xpEarned };
  }

  function getLevel(xp) {
    if (xp < 100)  return 1;
    if (xp < 250)  return 2;
    if (xp < 500)  return 3;
    if (xp < 1000) return 4;
    if (xp < 2000) return 5;
    if (xp < 4000) return 6;
    if (xp < 8000) return 7;
    return 8;
  }

  const LEVEL_TITLES = {
    1: 'Novice Analyst',
    2: 'Story Writer',
    3: 'Requirements Ranger',
    4: 'Backlog Wrangler',
    5: 'Stakeholder Whisperer',
    6: 'Value Strategist',
    7: 'Product Oracle',
    8: 'BA/PO Legend'
  };

  function getLevelTitle(level) {
    return LEVEL_TITLES[level] || LEVEL_TITLES[8];
  }

  function getXPToNextLevel(xp) {
    const thresholds = [0, 100, 250, 500, 1000, 2000, 4000, 8000, Infinity];
    const level = getLevel(xp);
    const next = thresholds[level];
    const current = thresholds[level - 1];
    return { xp, current, next, progress: Math.min(100, ((xp - current) / (next - current)) * 100) };
  }

  // ── TIMER UTILITY ────────────────────────────────────────────
  function createTimer(seconds, onTick, onEnd) {
    let remaining = seconds;
    let intervalId = null;
    const circumference = 200;

    function start() {
      intervalId = setInterval(() => {
        remaining--;
        onTick(remaining, (remaining / seconds) * circumference);
        if (remaining <= 0) { clearInterval(intervalId); onEnd(); }
      }, 1000);
    }

    function stop() { clearInterval(intervalId); }
    function reset() { remaining = seconds; }
    function getRemaining() { return remaining; }

    return { start, stop, reset, getRemaining };
  }

  // ── COUNTDOWN TO MIDNIGHT ────────────────────────────────────
  function getCountdownToMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  // ── DATE FORMATTING ──────────────────────────────────────────
  function formatDate() {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  function formatDateShort() {
    return new Date().toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  }

  // ── HOURLY INDEX for section themes ─────────────────────────
  function getHourlyThemeIndex(idx) {
    const hour = new Date().getHours();
    const { SECTION_THEMES } = window.BAData;
    return SECTION_THEMES[(idx + hour) % SECTION_THEMES.length];
  }

  return {
    seededShuffle,
    seededPick,
    getDaySeed,
    getHourSeed,
    getQuoteOfDay,
    getQuestionOfDay,
    getDailyRapidFire,
    getHourlyTheme,
    getHourlyCardOrder,
    getState,
    updateStreak,
    addXP,
    recordQuizResult,
    getLevel,
    getLevelTitle,
    getXPToNextLevel,
    createTimer,
    getCountdownToMidnight,
    formatDate,
    formatDateShort,
    getHourlyThemeIndex
  };

})();

window.Engine = Engine;
