const groups = [
  { range: 'EP. 02–04', title: 'Learners & their contexts', episodes: [
    [2, 'Learner development', 'Noticing differences in learners’ interests, confidence, and independence—and reflecting on what those differences ask of a teacher.'],
    [3, 'Individual needs & inclusion', 'Considering the importance of patient guidance, varied activities, and meaningful opportunities for each learner to participate.'],
    [4, 'Home, school & community', 'Reflecting on the support around a learner and the importance of respectful communication between home and school.']
  ]},
  { range: 'EP. 01, 05–07', title: 'Learning environments & classroom culture', episodes: [
    [1, 'The school environment', 'Exploring the school setting, evaluating information displays, and proposing a welcoming classroom communication board.'],
    [5, 'A supportive learning environment', 'Reflecting on positive encouragement, classroom expectations, and how to make room for learners to contribute.'],
    [6, 'Classroom routines', 'Observing how clear, consistent routines can help make classroom activities more organized and understandable.'],
    [7, 'Space, presence & classroom management', 'Considering the role of physical space, communication, and the teacher’s presence in the learning experience.']
  ]},
  { range: 'EP. 08–11', title: 'Science learning, curriculum & resources', episodes: [
    [8, 'Understanding the curriculum', 'Examining the relationship between learning outcomes, teaching activities, and assessment in an observed science lesson.'],
    [9, 'Preparing for meaningful learning', 'Reflecting on active participation, purposeful outcomes, and connections between science and everyday experience.'],
    [10, 'The instructional cycle', 'Analyzing how questions and models support a plate-boundary lesson, and considering different ways to encourage explanation.'],
    [11, 'Resources & technology', 'Evaluating digital and physical resources while identifying ways to develop more interactive, purposeful uses of technology.']
  ]},
  { range: 'EP. 12–16', title: 'Assessment, growth & teaching philosophy', episodes: [
    [12, 'Assessment for and as learning', 'Considering feedback, understanding, and the role of reflection in helping learners recognize their progress.'],
    [13, 'Assessment of learning', 'Studying assessment tasks, rubrics, and the relationship between intended learning and the evidence used to assess it.'],
    [14, 'The person behind the profession', 'Reflecting on patience, responsibility, cooperation, and the professional qualities I hope to continue developing.'],
    [15, 'A vision for the future classroom', 'Imagining a more flexible learning space and reflecting on the continuing development expected of an educator.'],
    [16, 'My philosophy of teaching', 'Bringing the experience together around learner participation, meaningful science experiences, and continued growth.']
  ]}
];

const groupRoot = document.querySelector('#field-groups');
if (groupRoot) {
  groupRoot.innerHTML = groups.map(g => `<details class="field-group"><summary><span class="field-range">${g.range}</span><h3>${g.title}</h3><span class="field-plus" aria-hidden="true">+</span></summary><ol class="episode-list">${g.episodes.map(([n,title,body]) => `<li class="episode" value="${n}"><a href="episodes.html#episode-${String(n).padStart(2,'0')}"><span class="episode-number">EPISODE ${String(n).padStart(2,'0')}</span><h4>${title} <span aria-hidden="true">↗</span></h4><p>${body}</p></a></li>`).join('')}</ol></details>`).join('');
}

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open navigation');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
  document.body.classList.toggle('menu-open', open);
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width:761px)').addEventListener('change', closeMenu);

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.desktop-nav a').forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');
      });
    }
  }), { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('#work,#thesis,#approach,#about').forEach(el => navObserver.observe(el));
}

document.querySelector('[data-copy-email]')?.addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText('jewelbocta09@gmail.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'jewelbocta09@gmail.com';
  }
});
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
