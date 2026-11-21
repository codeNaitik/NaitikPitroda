/* PROJECTS PAGE: header, category filters and the full project grid.
   Edit the projects themselves in projects-data.js. */
(function () {
  var S = Site, esc = S.esc;
  var cats = ['All'];
  MyProjects.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });

  var html = S.navHTML() +
    S.pageHero('Projects', 'Things I\'ve', 'built.', 'Machine learning research, hackathon prototypes and web apps.', S.pad(MyProjects.length) + ' projects') +
    '<main class="wrap page-body">' +
      (MyProjects.length
        ? '<div class="filters" role="toolbar" aria-label="Filter projects" data-aos="fade-up">' +
            cats.map(function (c, i) { return '<button type="button" class="filter' + (i === 0 ? ' on' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>'; }).join('') +
          '</div><div class="works" id="project-grid">' + MyProjects.map(S.projectCard).join('') + '</div>'
        : S.emptyNote('projects', 'projects/projects-data.js')) +
    '</main>' + S.footerHTML();

  S.mount(html, function () {
    var grid = S.$('project-grid');
    document.querySelectorAll('.filter').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.filter').forEach(function (x) { x.classList.toggle('on', x === b); });
        var c = b.getAttribute('data-cat');
        grid.innerHTML = MyProjects.filter(function (p) { return c === 'All' || p.category === c; }).map(S.projectCard).join('');
        S.refresh(grid);
      });
    });
  });
})();
