(function() {

     'use script'
     console.log('js running');

     // const startGame = document.getElementById("startgame");
     const gameControl = document.getElementById("game-control");
     const game = document.getElementById("game");
     const actionArea = document.getElementById("actions");

     const form = document.querySelector ("form");

     const score = document.getElementById("score");
     const p1Score = document.getElementById("p1-score");
     const p2Score = document.getElementById("p2-score");
     const win = document.getElementById("win");

     //sounds
     const startSound = new Audio('media/start.wav');
     const rollSound = new Audio('media/dice-roll.wav');
     const alertSound = new Audio('media/alert.wav');
     const winSound = new Audio('media/win.wav');

     const gameData = {
          dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'], 
          playerWin: ['images/player1-win.png', 'images/player2-win.png'],
          score: [0, 0],
          roll1: 0,
          roll2: 0,
          rollSum: 0,
          index: 0,
          gameEnd: 29
     };

     form.addEventListener("submit", function(event){
          event.preventDefault();

          const player1 = document.querySelector("#p1name").value;
          const player2 = document.querySelector("#p2name").value;

          if(player1 == ''){
               document.querySelector('#p1name').focus();
               document.getElementById("error").innerHTML = `<span style=" color:#7895d0; font-weight:bold; text-transform: uppercase; ">please provide a name</span>`;
          }
          else if(player2 == ''){
               document.querySelector('#p2name').focus();
               document.getElementById("error").innerHTML = `<span style=" color:#7895d0; font-weight: bold; text-transform: uppercase; ">please provide a name</span>`;
          }
          else {
  
               const playerData = {
                    players: [player1, player2],
               }

               document.getElementById("rules").style.display = "none";
               document.getElementById("credits").style.display = "none";
               document.getElementById("game-start").style.display = "block";
               gameControl.innerHTML = '';

               gameData.index = Math.round(Math.random());

               document.getElementById('quit').addEventListener("click", function(){
                    location.reload();
               });
          
               setUpTurn();
               //start sound
               startSound.play();


               //set up who goes first
               function setUpTurn(){
                    event.preventDefault();

                    game.innerHTML = `<h4>Roll the dice for <span style=" color:#7895d0; font-weight:bold; text-transform: uppercase; ">${playerData.players[gameData.index]}</span></h4>`;
                    actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

                    document.getElementById("roll").addEventListener("click", function(){
                         //start
                         throwDice();        
                    });

                    showCurrentScore();

               };

               //players turns
               function throwDice() {
                    event.preventDefault();

                    actionArea.innerHtml = '';
                    gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
                    gameData.roll2 = Math.floor(Math.random() * 6) + 1;

                    game.innerHTML = `<h4>Roll the dice for <span style=" color:#7895d0; font-weight:bold; text-transform: uppercase; ">${playerData.players[gameData.index]}</span></h4>`;
                    actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
                    game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}" alt="dice" width="120" height="120">`;
                    game.innerHTML += `<img src = "${gameData.dice[gameData.roll2-1]}" alt="dice" width="120" height="120">`;

                    gameData.rollSum =  gameData.roll1 + gameData.roll2;


                    //if two 1's are rolled . . .
                    if( gameData.rollSum === 2 ) {
                         game.innerHTML += '<h5>Oh snap! Snake eyes!</h5>';

                         document.getElementById("player-one").innerHTML = `<img src = "images/player1-1.png" alt="player1" width="100" height="100" class="image">`;

                         document.getElementById("player-two").innerHTML = `<img src = "images/player2-1.png" alt="player1" width="100" height="100" class="image">`;

                         gameData.score[gameData.index] = 0;
                         gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                         setTimeout(setUpTurn, 2000);

                         //alert sound
                         alertSound.play();
                    }

                    //if either die is a 1 . . .
                    else if( gameData.roll1 === 1 || gameData.roll2 === 1 ){
                         gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                         game.innerHTML += `<h5>Sorry, one of your rolls was a one, switching to ${playerData.players[gameData.index]}</h5>`;

                         document.getElementById("player-one").innerHTML = `<img src = "images/player1-2.png" alt="player1" width="100" height="100" class="image">`;

                         document.getElementById("player-two").innerHTML = `<img src = "images/player2-2.png" alt="player1" width="100" height="100" class="image">`;

                         setTimeout(setUpTurn, 2000);
                         //alert sound
                         alertSound.play();
                    }

                    //if neither die is a 1 . . .
                    else { 
                         gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                         actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <button id="pass">Pass</button>';

                         document.getElementById("player-one").innerHTML = `<img src = "images/player1.png" alt="player1" width="100" height="100" class="image">`;

                         document.getElementById("player-two").innerHTML = `<img src = "images/player2.png" alt="player2" width="100" height="100" class="image">`;

                         document.getElementById("rollagain").addEventListener("click", function(){
                              throwDice();
                         });

                         document.getElementById("pass").addEventListener("click", function(){
                              gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                              setUpTurn();
                         });
                         //roll sound
                         rollSound.play();
                    }

                    showCurrentScore();
                    checkWinningCondition();
                    //roll sound
                    rollSound.play();

               };

               //player winning
               function checkWinningCondition() {


                    if(gameData.score[gameData.index] > gameData.gameEnd) {

                         document.querySelector("#win-grid").style.display = "block";

                         win.innerHTML = `<h7><span style=" color:#72ad41;; font-weight:bold; text-transform: uppercase; ">${playerData.players[gameData.index]}</span> wins <br> with <span style=" color:#72ad41;; font-weight:bold; text-transform: uppercase; ">${gameData.score[gameData.index]}</span> points!</h7>`

                         win.innerHTML += `<img src = "${gameData.playerWin[gameData.index]}" alt="playerWin" width="130" height="130">`

                         actionArea.style.display = 'none';
                         game.style.display = 'none';
                         score.style.display = 'none';
                         gameControl.style.display = 'none';

                         document.getElementById('quit').innerHTML = "Start a New Game?";

                         //win sound
                         winSound.play();
                    }
                    else {
                         showCurrentScore();
                    }

               }

               //scoreboard
               function showCurrentScore() {

                    document.querySelector("#score").style.display="block";

                    p1Score.innerHTML = `<h8><strong>${playerData.players[0]}: ${gameData.score[0]}</span></h8>`;

                    p2Score.innerHTML = `<h8><strong>${playerData.players[1]}: ${gameData.score[1]}</strong></h8>`;

               } 

          }

     });

})();