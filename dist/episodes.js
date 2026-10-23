// Field Study 1 — compilation of reflections.
// Each reflection is condensed from Jewel's own answers in the episode PDF; quotes stay close to her wording.
const themes = {
  env: 'Learning environments',
  learners: 'Learners & their contexts',
  science: 'Curriculum & science learning',
  assess: 'Assessment',
  growth: 'Growth & philosophy'
};

const episodes = [
  { n: 1, theme: 'env', pages: 31, title: 'The School <em>Environment</em>',
    plain: 'The School Environment',
    reflection: 'Walking through the campus, I noticed that learning starts before a lesson does. A safe, clean and well-equipped school sets the mood for focus, and a classroom with good light, fresh air and a welcoming atmosphere tells learners they belong. Evaluating the school’s board displays showed me that what goes on a wall is also a kind of teaching — it should be clear, organized and made for the people reading it.',
    quote: 'A positive space directly boosts student participation and drive to learn.' },
  { n: 2, theme: 'learners', pages: 18, title: 'Learner Diversity: <em>Developmental Needs</em>',
    plain: 'Learner Diversity: Developmental Characteristics, Needs and Interests',
    reflection: 'Observing preschool, elementary and high school learners, I kept comparing them with my younger self. I was a shy child who rarely joined class activities, and watching these children play and speak so freely made me realize how much confidence shapes learning. Every stage brings different physical, social, emotional and cognitive needs — and a teacher can be the person who helps a learner grow into that confidence.',
    quote: 'They are so free and confident in their own skin. I wish I had the same confidence back then.' },
  { n: 3, theme: 'learners', pages: 19, title: 'Every Learner, <em>Every Difference</em>',
    plain: 'Focus on Gender, Needs, Strengths, Interests, Experiences, Language, Race, Culture and More',
    reflection: 'In this classroom, everyone had an equal chance to speak, and I could feel the unity it created. I also remembered a classmate who struggled to focus and was too often left behind, at a time when learning differences were barely understood. That memory made this episode personal: meeting each learner’s needs, however challenging, is not extra work. It is the work.',
    quote: 'The teacher sets the atmosphere and is the guiding light of the students.' },
  { n: 4, theme: 'learners', pages: 17, title: 'Home, School <em>& Community</em>',
    plain: 'Learner Diversity: The Community and Home Environment',
    reflection: 'This episode turned my attention to what happens outside the school gate. Looking back at my own childhood, I recognized a supportive, balanced home — one that gave me the freedom to explore and the guidance to stay on the right path. It helped me see that every learner brings their home with them, and that respectful home–school partnership is part of a teacher’s job.',
    quote: 'Children grow best when they are given both freedom to explore and guidance to stay on the right path.' },
  { n: 5, theme: 'env', pages: 13, title: 'A Space <em>to Try Again</em>',
    plain: 'Creating an Appropriate Learning Environment',
    reflection: 'I remember staying quiet in classes where I was afraid of being laughed at or corrected harshly. That is why positive discipline matters to me. When a wrong answer is met with encouragement instead of embarrassment, a learner stays willing to try again. I picture myself teaching Grade 7 — learners new to high school who need a warm welcome, simple rules and recognition of their effort.',
    quote: 'That’s a good try. Thank you for sharing. Let’s think about it together.' },
  { n: 6, theme: 'env', pages: 12, title: 'Classroom <em>Routines</em>',
    plain: 'Classroom Management and Classroom Routines',
    reflection: 'I watched a summative test begin without noise or confusion: papers passed from front to back, and the class settled in quickly. Routines like these look small, but they protect learning time. I want clear systems for passing papers, submitting work, using supplies and moving around the room — and rules that keep learners participative, respectful and unafraid to speak.',
    quote: 'I will always act according to the needs of my students.' },
  { n: 7, theme: 'env', pages: 14, title: 'Space, Presence <em>& Management</em>',
    plain: 'Physical and Personal Aspects of Classroom Management',
    reflection: '“No amount of good instruction will come out without effective classroom management.” I now read this as: a teacher who knows the lesson well still needs an organized room to teach in. Even the arrangement of chairs affects whether learners can see, move and take part. Rules, routines and the layout of the space all tell learners what is expected, so they can focus on learning.',
    quote: 'This may seem like a small detail, but it can already affect their concentration and engagement.' },
  { n: 8, theme: 'science', pages: 22, title: 'Close Encounter with <em>the Curriculum</em>',
    plain: 'Close Encounter with the School Curriculum',
    reflection: 'Mapping the seven types of curriculum showed me that a curriculum is much more than a written guide. The recommended, written, taught, supported, assessed and learned curricula work together, while the hidden curriculum quietly shapes values and attitudes. From this, I want my lesson plans to be learner-centered, varied and connected to real life, so science becomes something understood — not memorized.',
    quote: 'Science is not only about memorizing concepts but also about understanding, exploring, and applying.' },
  { n: 9, theme: 'science', pages: 19, title: 'Preparing for <em>Meaningful Learning</em>',
    plain: 'Preparing for Teaching and Learning',
    reflection: 'Observing a Grade 9 lesson on plate boundaries, I looked closely at how learning outcomes were written and whether they were achieved. SMART outcomes make a lesson focused and measurable, but they only work when teaching strategies and assessment match them. The principle I most want to carry forward is simple: learners differ in ability, interest and pace, so my teaching has to be flexible too.',
    quote: 'I should not expect all students to learn in the same way or at the same time.' },
  { n: 10, theme: 'science', pages: 18, title: 'The Instructional <em>Cycle</em>',
    plain: 'The Instructional Cycle',
    reflection: 'Here I studied how strategies are chosen and how questions are asked. The teacher stated the objectives, used oral questioning, and let learners build models to show what they understood — a clear picture of outcome-based teaching. I learned that how we react to an answer matters as much as the question itself: probing, acknowledging ideas and giving time to think keep learners curious and confident.',
    quote: 'Teaching should not only focus on finishing the lesson, but on making sure students achieve the intended outcomes.' },
  { n: 11, theme: 'science', pages: 35, title: 'Resources <em>& Technology</em>',
    plain: 'Utilizing Teaching-Learning Resources and ICT',
    reflection: 'Computers and online resources caught my interest the most, because videos, simulations and images can make difficult science concepts visible. Evaluating online materials taught me that finding resources is easy; choosing accurate, clear and appropriate ones is the real skill. If I taught the same lesson, I would keep the slides but make the technology interactive — something learners use, not just watch.',
    quote: 'Technology should be a tool for learning rather than just a tool for presenting information.' },
  { n: 12, theme: 'assess', pages: 17, title: 'Assessment <em>For & As Learning</em>',
    plain: 'Assessment FOR and AS Learning (Formative Assessment)',
    reflection: 'Formative assessment is tasting the soup while cooking. Checking understanding during the lesson — not only after it — lets a teacher see who is struggling and adjust while there is still time. I also learned that “Did you understand, class?” is not enough; it only invites a yes or a no. Good formative assessment means being observant, responsive and supportive.',
    quote: 'Waiting until the end to assess, like tasting the soup only after it’s cooked, may be too late.' },
  { n: 13, theme: 'assess', pages: 56, title: 'Assessment <em>of Learning</em>',
    plain: 'Assessment OF Learning (Summative Assessment)',
    reflection: 'The longest episode made alignment real for me. I remembered tests that didn’t reflect what we were taught and how unfair they felt — a Table of Specifications exists to prevent exactly that. I also reflected on authentic tasks, portfolios and grades. Grades still motivate me, but my real goal is to understand, to grow, and to take responsibility for my own progress.',
    quote: 'Meaningful grade reporting should serve as a guide that fosters reflection, growth, and deeper understanding.' },
  { n: 14, theme: 'growth', pages: 17, title: 'The Person Behind <em>the Profession</em>',
    plain: 'The Teacher as a Person and as a Professional',
    reflection: 'I thought of my Grade 8 science teacher, who crossed a river every day to reach our school and never once complained. Her determination taught me perseverance before I could even name it. Observing my resource teacher’s professionalism, I listed the qualities I want to keep developing: patience, responsibility, cooperation and genuine care for learners.',
    quote: 'Seeing her overcome obstacles to teach us taught me the value of perseverance and commitment.' },
  { n: 15, theme: 'growth', pages: 19, title: 'Becoming a <em>Glocal Teacher</em>',
    plain: 'Towards Teacher Quality: Developing a Glocal Teacher',
    reflection: 'After a full day of observation, I left more inspired to teach — and honestly a little nervous about the challenges teachers face every day. I saw how small words of praise brought smiles and confidence to learners. To grow into a 21st-century, glocal teacher, I will keep learning through seminars and training, stay open to new technology, and design hands-on, meaningful lessons.',
    quote: 'Even small words of praise brought smiles to their faces and boosted their confidence.' },
  { n: 16, theme: 'growth', pages: 15, title: 'My Philosophy <em>of Teaching</em>',
    plain: 'On Teacher’s Philosophy of Education',
    reflection: 'Everything came together here. Learners are the center of learning, so their needs, abilities and experiences come first. Science should be experienced — observed, investigated, modeled and connected to real life. And while I cannot change the whole education system by myself, I believe I can contribute through my actions, cooperation and commitment.',
    quote: 'Learners understand lessons better when they are given opportunities to experience and explore things for themselves.' }
];

const pad = n => String(n).padStart(2, '0');
const pdf = n => `assets/episodes/fs1-episode-${pad(n)}.pdf`;

// Contents grid
const toc = document.querySelector('#episode-toc');
if (toc) {
  toc.innerHTML = episodes.map(e => `<li><a href="#episode-${pad(e.n)}" data-cursor="Read"><span>${pad(e.n)}</span><strong>${e.title.replace(/<\/?em>/g, '')}</strong><small>${themes[e.theme]}</small></a></li>`).join('');
}

// Chapters: an opener (title, reflection, quote) followed by the "open episode" action.
const chapters = document.querySelector('#chapters');
if (chapters) {
  chapters.innerHTML = episodes.map((e, i) => `
  <article class="chapter chapter-${e.theme}" id="episode-${pad(e.n)}" aria-labelledby="episode-${pad(e.n)}-title">
    <div class="wrap chapter-inner">
      <div class="chapter-side">
        <span class="chapter-number" aria-hidden="true">${pad(e.n)}</span>
        <span class="eyebrow">EPISODE ${pad(e.n)} / ${themes[e.theme].toUpperCase()}</span>
      </div>
      <div class="chapter-body">
        <h2 id="episode-${pad(e.n)}-title" class="reveal" data-split>${e.title}</h2>
        <p class="chapter-official reveal">${e.plain}</p>
        <div class="chapter-reflection reveal">
          <span class="eyebrow">REFLECTION</span>
          <p>${e.reflection}</p>
        </div>
        <blockquote class="chapter-quote reveal"><span aria-hidden="true">“</span><p>${e.quote}</p></blockquote>
        <div class="chapter-actions reveal">
          <button class="open-episode" type="button" data-episode="${i}" data-magnetic data-cursor="Open"><span class="open-label">Open episode ${pad(e.n)}</span><span class="open-meta">${e.pages} pages · PDF</span><span class="open-icon" aria-hidden="true">↗</span></button>
          <a class="text-link chapter-download" href="${pdf(e.n)}" download>Download <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </div>
  </article>`).join('');
}

// Viewer: inline PDF where the browser supports it, a new tab otherwise (most phones).
const dialog = document.querySelector('#viewer');
const frame = dialog?.querySelector('iframe');
let current = 0;
const inlinePdf = navigator.pdfViewerEnabled !== false && window.matchMedia('(min-width:761px)').matches;

function showEpisode(i) {
  current = (i + episodes.length) % episodes.length;
  const e = episodes[current];
  dialog.querySelector('.viewer-eyebrow').textContent = `EPISODE ${pad(e.n)} OF 16 · ${e.pages} PAGES`;
  dialog.querySelector('.viewer-title').innerHTML = e.title;
  dialog.querySelector('.viewer-newtab').href = pdf(e.n);
  dialog.querySelector('.viewer-download').href = pdf(e.n);
  frame.src = `${pdf(e.n)}#view=FitH`;
}

document.addEventListener('click', ev => {
  const btn = ev.target.closest('[data-episode]');
  if (!btn) return;
  const i = Number(btn.dataset.episode);
  if (!inlinePdf || !dialog?.showModal) { window.open(pdf(episodes[i].n), '_blank', 'noopener'); return; }
  showEpisode(i);
  dialog.showModal();
  document.body.classList.add('viewer-open');
});
dialog?.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
dialog?.querySelector('.viewer-prev').addEventListener('click', () => showEpisode(current - 1));
dialog?.querySelector('.viewer-next').addEventListener('click', () => showEpisode(current + 1));
dialog?.addEventListener('close', () => { document.body.classList.remove('viewer-open'); frame.src = 'about:blank'; document.querySelector(`#episode-${pad(episodes[current].n)} .open-episode`)?.focus(); });
dialog?.addEventListener('click', ev => { if (ev.target === dialog) dialog.close(); });

// Side progress rail: which chapter is on screen.
const rail = document.querySelector('.chapter-rail');
if (rail && 'IntersectionObserver' in window) {
  rail.innerHTML = episodes.map(e => `<a href="#episode-${pad(e.n)}" aria-label="Episode ${e.n}"><span>${pad(e.n)}</span></a>`).join('');
  const links = [...rail.querySelectorAll('a')];
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const all = [...chapters.children];
    const idx = all.indexOf(en.target);
    links.forEach((l, j) => l.classList.toggle('active', j === idx));
    all.forEach((c, j) => c.classList.toggle('is-current', j === idx));
  }), { rootMargin: '-45% 0px -50% 0px' });
  chapters.querySelectorAll('.chapter').forEach(c => io.observe(c));
  const zone = document.querySelector('#chapters');
  new IntersectionObserver(([en]) => rail.classList.toggle('visible', en.isIntersecting), { rootMargin: '-30% 0px -30% 0px' }).observe(zone);
}
