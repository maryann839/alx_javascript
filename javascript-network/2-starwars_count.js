#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const wedgeAntillesId = 18;

// Function to get the number of movies where "Wedge Antilles" is present
function getMoviesWithWedgeAntilles(apiUrl, characterId) {
    const characterUrl = `${apiUrl}people/${characterId}/`;

    request(characterUrl, { json: true }, (error, response, characterData) => {
        if (error || response.statusCode !== 200) {
            console.error(`Error: Unable to retrieve information for character ID ${characterId}.`);
            return;
        }

        const moviesWithWedgeAntilles = characterData.films.length;
        console.log(`Number of movies with Wedge Antilles: ${moviesWithWedgeAntilles}`);
    });
}

// Check if the script is executed with the correct number of arguments
if (process.argv.length !== 3) {
    console.log("Usage: ./script.js <API_URL>");
    process.exit(1);
}

// Call the function to get the number of movies with "Wedge Antilles"
getMoviesWithWedgeAntilles(apiUrl, wedgeAntillesId);
