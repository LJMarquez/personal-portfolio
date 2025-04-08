const codingProjectContainer = document.getElementById(
  "coding-project-container"
);
const graphicDesignProjectContainer = document.getElementById(
  "graphic-design-project-container"
);

const personalitiesSpan = document.getElementById("personalities-span");
const slideshowContainer = document.getElementById("slideshow-container");

const codeProjects = document.getElementById("code-projects");
const awardProjects = document.getElementById("award-projects");
const gdProjects = document.getElementById("gd-projects");

const fblaProjectContainer = document.getElementById("fbla-project-container");
const skillsUSAProjectContainer = document.getElementById(
  "skillsusa-project-container"
);

const phoneIcon = document.querySelector(".fa-phone");
const phonePopUp = document.querySelector(".phone-pop-up");

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalHeader = document.querySelector(".modal-header");
const modalInfo = document.querySelector(".modal-info");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      if (entry.target.classList.contains("show-right")) {
        entry.target.classList.add("fade-right");
      } else if (entry.target.classList.contains("show-left")) {
        setTimeout(function () {
          entry.target.classList.add("fade-left");
        }, 2000);
      }
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

if (document.body.contains(modal)) {
  modalClose.addEventListener("click", (e) => {
    modal.close();
  });
  setModalBounds();
}
function setModalBounds() {
  modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

if (document.body.contains(phoneIcon)) {
  phoneIcon.addEventListener("mouseover", () => {
    phonePopUp.style.animation = "reveal 0.25s linear forwards";
  });

  phoneIcon.addEventListener("mouseout", () => {
    phonePopUp.style.animation = "hide 0.25s linear forwards";
  });
}

class Project {
  constructor(
    type,
    title,
    id,
    projectLink,
    header,
    description,
    repoLink,
    coverImg,
    promotionalPackageItems,
    awards
  ) {
    this.type = type;
    this.title = title;
    this.id = id;
    this.projectLink = projectLink;
    this.header = header;
    this.description = description;
    this.repoLink = repoLink;
    this.coverImg = coverImg;
    this.promotionalPackageItems = promotionalPackageItems;
    this.awards = awards;
  }
}

let culinaryShowdown = new Project(
  "coding",
  "Culinary Showdown",
  "culinary-showdown",
  "https://ljmarquez.github.io/Culinary-Showdown/",
  "Can You Take On Gordon Ramsay?",
  "This game was built using HTML, CSS, and JavaScript and encompasses all of the topics I have learned in my first semester of West-MEC. It is a typing/adventure game (mostly) complete with audio, interactivity, and just a few bugs. It utilizes the JS canvas, eventlisteners, inputs, arrays, and loops which append elements to the DOM. This is just scraping the surface of what this game covers, but I plan to make my projects more in-depth and entertaining in the future.",
  "https://github.com/LJMarquez/Culinary-Showdown",
  "showdown-cover.jpg",
  null,
  null
);

let doorsGame = new Project(
  "coding",
  "Random Doors Game",
  "doors-game",
  "https://ljmarquez.github.io/FNAF-Door-Game/",
  "Will You Survive The Night?",
  "This game was built using HTML, CSS, and JavaScript and focuses on random number generation to determine the outcome the game. It includes other elements such as keyframe animations and capturing user info from an input.",
  "https://github.com/LJMarquez/FNAF-Door-Game/tree/main",
  "fnaf-game-cover.jpg",
  null,
  null
);

let jsCalculator = new Project(
  "coding",
  "JavaScript Calculator",
  "js-calculator",
  "https://ljmarquez.github.io/Calculator-Project/",
  "Have Fun With Math!",
  "This game was built using HTML, CSS, and JavaScript and focuses on using conditions to check which button the user pressed to determine which variables will be manipulated. These variables are then put together in an equation to determine the answer of the problem inputted by the user. It utilizes some other elements such as a for loop to create the buttons, flex display, switch cases, etc.",
  "https://github.com/LJMarquez/Calculator-Project/tree/main",
  "calculator-cover.jpg",
  null,
  null
);

let wordleGame = new Project(
  "coding",
  "Wordle Game",
  "wordle-game",
  "https://ljmarquez.github.io/Wordle-Game/",
  "Can You Guess The Word?",
  "This game was built using HTML, CSS, and JavaScript and focuses on manipulating strings to check if the user's input (guess) is equivalent to the phrase. Other elements that are utilized are a for each loop to create the inputs, values, and an eventListener to check for everytime the input value is changed and if the value is equal to the phrase.",
  "https://github.com/LJMarquez/Wordle-Game/tree/main",
  "wordle-game-cover.jpg",
  null,
  null
);

let soccerGame = new Project(
  "coding",
  "2 Player Soccer Game",
  "soccer-game",
  "https://ljmarquez.github.io/Soccer-Game/",
  "GOOOAAALLL!!!",
  "This game was built using HTML, CSS, and JavaScript and focuses on using the canvas element to create shapes which act as the players, ball, and goal. These shapes have logic added to them for when they collide with each other to change the direction and speed of the ball. It utilizes some other elements such as eventListeners for keys on the keyboard, functions to create the game elements, and using random logic to set the speed of the ball.",
  "https://github.com/LJMarquez/Soccer-Game/tree/main",
  "soccer-game-cover.jpg",
  null,
  null
);

let fashunSite = new Project(
  "coding",
  "Fashun Shopping Site",
  "fashun-site",
  "https://ljmarquez.github.io/Fashun-Site/",
  "What's Your Style?",
  "This project was built using HTML, CSS, and JavaScript and focuses on utilizing media queries to make the website fit on multiple different screen resolutions. The media queries are used in the CSS to manipulate your HTML in different ways. It also utilizes :nth child in CSS to capture a specific child in a parent element containing multiple nested elements.",
  "https://github.com/LJMarquez/Fashun-Site/tree/main",
  "fashun-cover.jpg",
  null,
  null
);

let novatechSite = new Project(
  "coding",
  "NovaTech Job Site",
  "novatech-site",
  "https://ljmarquez.github.io/FBLA-State/",
  "Find Your Dream Job!",
  "I developed this project for FBLA, specifically the website coding and development competition. This project won first in the regional competition and third in the state competition! This was the first project I developed that was a little bit more advanced. It involved stringing together multiple files, running logic gates to make sure ceratin page elements only loaded on certain pages, storing and retrieving data across multiple files using local storage, procedural js to create page elements, and much much more! This project also won me first place at my FBLA Regional competition and third place at the state competition. I talk a little bit more about FBLA on my <a class='about-link' href='about.html'>about page!</a>",
  "https://github.com/LJMarquez/FBLA-State/tree/final",
  "novatech-cover.jpg",
  null,
  ["gold", "bronze"]
);

let crocGame = new Project(
  "coding",
  "Croc-O-Rena",
  "croc-o-rena-game",
  "https://ljmarquez.github.io/Phaser-Game/",
  "Be the Last One Standing!",
  "This project was my first experience using a JavaScript library to develop an application. This game was built using Phaser 3, a JavaScript library that specializes in making web based games. This is a shoot 'em up game where your goal is to make it past all of the waves and beat the boss at the end. It still has a few bugs but I would say is pretty fun! I won't bore you to death about how I made it and its intricacies but if you would like to know more just <a class='about-link' href='contact.html'>reach out to me!</a>",
  "https://github.com/LJMarquez/Phaser-Game",
  "croc-o-rena-cover.jpg",
  null,
  null
);

let copperCanyonFilmFest = new Project(
  "graphic design",
  "AZ Film Festival",
  "copper-canyon-film-fest",
  "logo.pdf",
  "Lights, Camera, Action!",
  "I created this project at the SkillsUSA state competition in Arizona. This project won first place out of 80+ contestants! I don't quite remember the entire design brief but it went something along the lines of this. There was a film festival being held in Flagstaff AZ called the Copper Canyon Film Festival. The film festival caters to all movie lovers providing them a with a place where they can share their love of movies with others. At the event, there would be movie showcases, movie watching parties, and presentations where film directors get to share their movie making experiences. We were tasked with developing a logo and making a flyer for the client and here is the work I created! I tried making the flyer colorful and vibrant to stand out and relay the idea of the film festival being fun, entertaining, and for everyone to enjoy. For the logo, instead of going with a desert theme I went with a color scheme and symbolism that related more to flagstaff, with the blues, the mountains, and the trees.",
  null,
  "logo.jpg",
  [{ title: "Flyer", img: "flyer.jpg", link: "flyer.pdf" }],
  ["gold"]
);

let chameleonDesigns = new Project(
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
  null
);

let talentLink = new Project(
  "coding",
  "Talent Link",
  "talent-link",
  "https://github.com/FBLA-2025/FBLA-Web-Coding-Regional",
  "Your Future Career Starts Here!",
  // "In this project, me and three other people were put in a group and tasked with making a mock up graphics advertising company. We went through multiple steps to procure the final outcome but I'll briefly lay out the steps. We assigned roles to each member of the group and defined our target audience, our mission, company name, slogan, etc. After that we came up with multiple ideas logos and narrowed it down to the one I made and made multiple variations of it. Then we were tasked with designing an office space and the costs of rent and running our business (consumables, tech, etc). Then we developed a promotional package including business cards, letterheads, etc. Throughout the entire process we wrote up memos to communicate with our client (our teacher) to show us what communication looks like in the professional world.",
  "In this project me and my two other teammates were tasked with creating a job website for our school's guidance department that allowed students to apply to jobs, employers to post jobs, a backend admin to approve/deny jobs, and a page where the jobs are listed. We developed a company and site called TalentLink. The main technologies I used for this site were the Astro JS framework, React, MongoDB, Mongoose, Express, Axios, and Node. Astro is a framework that allows you to use multiple frameworks within your project and separate it into modules. I used React to create the components and frontend of the site. I used MongoDB as my database to store all site data (jobs, users, etc). I used Mongoose to create the schemas for the data and to connect to the database. I used Express to create the backend server and Axios to make API calls to the database. I also used CSS and HTML within my React components to style the site and make it look nice. As far as some features of the site, it had a log in with encrpyted passwords, conditional page renders depending on if the user was a student, employer, or admin, carousel elemnts, and procedural generation for jobs. This project was a lot of fun and I learned a lot about how to use these technologies together. I also learned a lot about how to work in a team and communicate with my teammates.",
  "https://github.com/FBLA-2025/FBLA-Web-Coding-Regional",
  "talent-link.jpg",
  null,
  ["gold", "bronze"]
);

let myProjects = [
  talentLink,
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
];

if (
  document.body.contains(codingProjectContainer) ||
  document.body.contains(graphicDesignProjectContainer) ||
  document.body.contains(fblaProjectContainer)
) {
  myProjects.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-wrapper");
    if (project.type === "graphic design") {
      projectDiv.style.maxHeight = "60vh";
    }

    let titleWrapper = document.createElement("div");
    titleWrapper.classList.add("project-title");

    let title = document.createElement("h1");
    title.innerHTML = `${project.title}`;

    titleWrapper.appendChild(title);
    projectDiv.appendChild(titleWrapper);

    if (project.awards !== null) {
      let awardIconWrapper = document.createElement("div");
      awardIconWrapper.classList.add("award-icon-wrapper");
      awardIconWrapper.addEventListener("click", (e) => {
        document.location.href = "award-projects.html";
      });
      project.awards.forEach((award) => {
        let awardIcon = document.createElement("i");
        awardIcon.classList.add("fa-solid", "fa-medal");
        if (award == "gold") {
          awardIcon.style.color = "gold";
        } else if (award == "silver") {
          awardIcon.style.color = "silver";
        } else {
          awardIcon.style.color = "#d47230";
        }
        awardIconWrapper.appendChild(awardIcon);
      });
      titleWrapper.appendChild(awardIconWrapper);
    }

    let content = document.createElement("div");
    content.classList.add("content");

    let projectImageDiv = document.createElement("div");
    projectImageDiv.classList.add("project-image");

    let projectPageLink = document.createElement("a");
    projectPageLink.classList.add("image-grow");
    if (project.type == "coding") {
      projectPageLink.href = `${project.projectLink}`;
    } else {
      projectPageLink.href = `./assets/graphic-design-projects/${project.id}/${project.projectLink}`;
    }
    projectPageLink.target = "_blank";

    let coverImg = document.createElement("img");

    if (project.type == "coding") {
      coverImg.classList.add("code-project-cover-image");
      coverImg.src = `../assets/project-covers/${project.coverImg}`;
      coverImg.alt = `Landing page for Leo's ${project.title} project.`;
    } else {
      coverImg.classList.add("gd-project-cover-image");
      coverImg.src = `./assets/graphic-design-projects/${project.id}/${project.coverImg}`;
      coverImg.alt = `Logo for Leo's ${project.title} project.`;
    }

    projectPageLink.appendChild(coverImg);
    projectImageDiv.appendChild(projectPageLink);
    content.appendChild(projectImageDiv);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("project-desc");

    let projectHeader = document.createElement("h1");
    projectHeader.innerHTML = `${project.header}`;

    let projectDescription = document.createElement("div");
    projectDescription.classList.add("description");
    descriptionDiv.appendChild(projectHeader);
    descriptionDiv.appendChild(projectDescription);

    projectDescription.innerHTML = `${project.description}`;

    content.appendChild(descriptionDiv);
    projectDiv.appendChild(content);

    if (project.type === "graphic design") {
      let projectPackageDiv = document.createElement("div");
      projectPackageDiv.classList.add("project-package-div");
      let projectPackageHeaderWrapper = document.createElement("div");
      projectPackageHeaderWrapper.classList.add("package-header-wrapper");
      let projectPackageHeader = document.createElement("p");
      projectPackageHeader.innerHTML = "Check out the full project here:";
      projectPackageHeader.style.display = "inline-block";
      projectPackageHeaderWrapper.appendChild(projectPackageHeader);
      let promoItemsContainer = document.createElement("div");
      promoItemsContainer.classList.add("promo-items-container");

      let arrowOpened = false;
      let revealItemsIcon = document.createElement("i");
      revealItemsIcon.classList.add(
        "fa-solid",
        "fa-circle-chevron-right",
        "reveal-projects-icon"
      );

      projectPackageHeaderWrapper.appendChild(revealItemsIcon);
      projectPackageDiv.appendChild(projectPackageHeaderWrapper);
      projectPackageDiv.appendChild(promoItemsContainer);
      projectDiv.appendChild(projectPackageDiv);

      project.promotionalPackageItems.forEach((promoItem) => {
        let promoItemDiv = document.createElement("div");
        promoItemDiv.classList.add("promo-item-div");
        promoItemDiv.addEventListener("click", () => {
          window.open(promoItem.link, "_blank");
        });
        let promoItemImg = document.createElement("div");
        promoItemImg.classList.add("promo-item-img");
        promoItemImg.style.backgroundImage = `url(./assets/graphic-design-projects/${project.id}/${promoItem.img})`;
        let promoItemTitle = document.createElement("p");
        promoItemTitle.classList.add("promo-item-title");
        promoItemTitle.innerHTML = `${promoItem.title}`;

        promoItemDiv.appendChild(promoItemImg);
        promoItemDiv.appendChild(promoItemTitle);
        promoItemsContainer.appendChild(promoItemDiv);
      });

      revealItemsIcon.addEventListener("click", (e) => {
        if (arrowOpened) {
          e.target.style.animation = "rotateClose 0.5s ease forwards";
          promoItemsContainer.style.animation =
            "hidePackage 0.75s ease forwards";
          projectDiv.style.animation = "hideMore 1s ease forwards";
        } else {
          e.target.style.animation = "rotateOpen 0.5s ease forwards";
          promoItemsContainer.style.animation =
            "revealPackage 0.75s ease forwards";
          projectDiv.style.animation = "revealMore 1s ease forwards";
        }
        arrowOpened = !arrowOpened;
      });
    } else {
      let projectRepoDiv = document.createElement("div");
      projectRepoDiv.classList.add("project-link");
      let repoHeader = document.createElement("p");
      repoHeader.innerHTML = "Check out the code here:";

      let repoLink = document.createElement("a");
      repoLink.innerHTML = `${project.title} Repository`;
      repoLink.classList.add("link-grow");
      repoLink.target = "_blank";
      repoLink.href = `${project.repoLink}`;

      projectRepoDiv.appendChild(repoHeader);
      projectRepoDiv.appendChild(repoLink);

      projectDiv.appendChild(projectRepoDiv);
    }

    if (
      document.body.contains(fblaProjectContainer) &&
      project.awards !== null
    ) {
      if (project.type == "coding") {
        fblaProjectContainer.appendChild(projectDiv);
      } else {
        skillsUSAProjectContainer.appendChild(projectDiv);
      }
    } else if (
      document.body.contains(codingProjectContainer) &&
      project.type == "coding"
    ) {
      codingProjectContainer.appendChild(projectDiv);
    } else if (
      document.body.contains(graphicDesignProjectContainer) &&
      project.type == "graphic design"
    ) {
      graphicDesignProjectContainer.appendChild(projectDiv);
    }

    if (projectDescription.scrollHeight > projectDescription.offsetHeight) {
      projectDescription.style.overflow = "hidden";
      let moreDiv = document.createElement("div");
      moreDiv.classList.add("more-div", "desc-hidden");

      let moreButton = document.createElement("button");
      moreButton.classList.add("more-desc-button");
      moreButton.type = "button";
      moreButton.innerHTML = "More";

      moreButton.addEventListener("click", (e) => {
        if (projectDescription.style.overflow == "hidden") {
          projectDescription.style.maxHeight = "max-content";
          moreDiv.classList.remove("desc-hidden");
          projectDiv.style.animation = "revealMore 1s ease forwards";
          projectDescription.style.overflow = "visible";
          moreButton.innerHTML = "Less";
          descriptionDiv.style.height = "max-content";
        } else {
          projectDescription.style.maxHeight = "23vh";
          moreDiv.classList.add("desc-hidden");
          projectDiv.style.animation = "hideMore 1s ease forwards";
          projectDescription.style.overflow = "hidden";
          moreButton.innerHTML = "More";
          descriptionDiv.style.height = "36vh";
        }
      });

      moreDiv.appendChild(moreButton);
      descriptionDiv.appendChild(moreDiv);
    }
  });
}

let personalitiesArray = [
  "Developer",
  "Designer",
  "Creator",
  "Programmer",
  "Learner",
];

let personalityIndex = 0;
let animIndex = 0;

if (document.body.contains(personalitiesSpan)) {
  setTimeout(function () {
    typePersonality();
  }, 2000);
}

function typePersonality() {
  const typingInterval = setInterval(function () {
    let text = personalitiesArray[personalityIndex];
    personalitiesSpan.innerHTML += text[animIndex];
    animIndex++;
    if (animIndex === text.length) {
      clearInterval(typingInterval);
      animIndex = 0;
      personalityIndex++;
      if (personalityIndex === personalitiesArray.length) {
        personalityIndex = 0;
      }
      setTimeout(function () {
        const deletingInterval = setInterval(function () {
          text = text.slice(0, -1);
          personalitiesSpan.innerHTML = text;
          if (text.length === 0) {
            clearInterval(deletingInterval);
            typePersonality();
          }
        }, 50);
      }, 2500);
    }
  }, 50);
}

let featuredProjectsArray = [
  novatechSite,
  crocGame,
  copperCanyonFilmFest,
  // skillsRegional
];

let featuredProjectSlides = [];

if (document.body.contains(slideshowContainer)) {
  featuredProjectsArray.forEach((project) => {
    let slideDiv = document.createElement("div");
    slideDiv.classList.add("featured-slide", "inactive-slide");

    let headerWrapper = document.createElement("div");
    headerWrapper.classList.add("slide-title");

    let slideHeader = document.createElement("h1");
    slideHeader.innerHTML = `${project.title}`;

    headerWrapper.appendChild(slideHeader);

    let projectPageLink = document.createElement("a");
    projectPageLink.classList.add("image-grow", "slide-img-wrapper");
    if (project.type === "coding") {
      projectPageLink.href = `${project.projectLink}`;
    } else {
      projectPageLink.href = `./assets/graphic-design-projects/${project.id}/${project.projectLink}`;
    }
    projectPageLink.target = "_blank";

    let coverImg = document.createElement("img");
    coverImg.classList.add("slide-img");

    if (project.type === "coding") {
      coverImg.src = `./assets/project-covers/${project.coverImg}`;
      coverImg.alt = `Landing page for Leo's ${project.title} project.`;
    } else {
      coverImg.src = `./assets/graphic-design-projects/${project.id}/${project.coverImg}`;
      coverImg.alt = `Logo for Leo's ${project.title} project.`;
    }

    projectPageLink.appendChild(coverImg);

    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    dot1.style.left = "4%";
    dot1.style.backgroundColor = "red";
    let xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-xmark");
    dot1.appendChild(xIcon);
    dot1.addEventListener("click", () => {
      let direction;
      featuredIndex--;
      activeSlide.style.animation = "exitLeft 0.75s ease-in forwards";
      direction = "left";
      if (featuredIndex < 0) {
        featuredIndex = featuredProjectSlides.length - 1;
      }
      activeSlide = featuredProjectSlides[featuredIndex];
      activeSlide.classList.remove("inactive-slide");
      slideEnter(direction);
    });
    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    dot2.style.left = "7%";
    dot2.style.backgroundColor = "yellow";
    let dot3 = document.createElement("div");
    dot3.classList.add("dot");
    dot3.style.left = "10%";
    dot3.style.backgroundColor = "lightgreen";
    let plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-solid", "fa-plus");
    dot3.appendChild(plusIcon);
    dot3.addEventListener("click", () => {
      window.open(project.projectLink, "_blank");
    });

    let infoIcon = document.createElement("i");
    infoIcon.classList.add("fa-solid", "fa-circle-info", "info-icon");
    infoIcon.addEventListener("click", () => {
      modal.showModal();
      modalHeader.innerHTML = `${project.title}`;

      if (project.description.length > 280) {
        modalInfo.innerHTML = project.description.slice(0, 200);
        let dots = document.createElement("span");
        dots.innerHTML = " . . .";
        modalInfo.appendChild(dots);

        let more = document.createElement("span");
        more.innerHTML = project.description.slice(
          200,
          project.description.length
        );
        more.style.display = "none";
        modalInfo.appendChild(more);

        let moreButton = document.createElement("button");
        moreButton.classList.add("modal-more-button");
        moreButton.innerHTML = "More";
        modalInfo.appendChild(moreButton);

        moreButton.addEventListener("click", (e) => {
          setModalBounds();
          dots.style.display = "none";
          moreButton.style.display = "none";
          more.style.display = "inline";
        });
      } else {
        modalInfo.innerHTML = `${project.description}`;
      }
    });

    headerWrapper.appendChild(dot1);
    headerWrapper.appendChild(dot2);
    headerWrapper.appendChild(dot3);
    headerWrapper.appendChild(infoIcon);
    slideDiv.appendChild(headerWrapper);
    slideDiv.appendChild(projectPageLink);

    slideshowContainer.appendChild(slideDiv);
    featuredProjectSlides.push(slideDiv);
  });

  let featuredIndex = 0;
  let activeSlide = featuredProjectSlides[featuredIndex];
  activeSlide.classList.remove("inactive-slide");

  let featuredArrows = document.querySelectorAll(".featured-arrow");
  featuredArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      let direction;
      arrow.style.animation = "none";
      arrow.offsetHeight;
      arrow.style.animation = "bounce .3s ease";
      if (arrow.classList.contains("next")) {
        featuredIndex++;
        activeSlide.style.animation = "exitRight 0.75s ease-in forwards";
        direction = "right";
      } else {
        featuredIndex--;
        activeSlide.style.animation = "exitLeft 0.75s ease-in forwards";
        direction = "left";
      }
      if (featuredIndex < 0) {
        featuredIndex = featuredProjectSlides.length - 1;
      }
      if (featuredIndex > featuredProjectSlides.length - 1) {
        featuredIndex = 0;
      }
      activeSlide = featuredProjectSlides[featuredIndex];
      activeSlide.classList.remove("inactive-slide");
      slideEnter(direction);
    });
  });

  function slideEnter(direction) {
    if (direction == "left") {
      activeSlide.style.animation = "enterLeft 0.75s ease-out forwards";
    } else {
      activeSlide.style.animation = "enterRight 0.75s ease-out forwards";
    }
  }
}

if (document.body.contains(codeProjects)) {
  codeProjects.addEventListener("click", (e) => {
    document.location.href = "code-projects.html";
  });

  // awardProjects.addEventListener("click", (e) => {
  //   document.location.href = "award-projects.html";
  // });

  gdProjects.addEventListener("click", (e) => {
    document.location.href = "graphic-design-projects.html";
  });
}
