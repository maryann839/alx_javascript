#!/usr/bin/node

module.exports = class Rectangle{
    constructor(w,h) {
       this.width = (typeof w === 'number' && w > 0) ? w : undefined;
       this.height = (typeof h === 'number' && h > 0) ? h : undefined;
    }
}

