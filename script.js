/* ───────────────────────────────────────────── */
/* GESTION DES TABS — SECTEURS */
/* ───────────────────────────────────────────── */

function showTab(id, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.secteur-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
}

/* ───────────────────────────────────────────── */
/* FORMULAIRE — MESSAGE ENVOYÉ */
/* ───────────────────────────────────────────── */

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit');
  btn.textContent = 'Message envoyé ✓';
  btn.style.background = '#C47A1E';
  setTimeout(() => {
    btn.textContent = 'Envoyer ma demande';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

/* ───────────────────────────────────────────── */
/* SCROLL FLUIDE POUR LES ANCRES */
/* ───────────────────────────────────────────── */

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ───────────────────────────────────────────── */
/* MENU MOBILE — DRAWER PREMIUM */
/* ───────────────────────────────────────────── */

const navToggle = document.querySelector('.nav-toggle');
const body = document.body;
let overlay = null;

// Création de l’overlay si absent
function ensureOverlay() {
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.classList.add('mobile-overlay');
    document.body.appendChild(overlay);

    overlay.addEventListener('click', closeMenu);
  }
}

function openMenu() {
  ensureOverlay();
  body.classList.add('nav-open');
  navToggle.classList.add('open');
}

function closeMenu() {
  body.classList.remove('nav-open');
  navToggle.classList.remove('open');
}

navToggle.addEventListener('click', () => {
  if (body.classList.contains('nav-open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Fermeture automatique quand on clique sur un lien du drawer
document.addEventListener('click', e => {
  if (e.target.closest('.mobile-drawer a')) {
    closeMenu();
  }
});
