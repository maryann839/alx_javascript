#!/usr/bin/node

const req = require("request");
const url = 'https://swapi.dev/api/films';

req.get(url, {encoding : 'utf-8'})
.on('response', response =>{
    console.log("code:", response.statusCode);
})