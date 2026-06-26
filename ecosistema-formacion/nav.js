(function () {
  const links = [
    { href: 'brief-ux-SOI-ACH.html',       label: 'Brief' },
    { href: 'vision-ecosistema-SOI.html',   label: 'Visión' },
  ];

  const current = window.location.pathname.split('/').pop();

  const style = document.createElement('style');
  style.textContent = `
    body { padding-top: 66px; }
    .top-menu {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background: rgba(26, 26, 26, .92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255, 255, 255, .12);
      padding: 10px 16px;
    }
    .top-menu__inner {
      max-width: 1100px; margin: 0 auto;
      display: flex; gap: 10px; align-items: center; justify-content: center;
    }
    .top-menu__link {
      text-decoration: none; font-size: 12px; font-weight: 700;
      letter-spacing: .06em; text-transform: uppercase;
      color: rgba(255, 255, 255, .82);
      border: 1px solid rgba(255, 255, 255, .2);
      border-radius: 999px; padding: 8px 14px;
      transition: background-color .2s, color .2s, border-color .2s;
      white-space: nowrap;
    }
    .top-menu__link:hover { color: #fff; border-color: rgba(255, 255, 255, .45); }
    .top-menu__link--active { background: #e4eb60; border-color: #e4eb60; color: #1a1a1a; }
    @media (max-width: 900px) {
      body { padding-top: 74px; }
      .top-menu { padding: 10px 12px; }
      .top-menu__inner { justify-content: flex-start; overflow-x: auto; }
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'top-menu';
  nav.setAttribute('aria-label', 'Entregables de ecosistema de formación');

  const inner = document.createElement('div');
  inner.className = 'top-menu__inner';

  links.forEach(function (link) {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    a.className = 'top-menu__link' + (link.href === current ? ' top-menu__link--active' : '');
    inner.appendChild(a);
  });

  nav.appendChild(inner);
  document.body.insertBefore(nav, document.body.firstChild);
})();
