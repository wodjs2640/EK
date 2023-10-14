const textboxEight = document.querySelector('.eighthScreen .textbox img')
const textsEight = document.querySelectorAll('.eighthScreen .textbox .conv')
const nameEight = document.querySelector('.eighthScreen .name')
const eighthScreen = document.querySelector('.eighthScreen')
const eighthGaurd = document.querySelector('#eighthGaurd')
const proEight = document.querySelector('.englishEight')
const ansEight = document.querySelector('#answerEight')
const subEight = document.querySelector('#submitEight')
const inputEight = document.querySelector('#inputEight')

function removeHiddenEight () {
  nameEight.classList.remove(HIDDEN_MESSAGE)
  textboxEight.classList.remove(HIDDEN_MESSAGE)
}

function addTextEight () {
  if (Korean) {
    if (EightCount < textsEight.length) {
      if (EightCount === 2) nameEight.innerText = '고파파'
      if (EightCount >= 1) textsEight[EightCount - 1].classList.add('hidden')
      textsEight[EightCount].classList.remove('hidden')
      if (EightCount === 3) {
        nameEight.innerText = '빛 뒤 애쓰'
        eighthGaurd.classList.add('reverse')
      }
      if (EightCount === 4) nameEight.innerText = '고파파'
      EightCount++
    } else {
      eighthScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        eighthScreen.classList.add(HIDDEN_MESSAGE)
        proEight.classList.remove(HIDDEN_MESSAGE)
        proEight.classList.add(FADE_IN)
        eighthScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
        papagoAnywhere.classList.remove(FADE_OUT)
        allTheScreen.classList.remove(HIDDEN_MESSAGE)
        allTheScreen.classList.add(FADE_IN)
      }, 3000)
    }
    textsNine[1].innerText = 'Are you eating properly?'
  } else {
    if (EightCount < 2) {
      if (EightCount >= 1) textsEight[EightCount - 1].classList.add('hidden')
      textsEight[EightCount].classList.remove('hidden')
      EightCount++
    } else {
      eighthScreen.classList.add(HIDDEN_MESSAGE)
      proEight.classList.remove(HIDDEN_MESSAGE)
      proEight.classList.add(FADE_IN)
    }
  }
}

function submitEight (event) {
  event.preventDefault()
  if (Korean) {
    if (inputEight.value === '늪') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proEight.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proEight.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        ninthScreen.classList.remove(HIDDEN_MESSAGE)
        ninthScreen.classList.add(FADE_IN)
        proEight.classList.remove(FADE_OUT)
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
    if (inputEight.value === 'ton') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proEight.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proEight.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        ninthScreen.classList.remove(HIDDEN_MESSAGE)
        ninthScreen.classList.add(FADE_IN)
        proEight.classList.remove(FADE_OUT)
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

allTheBox.addEventListener('click', removebox)

function removebox () {
  if (EightCount > 2 && NineCount < 3) {
    allTheScreen.classList.add(FADE_OUT)
    papagoAnywhere.classList.add(FADE_OUT)
    setTimeout(function () {
      inputEight.placeholder = '정답을 입력하세요.'
      subEight.innerText = '제출'
      inputEight.value = null
      allTheScreen.classList.add(HIDDEN_MESSAGE)
      allTheScreen.classList.remove(FADE_OUT)
      papagoAnywhere.classList.add(HIDDEN_MESSAGE)
      papagoAnywhere.classList.remove(FADE_OUT)
      englishEight.src = 'EightKorean.png'
    }, 3000)
  }
}

eighthGaurd.addEventListener('click', removeHiddenEight)
textboxEight.addEventListener('click', addTextEight)
ansEight.addEventListener('submit', submitEight)
