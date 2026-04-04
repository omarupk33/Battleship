import { Ship } from "./ship.js";

export class GameBoard{
    constructor(){
        this.board = {}
    }

    place_ship(x, y){
        let new_ship = new Ship()
        this.board[[x,y]] = new_ship
        return this.board
    }
}