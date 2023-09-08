const textboxSix = document.querySelector(".sixthScreen .textbox img");
const textsSix = document.querySelectorAll(".sixthScreen .textbox .conv");
const nameSix = document.querySelector(".sixthScreen .name");
const sixthScreen = document.querySelector(".sixthScreen");
const sixthGaurd = document.querySelector("#sixthGaurd");
const proSix = document.querySelector(".englishSix");
const ansSix = document.querySelector("#answerSix");
const inputSix = document.querySelector("#inputSix")

let SixCount = 0;

function removeHiddenSix() {
    nameSix.classList.remove(HIDDEN_MESSAGE);
    textboxSix.classList.remove(HIDDEN_MESSAGE);
}

function addTextSix() {
    if (SixCount < textsSix.length) {
        if (SixCount >= 1) textsSix[SixCount - 1].classList.add("hidden");
        textsSix[SixCount].classList.remove("hidden");
        SixCount++;
    }
    else {
        sixthScreen.classList.add(HIDDEN_MESSAGE);
        proSix.classList.remove(HIDDEN_MESSAGE);
        proSix.classList.add(FADE_IN);
    }
}

function submitSix(event) {
    event.preventDefault();
    if(inputSix.value==="answer") {
        oSign.classList.remove(HIDDEN_MESSAGE);
        setTimeout(function () {
            proSix.classList.add(FADE_OUT);
            oSign.classList.add(FADE_OUT);
        }, 3000);
        setTimeout(function () {
            proSix.classList.add(HIDDEN_MESSAGE);
            oSign.classList.add(HIDDEN_MESSAGE);
            lastScreen.classList.remove(HIDDEN_MESSAGE);
            lastScreen.classList.add(FADE_IN);
            proSix.classList.remove(FADE_OUT);
            oSign.classList.remove(FADE_OUT);
        }, 6000);
    } else {
        xSign.classList.remove(HIDDEN_MESSAGE);
        setTimeout(function () {
            xSign.classList.add(FADE_OUT);
        }, 3000);
        setTimeout(function () {
            xSign.classList.add(HIDDEN_MESSAGE);
            xSign.classList.remove(FADE_OUT);
        }, 6000);
    }
}

sixthGaurd.addEventListener("click", removeHiddenSix);
textboxSix.addEventListener("click", addTextSix);
ansSix.addEventListener("submit", submitSix);