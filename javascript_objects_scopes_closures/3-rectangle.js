#!/usr/bin/node
// my rectangle  Writing to stderr using console.error
module.exports = class Rectangle{
    constructor(w,h) {
        if (w > 0 && h >0) { [this.width, this.height] = [w, h]} 
    }

    print() {
        for (let i = 0; i <this.height; i++) 
        console.log("x".repeat(this.width));
        }
};

// Writing to stderr using console.error
console.error('This is an error message.');





