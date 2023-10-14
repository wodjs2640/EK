const textboxLast = document.querySelector('.lastScreen .textbox img')
const textsLast = document.querySelectorAll('.lastScreen .textbox .conv')
const nameLast = document.querySelector('.lastScreen .name')
const lastScreen = document.querySelector('.lastScreen')
const papago = document.querySelector('#papago')
const realLastScreen = document.querySelector('.realLastScreen')

function removeHiddenLast () {
  nameLast.classList.remove(HIDDEN_MESSAGE)
  textboxLast.classList.remove(HIDDEN_MESSAGE)
}

function addTextLast () {
  if (LastCount < textsLast.length) {
    if (LastCount >= 1) textsLast[LastCount - 1].classList.add('hidden')
    if (LastCount === 1) {
      nameLast.innerText = '고파파'
      papago.classList.remove('dark')
    }
    textsLast[LastCount].classList.remove('hidden')
    LastCount++
  } else {
    lastScreen.classList.add(HIDDEN_MESSAGE)
    purify.classList.remove(HIDDEN_MESSAGE)
    setTimeout(function () {
      purify.classList.add(HIDDEN_MESSAGE)
      secondScreen.classList.remove(HIDDEN_MESSAGE)
    }, 30000)
  }
  Korean = true
  texts[i - 1].innerText = '헉 고 대장님 무사하십니까?'
}

papago.addEventListener('click', removeHiddenLast)
textboxLast.addEventListener('click', addTextLast)
