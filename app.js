// app.js — unified mobile nav toggle (iOS-friendly)
(function () {
  function initNav() {
    var header = document.querySelector('.nav');
    var toggle = document.getElementById('nav-toggle');
    var menu   = document.getElementById('site-menu');
    if (!header || !toggle || !menu) return;

    function openNav() {
      header.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');        // lock scroll
    }
    function closeNav() {
      header.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
    function toggleNav() {
      if (header.classList.contains('is-open')) closeNav();
      else openNav();
    }

    // Click + touchstart for iOS reliability
    ['click', 'touchstart'].forEach(function(evt){
      toggle.addEventListener(evt, function(e){
        e.preventDefault();
        toggleNav();
      }, {passive:false});
    });

    // Close when a menu link is tapped
    menu.addEventListener('click', function(e){
      var t = e.target;
      if (t && t.tagName === 'A') closeNav();
    });

    // Close on ESC
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') closeNav();
    });

    // Close if clicking outside menu while open
    document.addEventListener('click', function(e){
      if (!header.classList.contains('is-open')) return;
      if (!header.contains(e.target)) closeNav();
    });
  }

  // Run when DOM ready (covers iOS)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
