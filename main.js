const codingProjectContainer = document.getElementById('coding-project-container');

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
  constructor(title, projectLink, header, description, repoLink, coverImg) {
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
    "https://github.com/LJMarquez/Calculator-Project/blob/main/index.html",
    "calculator-cover.jpg"
  ),
  new Project(
    "Wordle Game",
    "https://ljmarquez.github.io/Wordle-Game/",
    "Can You Guess The Word?",
    "This game was built using HTML, CSS, and Javascript and focuses on manipulating strings to check if the user's input (guess) is equivalent to the phrase. Other elements that are utilized are a for each loop to create the inputs, values, and an eventListener to check for everytime the input value is changed and if the value is equal to the phrase.",
    "https://github.com/LJMarquez/Wordle-Game/blob/main/index.html",
    "wordle-game-cover.jog"
  ),
  new Project(
    "2 Player Soccer Game",
    "https://ljmarquez.github.io/Soccer-Game/",
    "GOOOAAALLL!!!",
    "This game was built using HTML, CSS, and Javascript and focuses on using the canvas element to create shapes which act as the players, ball, and goal. These shapes have logic added to them for when they collide with each other to change the direction and speed of the ball. It utilizes some other elements such as eventListeners for keys on the keyboard, functions to create the game elements, and using random logic to set the speed of the ball.",
    "https://github.com/LJMarquez/Soccer-Game/blob/main/index.html",
    "soccer-game-cover.jpg"
  ),
  new Project(
    "Fashun Shopping Site",
    "https://ljmarquez.github.io/Fashun-Site/",
    "What's Your Style?",
    "This project was built using HTML, CSS, and Javascript and focuses on utilizing media queries to make the website fit on multiple different screen resolutions. The media queries are used in the CSS to manipulate your HTML in different ways. It also utilizes :nth child in CSS to capture a specific child in a parent element containing multiple nested elements.",
    "https://github.com/LJMarquez/Fashun-Site/blob/main/index.html",
    "fashun-cover.jpg"
  ),
];

if (document.body.contains(codingProjectContainer)) {
  myProjects.forEach(project) {
    let projectDiv = document.createElement('div');
    
  }
}