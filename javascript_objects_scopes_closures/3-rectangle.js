#!/usr/bin/node
/*You must use the class notation for defining your class
The constructor must take 2 arguments: w and h
Initialize the instance attribute width with the value of w
Initialize the instance attribute height with the value of h
*/
module.exports = class Rectangle {
    constructor(w,h) {
        if (w > 0 && h <= 0) {
             [this.width, this.height] = [w, h];} 
    };

    print() {
        for (let i = 0; i <this.height; i +=1) 
        console.log("X".repeat(this.width));
        }; 
};







