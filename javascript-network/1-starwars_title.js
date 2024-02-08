#!/usr/bin/node

const request = require("request");
const id = process.argv[2];
const endpoint = 'https://swapi-api.alx-tools.com/api/films/' + id;
        

request.get(endpoint, function (error, response, body) {
    const Object_body = JSON.parse(body);
    console.log(Object_body.title);
});


