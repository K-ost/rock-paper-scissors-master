
// Elements
const pentagon = document.querySelector('.pentagon')
const result = document.querySelector('#result')
const chooseBtn = document.querySelectorAll('button.chooseBtn')
const yourResult = document.querySelector('#yourResult')
const yourResultHighlight = document.querySelector('#yourResult .highlight_box')
const homeResult = document.querySelector('#homeResult')
const homeResultHighlight = document.querySelector('#homeResult .highlight_box')
const totalResult = document.querySelector('#totalResult')
const totalResultText = document.querySelector('#totalResultText')
const playAgain = document.querySelector('#playAgain')
const click = document.querySelector('#click')
const turn = document.querySelector('#turn')
const empty = document.querySelector('#empty')
const scoreNumber = document.querySelector('#scoreNumber')
const showRules = document.querySelector('#showRules')
const rulesModal = document.querySelector('#rulesModal')
const modalDismisses = document.querySelectorAll('.modalDismiss')

// Variables
const winText = 'You Win'
const loseText = 'You Lose'
const gameDraw = 'Game draw'
const items = [ "rock", "paper", "scissors", "lizard", "spock" ]
let score = localStorage.getItem('score') | 0
scoreNumber.textContent = localStorage.getItem('score') | 0


// conditionFunc
function conditionLogic(you, home, current, win1, win2, lose1, lose2) {
  if ((you === current && home === win1) || (you === current && home === win2)) {
    totalResultText.textContent = winText
    yourResultHighlight.classList.add('show')
    score += 1
  }
  if ((you === current && home === lose1) || (you === current && home === lose2)) {
    totalResultText.textContent = loseText
    homeResultHighlight.classList.add('show')
  }
}

// Conditions
function conditions(you, home) {
  you = you.split('-')[1]
  home = home.split('-')[1]

  if (you === home) totalResultText.textContent = gameDraw

  conditionLogic(you, home, 'scissors', 'lizard', 'paper', 'rock', 'spock')
  conditionLogic(you, home, 'paper', 'rock', 'spock', 'lizard', 'scissors')
  conditionLogic(you, home, 'rock', 'lizard', 'scissors', 'paper', 'spock')
  conditionLogic(you, home, 'lizard', 'paper', 'spock', 'rock', 'scissors')
  conditionLogic(you, home, 'spock', 'rock', 'scissors', 'paper', 'lizard')

  scoreNumber.textContent = score
  localStorage.setItem('score', score)

}


// Listener of chooseBtn
chooseBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    const you = `chooseBtn-${e.target.getAttribute('data-title')}`
    const home = `chooseBtn-${items[randomNumber - 1]}`

    pentagon.classList.add('hidden')
    result.classList.remove('hidden')
    yourResult.classList.add(you)
    
    setTimeout(() => {
      empty.classList.add('hidden')
      homeResult.classList.remove('hidden')
      homeResult.classList.add(home)
      totalResult.classList.remove('hidden')
      conditions(you, home)
    }, 1500)

  })
})

// Listener of playAgain
playAgain.addEventListener('click', () => {
  empty.classList.remove('hidden')
  yourResult.removeAttribute('class')
  yourResult.classList.add('chooseBtn', 'large')
  homeResult.removeAttribute('class')
  homeResult.classList.add('chooseBtn', 'large', 'hidden')
  yourResultHighlight.classList.remove('show')
  homeResultHighlight.classList.remove('show')
  pentagon.classList.remove('hidden')
  result.classList.add('hidden')
  totalResult.classList.add('hidden')
  totalResultText.textContent = ''
})

// showRules
showRules.addEventListener('click', () => {
  rulesModal.classList.add('opened')
})
modalDismisses.forEach(el => {
  el.addEventListener('click', () => {
    rulesModal.classList.remove('opened')
  })
})