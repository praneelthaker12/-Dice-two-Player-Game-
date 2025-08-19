'use strict';
//////selecting elements/////
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let btnnew = document.querySelector('.btn--new');
let btnroll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');
let Player0El=document.querySelector('.player--0')
let Player1El=document.querySelector('.player--1')

////starting conditions////
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let playing= true

const scores=[0,0]
let currentscore = 0;
let activeplayer = 0;

const switchPlayer=function(){
    document.querySelector(`#current--${activeplayer}`).textContent=0
    currentscore=0
    activeplayer = activeplayer === 0 ? 1 : 0
    Player0El.classList.toggle('player--active');
    Player1El.classList.toggle('player--active');
     
}

btnroll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden'); // show the dice
  diceEl.src = `dice-${dice}.png`; // update dice image

  if (dice !== 1) {
    currentscore = currentscore + dice;
    document.querySelector(`#current--${activeplayer}`).textContent=currentscore
    
  }
  else{
    switchPlayer()     
  }

  
  })

  btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score
    scores[activeplayer] += currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent = scores[activeplayer];

    // 2. Check if they won
    if (scores[activeplayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden')
      btnroll.classList.add('hidden')
      btnHold.classList.add('hidden')
      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    } else {
      // 3. If not, switch player
      switchPlayer();
    }
  }
});

btnnew.addEventListener('click',function(){
    scores[0]=0
    scores[1]=0
    currentscore=0
    activeplayer=0
    playing=true
    score0El.textContent=0
    score1El.textContent=0
    current0El.textContent=0
    current0El.textContent=0
    Player0El.classList.remove('player--winner')
    Player1El.classList.remove('player--winner')
    Player0El.classList.add('player--active')
    Player1El.classList.remove('player--active')

      diceEl.classList.add('hidden')
      btnroll.classList.remove('hidden')
      btnHold.classList.remove('hidden')
})

