#!/usr/bin/node
module.exports = class Square extends require('./5-rectangle.js') {
    charPrint (c) {
        if (c === undefined) {
            this.print();
        } else {
            for (let i = 0; i < this.height; i += 1) 
            console.log(c.repeat(this.width));
        }
    }
}