import { createElement } from "react"

export function board_node_creator(boardGame){

let node  = document.createElement('div')

    let board = boardGame.getBoard()
    let options = boardGame

    for(let i = 0; i < 10;i++){
        let row = document.createElement('div')
        for (let j = 0; j < 10;j++){
            let button = document.createElement('button')
            if(typeof board[i][j] === 'object'){
            button.textContent = 'ship'
            button.addEventListener('click', ()=>{
                
                options.receiveAttack([i, j])

                if(board[i][j].isSunk()){
                    button.disabled = true
                }
                if(options.allSunk()){
                    console.log('You lost')
                }
            })
            }
            else{
                button.textContent = board[i][j]
            }

            button.addEventListener('click', ()=>{
                button.style.backgroundColor = 'red'
            })
            row.appendChild(button)
        }



        node.appendChild(row)
    }
    return node
}