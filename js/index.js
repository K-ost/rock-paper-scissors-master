
// Elements
const pentagon = document.querySelector('.pentagon')
const result = document.querySelector('#result')
const chooseBtn = document.querySelectorAll('.chooseBtn')
const yourResult = document.querySelector('#yourResult')
const homeResult = document.querySelector('#homeResult')
const totalResult = document.querySelector('#totalResult')
const totalResultText = document.querySelector('#totalResultText')
const playAgain = document.querySelector('#playAgain')
const click = document.querySelector('#click')
const turn = document.querySelector('#turn')

// Variables
const winText = 'You Win'
const loseText = 'You Lose'
const gameDraw = 'Game draw'
const items = [ "rock", "paper", "scissors", "lizard", "spock" ]


// Conditions
function conditions(you, home) {
  console.log(you, home)
  if (you === home) totalResultText.textContent = gameDraw

  if (you === 'scissors' && home === 'lizard') totalResultText.textContent = winText
  if (you === 'scissors' && home === 'paper') totalResultText.textContent = winText
  if (you === 'scissors' && home === 'rock') totalResultText.textContent = loseText
  if (you === 'scissors' && home === 'spock') totalResultText.textContent = loseText

  if (you === 'paper' && home === 'rock') totalResultText.textContent = winText
  if (you === 'paper' && home === 'spock') totalResultText.textContent = winText
  if (you === 'paper' && home === 'lizard') totalResultText.textContent = loseText
  if (you === 'paper' && home === 'scissors') totalResultText.textContent = loseText

  if (you === 'rock' && home === 'lizard') totalResultText.textContent = winText
  if (you === 'rock' && home === 'scissors') totalResultText.textContent = winText
  if (you === 'rock' && home === 'paper') totalResultText.textContent = loseText
  if (you === 'rock' && home === 'spock') totalResultText.textContent = loseText

  if (you === 'lizard' && home === 'paper') totalResultText.textContent = winText
  if (you === 'lizard' && home === 'spock') totalResultText.textContent = winText
  if (you === 'lizard' && home === 'rock') totalResultText.textContent = loseText
  if (you === 'lizard' && home === 'scissors') totalResultText.textContent = loseText

  if (you === 'spock' && home === 'rock') totalResultText.textContent = winText
  if (you === 'spock' && home === 'scissors') totalResultText.textContent = winText
  if (you === 'spock' && home === 'paper') totalResultText.textContent = loseText
  if (you === 'spock' && home === 'lizard') totalResultText.textContent = loseText
}


// Listener of chooseBtn
chooseBtn.forEach(btn => {
  // btn.addEventListener('mouseover', () => {
  //   turn.play()
  // })

  btn.addEventListener('click', e => {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    const you = e.target.getAttribute('data-title')
    const home = items[randomNumber - 1]
    //click.play()

    pentagon.classList.add('hidden')
    result.classList.remove('hidden')
    yourResult.classList.add(you)
    
    setTimeout(() => {
      homeResult.classList.add(home)
      totalResult.classList.remove('hidden')
      conditions(you, home)
    }, 1500)

    // Winning result
  })
})

// Listener of playAgain
playAgain.addEventListener('click', () => {
  yourResult.removeAttribute('class')
  homeResult.removeAttribute('class')
  pentagon.classList.remove('hidden')
  result.classList.add('hidden')
  totalResult.classList.add('hidden')
  totalResultText.textContent = ''
})
