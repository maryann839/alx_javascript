#!/usr/bin/node

module.exports = class Rectangle{
    constructor(w,h) {
        if (w > 0 && h >0) { [this.width, this.height] = [w, h]} 
    }

    print() {
        for (let i = 0; i <this.height; i++) 
        console.log("x".repeat(this.width));
     }
    
    rotate() {
            [this.width, this.height] =  [this.width, this.height]
     }
    
    double () {
        this.width *= 2
        this.height *= 2
    }

}


