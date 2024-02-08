#!/usr/bin/node

const request = require('request');
const url = 'https://swapi.dev/api/'
request.get(url, process.argv[2])
    .on('response', function (response) {
    console.log("code:", response.statusCode);
});