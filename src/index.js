import { Player } from './Player'
import "./styleSheet.css"
import SB from './assets/screen_background.png'

function player_node(number){
    let player_container = document.createElement('div')
    player_container.className = 'player_container'

    let player_block = document.createElement('div')
    player_block.className = `player_block${number}`

    player_container.appendChild(player_block)
    
    let player = new Player()
    let board = player.board

    let player_name = document.createElement('h1')
    player_name.className = `player${number}`
    player_block.appendChild(player_name)
    
    let board_node
    function make_ship_options(container){
        let all_confirmed = Array(1).fill(false)

    for(let i = 0; i < 1;i++){
        let ship = document.createElement('div')
        ship.className = 'ship_selection'
        let confirm_ship_loc_btn = document.createElement('button')
        confirm_ship_loc_btn.className = 'confirm_loc_btn'
        confirm_ship_loc_btn.textContent = 'Confirm'
        
        confirm_ship_loc_btn.addEventListener('click', ()=>{
            let x = Number.parseInt(select_x.value)
            let y = Number.parseInt(select_y.value)

          if(board.isInBoundary([x, y])){
                if(typeof board.board[x][y] !== 'object'){
                board.place_ship([x, y], i+1)
                all_confirmed[i] = true
                ship.remove()

                if(all_confirmed.every(state => state === true)){
                board_node = board.board_node_creator()
                board_node.className = `theBoard${number}`
                board_node.value = board
                player_container.appendChild(board_node)
            
                let player2_option = document.querySelector('.select_mode').value

                if(player2_option === 'Bot'){
                    board_node.addEventListener('click', () => {
                    setTimeout(() => {

                        let opponent_board =
                            document.querySelector('.theBoard1')

                        let random1 = Math.floor(Math.random() * 10)
                        let random2 = Math.floor(Math.random() * 10)

                        opponent_board
                            .children[random1]
                            .children[random2]
                            .click()

                    }, 1000)
                })
            }
                player_container.children[1].addEventListener('click', ()=>{
                let allButtons = document.querySelectorAll('button')
                allButtons.forEach((button)=>{
                    button.style.display = 'block'
                })

                let current_player_btns = player_container.querySelectorAll(`button`)
                current_player_btns.forEach((button) =>{
                button.style.display = 'none'
                })
                if(board.allSunk()){
                gameOver()
                }
            })
            }

                } else {
                    alert('already taken')
                }
            } else {
                alert('Out of boundary')
            }
        })

        ship.className = 'form_ships'
        ship.textContent = `ship (length ${i+1}): `
        let select_x = document.createElement('select')
        select_x.className = 'selectX'
        let select_y = document.createElement('select')
        select_y.className = 'selectY'

        for(let j = 0; j <10;j++){
            select_x.add(new Option(j))
            select_y.add(new Option(j))
        }

        ship.appendChild(select_x)
        ship.appendChild(select_y)
        ship.appendChild(confirm_ship_loc_btn)

        container.appendChild(ship)


    }

}
    make_ship_options(player_block)
    
    return player_container
}

function theForm(){
    let main_form = document.createElement('form')
    main_form.className = 'main_form'

    let wrapper1 = document.createElement('div')
    wrapper1.className = 'wrapper'

    let player1 = document.createElement('label')
    player1.textContent = 'Player-One:'
    let input1 = document.createElement('input')
    input1.name = 'input1'
    input1.id = 'input1'
    player1.htmlFor = 'input1'
    input1.placeholder = 'First player Name:'
    input1.required = true


    let placing_ships1 = document.createElement('div')
    placing_ships1.className = 'placing_ship'


    wrapper1.appendChild(player1)
    wrapper1.appendChild(input1)
    wrapper1.appendChild(placing_ships1)

    main_form.appendChild(wrapper1)

    let wrapper2 = document.createElement('div')
    wrapper2.className = 'wrapper'


    let player2 = document.createElement('label')
    player2.textContent = 'Player-Two:'
    let input2 = document.createElement('input')
    input2.name = 'input2'
    input2.id = 'input2'
    player2.htmlFor = 'input2'
    input2.placeholder = 'Second player Name:'
    input2.required = true
    

    let placing_ships2 = document.createElement('div')
    placing_ships2.className = 'placing_ship'


    wrapper2.appendChild(player2)
    wrapper2.appendChild(input2)
    wrapper2.appendChild(placing_ships2)
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

    submit_btn.addEventListener('click',()=>{        
        main_form.style.display = 'none'
        document.body.children[0].style.display = 'none'
        main()

        let player_name1 = document.querySelector('.player1')
        let player_name2 = document.querySelector('.player2')
        player_name1.textContent = input1.value
        player_name2.textContent = input2.value
    })

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

    let player1 = player_node(1)
    let player2 = player_node(2)

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


    function gameOver(){
    let end_screen = document.createElement('div')
    end_screen.className = 'end_screen'

    let loser = document.createElement('h2')
    loser.textContent = `Lost: `
    loser.style.background = 'red'

    let winner = document.createElement('h2')
    winner.textContent = `Won: `
    winner.style.background = 'blue'

    let player1 = get_Player_and_board(1)
    let player2 = get_Player_and_board(2)


    let end_game_btn = document.createElement('button')
    end_game_btn.textContent = 'End game'
    end_game_btn.className = 'end_game_btn'
    end_game_btn.addEventListener('click', ()=>{

    let start_screen = document.querySelector('.start_screen')
    let theForm = document.querySelector('.main_form')
    let container = document.querySelector('.container')

    start_screen.style.display = 'flex'

        container.remove()
        theForm.remove()
        end_screen.remove()
    
    })

    if(player1.board.value.allSunk()){
    winner.textContent = winner.textContent + player2.name.textContent
    loser.textContent = loser.textContent + player1.name.textContent
    }

    if(player2.board.value.allSunk()){
    winner.textContent = winner.textContent + player1.name.textContent
    loser.textContent = loser.textContent + player2.name.textContent
    }

    end_screen.appendChild(winner)
    end_screen.appendChild(loser)
    end_screen.appendChild(end_game_btn)

    document.body.appendChild(end_screen)    

}

    function get_Player_and_board(number){
        let name = document.querySelector(`.player${number}`)
        let board = document.querySelector(`.theBoard${number}`)        
        return {name, board}
    }
startGame()
