// DOM Elements
const codingProjectContainer = document.getElementById("coding-project-container")
const graphicDesignProjectContainer = document.getElementById("graphic-design-project-container")

const personalitiesSpan = document.getElementById("personalities-span")
const slideshowContainer = document.getElementById("slideshow-container")

const codeProjects = document.getElementById("code-projects")
const awardProjects = document.getElementById("award-projects")
const gdProjects = document.getElementById("gd-projects")

const fblaProjectContainer = document.getElementById("fbla-project-container")
const skillsUSAProjectContainer = document.getElementById("skillsusa-project-container")

const phoneIcon = document.querySelector(".fa-phone")
const phonePopUp = document.querySelector(".phone-pop-up")

const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal-close")
const modalHeader = document.querySelector(".modal-header")
const modalInfo = document.querySelector(".modal-info")

// Mobile menu functionality
const hamburgerMenu = document.getElementById("hamburger-menu")
const mobileNav = document.getElementById("mobile-nav")

// DOM Elements
const hamburgerBtn = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobile-menu")
const navbarLinks = document.querySelectorAll(".navbar-link")
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link")
const carouselSlides = document.querySelectorAll(".carousel-slide")
const prevBtn = document.querySelector(".carousel-arrow.prev")
const nextBtn = document.querySelector(".carousel-arrow.next")
const modalBtns = document.querySelectorAll("[data-modal]")
const modals = document.querySelectorAll(".modal")
const modalCloseBtns = document.querySelectorAll(".modal-close")
const projectCards = document.querySelectorAll(".project-card")
const projectTypes = document.querySelectorAll(".project-type")

// Mobile Menu Toggle
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    hamburgerBtn.classList.toggle("active")

    // Change hamburger icon
    const icon = hamburgerBtn.querySelector("i")
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target) && mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active")
      hamburgerBtn.classList.remove("active")

      const icon = hamburgerBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Close mobile menu when clicking on a link
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      hamburgerBtn.classList.remove("active")

      const icon = hamburgerBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    })
  })
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.padding = "0.5rem 0"
    navbar.style.boxShadow = "0 5px 15px var(--shadow-color)"
  } else {
    navbar.style.padding = "1rem 0"
    navbar.style.boxShadow = "0 2px 10px var(--shadow-color)"
  }
})

if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("show")
    mobileNav.classList.toggle("hidden")
  })

  // Close mobile menu when clicking on a link
  const mobileNavLinks = mobileNav.querySelectorAll("a")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden")
      mobileNav.classList.remove("show")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburgerMenu.contains(e.target) && !mobileNav.contains(e.target) && !mobileNav.classList.contains("hidden")) {
      mobileNav.classList.add("hidden")
      mobileNav.classList.remove("show")
    }
  })
}

// Intersection Observer for animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
        if (entry.target.classList.contains("show-right")) {
          entry.target.classList.add("fade-right")
        } else if (entry.target.classList.contains("show-left")) {
          setTimeout(() => {
            entry.target.classList.add("fade-left")
          }, 1000) // Reduced from 2000ms for better mobile experience
        }
      }
    })
  },
  {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
  },
)

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

// Modal functionality
if (document.body.contains(modal)) {
  modalClose.addEventListener("click", (e) => {
    modal.close()
  })
  setModalBounds()
}

function setModalBounds() {
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close()
    }
  })
}

// Phone popup functionality
if (document.body.contains(phoneIcon)) {
  // For desktop
  phoneIcon.addEventListener("mouseover", () => {
    phonePopUp.style.animation = "reveal 0.25s linear forwards"
  })

  phoneIcon.addEventListener("mouseout", () => {
    phonePopUp.style.animation = "hide 0.25s linear forwards"
  })

  // For mobile - tap to show/hide
  phoneIcon.addEventListener("click", () => {
    if (phonePopUp.style.opacity === "1") {
      phonePopUp.style.animation = "hide 0.25s linear forwards"
    } else {
      phonePopUp.style.animation = "reveal 0.25s linear forwards"
    }
  })
}

// Typing Animation for Personalities
const personalitiesArray = ["Developer", "Designer", "Creator", "Programmer", "Learner"]
let personalityIndex = 0
let charIndex = 0

if (personalitiesSpan) {
  setTimeout(() => {
    typePersonality()
  }, 2000)
}

function typePersonality() {
  const typingInterval = setInterval(() => {
    const currentText = personalitiesArray[personalityIndex]
    personalitiesSpan.textContent += currentText[charIndex]
    charIndex++

    if (charIndex === currentText.length) {
      clearInterval(typingInterval)
      charIndex = 0

      setTimeout(() => {
        deletePersonality()
      }, 1500)
    }
  }, 100)
}

function deletePersonality() {
  const deletingInterval = setInterval(() => {
    const text = personalitiesSpan.textContent
    personalitiesSpan.textContent = text.slice(0, -1)

    if (personalitiesSpan.textContent.length === 0) {
      clearInterval(deletingInterval)
      personalityIndex = (personalityIndex + 1) % personalitiesArray.length
      setTimeout(() => {
        typePersonality()
      }, 500)
    }
  }, 50)
}

// Carousel Functionality
let currentSlide = 0

function showSlide(index) {
  carouselSlides.forEach((slide, i) => {
    slide.classList.remove("active")
    if (i === index) {
      slide.classList.add("active")
    }
  })
}

if (carouselSlides.length > 0) {
  showSlide(currentSlide)

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length
      showSlide(currentSlide)
    })

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % carouselSlides.length
      showSlide(currentSlide)
    })
  }

  // Auto slide
  // setInterval(() => {
  //   currentSlide = (currentSlide + 1) % carouselSlides.length
  //   showSlide(currentSlide)
  // }, 5000)

  // Touch swipe for mobile
  let touchStartX = 0
  let touchEndX = 0

  const carousel = document.querySelector(".carousel")
  if (carousel) {
    carousel.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX
      },
      false,
    )

    carousel.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX
        handleSwipe()
      },
      false,
    )
  }

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - next slide
      currentSlide = (currentSlide + 1) % carouselSlides.length
      showSlide(currentSlide)
    }

    if (touchEndX > touchStartX + 50) {
      // Swipe right - previous slide
      currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length
      showSlide(currentSlide)
    }
  }
}

// Modal Functionality
modalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal")
    const modal = document.getElementById(modalId)

    if (modal) {
      modal.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  })
})

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal")
    modal.classList.remove("active")
    document.body.style.overflow = "auto"
  })
})

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  })
})

// Project Cards Hover Effect
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".project-image img").style.transform = "scale(1.1)"
  })

  card.addEventListener("mouseleave", () => {
    card.querySelector(".project-image img").style.transform = "scale(1)"
  })
})

// Project Types Click Event
projectTypes.forEach((type) => {
  type.addEventListener("click", () => {
    const projectType = type.getAttribute("data-type")
    if (projectType === "code") {
      window.location.href = "code-projects.html"
    } else if (projectType === "design") {
      window.location.href = "graphic-design-projects.html"
    }
  })
})

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal")

function reveal() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active")
    }
  })
}

window.addEventListener("scroll", reveal)
reveal() // Initial check

class Project {
  constructor(type, title, id, projectLink, header, description, repoLink, coverImg, promotionalPackageItems, awards) {
    this.type = type
    this.title = title
    this.id = id
    this.projectLink = projectLink
    this.header = header
    this.description = description
    this.repoLink = repoLink
    this.coverImg = coverImg
    this.promotionalPackageItems = promotionalPackageItems
    this.awards = awards
  }
}

const culinaryShowdown = new Project(
  "coding",
  "Culinary Showdown",
  "culinary-showdown",
  "https://ljmarquez.github.io/Culinary-Showdown/",
  "Can You Take On Gordon Ramsay?",
  "This game was built using HTML, CSS, and JavaScript and encompasses all of the topics I have learned in my first semester of West-MEC. It is a typing/adventure game (mostly) complete with audio, interactivity, and just a few bugs. It utilizes the JS canvas, eventlisteners, inputs, arrays, and loops which append elements to the DOM. This is just scraping the surface of what this game covers, but I plan to make my projects more in-depth and entertaining in the future.",
  "https://github.com/LJMarquez/Culinary-Showdown",
  "showdown-cover.jpg",
  null,
  null,
)

const doorsGame = new Project(
  "coding",
  "Random Doors Game",
  "doors-game",
  "https://ljmarquez.github.io/FNAF-Door-Game/",
  "Will You Survive The Night?",
  "This game was built using HTML, CSS, and JavaScript and focuses on random number generation to determine the outcome the game. It includes other elements such as keyframe animations and capturing user info from an input.",
  "https://github.com/LJMarquez/FNAF-Door-Game/tree/main",
  "fnaf-game-cover.jpg",
  null,
  null,
)

const jsCalculator = new Project(
  "coding",
  "JavaScript Calculator",
  "js-calculator",
  "https://ljmarquez.github.io/Calculator-Project/",
  "Have Fun With Math!",
  "This game was built using HTML, CSS, and JavaScript and focuses on using conditions to check which button the user pressed to determine which variables will be manipulated. These variables are then put together in an equation to determine the answer of the problem inputted by the user. It utilizes some other elements such as a for loop to create the buttons, flex display, switch cases, etc.",
  "https://github.com/LJMarquez/Calculator-Project/tree/main",
  "calculator-cover.jpg",
  null,
  null,
)

const wordleGame = new Project(
  "coding",
  "Wordle Game",
  "wordle-game",
  "https://ljmarquez.github.io/Wordle-Game/",
  "Can You Guess The Word?",
  "This game was built using HTML, CSS, and JavaScript and focuses on manipulating strings to check if the user's input (guess) is equivalent to the phrase. Other elements that are utilized are a for each loop to create the inputs, values, and an eventListener to check for everytime the input value is changed and if the value is equal to the phrase.",
  "https://github.com/LJMarquez/Wordle-Game/tree/main",
  "wordle-game-cover.jpg",
  null,
  null,
)

const soccerGame = new Project(
  "coding",
  "2 Player Soccer Game",
  "soccer-game",
  "https://ljmarquez.github.io/Soccer-Game/",
  "GOOOAAALLL!!!",
  "This game was built using HTML, CSS, and JavaScript and focuses on using the canvas element to create shapes which act as the players, ball, and goal. These shapes have logic added to them for when they collide with each other to change the direction and speed of the ball. It utilizes some other elements such as eventListeners for keys on the keyboard, functions to create the game elements, and using random logic to set the speed of the ball.",
  "https://github.com/LJMarquez/Soccer-Game/tree/main",
  "soccer-game-cover.jpg",
  null,
  null,
)

const fashunSite = new Project(
  "coding",
  "Fashun Shopping Site",
  "fashun-site",
  "https://ljmarquez.github.io/Fashun-Site/",
  "What's Your Style?",
  "This project was built using HTML, CSS, and JavaScript and focuses on utilizing media queries to make the website fit on multiple different screen resolutions. The media queries are used in the CSS to manipulate your HTML in different ways. It also utilizes :nth child in CSS to capture a specific child in a parent element containing multiple nested elements.",
  "https://github.com/LJMarquez/Fashun-Site/tree/main",
  "fashun-cover.jpg",
  null,
  null,
)

const novatechSite = new Project(
  "coding",
  "NovaTech Job Site",
  "novatech-site",
  "https://ljmarquez.github.io/FBLA-State/",
  "Find Your Dream Job!",
  "I developed this project for FBLA, specifically the website coding and development competition. This project won first in the regional competition and third in the state competition! This was the first project I developed that was a little bit more advanced. It involved stringing together multiple files, running logic gates to make sure ceratin page elements only loaded on certain pages, storing and retrieving data across multiple files using local storage, procedural js to create page elements, and much much more! This project also won me first place at my FBLA Regional competition and third place at the state competition. I talk a little bit more about FBLA on my <a class='about-link' href='about.html'>about page!</a>",
  "https://github.com/LJMarquez/FBLA-State/tree/final",
  "novatech-cover.jpg",
  null,
  ["gold", "bronze"],
)

const crocGame = new Project(
  "coding",
  "Croc-O-Rena",
  "croc-o-rena-game",
  "https://ljmarquez.github.io/Phaser-Game/",
  "Be the Last One Standing!",
  "This project was my first experience using a JavaScript library to develop an application. This game was built using Phaser 3, a JavaScript library that specializes in making web based games. This is a shoot 'em up game where your goal is to make it past all of the waves and beat the boss at the end. It still has a few bugs but I would say is pretty fun! I won't bore you to death about how I made it and its intricacies but if you would like to know more just <a class='about-link' href='contact.html'>reach out to me!</a>",
  "https://github.com/LJMarquez/Phaser-Game",
  "croc-o-rena-cover.jpg",
  null,
  null,
)

const copperCanyonFilmFest = new Project(
  "graphic design",
  "AZ Film Festival",
  "copper-canyon-film-fest",
  "logo.pdf",
  "Lights, Camera, Action!",
  "I created this project at the SkillsUSA state competition in Arizona. This project won first place out of 80+ contestants! I don't quite remember the entire design brief but it went something along the lines of this. There was a film festival being held in Flagstaff AZ called the Copper Canyon Film Festival. The film festival caters to all movie lovers providing them a with a place where they can share their love of movies with others. At the event, there would be movie showcases, movie watching parties, and presentations where film directors get to share their movie making experiences. We were tasked with developing a logo and making a flyer for the client and here is the work I created! I tried making the flyer colorful and vibrant to stand out and relay the idea of the film festival being fun, entertaining, and for everyone to enjoy. For the logo, instead of going with a desert theme I went with a color scheme and symbolism that related more to flagstaff, with the blues, the mountains, and the trees.",
  null,
  "logo.jpg",
  [{ title: "Flyer", img: "flyer.jpg", link: "flyer.pdf" }],
  ["gold"],
)

const chameleonDesigns = new Project(
  "graphic design",
  "Chameleon Designs Advertising",
  "chameleon-designs",
  "logo.pdf",
  "Crafting Your Vision into Colorful Reality!",
  "In this project, me and three other people were put in a group and tasked with making a mock up graphics advertising company. We went through multiple steps to procure the final outcome but I'll briefly lay out the steps. We assigned roles to each member of the group and defined our target audience, our mission, company name, slogan, etc. After that we came up with multiple ideas logos and narrowed it down to the one I made and made multiple variations of it. Then we were tasked with designing an office space and the costs of rent and running our business (consumables, tech, etc). Then we developed a promotional package including business cards, letterheads, etc. Throughout the entire process we wrote up memos to communicate with our client (our teacher) to show us what communication looks like in the professional world.",
  null,
  "logo.jpg",
  [
    { title: "All Logos", img: "all-logos.jpg", link: "all-logos.pdf" },
    {
      title: "3D Office Renders",
      img: "floorplan.png",
      link: "office-renders.pdf",
    },
    {
      title: "Social Media Ad",
      img: "social-media-ad.jpg",
      link: "social-media-ad.pdf",
    },
    { title: "Full Promo Package", img: "logo.jpg", link: "full-package.pdf" },
  ],
  null,
)

const talentLink = new Project(
  "coding",
  "Talent Link",
  "talent-link",
  "https://github.com/FBLA-2025/FBLA-Web-Coding-Regional",
  "Your Future Career Starts Here!",
  "In this project me and my two other teammates were tasked with creating a job website for our school's guidance department that allowed students to apply to jobs, employers to post jobs, a backend admin to approve/deny jobs, and a page where the jobs are listed. We developed a company and site called TalentLink. The main technologies I used for this site were the Astro JS framework, React, MongoDB, Mongoose, Express, Axios, and Node. Astro is a framework that allows you to use multiple frameworks within your project and separate it into modules. I used React to create the components and frontend of the site. I used MongoDB as my database to store all site data (jobs, users, etc). I used Mongoose to create the schemas for the data and to connect to the database. I used Express to create the backend server and Axios to make API calls to the database. I also used CSS and HTML within my React components to style the site and make it look nice. As far as some features of the site, it had a log in with encrpyted passwords, conditional page renders depending on if the user was a student, employer, or admin, carousel elemnts, and procedural generation for jobs. This project was a lot of fun and I learned a lot about how to use these technologies together. I also learned a lot about how to work in a team and communicate with my teammates.",
  "https://github.com/FBLA-2025/FBLA-Web-Coding-Regional",
  "talent-link.png",
  null,
  ["gold", "bronze"]
);

const edumon = new Project(
  "coding",
  "Edumon",
  "edumon",
  "https://github.com/FBLA-2025-app/App-FBLA-state",
  "Can You Defeat The Headmaster?",
  "For this project, I created Edumon, a complex full-stack turn-based RPG where players collect and battle monsters by answering educational questions to determine the success of their moves. I used React Native for the frontend, implemented async storage for managing game state and user progression, and added subject and difficulty customization to tailor the learning experience. The app also includes animations, audio integration, and pixel art visuals to provide a seamless, engaging experience.",
  "https://github.com/FBLA-2025-app/App-FBLA-state",
  "edumon.png",
  null,
  ["gold", "silver"]
);

const myProjects = [
  talentLink,
  edumon,
  novatechSite,
  culinaryShowdown,
  crocGame,
  fashunSite,
  jsCalculator,
  wordleGame,
  soccerGame,
  doorsGame,
  copperCanyonFilmFest,
  chameleonDesigns,
]

// Create Project Cards
const projectsContainer = document.getElementById("projects-container")

function createProjectCard(project, container) {
  const card = document.createElement("div")
  card.className = "project-card position-relative"

  // Create award badges if any
  if (project.awards) {
    // Create a container for badges if there are multiple
    if (project.awards.length > 1) {
      const badgeContainer = document.createElement("div")
      badgeContainer.className = "badge-container"

      project.awards.forEach((award, index) => {
        const badge = document.createElement("div")
        badge.className = "project-badge"
        badge.textContent = award === "gold" ? "Gold" : award === "silver" ? "Silver" : "Bronze"
        badge.style.backgroundColor =
          award === "gold" ? "var(--warning)" : award === "silver" ? "var(--text-muted)" : "var(--accent-tertiary)"
        badgeContainer.appendChild(badge)
      })

      card.appendChild(badgeContainer)
    } else {
      // Single badge, use original approach
      const award = project.awards[0]
      const badge = document.createElement("div")
      badge.className = "project-badge"
      badge.textContent = award === "gold" ? "Gold" : award === "silver" ? "Silver" : "Bronze"
      badge.style.backgroundColor =
        award === "gold" ? "var(--warning)" : award === "silver" ? "var(--text-muted)" : "var(--accent-tertiary)"
      card.appendChild(badge)
    }
  }

  // Create project image
  const imageContainer = document.createElement("div")
  imageContainer.className = "project-image"

  const image = document.createElement("img")
  image.src =
    project.type === "coding"
      ? `../assets/project-covers/${project.coverImg}`
      : `./assets/graphic-design-projects/${project.id}/${project.coverImg}`
  image.alt = `${project.title} project`

  imageContainer.appendChild(image)
  card.appendChild(imageContainer)

  // Create project content
  const content = document.createElement("div")
  content.className = "project-content"

  const title = document.createElement("h3")
  title.className = "project-title"
  title.textContent = project.title

  const header = document.createElement("p")
  header.className = "mb-2"
  header.textContent = project.header

  const description = document.createElement("p")
  description.className = "project-description"
  description.textContent = project.description.replace(/<[^>]*>/g, "")

  const links = document.createElement("div")
  links.className = "project-links"

  const viewLink = document.createElement("a")
  viewLink.className = "project-link"
  viewLink.href = project.projectLink
  viewLink.target = "_blank"
  viewLink.textContent = "View Project"

  links.appendChild(viewLink)

  if (project.repoLink) {
    const codeLink = document.createElement("a")
    codeLink.className = "project-link"
    codeLink.href = project.repoLink
    codeLink.target = "_blank"
    codeLink.textContent = "View Code"
    links.appendChild(codeLink)
  }

  content.appendChild(title)
  content.appendChild(header)
  content.appendChild(description)
  content.appendChild(links)

  card.appendChild(content)

  // Add modal trigger for more details
  card.setAttribute("data-modal", `modal-${project.id}`)
  card.classList.add("modal-trigger")

  container.appendChild(card)

  // Create modal for project details
  createProjectModal(project)
}

function createProjectModal(project) {
  const modal = document.createElement("div")
  modal.className = "modal"
  modal.id = `modal-${project.id}`

  const modalContent = document.createElement("div")
  modalContent.className = "modal-content"

  const closeBtn = document.createElement("button")
  closeBtn.className = "modal-close"
  closeBtn.innerHTML = '<i class="fas fa-times"></i>'

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active")
    document.body.style.overflow = "auto"
  })

  const title = document.createElement("h2")
  title.className = "modal-title"
  title.textContent = project.title

  const body = document.createElement("div")
  body.className = "modal-body"
  body.innerHTML = project.description

  const footer = document.createElement("div")
  footer.className = "modal-footer"

  const viewBtn = document.createElement("a")
  viewBtn.className = "modal-button"
  viewBtn.href = project.projectLink
  viewBtn.target = "_blank"
  viewBtn.textContent = "View Project"

  footer.appendChild(viewBtn)

  modalContent.appendChild(closeBtn)
  modalContent.appendChild(title)
  modalContent.appendChild(body)
  modalContent.appendChild(footer)

  modal.appendChild(modalContent)

  document.body.appendChild(modal)
}

// Initialize project cards if containers exist
if (
  projectsContainer ||
  codingProjectContainer ||
  graphicDesignProjectContainer ||
  fblaProjectContainer ||
  skillsUSAProjectContainer
) {
  // Featured projects on home page
  if (projectsContainer) {
    // const featuredProjects = myProjects.slice(0, 3)
    const featuredProjects = [talentLink, edumon, novatechSite]
    featuredProjects.forEach((project) => {
      createProjectCard(project, projectsContainer)
    })
  }

  // Coding projects page
  if (codingProjectContainer) {
    const codingProjects = myProjects.filter((project) => project.type === "coding")
    codingProjects.forEach((project) => {
      createProjectCard(project, codingProjectContainer)
    })
  }

  // Graphic design projects page
  if (graphicDesignProjectContainer) {
    const designProjects = myProjects.filter((project) => project.type === "graphic design")
    designProjects.forEach((project) => {
      createProjectCard(project, graphicDesignProjectContainer)
    })
  }

  // Award projects page
  if (fblaProjectContainer && skillsUSAProjectContainer) {
    const fblaProjects = myProjects.filter((project) => project.awards && project.type === "coding")
    const skillsUSAProjects = myProjects.filter((project) => project.awards && project.type === "graphic design")

    fblaProjects.forEach((project) => {
      createProjectCard(project, fblaProjectContainer)
    })

    skillsUSAProjects.forEach((project) => {
      createProjectCard(project, skillsUSAProjectContainer)
    })
  }

  // Add event listeners to modal triggers
  const modalTriggers = document.querySelectorAll(".modal-trigger")
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal")
      const modal = document.getElementById(modalId)

      if (modal) {
        modal.classList.add("active")
        document.body.style.overflow = "hidden"
      }
    })
  })
}

// Create project cards
if (
  document.body.contains(codingProjectContainer) ||
  document.body.contains(graphicDesignProjectContainer) ||
  document.body.contains(fblaProjectContainer)
) {
  myProjects.forEach((project) => {
    const projectDiv = document.createElement("div")
    projectDiv.classList.add("project-wrapper")

    // Responsive height adjustment
    if (window.innerWidth <= 768 && project.type === "graphic design") {
      projectDiv.style.maxHeight = "none"
    } else if (project.type === "graphic design") {
      projectDiv.style.maxHeight = "60vh"
    }

    const titleWrapper = document.createElement("div")
    titleWrapper.classList.add("project-title")

    const title = document.createElement("h1")
    title.innerHTML = `${project.title}`

    titleWrapper.appendChild(title)
    projectDiv.appendChild(titleWrapper)

    if (project.awards !== null) {
      const awardIconWrapper = document.createElement("div")
      awardIconWrapper.classList.add("award-icon-wrapper")
      awardIconWrapper.addEventListener("click", (e) => {
        document.location.href = "award-projects.html"
      })
      project.awards.forEach((award) => {
        const awardIcon = document.createElement("i")
        awardIcon.classList.add("fa-solid", "fa-medal")
        if (award == "gold") {
          awardIcon.style.color = "gold"
        } else if (award == "silver") {
          awardIcon.style.color = "silver"
        } else {
          awardIcon.style.color = "#d47230"
        }
        awardIconWrapper.appendChild(awardIcon)
      })
      titleWrapper.appendChild(awardIconWrapper)
    }

    const content = document.createElement("div")
    content.classList.add("content")

    const projectImageDiv = document.createElement("div")
    projectImageDiv.classList.add("project-image")

    const projectPageLink = document.createElement("a")
    projectPageLink.classList.add("image-grow")
    if (project.type == "coding") {
      projectPageLink.href = `${project.projectLink}`
    } else {
      projectPageLink.href = `./assets/graphic-design-projects/${project.id}/${project.projectLink}`
    }
    projectPageLink.target = "_blank"

    const coverImg = document.createElement("img")

    if (project.type == "coding") {
      coverImg.classList.add("code-project-cover-image")
      coverImg.src = `../assets/project-covers/${project.coverImg}`
      coverImg.alt = `Landing page for Leo's ${project.title} project.`
    } else {
      coverImg.classList.add("gd-project-cover-image")
      coverImg.src = `./assets/graphic-design-projects/${project.id}/${project.coverImg}`
      coverImg.alt = `Logo for Leo's ${project.title} project.`
    }

    projectPageLink.appendChild(coverImg)
    projectImageDiv.appendChild(projectPageLink)
    content.appendChild(projectImageDiv)

    const descriptionDiv = document.createElement("div")
    descriptionDiv.classList.add("project-desc")

    const projectHeader = document.createElement("h1")
    projectHeader.innerHTML = `${project.header}`

    const projectDescription = document.createElement("div")
    projectDescription.classList.add("description")
    descriptionDiv.appendChild(projectHeader)
    descriptionDiv.appendChild(projectDescription)

    projectDescription.innerHTML = `${project.description}`

    content.appendChild(descriptionDiv)
    projectDiv.appendChild(content)

    if (project.type === "graphic design") {
      const projectPackageDiv = document.createElement("div")
      projectPackageDiv.classList.add("project-package-div")
      const projectPackageHeaderWrapper = document.createElement("div")
      projectPackageHeaderWrapper.classList.add("package-header-wrapper")
      const projectPackageHeader = document.createElement("p")
      projectPackageHeader.innerHTML = "Check out the full project here:"
      projectPackageHeader.style.display = "inline-block"
      projectPackageHeaderWrapper.appendChild(projectPackageHeader)
      const promoItemsContainer = document.createElement("div")
      promoItemsContainer.classList.add("promo-items-container")

      let arrowOpened = false
      const revealItemsIcon = document.createElement("i")
      revealItemsIcon.classList.add("fa-solid", "fa-circle-chevron-right", "reveal-projects-icon")

      projectPackageHeaderWrapper.appendChild(revealItemsIcon)
      projectPackageDiv.appendChild(projectPackageHeaderWrapper)
      projectPackageDiv.appendChild(promoItemsContainer)
      projectDiv.appendChild(projectPackageDiv)

      project.promotionalPackageItems.forEach((promoItem) => {
        const promoItemDiv = document.createElement("div")
        promoItemDiv.classList.add("promo-item-div")
        promoItemDiv.addEventListener("click", () => {
          window.open(promoItem.link, "_blank")
        })
        const promoItemImg = document.createElement("div")
        promoItemImg.classList.add("promo-item-img")
        promoItemImg.style.backgroundImage = `url(./assets/graphic-design-projects/${project.id}/${promoItem.img})`
        const promoItemTitle = document.createElement("p")
        promoItemTitle.classList.add("promo-item-title")
        promoItemTitle.innerHTML = `${promoItem.title}`

        promoItemDiv.appendChild(promoItemImg)
        promoItemDiv.appendChild(promoItemTitle)
        promoItemsContainer.appendChild(promoItemDiv)
      })

      revealItemsIcon.addEventListener("click", (e) => {
        if (arrowOpened) {
          e.target.style.animation = "rotateClose 0.5s ease forwards"
          promoItemsContainer.style.animation = "hidePackage 0.75s ease forwards"
          projectDiv.style.animation = "hideMore 1s ease forwards"
        } else {
          e.target.style.animation = "rotateOpen 0.5s ease forwards"
          promoItemsContainer.style.animation = "revealPackage 0.75s ease forwards"
          projectDiv.style.animation = "revealMore 1s ease forwards"
        }
        arrowOpened = !arrowOpened
      })
    } else {
      const projectRepoDiv = document.createElement("div")
      projectRepoDiv.classList.add("project-link")
      const repoHeader = document.createElement("p")
      repoHeader.innerHTML = "Check out the code here:"

      const repoLink = document.createElement("a")
      repoLink.innerHTML = `${project.title} Repository`
      repoLink.classList.add("link-grow")
      repoLink.target = "_blank"
      repoLink.href = `${project.repoLink}`

      projectRepoDiv.appendChild(repoHeader)
      projectRepoDiv.appendChild(repoLink)

      projectDiv.appendChild(projectRepoDiv)
    }

    // if (document.body.contains(fblaProjectContainer) && project.awards !== null) {
    //   if (project.type == "coding") {
    //     fblaProjectContainer.appendChild(projectDiv)
    //   } else {
    //     skillsUSAProjectContainer.appendChild(projectDiv)
    //   }
    // } else if (document.body.contains(codingProjectContainer) && project.type == "coding") {
    //   codingProjectContainer.appendChild(projectDiv)
    // } else if (document.body.contains(graphicDesignProjectContainer) && project.type == "graphic design") {
    //   graphicDesignProjectContainer.appendChild(projectDiv)
    // }

    // Responsive description handling
    if (projectDescription.scrollHeight > projectDescription.offsetHeight) {
      projectDescription.style.overflow = "hidden"
      const moreDiv = document.createElement("div")
      moreDiv.classList.add("more-div", "desc-hidden")

      const moreButton = document.createElement("button")
      moreButton.classList.add("more-desc-button")
      moreButton.type = "button"
      moreButton.innerHTML = "More"

      moreButton.addEventListener("click", (e) => {
        if (projectDescription.style.overflow == "hidden") {
          projectDescription.style.maxHeight = "none"
          moreDiv.classList.remove("desc-hidden")
          projectDiv.style.animation = "revealMore 1s ease forwards"
          projectDescription.style.overflow = "visible"
          moreButton.innerHTML = "Less"
          descriptionDiv.style.height = "auto"
        } else {
          // Adjust max-height based on screen size
          if (window.innerWidth <= 768) {
            projectDescription.style.maxHeight = "200px"
          } else {
            projectDescription.style.maxHeight = "23vh"
          }
          moreDiv.classList.add("desc-hidden")
          projectDiv.style.animation = "hideMore 1s ease forwards"
          projectDescription.style.overflow = "hidden"
          moreButton.innerHTML = "More"

          // Adjust height based on screen size
          if (window.innerWidth <= 768) {
            descriptionDiv.style.height = "auto"
          } else {
            descriptionDiv.style.height = "36vh"
          }
        }
      })

      moreDiv.appendChild(moreButton)
      descriptionDiv.appendChild(moreDiv)
    }
  })
}

// const personalitiesArray = ["Developer", "Designer", "Creator", "Programmer", "Learner"]

// let personalityIndex = 0
let animIndex = 0

// if (document.body.contains(personalitiesSpan)) {
//   setTimeout(() => {
//     typePersonality()
//   }, 1500) // Reduced from 2000ms for better mobile experience
// }

function typePersonality() {
  const typingInterval = setInterval(() => {
    let text = personalitiesArray[personalityIndex]
    personalitiesSpan.innerHTML += text[animIndex]
    animIndex++
    if (animIndex === text.length) {
      clearInterval(typingInterval)
      animIndex = 0
      personalityIndex++
      if (personalityIndex === personalitiesArray.length) {
        personalityIndex = 0
      }
      setTimeout(() => {
        const deletingInterval = setInterval(() => {
          text = text.slice(0, -1)
          personalitiesSpan.innerHTML = text
          if (text.length === 0) {
            clearInterval(deletingInterval)
            typePersonality()
          }
        }, 50)
      }, 1500) // Reduced from 2500ms for better mobile experience
    }
  }, 50)
}

const featuredProjectsArray = [talentLink, edumon]

// Initialize the carousel with featured projects
document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.querySelector(".carousel-container")

  if (carouselContainer) {
    console.log("Found carousel container, populating slides")
    // Clear any existing content
    carouselContainer.innerHTML = ''

    // Create slides for each featured project
    featuredProjectsArray.forEach((project, index) => {
      const slide = document.createElement("div")
      slide.className = "carousel-slide"
      if (index === 0) slide.classList.add("active")

      const header = document.createElement("div")
      header.className = "carousel-header"

      const title = document.createElement("h2")
      title.className = "carousel-title"
      title.textContent = project.title

      const controls = document.createElement("div")
      controls.className = "carousel-controls"

      const redControl = document.createElement("span")
      redControl.className = "carousel-control red"
      redControl.innerHTML = '<i class="fas fa-times"></i>'
      redControl.addEventListener("click", (e) => {
        e.stopPropagation()
        prevBtn.click()
      })

      const yellowControl = document.createElement("span")
      yellowControl.className = "carousel-control yellow"

      const greenControl = document.createElement("span")
      greenControl.className = "carousel-control green"
      greenControl.innerHTML = '<i class="fas fa-plus"></i>'
      greenControl.addEventListener("click", (e) => {
        e.stopPropagation()
        window.open(project.projectLink, "_blank")
      })

      controls.appendChild(redControl)
      controls.appendChild(yellowControl)
      controls.appendChild(greenControl)

      header.appendChild(title)
      header.appendChild(controls)

      const imgWrapper = document.createElement("div")
      imgWrapper.className = "carousel-image-wrapper"

      const img = document.createElement("img")
      img.className = "carousel-image"
      img.src = project.type === "coding"
        ? `./assets/project-covers/${project.coverImg}` 
        : `./assets/graphic-design-projects/${project.id}/${project.coverImg}`
      img.alt = project.title

      imgWrapper.appendChild(img)

      slide.appendChild(header)
      slide.appendChild(imgWrapper)

      // Add click event to open the project
      slide.addEventListener("click", () => {
        window.open(project.projectLink, "_blank")
      })

      carouselContainer.appendChild(slide)
    })

    // Important: Update the carousel slides reference after creating new slides
    const updatedSlides = document.querySelectorAll(".carousel-slide")

    // Reset current slide and show the first one
    currentSlide = 0

    // Updated function to show slides that works with our dynamic content
    function updateSlideVisibility() {
      updatedSlides.forEach((slide, i) => {
        slide.classList.remove("active")
        if (i === currentSlide) {
          slide.classList.add("active")
        }
      })
    }

    // Initial slide display
    updateSlideVisibility()

    // Re-attach event listeners to carousel arrows
    const prevArrow = document.querySelector(".carousel-arrow.prev")
    const nextArrow = document.querySelector(".carousel-arrow.next")

    if (prevArrow) {
      prevArrow.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + updatedSlides.length) % updatedSlides.length
        updateSlideVisibility()
        console.log("Previous clicked, now showing slide", currentSlide)
      })
    }

    if (nextArrow) {
      nextArrow.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % updatedSlides.length
        updateSlideVisibility()
        console.log("Next clicked, now showing slide", currentSlide)
      })
    }

    console.log(`Created ${updatedSlides.length} carousel slides`)
  } else {
    console.error("Carousel container not found")
  }
})

if (document.body.contains(codeProjects)) {
  codeProjects.addEventListener("click", (e) => {
    document.location.href = "../code-projects.html";
  })

  gdProjects.addEventListener("click", (e) => {
    document.location.href = "../graphic-design-projects.html";
  })
}

// Add resize event listener to handle responsive adjustments
window.addEventListener("resize", () => {
  // Adjust project heights on resize
  const projectWrappers = document.querySelectorAll(".project-wrapper")
  projectWrappers.forEach((wrapper) => {
    if (window.innerWidth <= 768) {
      wrapper.style.maxHeight = "none"
    } else if (wrapper.querySelector(".project-package-div")) {
      wrapper.style.maxHeight = "60vh"
    }
  })
})
