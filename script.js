// const clicker = document.querySelector("#itsme");
const sevensec = document.querySelector("#sevensec");
const poster = document.querySelector("#poster");
const second = document.querySelector(".secondScreen");
const firstPage = document.querySelector(".firstScreen");
const papagoAnywhere = document.querySelector("#papagoAnywhere");
const xSign = document.getElementById("x");
const oSign = document.getElementById("o");
const purify = document.getElementById("purify");
const allTheScreen = document.querySelector(".allTheScreen");
const allTheBox = document.getElementById("allTheBox");

const HIDDEN_MESSAGE = "hidden";
const FADE_OUT = "fade-out-box";
const FADE_IN = "fade-in-box";

let Korean = false;

function showpapa() {
    papago.classList.remove(HIDDEN_MESSAGE);
}

function showsese() {
    sevensec.classList.remove(HIDDEN_MESSAGE);
}

function removeID(event) {
    firstPage.classList.add(HIDDEN_MESSAGE);
    second.classList.remove(HIDDEN_MESSAGE);
    second.classList.add(FADE_IN);
    poster.classList.remove(FADE_OUT);
    sevensec.classList.remove(FADE_OUT);
}

function gameStart() {
    poster.classList.add(FADE_OUT);
    sevensec.classList.add(FADE_OUT);
    setTimeout(removeID, 3000);
}

setTimeout(showsese, 5000);

// clicker.addEventListener("click", showpapa);
sevensec.addEventListener("click", gameStart);

