const textboxFive = document.querySelector('.fifthScreen .textbox img')
const textsFive = document.querySelectorAll('.fifthScreen .textbox .conv')
const nameFive = document.querySelector('.fifthScreen .name')
const fifthScreen = document.querySelector('.fifthScreen')
const fifthGaurd = document.querySelector('#fifthGaurd')
const proFive = document.querySelector('.englishFive')
const ansFive = document.querySelector('#answerFive')
const subFive = document.querySelector('#submitFive')
const inputFive = document.querySelector('#inputFive')

function removeHiddenFive () {
  nameFive.classList.remove(HIDDEN_MESSAGE)
  textboxFive.classList.remove(HIDDEN_MESSAGE)
}

function addTextFive () {
  if (Korean) {
    if (FiveCount < textsFive.length) {
      if (FiveCount === 2) nameFive.innerText = '고파파'
      if (FiveCount >= 1) textsFive[FiveCount - 1].classList.add('hidden')
      textsFive[FiveCount].classList.remove('hidden')
      if (FiveCount === 3) {
        nameFive.innerText = 'ㅅ사이'
        fifthGaurd.classList.add('reverse')
      }
      if (FiveCount === 4) nameFive.innerText = '고파파'
      FiveCount++
    } else {
      fifthScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        fifthScreen.classList.add(HIDDEN_MESSAGE)
        proFive.classList.remove(HIDDEN_MESSAGE)
        proFive.classList.add(FADE_IN)
        fifthScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
        papagoAnywhere.classList.remove(FADE_OUT)
        allTheScreen.classList.remove(HIDDEN_MESSAGE)
        allTheScreen.classList.add(FADE_IN)
      }, 3000)
    }
    textsSix[1].innerText = 'Life is galaxy'
  } else {
    if (FiveCount < 2) {
      if (FiveCount >= 1) textsFive[FiveCount - 1].classList.add('hidden')
      textsFive[FiveCount].classList.remove('hidden')
      FiveCount++
    } else {
      fifthScreen.classList.add(HIDDEN_MESSAGE)
      proFive.classList.remove(HIDDEN_MESSAGE)
      proFive.classList.add(FADE_IN)
    }
  }
}

function submitFive (event) {
  event.preventDefault()
  if (Korean) {
    if (inputFive.value === '재') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proFive.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proFive.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        sixthScreen.classList.remove(HIDDEN_MESSAGE)
        sixthScreen.classList.add(FADE_IN)
        proFive.classList.remove(FADE_OUT)
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
    if (inputFive.value === 'ran') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proFive.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proFive.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        sixthScreen.classList.remove(HIDDEN_MESSAGE)
        sixthScreen.classList.add(FADE_IN)
        proFive.classList.remove(FADE_OUT)
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

allTheBox.addEventListener('click', removeboxFive)

function removeboxFive () {
  if (FiveCount > 2 && SixCount < 3) {
    allTheScreen.classList.add(FADE_OUT)
    papagoAnywhere.classList.add(FADE_OUT)
    setTimeout(function () {
      inputFive.placeholder = '정답을 입력하세요.'
      subFive.innerText = '제출'
      inputFive.value = null
      allTheScreen.classList.add(HIDDEN_MESSAGE)
      allTheScreen.classList.remove(FADE_OUT)
      papagoAnywhere.classList.add(HIDDEN_MESSAGE)
      papagoAnywhere.classList.remove(FADE_OUT)
      englishFive.src = 'FiveKorean.png'
    }, 3000)
  }
}

fifthGaurd.addEventListener('click', removeHiddenFive)
textboxFive.addEventListener('click', addTextFive)
ansFive.addEventListener('submit', submitFive)
