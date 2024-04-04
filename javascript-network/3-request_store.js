#!/usr/bin/node

const request = require("request");

const endpoint = 'https://swapi-api.alx-tools.com/api/films/';
        
package = []
request(endpoint, function (error, response, body) {
    const charater_object = JSON.parse(body)
    charater_object.results (function (film) {
    console.log(film.results)
    })

});



