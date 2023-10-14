const textboxNine = document.querySelector('.ninthScreen .textbox img')
const textsNine = document.querySelectorAll('.ninthScreen .textbox .conv')
const nameNine = document.querySelector('.ninthScreen .name')
const ninthScreen = document.querySelector('.ninthScreen')
const ninthGaurd = document.querySelector('#ninthGaurd')
const proNine = document.querySelector('.englishNine')
const ansNine = document.querySelector('#answerNine')
const subNine = document.querySelector('#submitNine')
const inputNine = document.querySelector('#inputNine')

function removeHiddenNine () {
  nameNine.classList.remove(HIDDEN_MESSAGE)
  textboxNine.classList.remove(HIDDEN_MESSAGE)
}

function addTextNine () {
  if (Korean) {
    if (NineCount < textsNine.length) {
      if (NineCount === 2) nameNine.innerText = '고파파'
      if (NineCount >= 1) textsNine[NineCount - 1].classList.add('hidden')
      textsNine[NineCount].classList.remove('hidden')
      if (NineCount === 3) {
        nameNine.innerText = '봉 준 호'
        ninthGaurd.classList.add('reverse')
      }
      if (NineCount === 4) nameNine.innerText = '고파파'
      NineCount++
    } else {
      ninthScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        ninthScreen.classList.add(HIDDEN_MESSAGE)
        proNine.classList.remove(HIDDEN_MESSAGE)
        proNine.classList.add(FADE_IN)
        ninthScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
        papagoAnywhere.classList.remove(FADE_OUT)
        allTheScreen.classList.remove(HIDDEN_MESSAGE)
        allTheScreen.classList.add(FADE_IN)
      }, 3000)
    }
    textsTen[1].innerText = 'doo doo doo doo doo doo'
  } else {
    if (NineCount < 2) {
      if (NineCount >= 1) textsNine[NineCount - 1].classList.add('hidden')
      textsNine[NineCount].classList.remove('hidden')
      NineCount++
    } else {
      ninthScreen.classList.add(HIDDEN_MESSAGE)
      proNine.classList.remove(HIDDEN_MESSAGE)
      proNine.classList.add(FADE_IN)
    }
  }
}

function submitNine (event) {
  event.preventDefault()
  if (Korean) {
    if (inputNine.value === '돌') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proNine.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proNine.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        tenthScreen.classList.remove(HIDDEN_MESSAGE)
        tenthScreen.classList.add(FADE_IN)
        proNine.classList.remove(FADE_OUT)
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
    if (inputNine.value === 'hat') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proNine.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proNine.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        tenthScreen.classList.remove(HIDDEN_MESSAGE)
        tenthScreen.classList.add(FADE_IN)
        proNine.classList.remove(FADE_OUT)
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

allTheBox.addEventListener('click', removeboxNine)

function removeboxNine () {
  if (NineCount > 2 && TenCount < 3) {
    allTheScreen.classList.add(FADE_OUT)
    papagoAnywhere.classList.add(FADE_OUT)
    setTimeout(function () {
      inputNine.placeholder = '정답을 입력하세요.'
      subNine.innerText = '제출'
      inputNine.value = null
      allTheScreen.classList.add(HIDDEN_MESSAGE)
      allTheScreen.classList.remove(FADE_OUT)
      papagoAnywhere.classList.add(HIDDEN_MESSAGE)
      papagoAnywhere.classList.remove(FADE_OUT)
      englishNine.src = 'NineKorean.png'
    }, 3000)
  }
}

ninthGaurd.addEventListener('click', removeHiddenNine)
textboxNine.addEventListener('click', addTextNine)
ansNine.addEventListener('submit', submitNine)
