const textboxThree = document.querySelector(".thirdScreen .textbox img");
const textsThree = document.querySelectorAll(".thirdScreen .textbox .conv");
const nameThree = document.querySelector(".thirdScreen .name");
const thirdScreen = document.querySelector(".thirdScreen");
const signImg = document.querySelector("#sign");

let ThreeCount = 0;

function removeHiddenThree() {
    nameThree.classList.remove(HIDDEN_MESSAGE);
    textboxThree.classList.remove(HIDDEN_MESSAGE);
}

function addTextThree() {
    if (Korean) {
        if (ThreeCount < textsThree.length) {
            if (ThreeCount >= 1) textsThree[ThreeCount - 1].classList.add("hidden");
            textsThree[ThreeCount].classList.remove("hidden");
            if (ThreeCount === 9) nameThree.innerText = "표지판"
            ThreeCount++;
        }
        else {
            thirdScreen.classList.add(FADE_OUT);
            papagoAnywhere.classList.add(FADE_OUT);
            setTimeout(function () {
                thirdScreen.classList.add(HIDDEN_MESSAGE);
                forthScreen.classList.remove(HIDDEN_MESSAGE);
                forthScreen.classList.add(FADE_IN);
                thirdScreen.classList.remove(FADE_OUT);
                papagoAnywhere.classList.add(FADE_IN);
                papagoAnywhere.classList.remove(FADE_OUT);
            }, 3000);
        }
        textsFour[1].innerText = "Who are you?"
    }
    else {
        if (ThreeCount < 9) {
            if (ThreeCount >= 1) textsThree[ThreeCount - 1].classList.add("hidden");
            textsThree[ThreeCount].classList.remove("hidden");
            ThreeCount++;
        }
        else {
            thirdScreen.classList.add(FADE_OUT);
            setTimeout(function () {
                thirdScreen.classList.add(HIDDEN_MESSAGE);
                forthScreen.classList.remove(HIDDEN_MESSAGE);
                forthScreen.classList.add(FADE_IN);
                thirdScreen.classList.remove(FADE_OUT);
            }, 3000);
        }
    }
}

signImg.addEventListener("click", removeHiddenThree);
textboxThree.addEventListener("click", addTextThree);