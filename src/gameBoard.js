import { Ship } from "./ship.js";

export class GameBoard{
    constructor(){
        this.board = Array(10).fill('#').map(() => Array(10).fill('#'))
    }

    // Maybe we can change this to include boundaries less than 0
    isInBoundary(location, length){
        if ( length + location[0] > 10 ||
             length + location[1] > 10){
                return false
        }
        else return true
    }

    // Now, we can only place it horizontally
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
    allSunk(){
        for(let i = 0; i < 10;i++){
            for (let j = 0; j < 10;j++){
               if(typeof this.board[i][j] === 'object'){
                // console.log(this.board[i][j])
                if(!this.board[i][j].isSunk()){
                    return false
                }
               }
            }
        }

        return true
    }
}