const showdownDots = document.getElementById("showdown-dots");
const showdownMore = document.getElementById("showdown-more");
const showdownButton = document.getElementById("showdown-button");

function showdownReveal() {
    if (showdownDots.style.display === "none") {
      showdownDots.style.display = "inline";
      showdownButton.innerHTML = "More"; 
      showdownMore.style.display = "none";
    } else {
      showdownDots.style.display = "none";
      showdownButton.innerHTML = "Less"; 
      showdownMore.style.display = "inline";
    }
  }

const wordleDots = document.getElementById("wordle-dots");
const wordleMore = document.getElementById("wordle-more");
const wordleButton = document.getElementById("wordle-button");

function wordleReveal() {
    if (wordleDots.style.display === "none") {
      wordleDots.style.display = "inline";
      wordleButton.innerHTML = "More"; 
      wordleMore.style.display = "none";
    } else {
      wordleDots.style.display = "none";
      wordleButton.innerHTML = "Less"; 
      wordleMore.style.display = "inline";
    }
  }

const soccerDots = document.getElementById("soccer-dots");
const soccerMore = document.getElementById("soccer-more");
const soccerButton = document.getElementById("soccer-button");

function soccerReveal() {
    if (soccerDots.style.display === "none") {
      soccerDots.style.display = "inline";
      soccerButton.innerHTML = "More"; 
      soccerMore.style.display = "none";
    } else {
      soccerDots.style.display = "none";
      soccerButton.innerHTML = "Less"; 
      soccerMore.style.display = "inline";
    }
  }

const fashunDots = document.getElementById("fashun-dots");
const fashunMore = document.getElementById("fashun-more");
const fashunButton = document.getElementById("fashun-button");

function fashunReveal() {
    if (fashunDots.style.display === "none") {
      fashunDots.style.display = "inline";
      fashunButton.innerHTML = "More"; 
      fashunMore.style.display = "none";
    } else {
      fashunDots.style.display = "none";
      fashunButton.innerHTML = "Less"; 
      fashunMore.style.display = "inline";
    }
  }

// while () {

// }


// const searchBar = document.getElementById('project-search')
// function search() {
//   filter = searchBar.value.toUpperCase();
// }

class Project {
  constructor(
    title,
    projectLink,
    header,
    description,
    repoLink,
    coverImg
    ) {
      this.title = title;
      this.projectLink = projectLink;
      this.header = header;
      this.description = description;
      this.repoLink = repoLink;
      this.coverImg = coverImg;
    }
  }
  
  let myProjects = [
    new Project(
      "Culinary Showdown",
      "https://ljmarquez.github.io/Culinary-Showdown/",
      "Can You Take On Gordon Ramsay?",
      "This game was built using HTML, CSS, and Javascript and encompasses all of the topics I have learned in my first semester of West-MEC. It is a typing/adventure game (mostly) complete with audio, interactivity, and just a few bugs. It utilizes the JS canvas, eventlisteners, inputs, arrays, and loops which append elements to the DOM. This is just scraping the surface of what this game covers, but I plan to make my projects more in-depth and entertaining in the future.",
      "https://github.com/LJMarquez/Culinary-Showdown",
      "showdown-cover.jpg"
    ),
    new Project(
      "Random Doors Game",
      "https://ljmarquez.github.io/FNAF-Door-Game/",
      "Will You Survive The Night?",
      "This game was built using HTML, CSS, and Javascript and focuses on random number generation to determine the outcome the game. It includes other elements such as keyframe animations and capturing user information from an input.",
      "https://github.com/LJMarquez/FNAF-Door-Game/blob/main/index.html",
      "fnaf-game-cover.jpg"
    ),
    new Project(
      "Javascript Calculator",
      "https://ljmarquez.github.io/Calculator-Project/",
      "Have Fun With Math!",
      "This game was built using HTML, CSS, and Javascript and focuses on using conditions to check values and assign the user's inputs accordingly. It utilizes some other elements such as a for loop to create the buttons, flex display, switch cases.",
      "calculator-cover.jpg"
    )
    ];
    // "Mario Calculator", "Wordle Game", "2 Player Soccer Game", "Fashun Shopping Site"