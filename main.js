const codingProjectContainer = document.getElementById(
  "coding-project-container"
);
const personalitiesSpan = document.getElementById("personalities-span");
const slideshowContainer = document.getElementById("slideshow-container");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalHeader = document.querySelector(".modal-header");
const modalInfo = document.querySelector(".modal-info");

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

// const searchBar = document.getElementById('project-search')
// function search() {
//   filter = searchBar.value.toLowerCase();
// }

class Project {
  constructor(title, id, projectLink, header, description, repoLink, coverImg) {
    this.title = title;
    this.id = id;
    this.projectLink = projectLink;
    this.header = header;
    this.description = description;
    this.repoLink = repoLink;
    this.coverImg = coverImg;
  }
}

let culinaryShowdown = new Project(
  "Culinary Showdown",
  "culinary-showdown",
  "https://ljmarquez.github.io/Culinary-Showdown/",
  "Can You Take On Gordon Ramsay?",
  "This game was built using HTML, CSS, and JavaScript and encompasses all of the topics I have learned in my first semester of West-MEC. It is a typing/adventure game (mostly) complete with audio, interactivity, and just a few bugs. It utilizes the JS canvas, eventlisteners, inputs, arrays, and loops which append elements to the DOM. This is just scraping the surface of what this game covers, but I plan to make my projects more in-depth and entertaining in the future.",
  "https://github.com/LJMarquez/Culinary-Showdown",
  "showdown-cover.jpg"
);

let doorsGame = new Project(
  "Random Doors Game",
  "doors-game",
  "https://ljmarquez.github.io/FNAF-Door-Game/",
  "Will You Survive The Night?",
  "This game was built using HTML, CSS, and JavaScript and focuses on random number generation to determine the outcome the game. It includes other elements such as keyframe animations and capturing user information from an input.",
  "https://github.com/LJMarquez/FNAF-Door-Game/tree/main",
  "fnaf-game-cover.jpg"
);

let jsCalculator = new Project(
  "JavaScript Calculator",
  "js-calculator",
  "https://ljmarquez.github.io/Calculator-Project/",
  "Have Fun With Math!",
  "This game was built using HTML, CSS, and JavaScript and focuses on using conditions to check values and assign the user's inputs accordingly. It utilizes some other elements such as a for loop to create the buttons, flex display, switch cases.",
  "https://github.com/LJMarquez/Calculator-Project/tree/main",
  "calculator-cover.jpg"
);

let wordleGame = new Project(
  "Wordle Game",
  "wordle-game",
  "https://ljmarquez.github.io/Wordle-Game/",
  "Can You Guess The Word?",
  "This game was built using HTML, CSS, and JavaScript and focuses on manipulating strings to check if the user's input (guess) is equivalent to the phrase. Other elements that are utilized are a for each loop to create the inputs, values, and an eventListener to check for everytime the input value is changed and if the value is equal to the phrase.",
  "https://github.com/LJMarquez/Wordle-Game/tree/main",
  "wordle-game-cover.jpg"
);

let soccerGame = new Project(
  "2 Player Soccer Game",
  "soccer-game",
  "https://ljmarquez.github.io/Soccer-Game/",
  "GOOOAAALLL!!!",
  "This game was built using HTML, CSS, and JavaScript and focuses on using the canvas element to create shapes which act as the players, ball, and goal. These shapes have logic added to them for when they collide with each other to change the direction and speed of the ball. It utilizes some other elements such as eventListeners for keys on the keyboard, functions to create the game elements, and using random logic to set the speed of the ball.",
  "https://github.com/LJMarquez/Soccer-Game/tree/main",
  "soccer-game-cover.jpg"
);

let fashunSite = new Project(
  "Fashun Shopping Site",
  "fashun-site",
  "https://ljmarquez.github.io/Fashun-Site/",
  "What's Your Style?",
  "This project was built using HTML, CSS, and JavaScript and focuses on utilizing media queries to make the website fit on multiple different screen resolutions. The media queries are used in the CSS to manipulate your HTML in different ways. It also utilizes :nth child in CSS to capture a specific child in a parent element containing multiple nested elements.",
  "https://github.com/LJMarquez/Fashun-Site/tree/main",
  "fashun-cover.jpg"
);

let novatechSite = new Project(
  "NovaTech Job Site",
  "novatech-site",
  "https://ljmarquez.github.io/FBLA-State/",
  "Find Your Dream Job!",
  "This was the first project I developed that was a little bit more advanced. It involved stringing together multiple files, running logic gates to make sure ceratin page elements only loaded on certain pages, storing and retrieving data across multiple files using local storage, procedural js to create page elements, and much much more! This project also won me first place at my FBLA Regional competition and third place at the state competition. I talk a little bit more about FBLA on my <a class='about-link' href='about.html'>about page!</a>",
  "https://github.com/LJMarquez/FBLA-State/tree/final",
  "novatech-cover.jpg"
);

let crocGame = new Project(
  "Croc-O-Rena",
  "croc-o-rena-game",
  "https://ljmarquez.github.io/Phaser-Game/",
  "Be the Last One Standing!",
  "This project was my first experience using a JavaScript library to develop an application. This game was built using Phaser 3, a JavaScript library that specializes in making web based games. This is a shoot 'em up game where your goal is to make it past all of the waves and beat the boss at the end. It still has a few bugs but I would say is pretty fun! I won't bore you to death about how I made it and its intricacies but if you would like to know more just <a class='about-link' href='contact.html'>reach out to me!</a>",
  "https://github.com/LJMarquez/Phaser-Game",
  "croc-o-rena-cover.jpg"
);

let myCodingProjects = [
  culinaryShowdown,
  doorsGame,
  jsCalculator,
  wordleGame,
  soccerGame,
  fashunSite,
  novatechSite,
  crocGame,
];

if (document.body.contains(codingProjectContainer)) {
  myCodingProjects.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project-wrapper");

    let titleWrapper = document.createElement("div");
    titleWrapper.classList.add("project-title");

    let title = document.createElement("h1");
    title.innerHTML = `${project.title}`;

    titleWrapper.appendChild(title);
    projectDiv.appendChild(titleWrapper);

    let content = document.createElement("div");
    content.classList.add("content");

    let projectImageDiv = document.createElement("div");
    projectImageDiv.classList.add("project-image");

    let projectPageLink = document.createElement("a");
    projectPageLink.classList.add("image-grow");
    projectPageLink.href = `${project.projectLink}`;
    projectPageLink.target = "_blank";

    let coverImg = document.createElement("img");
    coverImg.classList.add("project-cover-image");
    coverImg.src = `/assets/project-covers/${project.coverImg}`;
    coverImg.alt = `Landing page for Leo's ${project.title} project.`;

    projectPageLink.appendChild(coverImg);
    projectImageDiv.appendChild(projectPageLink);
    content.appendChild(projectImageDiv);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("project-desc");

    let projectHeader = document.createElement("h1");
    projectHeader.innerHTML = `${project.header}`;

    let projectDescription = document.createElement("p");
    descriptionDiv.appendChild(projectHeader);
    descriptionDiv.appendChild(projectDescription);

    if (project.description.length > 280) {
      projectDescription.innerHTML = project.description.slice(0, 275);
      let dots = document.createElement("span");
      dots.innerHTML = " . . .";
      descriptionDiv.appendChild(dots);

      let more = document.createElement("span");
      more.innerHTML = project.description.slice(
        275,
        project.description.length
      );
      more.style.display = "none";
      descriptionDiv.appendChild(more);

      let moreButton = document.createElement("button");
      moreButton.classList.add("more-button");
      moreButton.innerHTML = "More";
      descriptionDiv.appendChild(moreButton);

      moreButton.addEventListener("click", (e) => {
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          moreButton.innerHTML = "More";
          more.style.display = "none";
        } else {
          dots.style.display = "none";
          moreButton.innerHTML = "Less";
          more.style.display = "inline";
        }
      });
    } else {
      projectDescription.innerHTML = `${project.description}`;
    }

    content.appendChild(descriptionDiv);
    projectDiv.appendChild(content);

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

    codingProjectContainer.appendChild(projectDiv);
  });
}

let personalitiesArray = ["Developer", "Designer", "Creator", "Programmer", "Learner"];

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
  // skillsRegional,
  // skillsState
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
    projectPageLink.href = `${project.projectLink}`;
    projectPageLink.target = "_blank";

    let coverImg = document.createElement("img");
    coverImg.classList.add("slide-img");
    coverImg.src = `/assets/project-covers/${project.coverImg}`;
    coverImg.alt = `Landing page for Leo's ${project.title} project.`;

    projectPageLink.appendChild(coverImg);

    let dot1 = document.createElement("div");
    // <i class="fa-solid fa-xmark"></i>
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
      // let direction;
      //   featuredIndex++;
      //   activeSlide.style.animation = "exitRight 0.75s ease-in forwards";
      //   direction = 'right';
      // if (featuredIndex > featuredProjectSlides.length - 1) {
      //   featuredIndex = 0;
      // }
      // activeSlide = featuredProjectSlides[featuredIndex];
      // activeSlide.classList.remove('inactive-slide');
      // slideEnter(direction);
    });

    let infoIcon = document.createElement("i");
    infoIcon.classList.add("fa-solid", "fa-circle-info", "info-icon");
    infoIcon.addEventListener("click", (e) => {
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
}

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

function sendEmail() {
  window.open('mailto:marquez.');
}