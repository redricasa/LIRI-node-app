require("dotenv").config();
//require files and npm modules here first
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
moment().format();
//gets id and secret from keys.js files
const spotify = new Spotify(keys.spotify);
//spotify API request with a promise
spotify
.search({ type: 'track', query: 'All the Small Things', limit:5 })
.then(function(response) {
    console.log(response);
})
.catch(function(err) {
    console.log(err);
});

//switch cases to hold the different commands from user
var choose = function (caseData, functionData){
    switch(caseData) {
        case 'do-what-it-says':
            //insert call back 
            break;
        case 'spotify-this-song':
            //insert call back
            break;
        case 'movie-this':
            //insert call back
            break;
        case 'concert-this':
            //insert call back
            break;
        default:
        console.log('LIRI does not do that');
    }
}
//function to pass arguments into switch case 
var clientToServer = function(command,item){
    choose(command, item)
}
//call back function will take in the command as index[2] and the item searching for as index[3]
clientToServer(process.argv[2], process.argv[3]);