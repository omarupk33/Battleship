import { Player } from './Player'
import "./styleSheet.css";


function player_node(name , number, againstComputer = false){
    let player_container = document.createElement('div')
    player_container.className = 'player_container'

    let player_block = document.createElement('div')
    player_block.className = `player${number}`

    player_container.appendChild(player_block)
    let player = new Player(name)
    let board = player.board

    let player_name = document.createElement('h3')
    player_name.textContent = `Name: ${name}`
    player_block.appendChild(player_name)

    let ship_locs = [[0, 1],[2, 2],[6, 3],[4, 4]]

    board.place_ship(ship_locs[0])
    board.place_ship(ship_locs[1])
    board.place_ship(ship_locs[2])
    board.place_ship(ship_locs[3])

    let board_node = board.board_node_creator()
    board_node.className = `theBoard${number}`
    player_container.appendChild(board_node)
    

    player_container.addEventListener('click', ()=>{
            let allButtons = document.querySelectorAll('button')
                allButtons.forEach((button)=>{
                    button.disabled = false
                })

            let current_player_btns = player_container.querySelectorAll(`button`)
            current_player_btns.forEach((button) =>{
            button.disabled = true

            if(againstComputer){
                player.computerPlaying(allButtons)
            }
    })

    })
    return player_container
}



function main(){
let container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)

    let player1 = player_node('Omar', 1) 
    let player2 = player_node( 'Computer',2, true)

container.appendChild(player1)
container.appendChild(player2)
}

main()