const sevensec = document.querySelector('#sevensec')
const poster = document.querySelector('#poster')
const second = document.querySelector('.secondScreen')
const firstPage = document.querySelector('.firstScreen')
const papagoAnywhere = document.querySelector('#papagoAnywhere')
const xSign = document.getElementById('x')
const oSign = document.getElementById('o')
const purify = document.getElementById('purify')
const allTheScreen = document.querySelector('.allTheScreen')
const allTheBox = document.getElementById('allTheBox')
const input = document.querySelectorAll('input')
const submit = document.querySelectorAll('button')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

const HIDDEN_MESSAGE = 'hidden'
const FADE_OUT = 'fade-out-box'
const FADE_IN = 'fade-in-box'
let FourCount = 0
let FiveCount = 0
let SixCount = 0
let SevenCount = 0
let EightCount = 0
let NineCount = 0
let TenCount = 0
let LastCount = 0
let time = 0
let timePlus = 0

let Korean = false

const audio = new Audio('bgm.mp3')

plus.addEventListener('click', function () {
  timePlus++
  counter.innerText = String(timePlus).padStart(2, '0')
})

minus.addEventListener('click', function () {
  timePlus--
  counter.innerText = String(timePlus).padStart(2, '0')
})

function showsese () {
  sevensec.classList.remove(HIDDEN_MESSAGE)
}

function removeID (event) {
  firstPage.classList.add(HIDDEN_MESSAGE)
  second.classList.remove(HIDDEN_MESSAGE)
  second.classList.add(FADE_IN)
  poster.classList.remove(FADE_OUT)
  sevensec.classList.remove(FADE_OUT)
}

counter.innerText = String(timePlus).padStart(2, '0')

function gameStart () {
  audio.play()
  setInterval(function () {
    time++
  }, 1000)
  audio.loop = true
  poster.classList.add(FADE_OUT)
  sevensec.classList.add(HIDDEN_MESSAGE)
  setTimeout(removeID, 3000)
}

setTimeout(showsese, 5000)

sevensec.addEventListener('click', gameStart)
