import { GameBoard } from "./gameBoard"

export class Player{

    constructor(name, computerMode){
        this.name = name
        this.board = new GameBoard()
        this.computerMode = computerMode
    }
}