const textboxTen = document.querySelector('.tenthScreen .textbox img')
const textsTen = document.querySelectorAll('.tenthScreen .textbox .conv')
const nameTen = document.querySelector('.tenthScreen .name')
const tenthScreen = document.querySelector('.tenthScreen')
const tenthGaurd = document.querySelector('#tenthGaurd')
const proTen = document.querySelector('.englishTen')
const ansTen = document.querySelector('#answerTen')
const subTen = document.querySelector('#submitTen')
const inputTen = document.querySelector('#inputTen')
const timer = document.getElementById('record')

function removeHiddenTen () {
  nameTen.classList.remove(HIDDEN_MESSAGE)
  textboxTen.classList.remove(HIDDEN_MESSAGE)
}

function addTextTen () {
  if (Korean) {
    if (TenCount < textsTen.length) {
      if (TenCount === 2) nameTen.innerText = '고파파'
      if (TenCount >= 1) textsTen[TenCount - 1].classList.add('hidden')
      textsTen[TenCount].classList.remove('hidden')
      if (TenCount === 3) {
        nameTen.innerText = '아 기상 어'
        tenthGaurd.classList.add('reverse')
      }
      if (TenCount === 4) nameTen.innerText = '고파파'
      TenCount++
    } else {
      tenthScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        tenthScreen.classList.add(HIDDEN_MESSAGE)
        proTen.classList.remove(HIDDEN_MESSAGE)
        proTen.classList.add(FADE_IN)
        tenthScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
        papagoAnywhere.classList.remove(FADE_OUT)
        allTheScreen.classList.remove(HIDDEN_MESSAGE)
        allTheScreen.classList.add(FADE_IN)
      }, 3000)
    }
    textsLast[1].innerText = 'Are you eating properly?'
  } else {
    if (TenCount < 2) {
      if (TenCount >= 1) textsTen[TenCount - 1].classList.add('hidden')
      textsTen[TenCount].classList.remove('hidden')
      TenCount++
    } else {
      tenthScreen.classList.add(HIDDEN_MESSAGE)
      proTen.classList.remove(HIDDEN_MESSAGE)
      proTen.classList.add(FADE_IN)
    }
  }
}

function submitTen (event) {
  event.preventDefault()
  if (Korean) {
    if (inputTen.value === '한글') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proTen.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proTen.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        realLastScreen.classList.remove(HIDDEN_MESSAGE)
        realLastScreen.classList.add(FADE_IN)
        time = timePlus * 300 + time
        const minute = parseInt(time / 60)
        const second = time % 60
        timer.innerText = `걸린시간\n${String(minute).padStart(2, '0')}분 ${String(second).padStart(2, '0')}초`
        proTen.classList.remove(FADE_OUT)
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
  } else {
    if (inputTen.value === 'parrot') {
      oSign.classList.remove(HIDDEN_MESSAGE)
      setTimeout(function () {
        proTen.classList.add(FADE_OUT)
        oSign.classList.add(FADE_OUT)
      }, 3000)
      setTimeout(function () {
        proTen.classList.add(HIDDEN_MESSAGE)
        oSign.classList.add(HIDDEN_MESSAGE)
        lastScreen.classList.remove(HIDDEN_MESSAGE)
        lastScreen.classList.add(FADE_IN)
        proTen.classList.remove(FADE_OUT)
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

allTheBox.addEventListener('click', removeboxTen)

function removeboxTen () {
  if (TenCount > 2 && LastCount < 4) {
    allTheScreen.classList.add(FADE_OUT)
    papagoAnywhere.classList.add(FADE_OUT)
    setTimeout(function () {
      inputTen.placeholder = '정답을 입력하세요.'
      subTen.innerText = '제출'
      inputTen.value = null
      allTheScreen.classList.add(HIDDEN_MESSAGE)
      allTheScreen.classList.remove(FADE_OUT)
      papagoAnywhere.classList.add(HIDDEN_MESSAGE)
      papagoAnywhere.classList.remove(FADE_OUT)
      englishTen.src = 'TenKorean.png'
    }, 3000)
  }
}

tenthGaurd.addEventListener('click', removeHiddenTen)
textboxTen.addEventListener('click', addTextTen)
ansTen.addEventListener('submit', submitTen)
