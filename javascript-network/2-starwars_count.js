//!/usr/bin/node

const request = require('request');

const id = process.argv[18];
const url = 'https://swapi-api.alx-tools.com/api/film/'+id

request.get(url, {encoding: 'utf-8'})
  .on('data', data => {
    console.log(data);
  });

  