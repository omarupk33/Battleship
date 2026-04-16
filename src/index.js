import { Player } from './Player'

import "./styleSheet.css";

function main(){
let container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)

let player1_container =  new Player('Omar').player_node(1)
let player2_container =  new Player('Opponent').player_node(2)


container.appendChild(player1_container)
container.appendChild(player2_container)
}

main()