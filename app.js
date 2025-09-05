// app.js — mobile nav toggle used on every page
(function () {
  const nav  = document.getElementById('site-nav');
  const btn  = document.getElementById('nav-toggle');
  const menu = document.getElementById('site-menu');
  if (!nav || !btn || !menu) return;

  const close = () => {
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const open = nav.classList.toggle('is-open');
    document.body.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close when a link is tapped, when resizing to desktop, or when navigating back
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
  matchMedia('(min-width:901px)').addEventListener('change', close);
  window.addEventListener('pageshow', close); // BFCache safety
})();
