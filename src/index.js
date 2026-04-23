import { Player } from './Player'
import "./styleSheet.css";


function player_node(name , number){
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
    })
    })
    return player_container
}

function theForm(){

    let main_form = document.createElement('form')
    main_form.className = 'main_form'


    let player1 = document.createElement('label')
    player1.textContent = 'Player-One:'

    let input1 = document.createElement('input')
    input1.name = 'input1'
    input1.id = 'input1'
    player1.htmlFor = 'input1'
    input1.placeholder = 'First player Name:'


    let player2 = document.createElement('label')
    player2.textContent = 'Player-Two: '

    let input2 = document.createElement('input')
    input2.name = 'input2'
    input2.id = 'input2'
    player2.htmlFor = 'input2'
    input2.placeholder = 'Second player Name:'

    let game_options = document.createElement('div')

    let againstWho = document.createElement('p')
        againstWho.textContent = 'Against:'
        againstWho.className = 'againstWho'


    let againstBotLabel = document.createElement('label')
        againstBotLabel.textContent = 'Bot:'        

    let againstBot = document.createElement('input')
        againstBot.id = 'against_bot'
        againstBot.name = 'against_bot'
    againstBotLabel.htmlFor ='against_bot'

    let againstPlayerLabel = document.createElement('label')
        againstPlayerLabel.textContent = 'Player: '

    let againstPlayer = document.createElement('input')
        againstPlayer.id =  'against_player'
        againstPlayer.name = 'against_player'
    againstPlayerLabel.htmlFor = 'against_player'


    main_form.appendChild(player1)
    main_form.appendChild(input1)
    main_form.appendChild(player2)
    main_form.appendChild(input2)
    main_form.appendChild(game_options)


    game_options.appendChild(againstWho)
    game_options.appendChild(againstBotLabel)
    game_options.appendChild(againstBot)
    game_options.appendChild(againstPlayerLabel)
    game_options.appendChild(againstPlayer)


    return main_form
}


function main(){
let container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)

    // let computerMode = confirm("Do you want to play against a bot?")

    let player1 = player_node('Omar', 1) 
    let player2 = player_node( 'Computer',2)

    if(true){
        player2.addEventListener('click', ()=>{
            let opponent_board = document.getElementsByClassName('theBoard1')[0]
            let random1 = Math.floor(Math.random() * 10)
            let row = opponent_board.children[random1]
            let random2 = Math.floor(Math.random() * 10)
            row.children[random2].click()
        })
    }

    let form_container = theForm()
    container.appendChild(player1)
    container.appendChild(player2)
    container.appendChild(form_container)
}

main()