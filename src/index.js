import { Player } from './Player'

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

    let ship_locs = [[1, 1],[2, 2],[3, 3],[4, 4]]

    player.board.place_ship(ship_locs[0])
    player.board.place_ship(ship_locs[1])
    player.board.place_ship(ship_locs[2])
    player.board.place_ship(ship_locs[3])


    let board_node = player.board.board_node_creator()
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
            })

    })


    return player_container
}

let player1_container =  player_node(1)
let player2_container =  player_node(2)


container.appendChild(player1_container)
container.appendChild(player2_container)


// Need a way to switch between players