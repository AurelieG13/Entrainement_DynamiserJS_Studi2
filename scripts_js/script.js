//VARIABLES

// Player names
var player1 = 'Player 1';
var player2 = 'Player 2';

let randomNumber1;
let randomNumber2;
let currentScore1 = 0;
let totalScore1 = 0;
let currentScore2 = 0;
let totalScore2 = 0;
let activePlayer = 'Player 1';
let current1 = 0;
let total1 = totalScore1;
let current2 = 0;
let total2 = 0;
let currentText1 = "";
let totalText1 = "";
let currentText2 = "";
let totalText2 = "";


// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
}

//event on edit button 
btnEdit = document.getElementById('edit');
btnEdit.addEventListener('click', editNames);


//function Dice Decoration
function DiceDecoration () {
    document.addEventListener('DOMContentLoaded', function () {
    // console.log('chargement ok');
    });
    setTimeout(function () {
        document.getElementById('boxId').style.display = 'none';
    }, 3000);
}

DiceDecoration();

//function roll the dice
function rollTheDice() {
    if (activePlayer === 'Player 1') 
    {
        setTimeout(function () {
            randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
        document.querySelector(".imgDiceWhite").setAttribute("src", // associe image d'une face au randomNumber
        "images/dice" + randomNumber1 + ".png");
        
        if (randomNumber1 === 1) {
            current1 = 0;
            document.getElementById('currentScore1').textContent = 0;
            switchPlayer();
        }
        else if (randomNumber1 !== 1) {
            current1 += randomNumber1
            console.log(parseInt(current1));
            document.getElementById('currentScore1').textContent = current1;
        }
        }, 10);
    }
    else if (activePlayer === 'Player 2')
    {
        setTimeout(function () {
            randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
        document.querySelector(".imgDiceWhite").setAttribute("src", // associe image d'une face au randomNumber
        "images/dice" + randomNumber2 + ".png");

        if (randomNumber2 === 1) {
            current2 = 0;
            document.getElementById('currentScore2').textContent = 0;
            switchPlayer();
        }
        else if (randomNumber2 !== 1) {
            current2 += randomNumber2
            console.log(parseInt(current2));
            document.getElementById('currentScore2').textContent = current2;
        }
        }, 10);
    }
}

//event on roll button
btnRoll = document.getElementById('roll');
btnRoll.addEventListener('click', rollTheDice);

//function switch Player 1 or 2
function switchPlayer() {
    if (activePlayer === 'Player 1') {
        activePlayer = 'Player 2';
    } else if (activePlayer === 'Player 2') {
        activePlayer = 'Player 1';
    }
    //function to change variables according to the players
    switch (activePlayer) {
        case 'Player 1' : {
            currentText1 = document.getElementById("currentScore1");
            totalText1 = document.getElementById("totalScore1");
            current1 = currentScore1;
            total1 += totalScore1;
            // document.getElementById('player1').style.backgroundColor = 'green';
            document.getElementById('contain__p1').classList.add('activePlayer');
            document.getElementById('contain__p2').classList.remove('activePlayer');
            console.log(activePlayer);
            break;
        }
        case 'Player 2' : {
            currentText2 = document.getElementById("currentScore2");
            totalText2 = document.getElementById("totalScore2");
            current2 = currentScore2;
            total2 += totalScore2;
            document.getElementById('contain__p2').classList.add('activePlayer');
            document.getElementById('contain__p1').classList.remove('activePlayer');
            // document.getElementById('player2').style.backgroundColor = 'red';
            console.log(activePlayer);
            break;
        }
        default: {
            console.log('erreur de sélection de joueur');
        }
    }
}

function HoldTheScore() {
    if (activePlayer === 'Player 1') 
    {
        total1 += current1;
        totalText1.textContent = total1;
        console.log(total1);
        document.getElementById('currentScore1').textContent = 0;
        current1 = 0;
        document.getElementById('totalScore1').textContent = total1;
        switchPlayer();
        Score100 ()
    }
    else if (activePlayer === 'Player 2')
    {
        total2 += current2;
        totalText2.textContent = total2;
        console.log(total2);
        document.getElementById('currentScore2').textContent = 0;
        current2 = 0;
        document.getElementById('totalScore2').textContent = total2;
        switchPlayer();
        Score100 ()
    }

}

//event on hold button
btnHold = document.getElementById('hold');
btnHold.addEventListener('click', HoldTheScore);

function ResetGame() {
    location.reload();
}

//event on Reset button 
btnResetGame = document.getElementById('resetGame');
btnResetGame.addEventListener('click', ResetGame);


function Score100 () {
    if (total2 >= 100) {
        setTimeout(function () {
            alert( 'Player 2 win !' + ' Score : '+total2);
            ResetGame();
        }, 10);

    }
    else if (total1 >= 100) {
        setTimeout(function () {
            alert( 'Player 1 win !' + ' Score : '+total1);
            ResetGame();
        }, 10);
    }
}
