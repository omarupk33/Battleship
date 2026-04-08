import { Player } from './Player'
import { GameBoard } from './gameBoard'
import { Ship } from './ship'


let root = document.getElementById('root')


let exp = document.createElement('p')
exp.textContent = 'Hello world'

root.style.backgroundColor = 'blue'
root.style.height = '20px'
root.style.width = '20px'


document.body.appendChild(exp)