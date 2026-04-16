import { GameBoard } from "./gameBoard"

export class Player{

    constructor(name, isHuman){
        this.name = name
        this.board = new GameBoard()
        this.human = isHuman
    }

    player_node(number){
    let player_container = document.createElement('div')
    player_container.className = 'player_container'

    let player_block = document.createElement('div')
    player_block.className = `player${number}`

    player_container.appendChild(player_block)
    // let player = new Player('Omar', true)

    let player_name = document.createElement('h3')
    player_name.textContent = `Name: ${this.name}`
    player_block.appendChild(player_name)

    let ship_locs = [[0, 1],[2, 2],[6, 3],[4, 4]]

    this.board.place_ship(ship_locs[0])
    this.board.place_ship(ship_locs[1])
    this.board.place_ship(ship_locs[2])
    this.board.place_ship(ship_locs[3])


    let board_node = this.board.board_node_creator()
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


}