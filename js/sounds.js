// ================================================================
// sounds.js — Web Audio API Sound Engine (no external files)
// Procedurally generated sounds for all interactions
// ================================================================

const SoundEngine = (() => {
  let ctx = null;
  let enabled = true;
  let masterGain = null;

  function init() {
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.4;
      masterGain.connect(ctx.destination);
    } catch (e) {
      enabled = false;
    }
  }

  function resume() {
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  function setVolume(v) {
    if (masterGain) masterGain.gain.value = Math.max(0, Math.min(1, v));
  }

  function toggle() {
    enabled = !enabled;
    if (masterGain) masterGain.gain.value = enabled ? 0.4 : 0;
    return enabled;
  }

  function isEnabled() { return enabled; }

  // ── CORE SYNTH HELPERS ───────────────────────────────────────
  function playTone(freq, type, duration, startGain, endGain, startTime) {
    if (!ctx || !enabled) return;
    resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(masterGain);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime || ctx.currentTime);
    gain.gain.setValueAtTime(startGain, startTime || ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      Math.max(0.001, endGain),
      (startTime || ctx.currentTime) + duration
    );
    osc.start(startTime || ctx.currentTime);
    osc.stop((startTime || ctx.currentTime) + duration + 0.01);
  }

  function playNoise(duration, startGain, endGain) {
    if (!ctx || !enabled) return;
    resume();
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 0.8;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    gain.gain.setValueAtTime(startGain, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.001, endGain), ctx.currentTime + duration);
    source.start();
    source.stop(ctx.currentTime + duration);
  }

  // ── SOUND EFFECTS ────────────────────────────────────────────

  // Soft hover ping
  function hover() {
    if (!ctx || !enabled) return;
    playTone(880, 'sine', 0.08, 0.15, 0.001);
  }

  // Click/tap confirmation
  function click() {
    if (!ctx || !enabled) return;
    playTone(660, 'triangle', 0.06, 0.2, 0.001);
    playTone(880, 'sine', 0.04, 0.1, 0.001, ctx.currentTime + 0.02);
  }

  // Carousel swipe whoosh
  function swipe() {
    if (!ctx || !enabled) return;
    resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(masterGain);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.16);
  }

  // Correct answer — ascending happy chord
  function correct() {
    if (!ctx || !enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
    notes.forEach((freq, i) => {
      playTone(freq, 'sine', 0.3, 0.25, 0.001, ctx.currentTime + i * 0.06);
    });
  }

  // Wrong answer — descending buzz
  function wrong() {
    if (!ctx || !enabled) return;
    playTone(300, 'square', 0.06, 0.2, 0.001);
    playTone(250, 'square', 0.1, 0.15, 0.001, ctx.currentTime + 0.06);
    playTone(200, 'square', 0.12, 0.1, 0.001, ctx.currentTime + 0.12);
  }

  // Timer tick
  function tick() {
    if (!ctx || !enabled) return;
    playTone(1200, 'sine', 0.03, 0.08, 0.001);
  }

  // Timer urgent (last 3 seconds)
  function urgentTick() {
    if (!ctx || !enabled) return;
    playTone(1600, 'square', 0.04, 0.12, 0.001);
  }

  // Game start fanfare
  function start() {
    if (!ctx || !enabled) return;
    const melody = [
      { freq: 523.25, t: 0,    dur: 0.12 },
      { freq: 659.25, t: 0.1,  dur: 0.12 },
      { freq: 783.99, t: 0.2,  dur: 0.12 },
      { freq: 1046.5, t: 0.3,  dur: 0.25 },
    ];
    melody.forEach(n => playTone(n.freq, 'sine', n.dur, 0.3, 0.001, ctx.currentTime + n.t));
  }

  // Level up / achievement sparkle
  function levelUp() {
    if (!ctx || !enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((freq, i) => {
      playTone(freq, 'sine', 0.25, 0.3, 0.001, ctx.currentTime + i * 0.05);
      // Add sparkle overtone
      playTone(freq * 2, 'sine', 0.15, 0.1, 0.001, ctx.currentTime + i * 0.05 + 0.02);
    });
  }

  // Page navigation
  function navigate() {
    if (!ctx || !enabled) return;
    playTone(440, 'sine', 0.08, 0.12, 0.001);
    playTone(550, 'sine', 0.06, 0.1, 0.001, ctx.currentTime + 0.05);
  }

  // Daily reveal — magical sparkle
  function reveal() {
    if (!ctx || !enabled) return;
    resume();
    for (let i = 0; i < 8; i++) {
      const freq = 400 + Math.random() * 800;
      const t = ctx.currentTime + Math.random() * 0.4;
      playTone(freq, 'sine', 0.2, 0.15, 0.001, t);
    }
    playTone(1046.5, 'sine', 0.4, 0.2, 0.001, ctx.currentTime + 0.1);
    playTone(1318.5, 'sine', 0.3, 0.15, 0.001, ctx.currentTime + 0.2);
  }

  // Quiz complete
  function quizComplete(score) {
    if (!ctx || !enabled) return;
    if (score >= 80) levelUp();
    else if (score >= 50) correct();
    else wrong();
  }

  // Button hover (very subtle)
  function buttonHover() {
    if (!ctx || !enabled) return;
    playTone(1200, 'sine', 0.04, 0.04, 0.001);
  }

  return {
    init,
    resume,
    toggle,
    isEnabled,
    setVolume,
    hover,
    click,
    swipe,
    correct,
    wrong,
    tick,
    urgentTick,
    start,
    levelUp,
    navigate,
    reveal,
    quizComplete,
    buttonHover
  };

})();

window.SoundEngine = SoundEngine;
