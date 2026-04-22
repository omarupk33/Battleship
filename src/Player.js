import { GameBoard } from "./gameBoard"

export class Player{

    constructor(name, computerMode){
        this.name = name
        this.board = new GameBoard()
        this.computerMode = computerMode
    }

    // computerPlaying(){
            
    //         let randomNumber1 = Math.floor(Math.random() * 10)
    //         let randomNumber2 = Math.floor(Math.random() * 10) 

    //         [randomNumber1][randomNumber2].click()
    // }
}