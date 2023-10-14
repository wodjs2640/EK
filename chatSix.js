const textboxSix = document.querySelector('.sixthScreen .textbox img')
const textsSix = document.querySelectorAll('.sixthScreen .textbox .conv')
const nameSix = document.querySelector('.sixthScreen .name')
const sixthScreen = document.querySelector('.sixthScreen')
const sixthGaurd = document.querySelector('#sixthGaurd')
const proSix = document.querySelector('.englishSix')
const ansSix = document.querySelector('#answerSix')
const subSix = document.querySelector('#submitSix')
const inputSix = document.querySelector('#inputSix')

function removeHiddenSix () {
  nameSix.classList.remove(HIDDEN_MESSAGE)
  textboxSix.classList.remove(HIDDEN_MESSAGE)
}

function addTextSix () {
  if (Korean) {
    if (SixCount < textsSix.length) {
      if (SixCount === 2) nameSix.innerText = '고파파'
      if (SixCount >= 1) textsSix[SixCount - 1].classList.add('hidden')
      textsSix[SixCount].classList.remove('hidden')
      if (SixCount === 3) {
        nameSix.innerText = '삼 성'
        sixthGaurd.classList.add('reverse')
      }
      if (SixCount === 4) nameSix.innerText = '고파파'
      SixCount++
    } else {
      sixthScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        sixthScreen.classList.add(HIDDEN_MESSAGE)
        proSix.classList.remove(HIDDEN_MESSAGE)
        proSix.classList.add(FADE_IN)
        sixthScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
        papagoAnywhere.classList.remove(FADE_OUT)
        allTheScreen.classList.remove(HIDDEN_MESSAGE)
        allTheScreen.classList.add(FADE_IN)
      }, 3000)
    }
    textsSeven[1].innerText = 'Can you turn off the lights?'
  } else {
    if (SixCount < 2) {
      if (SixCount >= 1) textsSix[SixCount - 1].classList.add('hidden')
      textsSix[SixCount].classList.remove('hidden')
      SixCount++
    } else {
      sixthScreen.classList.add(HIDDEN_MESSAGE)
      proSix.classList.remove(HIDDEN_MESSAGE)
      proSix.classList.add(FADE_IN)
    }
  }
}

function submitSix (event) {
  event.preventDefault()
  if (Korean) {
    if (inputSix.value === '판') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proSix.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proSix.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        seventhScreen.classList.remove(HIDDEN_MESSAGE)
        seventhScreen.classList.add(FADE_IN)
        proSix.classList.remove(FADE_OUT)
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
    if (inputSix.value === 'car') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proSix.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proSix.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        seventhScreen.classList.remove(HIDDEN_MESSAGE)
        seventhScreen.classList.add(FADE_IN)
        proSix.classList.remove(FADE_OUT)
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

allTheBox.addEventListener('click', removeboxSix)

function removeboxSix () {
  if (SixCount > 2 && SevenCount < 3) {
    allTheScreen.classList.add(FADE_OUT)
    papagoAnywhere.classList.add(FADE_OUT)
    setTimeout(function () {
      inputSix.placeholder = '정답을 입력하세요.'
      subSix.innerText = '제출'
      inputSix.value = null
      allTheScreen.classList.add(HIDDEN_MESSAGE)
      allTheScreen.classList.remove(FADE_OUT)
      papagoAnywhere.classList.add(HIDDEN_MESSAGE)
      papagoAnywhere.classList.remove(FADE_OUT)
      englishSix.src = 'SixKorean.png'
    }, 3000)
  }
}

sixthGaurd.addEventListener('click', removeHiddenSix)
textboxSix.addEventListener('click', addTextSix)
ansSix.addEventListener('submit', submitSix)
