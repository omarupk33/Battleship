import { Ship } from "../src/ship";

test('ship is working properly',()=>{
let ship = new Ship(5)

expect(ship.length).toBe(5)

expect(ship.isSunk()).toBe(false)

ship.hits = 4
ship.hit()
expect(ship.isSunk()).toBe(true)


ship.hit()
expect(ship.hits).toBe(6)
})