/* EXPERIENCE PAGE: each professional role with its photo on the left
   and details on the right. Edit the roles in experience-data.js. */
(function () {
  var S = Site;
  var html = S.navHTML() +
    S.pageHero('Experience', 'Professional', 'experience.', 'Internships, research and industry work. Looking for leadership and community work? See <a href="' + S.link('volunteer/index.html') + '">volunteering</a>.', S.pad(MyExperience.length) + ' roles') +
    '<main class="wrap page-body">' +
      (MyExperience.length
        ? '<div class="events">' + MyExperience.map(function (e, i) {
            return S.photoRow(e, i, MyExperience.length, 'experience', e.type || 'Professional experience', [e.org, e.location]);
          }).join('') + '</div>'
        : S.emptyNote('experience', 'experience/experience-data.js')) +
    '</main>' + S.footerHTML();
  S.mount(html);
})();