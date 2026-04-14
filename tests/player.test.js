import { Player } from "../src/Player";

test('Checking on Player', ()=>{
    let player1 = new Player('Omar', true)
    let player2 = new Player('GPT', false)

    expect(player1.board).toStrictEqual(player2.board)

    expect(player1.board[0][0]).toBe('#')
    player1.board.place_ship([0, 0])
    expect(typeof player1.board[0][0]).toBe('object')
    expect(player2.board[0][0]).toBe('#')


})