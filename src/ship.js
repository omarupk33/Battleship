export class Ship{
    constructor(length = 0){
        this.length = length
        this.hits = 0
        this.sunk = false
    }

    hit(){
        this.hits+= 1
    }

    isSunk(){
        if(this.length === this.hits){
            this.sunk = true
        }
        return this.sunk
    }

}