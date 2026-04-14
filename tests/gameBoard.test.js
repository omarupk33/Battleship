import { GameBoard } from "../src/gameBoard.js";

// Game Table
test('Test board', ()=>{
    let game = new GameBoard()
    expect(game.board).toStrictEqual(
        Array(10).fill('#').map(() => Array(10).fill('#'))
    )

// Placing ship
    game.place_ship([0, 0])
    expect(typeof game.board[0][0]).toBe('object')
    expect(game.isInBoundary([2,2], 8)).toBe(true)

// Attack Coordinates with a ship
    game.receiveAttack([0,0])

    expect(game.board[0][0].hits).toBe(1)

// Attack Coordinates without a ship
    game.receiveAttack([0,1])
    expect(game.board[0][1]).toBe('X')

// all ships are sunk 
    expect(game.allSunk()).toBe(true)
    
// One ship remains
    game.place_ship([2,3])
    expect(game.allSunk()).toBe(false)

})