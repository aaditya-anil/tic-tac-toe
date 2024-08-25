var gameGrid = document.getElementsByClassName("game-grid")
var currentPlayerName = document.getElementById("current-player-name")
var gridsChosen = document.querySelectorAll(".game-grid div")
var currentPlayer = "X"
let hasWonGame = false

var blocks = [
    "",    "",    "",
    "",    "",    "",
    "",    "",    ""
]

var winningSequence = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,3]
]


InitializeGame();

function InitializeGame(params) {
    blocks = [
        "",    "",    "",
        "",    "",    "",
        "",    "",    ""
    ]
    UpdateBlock()
    
    
}

function UpdateBlock() {
    gridsChosen.forEach(gridsChosen => {
        gridsChosen.addEventListener('click', function(){
            const blockId = this.getAttribute('blockId');
            
            if (blocks[blockId-1] == ""){
                const selectedBlock = document.querySelector(`.game-grid div[blockId="${blockId}"]`);
                selectedBlock.textContent = currentPlayer;

                blocks[blockId-1] = currentPlayer

                CheckWinner()
                
                ChangePlayer()
            }
            
            //PrintBlocks()
        })
    })
    
}

function ChangePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    currentPlayerName.textContent = currentPlayer + "'s turn"
}

function CheckWinner() {
    winningSequence.forEach(row =>{
        if (blocks[row[0]-1] == 'X' && blocks[row[1]-1] == 'X' && blocks[row[2]-1] == 'X') {
            currentPlayerName.textContent = currentPlayer + "Won the game"
            alert(currentPlayerName.textContent)
            ResetBoard()
        }
        if (blocks[row[0]-1] == 'O' && blocks[row[1]-1] == 'O' && blocks[row[2]-1] == 'O') {
            currentPlayerName.textContent = currentPlayer + "Won the game"
            alert(currentPlayerName.textContent)
            ResetBoard()
        }
    })
}

function ResetBoard(params) {
    gridsChosen.forEach(grid =>{
        grid.textContent = ""
    })
    InitializeGame();
}

function PrintBlocks() {
    var txt = ""
    for (let index = 0; index < blocks.length; index++) {
        txt += blocks[index] + " ,"
    }
    console.log(txt)
}
