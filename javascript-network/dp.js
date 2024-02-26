#!/usr/bin/node

const request = require("request");

const endpoint = 'https://swapi-api.alx-tools.com/api/films/';
        

request(endpoint, function (error, response, body) {
    const charater_object = JSON.parse(body)
    console.log(charater_object.title)
});



