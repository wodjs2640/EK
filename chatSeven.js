const textboxSeven = document.querySelector('.seventhScreen .textbox img')
const textsSeven = document.querySelectorAll('.seventhScreen .textbox .conv')
const nameSeven = document.querySelector('.seventhScreen .name')
const seventhScreen = document.querySelector('.seventhScreen')
const seventhGaurd = document.querySelector('#seventhGaurd')
const proSeven = document.querySelector('.englishSeven')
const ansSeven = document.querySelector('#answerSeven')
const subSeven = document.querySelector('#submitSeven')
const inputSeven = document.querySelector('#inputSeven')

function removeHiddenSeven () {
  nameSeven.classList.remove(HIDDEN_MESSAGE)
  textboxSeven.classList.remove(HIDDEN_MESSAGE)
}

function addTextSeven () {
  if (Korean) {
    if (SevenCount < textsSeven.length) {
      if (SevenCount === 2) nameSeven.innerText = '고파파'
      if (SevenCount >= 1) textsSeven[SevenCount - 1].classList.add('hidden')
      textsSeven[SevenCount].classList.remove('hidden')
      if (SevenCount === 3) {
        nameSeven.innerText = '페이 커'
        seventhGaurd.classList.add('reverse')
      }
      if (SevenCount === 4) nameSeven.innerText = '고파파'
      SevenCount++
    } else {
      seventhScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        seventhScreen.classList.add(HIDDEN_MESSAGE)
        proSeven.classList.remove(HIDDEN_MESSAGE)
        proSeven.classList.add(FADE_IN)
        seventhScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
        papagoAnywhere.classList.remove(FADE_OUT)
        allTheScreen.classList.remove(HIDDEN_MESSAGE)
        allTheScreen.classList.add(FADE_IN)
      }, 3000)
    }
    textsEight[1].innerText = 'Smooth like butter~'
  } else {
    if (SevenCount < 2) {
      if (SevenCount >= 1) textsSeven[SevenCount - 1].classList.add('hidden')
      textsSeven[SevenCount].classList.remove('hidden')
      SevenCount++
    } else {
      seventhScreen.classList.add(HIDDEN_MESSAGE)
      proSeven.classList.remove(HIDDEN_MESSAGE)
      proSeven.classList.add(FADE_IN)
    }
  }
}

function submitSeven (event) {
  event.preventDefault()
  if (Korean) {
    if (inputSeven.value === '금') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proSeven.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proSeven.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        eighthScreen.classList.remove(HIDDEN_MESSAGE)
        eighthScreen.classList.add(FADE_IN)
        proSeven.classList.remove(FADE_OUT)
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
    if (inputSeven.value === 'rob') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proSeven.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proSeven.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        eighthScreen.classList.remove(HIDDEN_MESSAGE)
        eighthScreen.classList.add(FADE_IN)
        proSeven.classList.remove(FADE_OUT)
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

allTheBox.addEventListener('click', removeboxSeven)

function removeboxSeven () {
  if (SevenCount > 2 && EightCount < 3) {
    allTheScreen.classList.add(FADE_OUT)
    papagoAnywhere.classList.add(FADE_OUT)
    setTimeout(function () {
      inputSeven.placeholder = '정답을 입력하세요.'
      subSeven.innerText = '제출'
      inputSeven.value = null
      allTheScreen.classList.add(HIDDEN_MESSAGE)
      allTheScreen.classList.remove(FADE_OUT)
      papagoAnywhere.classList.add(HIDDEN_MESSAGE)
      papagoAnywhere.classList.remove(FADE_OUT)
      englishSeven.src = 'SevenKorean.png'
    }, 3000)
  }
}

seventhGaurd.addEventListener('click', removeHiddenSeven)
textboxSeven.addEventListener('click', addTextSeven)
ansSeven.addEventListener('submit', submitSeven)
