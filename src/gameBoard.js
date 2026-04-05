import { Ship } from "./ship.js";

export class GameBoard{
    constructor(ship){
        this.board = Array(10).fill(null).map(() => Array(10).fill(null))
        this.ship = ship
    }

    // Maybe we can change this to include boundaries less than 0
    isInBoundary(location, length){
        if (length + location[0] > 10 ||
            length + location[1] > 10){
                return false
        }
        else return true
    }

    // Now, we can only place it horizontally, yet there is enough time 
    // 
    place_ship(x, y){
        let new_ship = new Ship(5)
        
        for(let i = 0; i < new_ship.length; i++){
            if(this.isInBoundary([x, y+i], new_ship.length) 
                // ||
            //    this.isInBoundary([x+i, y], new_ship.length)
            ){
                this.board[x+i][y] = new_ship.isSunk()
              }     
        }

        return this.board[x][y]
    }


    // ReceiveAttack function that takes a pair of coordinates
    reveiveAttack(location){
        if(this.board[location[0]][location[1]] === false){
            this.board[location[0]][location[1]] = true 
        }    
    }

    // determines whether or not the attack hit
    
    // a ship and then sends the ‘hit’ function to the correct ship

    // Gameboards should keep track of missed attacks so they can display them properly.

    // Gameboards should be able to report whether or not all of their ships have been sunk.

}

// let game = new GameBoard()
// game.place_ship(0, 0)
