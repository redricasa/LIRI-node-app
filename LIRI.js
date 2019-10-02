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
var artistNames = function(artist){
    return artist.name;
}
var spotifySong = function(songTitle){
    spotify
    .search({ type: 'track', query:'kinfolk', limit: 5 })
    .then(function(response) {
        var firstItem = response.tracks.items; 
        // *break object down through a loop
        for(var i=0;i<firstItem.length; i++){
            console.log("Song # "+ i)    
            console.log("Song name: "+firstItem[i].name); console.log("-------------------------")
            console.log("Artists: "+firstItem[i].artists[0].name); console.log("-------------------------")
            console.log("Preview Link of song: "+ firstItem[i].preview_url); console.log("-------------------------")
            console.log("Album the song is from: "+firstItem[i].album.name); 
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}
//switch cases to hold the different commands from user
var choose = function (caseData, functionData){
    switch(caseData) {
        case 'do-what-it-says':
            //insert call back 
            break;
        case 'spotify-this-song':
            spotifySong();
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