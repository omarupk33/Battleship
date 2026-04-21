import { GameBoard } from "./gameBoard"

export class Player{

    constructor(name){
        this.name = name
        this.board = new GameBoard()
    }

    // Work on this
    computerPlaying(){
            let randomNumber1 = Math.floor(Math.random() * 10)
            let randomNumber2 = Math.floor(Math.random() * 10)
            opponent_board[randomNumber1][randomNumber2].click()
    }
}