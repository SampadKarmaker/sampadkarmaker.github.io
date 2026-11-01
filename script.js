document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const nav = document.getElementById('navLinks');
const btn = document.getElementById('menuBtn');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
  btn.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', false);
  btn.textContent = '☰';
}));

// Contact form (demo: no backend)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formNote').textContent = 'Thanks! Your message was captured (demo form, no server).';
  e.target.reset();
});

// Boot log
const lines = [
  'booting <b>sampad_karmaker.dev</b> ...',
  '<span class="ok">[OK]</span> education: UIU, CSE, final year',
  '<span class="ok">[OK]</span> scholarships: 50% then 25% waiver',
  '<span class="ok">[OK]</span> mounted 6 projects, see /projects',
  '<span class="ok">[OK]</span> now serving: Back-End AI Intern @ FlyRank AI',
  '<span class="ok">[READY]</span> accepting connections on linkedin, github'
];
const body = document.getElementById('bootBody');
lines.forEach((html, i) => {
  const d = document.createElement('div');
  d.className = 'boot-line';
  d.innerHTML = html;
  d.style.animationDelay = (i * 260) + 'ms';
  body.appendChild(d);
});
