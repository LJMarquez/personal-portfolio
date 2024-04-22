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

{/* <a href="">Culinary Showdown</a>
<a href="">Random Doors Game</a>
<a href="">Mario Calculator</a>
<a href="">Wordle Game</a>
<a href="">2 Player Soccer Game</a>
<a href="">Fashun Shopping Site</a> */}
let myProjects = ["Culinary Showdown", "Random Doors Game", "Mario Calculator", "Wordle Game", "2 Player Soccer Game", "Fashun Shopping Site"];
const searchBar = document.getElementById('project-search')
function search() {
  filter = searchBar.value.toUpperCase();
}