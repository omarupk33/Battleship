import { Ship } from "./ship.js";

export class GameBoard{
    constructor(ship){
        this.board = Array(10).fill('#').map(() => Array(10).fill('#'))
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
    place_ship(x, y){
        let new_ship = new Ship(1)
        
        for(let i = 0; i < new_ship.length; i++){
            if(this.isInBoundary([x, y+i], new_ship.length) 
                // ||
            //    this.isInBoundary([x+i, y], new_ship.length)
            ){
                this.board[x][y+i] = new_ship
              }     
        }

        // return this.board[x].filter(element => element === false)
    }


    // ReceiveAttack function that takes a pair of coordinates
    receiveAttack(location){
        if(typeof this.board[location[0]][location[1]] === 'object'){
            this.board[location[0]][location[1]].hit()
        }    
        else(
            this.board[location[0]][location[1]] = 'X'
        )
    }

    // Gameboards should be able to report whether or not all of their ships have been sunk.
    // allSunk(){

    // }
}

// let game = new GameBoard()
// console.log(game.place_ship(0, 0))
// game.allSunk()
// // game.receiveAttack([0,1])
// // game.receiveAttack([0,0])
// // console.log(game.board[0][0].hits)
// // console.table(game.board)