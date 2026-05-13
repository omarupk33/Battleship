import { Ship } from "./ship.js";

export class GameBoard{
    constructor(){
        this.board = Array(10).fill('#').map(() => Array(10).fill('#'))
        this.node = document.createElement('div')
    }

    getBoard(){
        return this.board
    }

    isInBoundary([x, y], length = 1) {
        return x >= 0 &&
            y >= 0 &&
            x + length <= 10 &&
            y + length <= 10;
        }

    place_ship(location, length){
        let new_ship = new Ship(length)

        for(let i = 0; i < new_ship.length; i++){
            if(this.isInBoundary([location[0], location[1] + i], length) 
            ){
                this.board[location[0]][location[1] + i] = new_ship
            }

        }
    }

    receiveAttack(location){
        if(typeof this.board[location[0]][location[1]] === 'object'){
            this.board[location[0]][location[1]].hit()
        }    
        else(
            this.board[location[0]][location[1]] = 'X'
        )
    }

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

    
    board_node_creator(){
        this.node.className = 'boardNode'
        for(let i = 0; i < 10;i++){
            let row = document.createElement('div')
            row.className = 'rows'
            for (let j = 0; j < 10;j++){
                let button = document.createElement('button')
                button.dataset.loc = `${i},${j}`

                if(typeof this.board[i][j] === 'object'){
                button.textContent = '#'
                button.addEventListener('click', ()=>{
                    button.style.backgroundColor = 'red'
                    
                    this.receiveAttack([i, j])
                    button.textContent = 'X'
                    if(this.board[i][j].isSunk()){
                        button.disabled = true
                    }
                })
                }
                else{
                    button.textContent = this.board[i][j]

                    button.addEventListener('click', ()=>{
                        button.textContent = 'O'
                        button.disabled = true
                    })
                }
                row.appendChild(button)
            }
            this.node.appendChild(row)
        }
        return this.node
    }
}