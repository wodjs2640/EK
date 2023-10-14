const textboxTwo = document.querySelector('.secondScreen .textbox img')
const texts = document.querySelectorAll('.secondScreen .textbox .conv')
const nameTwo = document.querySelector('.secondScreen .name')
const secondScreen = document.querySelector('.secondScreen')

let i = 0

function addTextTwo () {
  if (Korean) {
    if (i < texts.length) {
      if (i >= 1) texts[i - 1].classList.add('hidden')
      texts[i].classList.remove('hidden')
      if (i === 9) {
        nameTwo.innerText = '고파파'
        papagoAnywhere.classList.remove(HIDDEN_MESSAGE)
      }
      i++
    } else {
      secondScreen.classList.add(FADE_OUT)
      papagoAnywhere.classList.add(FADE_OUT)
      setTimeout(function () {
        secondScreen.classList.add(HIDDEN_MESSAGE)
        thirdScreen.classList.remove(HIDDEN_MESSAGE)
        thirdScreen.classList.add(FADE_IN)
        secondScreen.classList.remove(FADE_OUT)
        papagoAnywhere.classList.remove(FADE_OUT)
        papagoAnywhere.classList.add(FADE_IN)
      }, 3000)
    }
    textsThree[8].innerText = '얍!'
    nameThree.innerText = '고파파'
  } else {
    if (i < 7) {
      if (i >= 1) texts[i - 1].classList.add('hidden')
      texts[i].classList.remove('hidden')
      if (i === 3) nameTwo.innerText = '소능민'
      i++
    } else {
      secondScreen.classList.add(FADE_OUT)
      setTimeout(function () {
        secondScreen.classList.add(HIDDEN_MESSAGE)
        thirdScreen.classList.remove(HIDDEN_MESSAGE)
        thirdScreen.classList.add(FADE_IN)
        secondScreen.classList.remove(FADE_OUT)
      }, 3000)
    }
  }
}

textboxTwo.addEventListener('click', addTextTwo)
