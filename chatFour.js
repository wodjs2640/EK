const textboxFour = document.querySelector('.forthScreen .textbox img')
const textsFour = document.querySelectorAll('.forthScreen .textbox .conv')
const nameFour = document.querySelector('.forthScreen .name')
const forthScreen = document.querySelector('.forthScreen')
const mainGaurd = document.querySelector('#mainGaurd')
const proFour = document.querySelector('.englishFour')
const ansFour = document.querySelector('#answerFour')
const subFour = document.querySelector('#submitFour')
const inputFour = document.querySelector('#inputFour')
const englishFour = document.getElementById('englishFour')

function removeHiddenFour () {
  nameFour.classList.remove(HIDDEN_MESSAGE)
  textboxFour.classList.remove(HIDDEN_MESSAGE)
}

function addTextFour () {
  if (Korean) {
    if (FourCount < textsFour.length) {
      if (FourCount === 2) nameFour.innerText = '고파파'
      if (FourCount >= 1) textsFour[FourCount - 1].classList.add('hidden')
      textsFour[FourCount].classList.remove('hidden')
      if (FourCount === 3) {
        nameFour.innerText = '박쥐 성'
        mainGaurd.classList.add('reverse')
      }
      if (FourCount === 5) nameFour.innerText = '고파파'
      FourCount++
    } else {
      forthScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        forthScreen.classList.add(HIDDEN_MESSAGE)
        proFour.classList.remove(HIDDEN_MESSAGE)
        proFour.classList.add(FADE_IN)
        forthScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
        papagoAnywhere.classList.remove(FADE_OUT)
        allTheScreen.classList.remove(HIDDEN_MESSAGE)
        allTheScreen.classList.add(FADE_IN)
      }, 3000)
    }
    textsFive[1].innerText = 'Why are you here again?'
  } else {
    if (FourCount < 2) {
      if (FourCount >= 1) textsFour[FourCount - 1].classList.add('hidden')
      textsFour[FourCount].classList.remove('hidden')
      FourCount++
    } else {
      forthScreen.classList.add(HIDDEN_MESSAGE)
      proFour.classList.remove(HIDDEN_MESSAGE)
      proFour.classList.add(FADE_IN)
    }
  }
}

function submitFour (event) {
  event.preventDefault()
  if (Korean) {
    if (inputFour.value === '해') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proFour.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proFour.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        fifthScreen.classList.remove(HIDDEN_MESSAGE)
        fifthScreen.classList.add(FADE_IN)
        proFour.classList.remove(FADE_OUT)
        oSign.classList.remove(FADE_OUT)
        papagoAnywhere.classList.remove(HIDDEN_MESSAGE)
      }, 6000)
    } else {
      xSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        xSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        xSign.classList.add(HIDDEN_MESSAGE)
        xSign.classList.remove(FADE_OUT)
      }, 6000)
    }
  } else {
    if (inputFour.value === 'psy') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proFour.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proFour.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        fifthScreen.classList.remove(HIDDEN_MESSAGE)
        fifthScreen.classList.add(FADE_IN)
        proFour.classList.remove(FADE_OUT)
        oSign.classList.remove(FADE_OUT)
      }, 6000)
    } else {
      xSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        xSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        xSign.classList.add(HIDDEN_MESSAGE)
        xSign.classList.remove(FADE_OUT)
      }, 6000)
    }
  }
}

allTheBox.addEventListener('click', removeboxFour)

function removeboxFour () {
  if (FourCount > 2 && FiveCount < 3) {
    allTheScreen.classList.add(FADE_OUT)
    papagoAnywhere.classList.add(FADE_OUT)
    setTimeout(function () {
      inputFour.placeholder = '정답을 입력하세요.'
      subFour.innerText = '제출'
      inputFour.value = null
      allTheScreen.classList.add(HIDDEN_MESSAGE)
      allTheScreen.classList.remove(FADE_OUT)
      papagoAnywhere.classList.add(HIDDEN_MESSAGE)
      papagoAnywhere.classList.remove(FADE_OUT)
      englishFour.src = 'FourKorean.png'
    }, 3000)
  }
}

mainGaurd.addEventListener('click', removeHiddenFour)
textboxFour.addEventListener('click', addTextFour)
ansFour.addEventListener('submit', submitFour)
