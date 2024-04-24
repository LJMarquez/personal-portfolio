const codingProjectContainer = document.getElementById("coding-project-container");
const personalitiesSpan = document.getElementById("personalities-span");

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

let culinaryShowdown =   new Project(
  "Culinary Showdown",
  "culinary-showdown",
  "https://ljmarquez.github.io/Culinary-Showdown/",
  "Can You Take On Gordon Ramsay?",
  "This game was built using HTML, CSS, and Javascript and encompasses all of the topics I have learned in my first semester of West-MEC. It is a typing/adventure game (mostly) complete with audio, interactivity, and just a few bugs. It utilizes the JS canvas, eventlisteners, inputs, arrays, and loops which append elements to the DOM. This is just scraping the surface of what this game covers, but I plan to make my projects more in-depth and entertaining in the future.",
  "https://github.com/LJMarquez/Culinary-Showdown",
  "showdown-cover.jpg"
);

let doorsGame =   new Project(
  "Random Doors Game",
  "doors-game",
  "https://ljmarquez.github.io/FNAF-Door-Game/",
  "Will You Survive The Night?",
  "This game was built using HTML, CSS, and Javascript and focuses on random number generation to determine the outcome the game. It includes other elements such as keyframe animations and capturing user information from an input.",
  "https://github.com/LJMarquez/FNAF-Door-Game/blob/main/index.html",
  "fnaf-game-cover.jpg"
);

let jsCalculator =   new Project(
  "Javascript Calculator",
  "js-calculator",
  "https://ljmarquez.github.io/Calculator-Project/",
  "Have Fun With Math!",
  "This game was built using HTML, CSS, and Javascript and focuses on using conditions to check values and assign the user's inputs accordingly. It utilizes some other elements such as a for loop to create the buttons, flex display, switch cases.",
  "https://github.com/LJMarquez/Calculator-Project/blob/main/index.html",
  "calculator-cover.jpg"
);

let wordleGame =   new Project(
  "Wordle Game",
  "wordle-game",
  "https://ljmarquez.github.io/Wordle-Game/",
  "Can You Guess The Word?",
  "This game was built using HTML, CSS, and Javascript and focuses on manipulating strings to check if the user's input (guess) is equivalent to the phrase. Other elements that are utilized are a for each loop to create the inputs, values, and an eventListener to check for everytime the input value is changed and if the value is equal to the phrase.",
  "https://github.com/LJMarquez/Wordle-Game/blob/main/index.html",
  "wordle-game-cover.jpg"
);

let soccerGame =   new Project(
  "2 Player Soccer Game",
  "soccer-game",
  "https://ljmarquez.github.io/Soccer-Game/",
  "GOOOAAALLL!!!",
  "This game was built using HTML, CSS, and Javascript and focuses on using the canvas element to create shapes which act as the players, ball, and goal. These shapes have logic added to them for when they collide with each other to change the direction and speed of the ball. It utilizes some other elements such as eventListeners for keys on the keyboard, functions to create the game elements, and using random logic to set the speed of the ball.",
  "https://github.com/LJMarquez/Soccer-Game/blob/main/index.html",
  "soccer-game-cover.jpg"
);

let fashunSite =   new Project(
  "Fashun Shopping Site",
  "fashun-site",
  "https://ljmarquez.github.io/Fashun-Site/",
  "What's Your Style?",
  "This project was built using HTML, CSS, and Javascript and focuses on utilizing media queries to make the website fit on multiple different screen resolutions. The media queries are used in the CSS to manipulate your HTML in different ways. It also utilizes :nth child in CSS to capture a specific child in a parent element containing multiple nested elements.",
  "https://github.com/LJMarquez/Fashun-Site/blob/main/index.html",
  "fashun-cover.jpg"
);

let novatechSite =   new Project(
    "NovaTech Job Site",
    "novatech-site",
    "",
    "Find Your Dream Job!",
    "",
    "",
    "novatech-cover.jpg"
  );

let crocGame =   new Project(
  "Croc-O-Rena",
  "croc-o-rena-game",
  "",
  "Be the Last One Standing!",
  "",
  "",
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
    title.innerText = `${project.title}`;

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
    coverImg.src = `assets/project-covers/${project.coverImg}`;
    coverImg.alt = `Landing page for Leo's ${project.title} project.`;

    projectPageLink.appendChild(coverImg);
    projectImageDiv.appendChild(projectPageLink);
    content.appendChild(projectImageDiv);

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("project-desc");

    let projectHeader = document.createElement("h1");
    projectHeader.innerText = `${project.header}`;

    let projectDescription = document.createElement("p");
    descriptionDiv.appendChild(projectHeader);
    descriptionDiv.appendChild(projectDescription);

    if (project.description.length > 280) {
      projectDescription.innerText = project.description.slice(0, 275);
      let dots = document.createElement("span");
      dots.innerText = " . . .";
      descriptionDiv.appendChild(dots);

      let more = document.createElement("span");
      more.innerText = project.description.slice(275, project.description.length);
      more.style.display = "none";
      descriptionDiv.appendChild(more);

      let moreButton = document.createElement("button");
      moreButton.classList.add("more-button");
      moreButton.innerText = "More";
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
      projectDescription.innerText = `${project.description}`;
    }

    content.appendChild(descriptionDiv);
    projectDiv.appendChild(content);

    let projectRepoDiv = document.createElement("div");
    projectRepoDiv.classList.add("project-link");
    let repoHeader = document.createElement("p");
    repoHeader.innerText = "Check out the code here:";

    let repoLink = document.createElement("a");
    repoLink.innerText = `${project.title} Repository`;
    repoLink.classList.add("link-grow");
    repoLink.target = "_blank";
    repoLink.href = `${repoLink}`;

    projectRepoDiv.appendChild(repoHeader);
    projectRepoDiv.appendChild(repoLink);

    projectDiv.appendChild(projectRepoDiv);

    codingProjectContainer.appendChild(projectDiv);
  });
}

let personalitiesArray = [
  "Developer",
  "Designer",
  "Creator",
  "Learner",
];

let personalityIndex = 0;
let animIndex = 0;

if (document.body.contains(personalitiesSpan)) {
  setTimeout(function() {
    typePersonality();
  }, 1000);
}

function typePersonality() {
  const typingInterval = setInterval( function() {
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
      setTimeout(function() {
        const deletingInterval = setInterval(function() {
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

let featuredProjects = [
  novatechSite,
  crocGame,
  // skillsRegional,
  // skillsState
]

featuredProjects.forEach( () => {
  document.createElement('div');
});

let featuredArrows = document.querySelectorAll('.featured-arrow');
console.log(featuredArrows)
featuredArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.style.animation = "bounce .3s ease";
  })
})