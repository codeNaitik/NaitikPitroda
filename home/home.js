/* HOME PAGE: hero, about, projects, experience, skills, volunteering, events.
   Content comes from each section's *-data.js file. */
(function () {
  var S = Site, P = Profile, esc = S.esc, I = S.I;

  var socials = '<div class="hero-contact">' +
    '<a class="ic-btn magnetic" href="mailto:' + esc(P.email) + '" aria-label="Email">' + I.mail + '</a>' +
    '<a class="ic-btn magnetic" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + I.in + '</a>' +
    '<a class="ic-btn magnetic" href="' + esc(P.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + I.gh + '</a>' +
    (P.instagram ? '<a class="ic-btn magnetic" href="' + esc(P.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram">' + I.ig + '</a>' : '') + '</div>';

  // featured projects first, then the rest (all of them scroll in the home carousel)
  var homeProjects = MyProjects.filter(function (p) { return p.featured; }).concat(MyProjects.filter(function (p) { return !p.featured; }));
  var featE = MyExperience.filter(function (e) { return e.featured; });
  var featV = MyVolunteer.filter(function (v) { return v.featured !== false; }).slice(0, 4);
  var allSkills = []; MySkills.forEach(function (c) { c.items.forEach(function (s) { if (allSkills.indexOf(s) < 0) allSkills.push(s); }); });
  var belt = allSkills.concat(allSkills).map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('');
  var photo = S.img('home', P.photo);

  var html =
    '<header class="front" id="top">' + S.navHTML() +
      '<div class="front-mid">' +
        '<div class="role" data-aos="fade-left" data-aos-delay="200">' + I.diag + '<p>' + esc(P.role).replace('&amp; ', '<br>&amp; ') + '</p>' + socials + '</div>' +
        '<figure class="portrait"><div data-aos="fade-up" data-aos-delay="100">' +
          (photo ? '<img class="photo" id="photo" src="' + esc(photo) + '" alt="' + esc(P.name) + '">' : '') +
          '<div class="board-box" id="board-box"><span class="board-note">Morphy, Paris 1858 · <b>17. Rd8#</b></span><div class="board" id="board"></div></div>' +
        '</div></figure>' +
        '<div class="loc" data-aos="fade-right" data-aos-delay="250"><span>Located<br>in ' + esc(P.location) + '</span><span class="globe" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none" stroke="#fff" stroke-width="1.4"><circle cx="20" cy="20" r="18"/><path d="M2 20h36M5 11h30M5 29h30"/><ellipse class="mer" cx="20" cy="20" rx="9" ry="18"/><ellipse class="mer" cx="20" cy="20" rx="9" ry="18"/><ellipse class="mer" cx="20" cy="20" rx="9" ry="18"/></svg></span></div>' +
      '</div>' +
      '<div class="marquee" aria-hidden="true"><div class="track" id="track">' + new Array(5).join('<span>' + esc(P.name) + ' —</span>') + '</div></div>' +
      '<h1 class="sr-only">' + esc(P.name) + ', ' + esc(P.role) + '</h1>' +
    '</header>' +
    '<main>' +

    '<section class="block wrap" id="about">' + S.head('a1 · About', 'A bit', 'about me') +
      '<div class="about"><p class="statement" data-aos="fade-up">' + esc(P.about) + '</p>' +
      '<div data-aos="fade-up" data-aos-delay="100"><ul class="facts">' + P.facts.map(function (f) { return '<li><span>' + esc(f.label) + '</span><b>' + esc(f.value) + '</b></li>'; }).join('') + '</ul>' +
      '<a class="round magnetic" href="' + S.link('experience/index.html') + '"><span>My journey</span></a></div></div></section>' +

    '<section class="block wrap" id="projects">' + S.head('b2 · Projects', 'Selected', 'work', { href: 'projects/index.html', label: 'All ' + MyProjects.length + ' projects' }) +
      (homeProjects.length
        ? '<div class="ev-slider" data-aos="fade-up">' +
            '<div class="ev-track" id="pj-track" tabindex="0" aria-label="Projects, scroll sideways">' +
              homeProjects.map(function (p, i) { return S.projectCard(p, i).replace(/ data-aos="[^"]*" data-aos-delay="\d+"/, ''); }).join('') +
            '</div>' +
            '<div class="ev-controls"><div class="ev-progress" aria-hidden="true"><i id="pj-bar"></i></div>' +
              '<button class="ev-arrow" id="pj-prev" type="button" aria-label="Previous projects">' + I.arrow + '</button>' +
              '<button class="ev-arrow" id="pj-next" type="button" aria-label="Next projects">' + I.arrow + '</button></div>' +
          '</div>'
        : S.emptyNote('projects', 'projects/projects-data.js')) + '</section>' +

    '<section class="block wrap" id="experience">' + S.head('c3 · Experience', 'Professional', 'experience', { href: 'experience/index.html', label: 'Full experience' }) +
      (featE.length ? '<ol class="timeline">' + featE.map(function (e, i) { return S.timelineItem(e, i, true); }).join('') + '</ol>' : S.emptyNote('experience', 'experience/experience-data.js')) + '</section>' +

    '<section class="block wrap" id="skills">' + S.head('d4 · Skills', 'My working', 'stack') +
      '<div class="belt" aria-hidden="true"><div class="belt-row">' + belt + '</div></div>' +
      '<div class="stack">' + MySkills.map(function (c, i) {
        return '<div class="cat"' + S.aos(i) + '><div class="cat-head"><span class="cat-idx">' + S.pad(i + 1) + '</span><h3>' + esc(c.category) + '</h3><span class="cat-n">' + c.items.length + ' tools</span></div>' +
          '<div class="chips">' + c.items.map(function (s, j) { return '<span class="chip' + (j === 0 ? ' core' : '') + '"><i>' + esc(s.replace(/[^A-Za-z+#]/g, '').slice(0, 2)) + '</i>' + esc(s) + '</span>'; }).join('') + '</div></div>';
      }).join('') + '</div>' +
      (MyCertifications.length ? '<div class="certs" data-aos="fade-up"><p class="cat-idx">Badges &amp; ratings</p><ul>' + MyCertifications.map(function (c) { return '<li><b>' + esc(c.title) + '</b><span>' + esc(c.from) + '</span></li>'; }).join('') + '</ul></div>' : '') +
    '</section>' +

    '<section class="block wrap" id="leadership">' + S.head('e5 · Leadership', 'Leadership &amp;', 'volunteering', { href: 'volunteer/index.html', label: 'All volunteering' }) +
      (featV.length ? '<div class="vol-grid">' + featV.map(function (v, i) {
        return '<a class="vol-card" href="' + S.link('volunteer/index.html') + '"' + S.aos(i) + '>' + S.cover(v, 'volunteer', 'vol-thumb') +
          '<div class="vol-body"><p class="w-label">' + esc(v.type || 'Volunteering') + (v.date ? ' · ' + esc(v.date) : '') + '</p><h3>' + esc(v.title) + '</h3>' +
          '<p class="tl-org">' + [v.org, v.location].filter(Boolean).map(esc).join(' · ') + '</p><p class="w-desc clamp2">' + esc(v.description) + '</p></div></a>';
      }).join('') + '</div>' : S.emptyNote('volunteering', 'volunteer/volunteer-data.js')) + '</section>' +

    '<section class="block wrap" id="events">' + S.head('f6 · Events', 'Events &amp;', 'conferences', { href: 'events/index.html', label: 'All events' }) +
      (MyEvents.length
        ? '<div class="ev-slider" data-aos="fade-up">' +
            '<div class="ev-track" id="ev-track" tabindex="0" aria-label="Events, scroll sideways">' +
              MyEvents.map(function (ev) {
                return '<a class="ev-card" href="' + S.link('events/index.html') + '">' + S.cover(ev, 'events') +
                  '<div class="ev-card-body"><span class="ev-card-type">' + esc(ev.type || 'Event') + (ev.date ? ' · ' + esc(ev.date) : '') + '</span>' +
                  '<b>' + esc(ev.title) + '</b>' +
                  '<span class="ev-card-meta">' + [ev.role, ev.location].filter(Boolean).map(esc).join(' · ') + '</span></div></a>';
              }).join('') +
            '</div>' +
            '<div class="ev-controls"><div class="ev-progress" aria-hidden="true"><i id="ev-bar"></i></div>' +
              '<button class="ev-arrow" id="ev-prev" type="button" aria-label="Previous events">' + I.arrow + '</button>' +
              '<button class="ev-arrow" id="ev-next" type="button" aria-label="Next events">' + I.arrow + '</button></div>' +
          '</div>'
        : S.emptyNote('events', 'events/events-data.js')) + '</section>' +

    '</main>' + S.footerHTML();

  S.mount(html, function () {
    var $ = S.$;

    // hero photo: show it if the file exists, otherwise the chessboard
    var ph = $('photo'), boardBox = $('board-box');
    if (ph) {
      var show = function () { ph.classList.add('ok'); boardBox.hidden = true; };
      var none = function () { ph.remove(); };
      if (ph.complete) { ph.naturalWidth ? show() : none(); } else { ph.addEventListener('load', show); ph.addEventListener('error', none); }
    }

    // chessboard: final position of Morphy's Opera Game after 17. Rd8#
    var G = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
    var pos = { b8: 'bn', d8: 'wr', e8: 'bk', f8: 'bb', h8: 'br', a7: 'bp', f7: 'bp', g7: 'bp', h7: 'bp', e6: 'bq', e5: 'bp', g5: 'wb', e4: 'wp', a2: 'wp', b2: 'wp', c2: 'wp', f2: 'wp', g2: 'wp', h2: 'wp', c1: 'wk' };
    var out = '';
    for (var r = 8; r >= 1; r--) for (var f = 0; f < 8; f++) {
      var sq = 'abcdefgh'[f] + r, cls = [];
      if ((f + r) % 2 === 1) cls.push('d');
      if (sq === 'd1' || sq === 'd8') cls.push('mv');
      if (sq === 'e8') cls.push('ck');
      var pc = pos[sq];
      out += '<i class="' + cls.join(' ') + '"' + (pc ? ' data-c="' + pc[0] + '" data-p="' + G[pc[1]] + '︎"' : '') + '></i>';
    }
    $('board').innerHTML = out;

    // sliders (projects and events): arrows, progress bar and gentle auto-scroll
    // that pauses on hover, touch or keyboard focus
    function initSlider(trackId, prevId, nextId, barId) {
      var track = $(trackId);
      if (!track) return;
      var bar = $(barId), paused = false, resumeAt = 0;
      var step = function () { var c = track.firstElementChild; return c ? c.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 20) : track.clientWidth; };
      var go = function (dir) {
        var max = track.scrollWidth - track.clientWidth - 4;
        if (max <= 0) return;
        if (dir > 0 && track.scrollLeft >= max) track.scrollTo({ left: 0, behavior: 'smooth' });
        else if (dir < 0 && track.scrollLeft <= 4) track.scrollTo({ left: max + 4, behavior: 'smooth' });
        else track.scrollBy({ left: dir * step(), behavior: 'smooth' });
      };
      var update = function () {
        var sw = track.scrollWidth || 1;
        bar.style.width = Math.min(100, track.clientWidth / sw * 100) + '%';
        bar.style.left = (track.scrollLeft / sw * 100) + '%';
      };
      var hold = function () { resumeAt = Date.now() + 6000; };
      $(prevId).addEventListener('click', function () { hold(); go(-1); });
      $(nextId).addEventListener('click', function () { hold(); go(1); });
      track.addEventListener('scroll', update, { passive: true });
      addEventListener('resize', update);
      track.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') { e.preventDefault(); hold(); go(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); hold(); go(-1); } });
      ['pointerenter', 'focusin'].forEach(function (t) { track.parentNode.addEventListener(t, function () { paused = true; }); });
      ['pointerleave', 'focusout'].forEach(function (t) { track.parentNode.addEventListener(t, function () { paused = false; }); });
      track.addEventListener('touchstart', hold, { passive: true });
      update();
      if (!S.reduce) setInterval(function () { if (!paused && !document.hidden && Date.now() > resumeAt) go(1); }, 4000);
    }
    initSlider('pj-track', 'pj-prev', 'pj-next', 'pj-bar');
    initSlider('ev-track', 'ev-prev', 'ev-next', 'ev-bar');

    // greeting loader, once per visit
    var seen = false; try { seen = sessionStorage.getItem('np-hello') === '1'; sessionStorage.setItem('np-hello', '1'); } catch (e) {}
    if (!S.reduce && !seen) {
      var loader = document.createElement('div');
      loader.className = 'loader'; loader.setAttribute('aria-hidden', 'true'); loader.innerHTML = '<p id="hello">Hello</p>';
      document.body.appendChild(loader);
      var words = ['Hello', 'નમસ્તે', 'नमस्ते', 'Bonjour', 'Hola', 'Ciao', 'Hallo', 'Hello'], wi = 0;
      var tick = setInterval(function () { wi++; if (wi >= words.length) { clearInterval(tick); return; } $('hello').textContent = words[wi]; }, 220);
      loader.addEventListener('animationend', function () { loader.remove(); });
    }
  });
})();