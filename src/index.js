import { Player } from './Player'
import {board_node_creator} from './board_node'

import "./styleSheet.css";


let container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)


    function player_node(number){
    let player_container = document.createElement('div')
    player_container.className = 'player_container'

    let player_block = document.createElement('div')
    player_block.className = `player${number}`


    player_container.appendChild(player_block)
    let player = new Player('Omar', true)

    let player_name = document.createElement('h3')
    player_name.textContent = `Name: ${player.name}`
    player_block.appendChild(player_name)


    let ship_locs = [[1, 2],[6, 3],[6, 6],[3, 7]]

    player.board.place_ship(ship_locs[0])
    player.board.place_ship(ship_locs[1])
    player.board.place_ship(ship_locs[2])
    player.board.place_ship(ship_locs[3])


    let board_node = board_node_creator(player.board)
    board_node.className = `theBoard${number}`
    player_container.appendChild(board_node)
    
    return player_container
}

let player1_container =  player_node(1)
let player2_container =  player_node(2)


container.appendChild(player1_container)
container.appendChild(player2_container)

container.addEventListener('click', ()=>{
    let switcher = true 

    if(switcher){
        switcher = false    
        player1_container.style.display = 'none'
        player2_container.style.display = 'flex'
    }

    if(!switcher){
        switcher = true
        player2_container.style.display = 'none'
        player1_container.style.display = 'flex'
    }
})