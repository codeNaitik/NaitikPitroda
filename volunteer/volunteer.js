/* VOLUNTEERING PAGE: photo-left rows, then letters and recognition.
   Edit the content in volunteer-data.js. */
(function () {
  var S = Site, esc = S.esc;
  var html = S.navHTML() +
    S.pageHero('Volunteering', 'Leadership &amp;', 'volunteering.', 'Ways I give back to the communities that taught me.', S.pad(MyVolunteer.length) + ' roles') +
    '<main class="wrap page-body">' +
      (MyVolunteer.length
        ? '<div class="events">' + MyVolunteer.map(function (v, i) { return S.photoRow(v, i, MyVolunteer.length, 'volunteer', v.type || 'Volunteering', [v.org, v.location]); }).join('') + '</div>'
        : S.emptyNote('volunteering', 'volunteer/volunteer-data.js')) +
      (MyRecognition.length
        ? '<section class="recog"><h2 data-aos="fade-up">Letters &amp; <em>recognition</em>.</h2><ul>' +
            MyRecognition.map(function (r, i) { return '<li' + S.aos(i) + '><b>' + esc(r.title) + '</b><span>' + esc(r.from) + '</span></li>'; }).join('') +
          '</ul></section>'
        : '') +
    '</main>' + S.footerHTML();
  S.mount(html);
})();
