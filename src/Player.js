import { GameBoard } from "./gameBoard"

export class Player{

    constructor(computerMode){
        this.board = new GameBoard()
        this.computerMode = computerMode
    }

}

