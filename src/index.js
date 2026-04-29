import { Player } from './Player'
import "./styleSheet.css";
import SB from './assets/screen_background.png'

function player_node(number){
    let player_container = document.createElement('div')
    player_container.className = 'player_container'

    let player_block = document.createElement('div')
    player_block.className = `player${number}`

    player_container.appendChild(player_block)
    
    let player = new Player()
    let board = player.board

    let player_name = document.createElement('h3')
    player_name.className = 'player_name'
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


    let wrapper1 = document.createElement('div')


    let player1 = document.createElement('label')
    player1.textContent = 'Player-One:'
    let input1 = document.createElement('input')
    input1.name = 'input1'
    input1.id = 'input1'
    player1.htmlFor = 'input1'
    input1.placeholder = 'First player Name:'
    // input1.required = true

    wrapper1.appendChild(player1)
    wrapper1.appendChild(input1)

    main_form.appendChild(wrapper1)

    let wrapper2 = document.createElement('div')
    let player2 = document.createElement('label')
    player2.textContent = 'Player-Two: '
    let input2 = document.createElement('input')
    input2.name = 'input2'
    input2.id = 'input2'
    player2.htmlFor = 'input2'
    input2.placeholder = 'Second player Name:'
    // input2.required = true
    

    wrapper2.appendChild(player2)
    wrapper2.appendChild(input2)

    main_form.appendChild(wrapper2)



    let game_options = document.createElement('div')

    let againstWho = document.createElement('label')
        againstWho.textContent = 'Against:'
        againstWho.className = 'againstWho'
        againstWho.htmlFor = 'againstWho'


    let selector = document.createElement('select')
    selector.name = 'select_mode'
    selector.id = 'select_mode'
    selector.className = 'select_mode'


    let againstBot = document.createElement('option')
        againstBot.id = 'against_bot'
        againstBot.name = 'against_bot'
        againstBot.value = 'Bot'
        againstBot.textContent = 'Bot'


    let againstPlayer = document.createElement('option')
        againstPlayer.id =  'against_player'
        againstPlayer.value = 'Player'
        againstPlayer.textContent = 'Player'
        againstPlayer.name = 'against_player'


    let submit_btn = document.createElement('button')
    submit_btn.textContent = 'Start'
    submit_btn.type = 'button'
    submit_btn.className = 'submit_btn'

    submit_btn.onclick = ()=>{
        main_form.style.display = 'none'
        document.body.children[0].style.display = 'none'
        main()

        let players_name = document.querySelectorAll('.player_name')
        players_name[0].textContent = input1.value
        players_name[1].textContent = input2.value

        // Make changes here to switch to a bot when necessary 

        let player2 = document.querySelector('.player2')
        
    }


    main_form.appendChild(game_options)
    game_options.appendChild(againstWho)
    game_options.appendChild(selector)
    selector.appendChild(againstBot)
    selector.appendChild(againstPlayer)
    main_form.appendChild(submit_btn)

    return main_form
}


function main(){
let container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)


    // Should not allow player to click when bot is playing 

    let player1 = player_node(1) 
    let player2 = player_node(2)

   


    let selector_option = document.querySelector('select')
    if(selector_option.value === 'Bot'){
        player2.addEventListener('click', ()=>{

            setTimeout(()=>{
            let opponent_board = document.getElementsByClassName('theBoard1')[0]
            let random1 = Math.floor(Math.random() * 10)
            let row = opponent_board.children[random1]
            let random2 = Math.floor(Math.random() * 10)
            row.children[random2].click()}, 1000)
            } 
        )
        }


    container.appendChild(player1)
    container.appendChild(player2)

}


function startGame(){
    let start_screen = document.createElement('div')
    start_screen.style.background = 'black'
    start_screen.className = 'start_screen'
    document.body.appendChild(start_screen)


    let background_pic = document.createElement('img')
    background_pic.src = SB
    background_pic.alt = 'BattleShip'
    background_pic.className = 'screen_background'


    let start_btn = document.createElement('button')
    start_btn.textContent = 'Start Game'
    start_btn.type = 'button'
    start_btn.className = 'start_btn'

    start_btn.onclick = ()=>{
        start_btn.style.display = 'none'
        document.body.appendChild(theForm())    
    }

    start_screen.appendChild(start_btn)
    start_screen.appendChild(background_pic)
}  

startGame()