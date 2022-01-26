//Selectors
const userScoreHolder = document.querySelector('.user-score h1');
const computerScoreHolder = document.querySelector('.computer-score h1');
const gameArea = document.querySelector('.game');
const sections = document.querySelectorAll('.game .section');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const section5 = document.querySelector('.section5');
const section6 = document.querySelector('.section6');
const section7 = document.querySelector('.section7');
const section8 = document.querySelector('.section8');
const section9 = document.querySelector('.section9');
const resetBtn = document.querySelector('.reset-btn');
let winner = '';
let userScore = 0;
let computerScore = 0;
//Event Listeners
gameArea.addEventListener('click', userMove);
resetBtn.addEventListener('click', resetGame);
//function
function resetGame(){
  sections.forEach(sec => {
    sec.innerHTML = '';
    sec.classList.remove('filled-section');
    sec.classList.remove('shake');
    sec.classList.remove('text-win');
  });
  gameArea.classList.remove('filled-section');
}
function randomNum(){
  let rand = Math.floor(Math.random() * 10);
  if(rand == 0) rand++;
  return rand;
}
function userMove(e){
  const section = e.target;
  if(section.classList.contains('section')){
    section.innerHTML = '<img src = "./images/x.png">';
    section.classList.add('filled-section');
  checkWinner();
  computerMove();
  }
}

function computerMove(){
  let rand = randomNum();
  sections.forEach(sec => {
    if(sec.id == rand){
      if(sec.innerHTML == ''){
        sec.innerHTML = '<img src = "./images/o.png">';
        sec.classList.add('filled-section');     
        checkWinner();
      }else{
        computerMove();
      };
    }
  });
}

function checkWinner(){
  //check for user win
  if(section1.innerHTML == '<img src="./images/x.png">' && section2.innerHTML == '<img src="./images/x.png">' && section3.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section1.classList.add('text-win');
    section2.classList.add('text-win');
    section3.classList.add('text-win');
  }else
  if(section4.innerHTML == '<img src="./images/x.png">' && section5.innerHTML == '<img src="./images/x.png">' && section6.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section4.classList.add('text-win');
    section5.classList.add('text-win');
    section6.classList.add('text-win');
  }else
  if(section7.innerHTML == '<img src="./images/x.png">' && section8.innerHTML == '<img src="./images/x.png">' && section9.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section7.classList.add('text-win');
    section8.classList.add('text-win');
    section9.classList.add('text-win');
  }else
  if(section1.innerHTML == '<img src="./images/x.png">' && section4.innerHTML == '<img src="./images/x.png">' && section7.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section1.classList.add('text-win');
    section4.classList.add('text-win');
    section7.classList.add('text-win');
  }else
  if(section2.innerHTML == '<img src="./images/x.png">' && section5.innerHTML == '<img src="./images/x.png">' && section8.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section2.classList.add('text-win');
    section5.classList.add('text-win');
    section8.classList.add('text-win');
  }else
  if(section3.innerHTML == '<img src="./images/x.png">' && section6.innerHTML == '<img src="./images/x.png">' && section9.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section3.classList.add('text-win');
    section6.classList.add('text-win');
    section9.classList.add('text-win');
  }else
  if(section1.innerHTML == '<img src="./images/x.png">' && section5.innerHTML == '<img src="./images/x.png">' && section9.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section1.classList.add('text-win');
    section5.classList.add('text-win');
    section9.classList.add('text-win');
  }else
  if(section3.innerHTML == '<img src="./images/x.png">' && section5.innerHTML == '<img src="./images/x.png">' && section7.innerHTML == '<img src="./images/x.png">'){
    winner = 'user';
    section3.classList.add('text-win');
    section5.classList.add('text-win');
    section7.classList.add('text-win');
  }else
  //check for computer win
  if(section1.innerHTML == '<img src="./images/o.png">' && section2.innerHTML == '<img src="./images/o.png">' && section3.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section1.classList.add('text-win');
    section2.classList.add('text-win');
    section3.classList.add('text-win');
  }else
  if(section4.innerHTML == '<img src="./images/o.png">' && section5.innerHTML == '<img src="./images/o.png">' && section6.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section4.classList.add('text-win');
    section5.classList.add('text-win');
    section6.classList.add('text-win');
  }else
  if(section7.innerHTML == '<img src="./images/o.png">' && section8.innerHTML == '<img src="./images/o.png">' && section9.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section7.classList.add('text-win');
    section8.classList.add('text-win');
    section9.classList.add('text-win');
  }else
  if(section1.innerHTML == '<img src="./images/o.png">' && section4.innerHTML == '<img src="./images/o.png">' && section7.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section1.classList.add('text-win');
    section4.classList.add('text-win');
    section7.classList.add('text-win');
  }else
  if(section2.innerHTML == '<img src="./images/o.png">' && section5.innerHTML == '<img src="./images/o.png">' && section8.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section2.classList.add('text-win');
    section5.classList.add('text-win');
    section8.classList.add('text-win');
  }else
  if(section3.innerHTML == '<img src="./images/o.png">' && section6.innerHTML == '<img src="./images/o.png">' && section9.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section3.classList.add('text-win');
    section6.classList.add('text-win');
    section9.classList.add('text-win');
  }else
  if(section1.innerHTML == '<img src="./images/o.png">' && section5.innerHTML == '<img src="./images/o.png">' && section9.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section1.classList.add('text-win');
    section5.classList.add('text-win');
    section9.classList.add('text-win');
  }else
  if(section3.innerHTML == '<img src="./images/o.png">' && section5.innerHTML == '<img src="./images/o.png">' && section7.innerHTML == '<img src="./images/o.png">'){
    winner = 'computer';
    section3.classList.add('text-win');
    section5.classList.add('text-win');
    section7.classList.add('text-win');
  }
  endGame();
}
function endGame(){
  if(winner != ''){
    gameArea.classList.add('filled-section');
    earthQuake();
    if(winner == 'user'){
      userScore++;
      winner = '';
    }
    if(winner == 'computer'){
      computerScore++;
      winner = '';
    }
  }
  userScoreHolder.innerHTML = userScore;
  computerScoreHolder.innerHTML = computerScore;
}
function earthQuake(){
  sections.forEach(sec => {
      sec.classList.add('shake');
  });
}