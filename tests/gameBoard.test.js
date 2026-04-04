import { GameBoard } from "../src/gameBoard.js";

// Should fix the way I approach the board
test('Test board', ()=>{
    let test_board = new GameBoard().place_ship(2, 2)

    expect(test_board[0]).test_board.toBe('2,2')
})