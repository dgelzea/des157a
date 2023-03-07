(function() {

     'use script'
     console.log('js running');

     const startGame = document.getElementById("startgame");
     const gameControl = document.getElementById("game-control");
     const game = document.getElementById("game");
     const actionArea = document.getElementById("actions");

     const score = document.getElementById("score");
     const p1Score = document.getElementById("p1-score");
     const p2Score = document.getElementById("p2-score");
     const win = document.getElementById("win");

     //sounds
     const startSound = new Audio('media/start.wav');
     const rollSound = new Audio('media/dice-roll.mp3');
     const alertSound = new Audio('media/alert.wav');
     const winSound = new Audio('media/win.wav');

     const gameData = {
          dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'], 
          players: ['player one', 'player two'],
          score: [0, 0],
          roll1: 0,
          roll2: 0,
          rollSum: 0,
          index: 0,
          gameEnd: 29
     };

     startGame.addEventListener("click", function(){
          
          document.getElementById("rules").style.display = "none";
          document.getElementById("credits").style.display = "none";

          gameData.index = Math.round(Math.random());
          gameControl.innerHTML = '<h3>The Game Has Started</h3>';
          gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

          document.getElementById('quit').addEventListener("click", function(){
               location.reload();
          });

          setUpTurn();

          //start sound
          startSound.play();
     });

     function setUpTurn() {
          game.innerHTML = `<h4>Roll the dice for ${gameData.players[gameData.index]}</h4>`;
          actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

          document.getElementById("roll").addEventListener("click", function(){

               //start
               throwDice();

          });

     };

     function throwDice() {
          actionArea.innerHtml = '';
          gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
          gameData.roll2 = Math.floor(Math.random() * 6) + 1;

          game.innerHTML = `<h4>Roll the dice for ${gameData.players[gameData.index]}</h4>`;
          game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}" alt="dice" width="120" height="120">`;
          game.innerHTML += `<img src = "${gameData.dice[gameData.roll2-1]}" alt="dice" width="120" height="120">`;

          gameData.rollSum =  gameData.roll1 + gameData.roll2;


          //if two 1's are rolled . . .
          if( gameData.rollSum === 2 ) {

               game.innerHTML += '<h5>Oh snap! Snake eyes!</h5>';
               gameData.score[gameData.index] = 0;
               gameData.index ? (gameData.index = 0) : (gameData.index = 1);

               setTimeout(setUpTurn, 2000);

               //alert sound
               alertSound.play();

          }

          //if either die is a 1 . . .
          else if( gameData.roll1 === 1 || gameData.roll2 === 1 ){

               gameData.index ? (gameData.index = 0) : (gameData.index = 1);
               game.innerHTML += `<h5>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</h5>`;

               setTimeout(setUpTurn, 2000);
               
               //alert sound
               alertSound.play();

          }

          //if neither die is a 1 . . .
          else { 

               gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
               actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <button id="pass">Pass</button>';

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

     function checkWinningCondition() {
          if(gameData.score[gameData.index] > gameData.gameEnd) {

               win.innerHTML = `<h7>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h7>`

               actionArea.innerHTML = '';
               game.innerHTML = '';
               document.getElementById('quit').innerHTML = "Start a New Game?";

               //win sound
               winSound.play();
          }
          else {
               showCurrentScore();
          }
     }

     function showCurrentScore() {
          document.querySelector("#score").style.display="block";

          p1Score.innerHTML = `<h8><strong>${gameData.players[0]}: ${gameData.score[0]}</strong></h8>`;
          p2Score.innerHTML = `<h8><strong>${gameData.players[1]}: ${gameData.score[1]}</strong></h8>`;
     }


})();