#!/usr/bin/node
module.exports = class Rectangle{
    constructor(w,h) {
        if (w > 0 && h >0) { [this.width, this.height] = [w, h]} 
    }

    print() {
        for (let i = 0; i <this.height; i +=1) 
        console.log("x".repeat(this.width));
        }
};

// Writing stderr using console.error
console.error();





