#!/usr/bin/node

const request = require("request")
const endpoint = 'https://swapi.dev/api/films/1';

request(endpoint, function (error, response) {
    console.log("code:", response.statusCode)
});
    






