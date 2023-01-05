const square = Array.from(document.getElementsByClassName('square'));

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

var currentPlayer = 'X';
playgame = false;
let X=[];
let O=[];

initializeGame();

function initializeGame(){
    square.forEach( tile => {
        tile.addEventListener('click',playerMarking)
    });
    playgame = true;
}

function playerMarking(){
    const sqClicked = Number(this.getAttribute('id'));
    console.log(sqClicked);
    if (currentPlayer =='X'){
        X.push(sqClicked);
        console.log(X);
    }
    else if(currentPlayer == 'O'){
        O.push(sqClicked);
        console.log(O);
    }
    updateCell(this,currentPlayer);
    changePlayer();
    checkWin();
}

function updateCell(tile,player){
    tile.textContent = player;
}

function changePlayer(){
        currentPlayer = (currentPlayer == 'X') ? 'O' : 'X' ;
        console.log(currentPlayer);
}

function checkWin(){
    for(i=0;i<winConditions.length;i++){
    const options = winConditions[i];
    if(options.every((element) => X.includes(element))){
        window.alert(`X won the game!`);
        restartGame();
    }
    else if(options.every((element) => O.includes(element))){
        window.alert(`O won the game!`);
        restartGame();
    }
}
}

function restartGame(){
    currentPlayer = 'X';
    X=[];
    O=[];
    square.forEach(tile =>
        tile.textContent="");
}


