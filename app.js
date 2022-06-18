let canvas = document.getElementById('canvas')
let player = document.getElementById('player')
let object1 = document.getElementById('object1')
let object1img = document.getElementById('object1-img')
let object2 = document.getElementById('object2')
let object2img = document.getElementById('object2-img')
let body = document.getElementById('body')
let playerimg = document.getElementById('player-img')
let score = document.getElementById('score')
let gameover = document.getElementById('game-over')
let gameoverscore = document.getElementById('game-over-score')
let gameoverhighscore = document.getElementById('game-over-high-score')
let sounds = document.getElementById('sounds')
let scorenum = 0
let getScore = () => {
  
  setInterval(() => {
    if (object1.offsetLeft + object1.offsetWidth > player.offsetWidth && player.offsetLeft + player.offsetWidth > object1.offsetLeft) {
      scorenum += 1
    }
  }, 20)
  setInterval(() => {
    if (object2.offsetLeft + object2.offsetWidth > player.offsetWidth && player.offsetLeft + player.offsetWidth > object2.offsetLeft) {
      scorenum += 1
    }
  }, 100)
  setInterval(() => score.innerHTML = `SCORE: ${Math.ceil(scorenum / 10)}`, 30)
}
getScore()

const asteroids = ['./images/a1.png', './images/a2.png', './images/a3.png', './images/a4.png', './images/a5.png', './images/a6.png', './images/a7.png', './images/a8.png']

const randomA = (img) => {
  let imgnum = Math.floor(Math.random() * 10)
  if (imgnum === 8) {
    img.src = asteroids[imgnum - 1];
  }
  else if (imgnum === 9) {
    img.src = asteroids[imgnum - 3];
  }
  else { img.src = asteroids[imgnum]; }
}

const randomPos = () => {
  let num = Math.floor(Math.random() * 350)
  if (num < 20) {
    return num += 20
  }
  else { return num }
}

playerimg.src = "./images/ship.png"

setInterval(() => { object1.style.bottom = randomPos().toString() + 'px'; randomA(object1img) }, 2000);
setInterval(() => { object2.style.bottom = randomPos().toString() + 'px'; randomA(object2img) }, 2500);


function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '38' && player.offsetTop > 0) {
    player.style.top = '0px'
  }
  else if (e.keyCode == '40' && player.offsetTop < 350) {
    player.style.top = '360px'
  }
  else if (e.keyCode == '13') {
    location.reload()
  }
}

setInterval(() => {
  if (player.offsetTop === 0 || player.offsetTop === 360) {
    gameover.classList.add('display')
    player.classList.add('clear')
    object1.id='done1'
    object2.id='done2'
    const gameoverscorenum = Math.ceil(scorenum / 10)
    gameoverscore.innerHTML = `YOU SCORED ${gameoverscorenum}`
    gameoverhighscore.innerHTML = `HIGH SCORE: ${parseInt(localStorage.getItem('high_score'))}`
    setHighScore(gameoverscorenum)
    sounds.firstChild.src ="./images/negative_beeps-6008.mp3"
  }
}, 10)

setInterval(() => {
  if (object1.offsetTop < player.offsetTop + player.offsetHeight && object1.offsetTop + object1.offsetHeight > player.offsetTop && object1.offsetLeft + object1.offsetWidth > player.offsetWidth && player.offsetLeft + player.offsetWidth > object1.offsetLeft) {
    gameover.classList.add('display')
    player.classList.add('clear')
    object1.id='done1'
    object2.id='done2'
    const gameoverscorenum = Math.ceil(scorenum / 10)
    gameoverscore.innerHTML = `YOU SCORED ${gameoverscorenum}`
    gameoverhighscore.innerHTML = `HIGH SCORE: ${parseInt(localStorage.getItem('high_score'))}`
    setHighScore(gameoverscorenum)
    sounds.firstChild.src ="./images/negative_beeps-6008.mp3"
  }
}, 10)
setInterval(() => {
  if (object2.offsetTop < player.offsetTop + player.offsetHeight && object2.offsetTop + object2.offsetHeight > player.offsetTop && object2.offsetLeft + object2.offsetWidth > player.offsetWidth && player.offsetLeft + player.offsetWidth > object2.offsetLeft) {
    gameover.classList.add('display')
    player.classList.add('clear')
    object1.id='done1'
    object2.id='done2'
    const gameoverscorenum = Math.ceil(scorenum / 10)
    gameoverscore.innerHTML = `YOU SCORED ${gameoverscorenum}`
    gameoverhighscore.innerHTML = `HIGH SCORE: ${parseInt(localStorage.getItem('high_score'))}`
    setHighScore(gameoverscorenum)
    sounds.firstChild.src ="./images/negative_beeps-6008.mp3"
  }
}, 10)

let setHighScore = (num) => {
  if (!localStorage.getItem('high_score')){
    localStorage.setItem('high_score', JSON.parse(num))
  }
  else if (parseInt(localStorage.getItem('high_score')) <= num) {
    localStorage.setItem('high_score', JSON.parse(num))
  }
  return
}


window.addEventListener('keydown', (e) => {
  checkKey(e)
})
