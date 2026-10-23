// Shared motion layer: reveals, parallax, scroll progress, cursor, magnetic buttons, tilt, counters.
// Everything is progressive: without JS or with reduced motion, content is simply static.
(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  // Split headings into words so they can rise in one by one. Keeps <em>/<br> intact.
  document.querySelectorAll('[data-split]').forEach(el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(part); return; }
            const w = document.createElement('span');
            w.className = 'word';
            const inner = document.createElement('span');
            inner.textContent = part;
            inner.style.setProperty('--i', i++);
            w.append(inner);
            frag.append(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') walk(child);
      });
    };
    walk(el);
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  // Stagger children of [data-stagger] containers.
  document.querySelectorAll('[data-stagger]').forEach(list => {
    [...list.children].forEach((child, i) => { child.classList.add('reveal'); child.style.setProperty('--d', `${Math.min(i, 12) * 70}ms`); });
  });

  if (!reduced && 'IntersectionObserver' in window) {
    root.classList.add('motion-ready');
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  // Scroll-linked effects, batched into one animation frame.
  const progress = document.querySelector('.scroll-progress');
  const header = document.querySelector('.site-header');
  const scrub = [...document.querySelectorAll('[data-scrub]')].map(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="scrub-word">${w}</span>`).join(' ');
    return { el, words: [...el.querySelectorAll('.scrub-word')] };
  });
  let lastY = window.scrollY, ticking = false;

  function frame() {
    ticking = false;
    const y = window.scrollY, vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    if (header) {
      const goingDown = y > lastY;
      header.classList.toggle('is-scrolled', y > 40);
      if (!document.body.classList.contains('menu-open')) header.classList.toggle('is-hidden', goingDown && y > 260);
    }
    lastY = y;

    if (reduced) return;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const offset = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.parallax);
      el.style.setProperty('--py', `${offset.toFixed(1)}px`);
    });
    scrub.forEach(({ el, words }) => {
      const r = el.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = Math.round(t * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i < lit));
    });
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  frame();
  if (reduced) scrub.forEach(({ words }) => words.forEach(w => w.classList.add('lit')));

  // Counters count up once visible.
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      cio.unobserve(entry.target);
      const el = entry.target, end = Number(el.dataset.count);
      if (reduced) { el.textContent = end; return; }
      const start = performance.now(), dur = 1300;
      const step = now => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: 0.6 });
    counters.forEach(c => cio.observe(c));
  }

  if (reduced || !finePointer) return;

  // Magnetic buttons drift toward the pointer.
  document.addEventListener('pointermove', e => {
    const m = e.target.closest?.('[data-magnetic]');
    document.querySelectorAll('[data-magnetic].is-pulled').forEach(el => { if (el !== m) { el.classList.remove('is-pulled'); el.style.translate = ''; } });
    if (!m) return;
    const r = m.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
    m.classList.add('is-pulled');
    m.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
  });

  // Gentle 3D tilt on cards.
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`);
      card.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`);
      card.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  });

  // Cursor follower: a small dot that grows into a label over [data-cursor] targets.
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<span></span>';
  document.body.append(cursor);
  root.classList.add('has-cursor');
  let cx = -100, cy = -100, tx = -100, ty = -100;
  document.addEventListener('pointermove', e => {
    tx = e.clientX; ty = e.clientY;
    const target = e.target.closest?.('[data-cursor]');
    cursor.classList.toggle('is-label', !!target);
    cursor.classList.toggle('is-link', !target && !!e.target.closest?.('a,button,summary'));
    if (target) cursor.firstChild.textContent = target.dataset.cursor;
  });
  document.addEventListener('pointerleave', () => { tx = ty = -100; });
  (function loop() {
    cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
    cursor.style.transform = `translate(${cx.toFixed(1)}px,${cy.toFixed(1)}px)`;
    requestAnimationFrame(loop);
  })();
})();
