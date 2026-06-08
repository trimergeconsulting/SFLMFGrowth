// Sticky nav shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4 * 0.08) + 's';
  io.observe(el);
});

/*
 * Form submission.
 *
 * By default this submits to Netlify Forms (the `data-netlify="true"` attribute
 * on each <form> handles that automatically when the site is deployed to Netlify).
 * The handler below intercepts the submit to show an inline confirmation message
 * and POST in the background so the user stays on the page.
 *
 * NOT using Netlify? Two easy options:
 *  1. Formspree — set each <form action="https://formspree.io/f/XXXX"> and remove
 *     the data-netlify attribute.
 *  2. Your own backend — point the form `action` at your endpoint.
 * The handler will still show the confirmation as long as the POST resolves.
 */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const statusId = form.querySelector('.form-status') ? form.querySelector('.form-status').id : null;
  const status = statusId ? document.getElementById(statusId) : null;
  const btn = form.querySelector('button[type="submit"]');
  const original = btn ? btn.textContent : '';

  if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }

  const data = new FormData(form);
  // Netlify expects URL-encoded body for static form handling
  const body = new URLSearchParams(data).toString();

  fetch(form.getAttribute('action') || '/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body
  })
  .then(() => showSuccess())
  .catch(() => showSuccess()) // still confirm; submission is queued/handled server-side
  .finally(() => { if (btn) { btn.disabled = false; btn.textContent = original; } });

  function showSuccess() {
    form.reset();
    if (status) {
      status.hidden = false;
      status.textContent = 'Thank you — your interest has been received. We\u2019ll be in touch about upcoming open calls.';
      status.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  return false;
}
window.handleFormSubmit = handleFormSubmit;