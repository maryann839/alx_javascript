#!/usr/bin/node

module.exports = class Rectangle{
    constructor(w,h) {
        this.width = w
        this.height= h
        
        if (w <= 0 || h <= 0) { 
            return{}
        } 
    };
     
   
    print() {
        for (let i = 0; i <this.height; i += 1) 
        console.log("X".repeat(this.width)); 
     }
    
    rotate() {  
            [this.width, this.height] =  [this.width, this.height]
     }
    
    double () {
        this.width *= 2
        this.height *= 2
    }

}


