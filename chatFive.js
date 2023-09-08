const textboxFive = document.querySelector(".fifthScreen .textbox img");
const textsFive = document.querySelectorAll(".fifthScreen .textbox .conv");
const nameFive = document.querySelector(".fifthScreen .name");
const fifthScreen = document.querySelector(".fifthScreen");
const fifthGaurd = document.querySelector("#fifthGaurd");
const proFive = document.querySelector(".englishFive");
const ansFive = document.querySelector("#answerFive");
const inputFive = document.querySelector("#inputFive")

let FiveCount = 0;

function removeHiddenFive() {
    nameFive.classList.remove(HIDDEN_MESSAGE);
    textboxFive.classList.remove(HIDDEN_MESSAGE);
}

function addTextFive() {
    if (FiveCount < textsFive.length) {
        if (FiveCount >= 1) textsFive[FiveCount - 1].classList.add("hidden");
        textsFive[FiveCount].classList.remove("hidden");
        FiveCount++;
    }
    else {
        fifthScreen.classList.add(HIDDEN_MESSAGE);
        proFive.classList.remove(HIDDEN_MESSAGE);
        proFive.classList.add(FADE_IN);
    }
}

function submitFive(event) {
    event.preventDefault();
    if(inputFive.value==="hat") {
        oSign.classList.remove(HIDDEN_MESSAGE);
        setTimeout(function () {
            proFive.classList.add(FADE_OUT);
            oSign.classList.add(FADE_OUT);
        }, 3000);
        setTimeout(function () {
            proFive.classList.add(HIDDEN_MESSAGE);
            oSign.classList.add(HIDDEN_MESSAGE);
            sixthScreen.classList.remove(HIDDEN_MESSAGE);
            sixthScreen.classList.add(FADE_IN);
            proFive.classList.remove(FADE_OUT);
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

fifthGaurd.addEventListener("click", removeHiddenFive);
textboxFive.addEventListener("click", addTextFive);
ansFive.addEventListener("submit", submitFive);