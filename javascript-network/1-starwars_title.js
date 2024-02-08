#!/usr/bin/node

const request = require("request");
const url = `https://swapi.dev/api/films`;

request.get(url, function (error, response, body) {
    // console.log("code:", response.statusCode);
    const Object_body = JSON.parse(body);

    Object_body.results.forEach(function (film) {
        console.log(film.title);
    })
});
    