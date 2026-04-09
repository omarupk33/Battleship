import { Player } from './Player'
import { GameBoard } from './gameBoard'
import { Ship } from './ship'
import "./styleSheet.css";

let container = document.createElement('div')
container.className = 'container'
container.style.height = '100vh'
container.style.width = '100vh'
container.style.background = 'black'
container.style.color = 'white'
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'

document.body.appendChild(container)

let players_container = document.createElement('div')
players_container.style.display = 'flex'

let player1_block = document.createElement('div') 
let player2_block = document.createElement('div')

players_container.append(player1_block)
players_container.append(player2_block)

player1_block.style.background = 'blue'
player1_block.style.width = '400px'
player1_block.style.height = '200px'


player2_block.style.background = 'red'
player2_block.style.width = '400px'
player2_block.style.height = '200px'




container.appendChild(players_container)


let theBoard  = document.createElement('div')
theBoard.style.background = 'orange'
theBoard.style.height = '400px'
theBoard.style.width ='800px'
container.appendChild(theBoard)


console.log(new Ship(2))