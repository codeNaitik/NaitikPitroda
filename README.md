# Naitik Pitroda · Portfolio

A static website (HTML, CSS, JavaScript). No build step: upload the files to GitHub Pages and it works.

## Folder structure

```
index.html                  Home page
home/
  home.js                   Builds the home page
  profile.js                Your name, links, about text      <- edit
  skills.js                 Skills and badges                 <- edit
  images/profile.jpg        Your photo (hero)
projects/
  index.html                Projects page
  projects.js               Builds the page and the filters
  projects-data.js          Your projects                     <- edit
  images/                   Project screenshots
experience/
  index.html, experience.js
  experience-data.js        Work experience                   <- edit
  images/                   Company / university logos
volunteer/
  index.html, volunteer.js
  volunteer-data.js         Leadership, volunteering, letters <- edit
  images/                   Volunteering photos
events/
  index.html, events.js
  events-data.js            Events and conferences            <- edit
  images/                   Event photos
shared/
  css/style.css             Colors, fonts and layout for every page
  js/core.js                Navbar, footer, card designs, animations
  vendor/aos.js, aos.css    Scroll animation library (AOS)
```

## Common tasks

**Add a project**
1. Put the screenshot in `projects/images/`, e.g. `projects/images/my-app.png`.
2. In `projects/projects-data.js`, copy one `{ ... }` block and set `img: "my-app.png"`.
3. Set `featured: true` if it should also appear on the home page.

The same steps work for experience, volunteering and events: the photo goes in that
folder's `images/`, and the entry goes in that folder's `*-data.js`.

**Change your photo:** save it as `home/images/profile.jpg`.

**Change colors or fonts:** edit the variables at the top of `shared/css/style.css`.

**Add a new section** (for example `certifications/`): copy the `events/` folder,
rename the files, then add a link to the `NAV` list in `shared/js/core.js`.

## Testing locally

Open `index.html` in a browser, or run a small server from this folder:

```
python -m http.server
```

then visit http://localhost:8000
