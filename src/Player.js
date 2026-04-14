import { GameBoard } from "./gameBoard"

export class Player{

    constructor(name, isHuman){
        this.name = name
        this.board = new GameBoard()
        this.human = isHuman
    }
}