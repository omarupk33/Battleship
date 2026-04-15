import { Ship } from "./ship.js";

export class GameBoard{
    constructor(){
        this.board = Array(10).fill('#').map(() => Array(10).fill('#'))
    }

    getBoard(){
        return this.board
    }

    // Maybe we can change this to include boundaries less than 0
    #isInBoundary(location, length){
        if ( length + location[0] > 10 ||
             length + location[1] > 10){
                return false
        }
        else return true
    }

    // Now, we can only place it horizontally
    place_ship(location){
        let new_ship = new Ship(1)
        
        for(let i = 0; i < new_ship.length; i++){
            if(this.#isInBoundary([location[0], location[1] + i], new_ship.length) 
                // ||
            //    this.isInBoundary([x+i, y], new_ship.length)
            ){
                this.board[location[0]][location[1] + i] = new_ship
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
                if(!this.board[i][j].isSunk()){
                    return false
                }
               }
            }
        }
        return true
    }

    // Should Explode and effect the range around the ship
    // static exploded (ship){
    //     if(ship.isSunk()){
    //         for(let i = 0; i >3; i++){
    //             for(let j = 0; j>;j++){
    //             ship[]
    //             }
    //         }
    //     }

    // }

    
    board_node_creator(){
        let node  = document.createElement('div')
        for(let i = 0; i < 10;i++){
            let row = document.createElement('div')
            for (let j = 0; j < 10;j++){
                let button = document.createElement('button')
                if(typeof this.board[i][j] === 'object'){
                button.textContent = '#'

            button.addEventListener('click', ()=>{
                    button.style.backgroundColor = 'red'
                    console.log('hit')
                })
                button.addEventListener('click', ()=>{
                    
                    this.receiveAttack([i, j])
                    button.textContent = 'X'
                    if(this.board[i][j].isSunk()){
                        button.disabled = true
                    }
                    if(this.allSunk()){
                        console.log('You lost')
                    }
                })
                }

                else{
                    button.textContent = this.board[i][j]

                    button.addEventListener('click', ()=>{
                        button.textContent = 'O'
                    })
                }

                row.appendChild(button)
            }

            node.appendChild(row)
        }
        return node
    }

}