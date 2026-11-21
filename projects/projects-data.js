/* =====================================================================
   PROJECTS
   Edit this file to update this section; every page that shows it updates.

   - Add an item:     copy one { ... } block, paste it, change the text.
   - Remove an item:  delete its { ... } block (and the comma after it).
   - Order:           items appear in the order they are listed.
   - img:             file name of a photo inside projects/images/
                      e.g. "lung.png". Leave "" for an automatic cover.
   - featured: true   also shows the item on the home page.
   - category:         used for the filter buttons on the Projects page.
   ===================================================================== */

const MyProjects = [
  {
    id: 1,
    img: "lung.png",
    title: "Lung Cancer Prediction",
    category: "Machine Learning",
    tagline: "Finding the health signals that predict lung cancer.",
    description: "Built with Dr. Kalpdrum Passi, professor at Laurentian University. The model ranks physical and health-related factors by how well they predict lung cancer, and reaches 98% accuracy.",
    tech: ["Python", "Scikit-learn", "NumPy"],
    link: "",
    featured: true
  },
  {
    id: 2,
    img: "",
    title: "One Stop Healthcare",
    category: "Hackathon",
    tagline: "One health record, every doctor.",
    description: "Smart India Hackathon team prototype: a platform that keeps a patient's prescriptions, vaccinations and treatment history in one Aadhaar-linked record that doctors can access.",
    tech: ["Wireframing", "UX"],
    link: "",
    featured: true
  },
  {
    id: 3,
    img: "",
    title: "E-commerce Website",
    category: "Full Stack",
    tagline: "From storefront to payment gateway.",
    description: "A complete online store: product browsing, cart, checkout and a payment gateway, backed by a MySQL database.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    link: "https://github.com/codeNaitik",
    featured: true
  },
  {
    id: 4,
    img: "prj_1.png",
    title: "Live Weather Updater",
    category: "Frontend",
    tagline: "Type a city, get the sky.",
    description: "Calls a weather API and shows the city's temperature, local time, day and date, with icons that change with the conditions.",
    tech: ["JavaScript", "REST API"],
    link: "https://github.com/codeNaitik",
    featured: false
  },
  {
    id: 5,
    img: "Screenshot (108).png",
    title: "Personal Portfolio v1",
    category: "Frontend",
    tagline: "The site before this one.",
    description: "Updated twice a week for over two months: dark and light mode, an animated wave footer, responsive layout, and certificates and badges as proof of skills.",
    tech: ["HTML", "CSS", "JavaScript", "AOS"],
    link: "https://codenaitik.github.io/NaitikPitroda/",
    featured: false
  },
  {
    id: 6,
    img: "",
    title: "Authentication Page",
    category: "Frontend",
    tagline: "A sign-up form that catches mistakes.",
    description: "Responsive sign-up form for email, username, password, age and gender, with alerts for empty or invalid input.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://github.com/codeNaitik",
    featured: false
  },
  {
    id: 7,
    img: "Login_website_image_output.png",
    title: "Login / Sign-up UI",
    category: "Frontend",
    tagline: "Animated, responsive and clear.",
    description: "Interactive login and sign-up page with an animated button and alerts when details are missing.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://github.com/codeNaitik",
    featured: false
  },
  {
    id: 8,
    img: "todo1.png",
    title: "Task Noter",
    category: "Frontend",
    tagline: "A to-do list that stays out of the way.",
    description: "Add tasks, then delete each one when it's done.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://github.com/codeNaitik",
    featured: false
  },
  {
    id: 9,
    img: "clock.png",
    title: "Digital Clock",
    category: "Frontend",
    tagline: "Time, day and date at a glance.",
    description: "A digital clock showing hours, minutes, seconds, day, month and year.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/codeNaitik",
    featured: false
  }
];
