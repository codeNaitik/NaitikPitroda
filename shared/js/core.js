/* =====================================================================
   SHARED CORE: navbar, footer, card designs and page behaviour used by
   every page. Each section folder has its own page script that calls
   Site.mount(...). You normally don't need to edit this file.
   ===================================================================== */
var Site = (function () {
  var body = document.body;
  var page = body.getAttribute('data-page') || 'home';
  var root = body.getAttribute('data-root') || '';      // "" on the home page, "../" inside a section folder
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var P = Profile;

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(id) { return document.getElementById(id); }
  function link(path) { return root + path; }
  function mono(t) { return esc(String(t).split(/\s+/).filter(function (w) { return /^[A-Za-z0-9]/.test(w); }).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase()); }
  function pad(n) { return String(n).padStart(2, '0'); }
  function aos(i, type) { return ' data-aos="' + (type || 'fade-up') + '" data-aos-delay="' + ((i % 3) * 90) + '"'; }
  function tags(list) { return (list && list.length) ? '<div class="tags">' + list.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' : ''; }

  // "lung.png" in projects data  ->  projects/images/lung.png (works from any page)
  function img(section, file) {
    if (!file) return '';
    if (/^(https?:|data:|\/)/.test(file)) return file;
    return root + section + '/images/' + file;
  }
  function cover(item, section, cls) {
    var src = img(section, item.img);
    return '<div class="' + (cls || 'cover') + '" data-mono="' + mono(item.title) + '">' +
      (src ? '<img src="' + esc(encodeURI(src)) + '" alt="' + esc(item.title) + '" loading="lazy">' : '') + '</div>';
  }

  var I = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    in: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
    gh: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    diag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 5l14 14M19 7v12H7"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };

  // Navbar links. Add a new section here after creating its folder.
  var NAV = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'projects', label: 'Projects', href: 'projects/index.html' },
    { id: 'experience', label: 'Experience', href: 'experience/index.html' },
    { id: 'volunteer', label: 'Volunteering', href: 'volunteer/index.html' },
    { id: 'events', label: 'Events', href: 'events/index.html' },
    { id: 'contact', label: 'Contact', href: '#contact', plain: true }
  ];
  function navHref(n) { return n.plain ? n.href : link(n.href); }

  /* ---------- shared blocks ---------- */
  function navHTML() {
    return '<nav class="topbar' + (page === 'home' ? ' on-front' : ' solid') + '" aria-label="Main">' +
      '<a class="sig" href="' + link('index.html') + '" aria-label="' + esc(P.name) + ', home"><span class="c">©</span><span class="sig-roll"><span>Code by ' + esc(P.firstName) + '</span><span>' + esc(P.name) + '</span></span></a>' +
      '<ul>' + NAV.filter(function (n) { return n.id !== 'home'; }).map(function (n) {
        return '<li><a href="' + navHref(n) + '"' + (n.id === page ? ' aria-current="page"' : '') + '>' + n.label + '</a></li>';
      }).join('') + '</ul>' +
      '<button class="theme" id="theme-toggle" type="button" aria-label="Switch light or dark mode">' + I.sun + '</button>' +
      '<button class="burger" id="burger" type="button" aria-label="Open menu"><i></i><i></i></button>' +
      '</nav>';
  }
  function menuHTML() {
    return '<button class="fab" id="fab" type="button" aria-label="Open menu" aria-expanded="false"><i></i><i></i></button>' +
      '<nav class="menu" id="menu" aria-label="Menu"><small>Navigation</small>' +
      NAV.map(function (n) { return '<a href="' + navHref(n) + '"' + (n.id === page ? ' aria-current="page"' : '') + '>' + n.label + '</a>'; }).join('') +
      '<div class="menu-social"><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a><a href="' + esc(P.github) + '" target="_blank" rel="noopener">GitHub</a><a href="' + esc(P.instagram) + '" target="_blank" rel="noopener">Instagram</a></div></nav>';
  }
  function footerHTML() {
    var board = ''; for (var k = 0; k < 16; k++) board += '<i' + (((k >> 2) + k) % 2 ? '' : ' class="d"') + '></i>';
    return '<footer class="contact" id="contact"><div class="wrap">' +
      '<div class="c-head" data-aos="fade-up"><span class="avatar" aria-hidden="true">' + board + '</span><h2>Let\'s work<br>together</h2></div>' +
      '<div class="c-line" data-aos="fade-up"><button class="round big magnetic" type="button" id="touch"><span>Get in touch</span></button></div>' +
      '<div class="c-pills" data-aos="fade-up"><button class="pill" type="button" id="copy-email"><span id="email">' + esc(P.email) + '</span><small>copy</small></button>' +
      '<a class="pill" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">Message on LinkedIn</a></div>' +
      '<div class="c-bottom"><div><small>Version</small><span>' + new Date().getFullYear() + ' © Edition</span></div>' +
      '<div><small>Local time</small><span id="clock">Toronto</span></div>' +
      '<div class="socials"><small>Socials</small><span><a href="' + esc(P.github) + '" target="_blank" rel="noopener">GitHub</a><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a><a href="' + esc(P.instagram) + '" target="_blank" rel="noopener">Instagram</a></span></div></div>' +
      '</div></footer>';
  }
  function head(coord, title, accent, more) {
    return '<div class="sec-head" data-aos="fade-up"><span class="coord">' + coord + '</span><h2>' + title + ' <em>' + accent + '</em>.</h2>' +
      (more ? '<a class="more" href="' + link(more.href) + '">' + more.label + ' ' + I.arrow + '</a>' : '') + '</div>';
  }
  function pageHero(eyebrow, title, accent, sub, count) {
    return '<header class="page-hero"><div class="wrap">' +
      '<p class="crumbs" data-aos="fade-up"><a href="' + link('index.html') + '">Home</a> / ' + esc(eyebrow) + '</p>' +
      '<h1 data-aos="fade-up" data-aos-delay="60">' + title + ' <em>' + accent + '</em></h1>' +
      '<div class="ph-row" data-aos="fade-up" data-aos-delay="120"><p>' + sub + '</p><span class="count">' + count + '</span></div>' +
      '</div></header>';
  }
  function emptyNote(what, file) { return '<p class="empty">No ' + what + ' added yet. Add them in <code>' + file + '</code>.</p>'; }

  /* ---------- card designs ---------- */
  function projectCard(p, i) {
    var a = p.link ? '<a class="w-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">View project ' + I.arrow + '</a>' : '<span class="w-status">Private / research</span>';
    return '<article class="work"' + aos(i) + '>' + cover(p, 'projects') +
      '<div class="w-body"><p class="w-label">' + esc(p.category) + '</p><h3>' + esc(p.title) + '</h3>' +
      (p.tagline ? '<p class="w-tagline">' + esc(p.tagline) + '</p>' : '') +
      '<p class="w-desc">' + esc(p.description) + '</p>' + tags(p.tech) + '<div class="w-foot">' + a + '</div></div></article>';
  }
  function timelineItem(e, i, compact) {
    var meta = [e.org, e.location].filter(Boolean).map(esc).join(' · ');
    return '<li class="tl"' + aos(i, 'fade-left') + '>' + cover(e, 'experience', 'logo') +
      '<div class="tl-main"><div class="tl-top"><h3>' + esc(e.title) + '</h3>' + (e.date ? '<span class="pill-s">' + esc(e.date) + '</span>' : '') + '</div>' +
      (meta ? '<p class="tl-org">' + meta + '</p>' : '') +
      '<p class="tl-desc' + (compact ? ' clamp' : '') + '">' + esc(e.description) + '</p>' + tags(e.tags) + '</div></li>';
  }
  // photo on the left, details on the right (Events and Volunteering pages)
  function photoRow(it, i, total, section, label, metaParts) {
    var meta = metaParts.filter(Boolean).map(esc).join(' · ');
    return '<article class="event">' +
      '<figure class="ev-photo" data-aos="fade-right" data-aos-duration="800">' + cover(it, section) +
        (it.date ? '<span class="ev-badge">' + esc(it.date) + '</span>' : '') + '</figure>' +
      '<div class="ev-body" data-aos="fade-left" data-aos-delay="150" data-aos-duration="800">' +
        '<p class="ev-num">' + pad(i + 1) + ' / ' + pad(total) + '</p>' +
        '<p class="w-label">' + esc(label) + '</p>' +
        '<h3>' + esc(it.title) + '</h3>' +
        (meta ? '<p class="tl-org">' + meta + '</p>' : '') +
        '<p class="w-desc">' + esc(it.description) + '</p>' + tags(it.tags) +
        (it.link ? '<a class="w-link" href="' + esc(it.link) + '" target="_blank" rel="noopener">See more ' + I.arrow + '</a>' : '') +
      '</div></article>';
  }

  /* ---------- behaviour ---------- */
  function wireImages(scope) {
    (scope || document).querySelectorAll('.cover img, .logo img, .vol-thumb img').forEach(function (im) {
      function drop() { im.remove(); }
      if (im.complete && !im.naturalWidth) drop(); else im.addEventListener('error', drop);
    });
  }
  function initAOS() {
    if (window.AOS) AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic', offset: 40, disable: reduce });
    else document.querySelectorAll('[data-aos]').forEach(function (el) { el.removeAttribute('data-aos'); });
  }
  function refresh(scope) { wireImages(scope); if (window.AOS) AOS.refreshHard(); }

  function behaviours() {
    wireImages();

    // theme
    var html = document.documentElement;
    try { var saved = localStorage.getItem('np-theme'); if (saved) html.setAttribute('data-theme', saved); } catch (e) {}
    $('theme-toggle').addEventListener('click', function () {
      var cur = html.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      try { localStorage.setItem('np-theme', next); } catch (e) {}
    });

    // menu
    var fab = $('fab'), menu = $('menu'), track = $('track'), front = $('top'), lastY = scrollY;
    function setMenu(open) {
      menu.classList.toggle('open', open); fab.classList.toggle('open', open);
      fab.setAttribute('aria-expanded', open ? 'true' : 'false');
      fab.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) fab.classList.add('show');
    }
    fab.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    $('burger').addEventListener('click', function () { setMenu(true); });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    function onScroll() {
      var y = scrollY;
      if (track && y !== lastY) track.style.animationDirection = y > lastY ? 'normal' : 'reverse';
      lastY = y;
      // inner pages keep their sticky bar, so the floating button only appears on the home page
      if (!menu.classList.contains('open')) fab.classList.toggle('show', !!front && y > front.offsetHeight - 80);
    }
    addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // magnetic buttons
    if (!reduce && matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('.magnetic').forEach(function (el) {
        var base = el.closest('.c-line') ? 'translateY(-50%) ' : '';
        el.addEventListener('pointermove', function (e) {
          var b = el.getBoundingClientRect();
          el.style.transform = base + 'translate(' + (e.clientX - b.left - b.width / 2) * 0.3 + 'px,' + (e.clientY - b.top - b.height / 2) * 0.3 + 'px)';
        });
        el.addEventListener('pointerleave', function () { el.style.transform = ''; });
      });
    }

    // copy email
    function copier(btn, ok, sel) {
      var label = btn.querySelector('small') || btn.querySelector('span'), orig = label.textContent;
      function done(m) { label.textContent = m; setTimeout(function () { label.textContent = orig; }, 1800); }
      function fallback() { var rg = document.createRange(); rg.selectNodeContents($('email')); var s = getSelection(); s.removeAllRanges(); s.addRange(rg); done(sel); }
      btn.addEventListener('click', function () {
        try { navigator.clipboard.writeText(P.email).then(function () { done(ok); }, fallback); } catch (e) { fallback(); }
      });
    }
    copier($('copy-email'), 'copied', 'selected');
    copier($('touch'), 'Email copied', 'Email selected');

    // local time
    var clock = $('clock');
    function updateClock() {
      try { clock.textContent = new Intl.DateTimeFormat('en-CA', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Toronto', timeZoneName: 'short' }).format(new Date()); }
      catch (e) { clock.textContent = 'Toronto, Canada'; }
    }
    updateClock(); setInterval(updateClock, 30000);
  }

  // Each page script calls Site.mount(html, afterRender)
  function mount(html, after) {
    $('app').innerHTML = html + menuHTML();
    behaviours();
    if (after) after();
    initAOS();
  }

  return {
    page: page, root: root, reduce: reduce, I: I, $: $,
    esc: esc, link: link, pad: pad, aos: aos, tags: tags, img: img, cover: cover,
    navHTML: navHTML, footerHTML: footerHTML, head: head, pageHero: pageHero, emptyNote: emptyNote,
    projectCard: projectCard, timelineItem: timelineItem, photoRow: photoRow,
    mount: mount, refresh: refresh
  };
})();
