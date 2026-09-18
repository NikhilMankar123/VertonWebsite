// Veriton shared JS: mobile nav, animations, cookie consent, forms, active links
document.documentElement.classList.remove('no-js');
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.querySelector('.material-symbols-outlined').textContent = open ? 'close' : 'menu';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      if (btn.querySelector('.material-symbols-outlined')) btn.querySelector('.material-symbols-outlined').textContent = 'menu';
    }));
  }

  // Reveal on scroll (guard: if IO unsupported, show everything immediately)
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  }

  // Navbar shadow
  const nav = document.getElementById('navbar');
  const onScroll = () => { if (nav) nav.classList.toggle('shadow-md', window.scrollY > 20); };
  window.addEventListener('scroll', onScroll); onScroll();

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = a.getAttribute('href') || '';
    const file = href.split('/').pop().split('#')[0];
    if ((path === '' || path === 'index.html') && (file === '' || file === 'index.html')) a.classList.add('active','text-primary');
    else if (file && file === path) a.classList.add('active','text-primary');
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // Cookie consent
  const banner = document.getElementById('cookie-banner');
  try {
    const consent = localStorage.getItem('veriton-cookie-consent');
    if (!consent && banner) { banner.classList.remove('hidden'); requestAnimationFrame(()=>banner.classList.remove('translate-y-24','opacity-0')); }
  } catch(e){ if (banner) banner.classList.remove('hidden'); }
  const setConsent = (v) => {
    try { localStorage.setItem('veriton-cookie-consent', v + '|' + new Date().toISOString()); } catch(e){}
    if (banner) { banner.classList.add('translate-y-24','opacity-0'); setTimeout(()=>banner.classList.add('hidden'), 450); }
  };
  document.getElementById('cookie-accept')?.addEventListener('click', () => setConsent('accepted'));
  document.getElementById('cookie-decline')?.addEventListener('click', () => setConsent('declined'));

  // Contact / quote forms -> mailto fallback + success message
  document.querySelectorAll('form[data-mailto]').forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const to = form.getAttribute('data-mailto');
      const data = new FormData(form);
      const subject = encodeURIComponent('[Website Enquiry] ' + (data.get('name') || 'New lead') + ' — ' + (data.get('service') || data.get('subject') || 'General'));
      const body = encodeURIComponent(Array.from(data.entries()).map(([k,v]) => `${k}: ${v}`).join('\n'));
      const ok = form.querySelector('[data-form-success]');
      if (ok) { ok.classList.remove('hidden'); form.querySelectorAll('input,textarea,select').forEach(i=>{ if(i.type!=='submit') i.value=''; }); }
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  });
});
