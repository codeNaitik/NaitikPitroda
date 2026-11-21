/* EVENTS PAGE: filter buttons by type, then each event with its photo
   on the left and details on the right.
   Edit the events themselves in events-data.js. */
(function () {
  var S = Site, esc = S.esc;

  // filter buttons come from each event's "type" (Workshop, Webinar, ...)
  var types = ['All'];
  MyEvents.forEach(function (ev) { if (ev.type && types.indexOf(ev.type) < 0) types.push(ev.type); });

  function rows(list) {
    return list.map(function (ev, i) {
      return S.photoRow(ev, i, list.length, 'events', ev.type || 'Event', [ev.role, ev.location]);
    }).join('');
  }

  var html = S.navHTML() +
    S.pageHero('Events', 'Events &amp;', 'conferences.', 'Workshops, webinars, competitions and hackathons I\'ve taken part in.', S.pad(MyEvents.length) + ' events') +
    '<main class="wrap page-body">' +
      (MyEvents.length
        ? (types.length > 2
            ? '<div class="filters" role="toolbar" aria-label="Filter events" data-aos="fade-up">' +
                types.map(function (t, i) { return '<button type="button" class="filter' + (i === 0 ? ' on' : '') + '" data-type="' + esc(t) + '">' + esc(t) + '</button>'; }).join('') +
              '</div>'
            : '') +
          '<div class="events" id="event-list">' + rows(MyEvents) + '</div>'
        : S.emptyNote('events', 'events/events-data.js')) +
    '</main>' + S.footerHTML();

  S.mount(html, function () {
    var list = S.$('event-list');
    document.querySelectorAll('.filter').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.filter').forEach(function (x) { x.classList.toggle('on', x === b); });
        var t = b.getAttribute('data-type');
        list.innerHTML = rows(MyEvents.filter(function (ev) { return t === 'All' || ev.type === t; }));
        S.refresh(list);
      });
    });
  });
})();