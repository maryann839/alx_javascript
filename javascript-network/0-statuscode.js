#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/'
request.get(url, process.argv[2])
    .on('response', function (response) {
    console.log("code:", response.statusCode);
});



    






// req.get(url, {encoding : 'utf-8'})
// .on('response', response =>{
//     console.log("code:", response.statusCode);
// })