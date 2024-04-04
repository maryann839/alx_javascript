#!/usr/bin/node

const request = require("request");
const characterId = 18;
const endpoint = 'https://swapi-api.alx-tools.com/api/films/';
        

request(endpoint, function (error, response, body) {
    const charater_object = JSON.parse(body)
    console.log(charater_object.title)
});

.on 





request.get(url, {encoding: 'utf-8'})
  .on('data', data => {
    console.log(data);
  });
  
  const wedgeAntilles = body.characters.find(character => character.id === characterId);
  console.log( wedgeAntilles)