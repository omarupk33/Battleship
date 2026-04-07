import { GameBoard } from "./gameBoard"

export class Player{

    constructor(name, isHuman){
        this.name = name
        this.options = new GameBoard()
        this.board = this.options.board
        this.human = isHuman
    }
}