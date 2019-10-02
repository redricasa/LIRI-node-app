require("dotenv").config();
//require files and npm modules here first
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
//gets id and secret from keys.js files
const spotify = new Spotify(keys.spotify);
//spotify API request with a promise
var spotifySong = function(songTitle){
    spotify
    .search({ type: 'track', query: songTitle, limit: 5 })
    .then(function(response) {
        var firstItem = response.tracks.items; 
        //break response object down through a loop
        for(var i=0;i<firstItem.length; i++){
            console.log("Song # "+ i)    
            console.log("Song name: "+firstItem[i].name); 
            console.log("-------------------------")
            console.log("Artists: "+firstItem[i].artists[0].name);
             console.log("-------------------------")
            console.log("Preview Link of song: "+ firstItem[i].preview_url); 
            console.log("-------------------------")
            console.log("Album the song is from: "+firstItem[i].album.name); 
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}
var bands = function(artistName){
    var concertQuery = "https://rest.bandsintown.com/artists/"+ artistName +"/events?app_id=codingbootcamp";
    axios.get(concertQuery)
    .then(function(bandResponse){
        var bandItem = bandResponse.data;
        for(var i=0; i<bandItem.length; i++){
            console.log("Band Response # "+ i);
            console.log("-------------------")
            console.log("Name of the venue: "+ bandItem[i].venue.name);
            console.log("________________________");
            console.log("Location of the venue: "+ bandItem[i].venue.city+ ", "+ bandItem[i].venue.region + ", "+ bandItem[i].venue.country);
            console.log("________________________");
            console.log("Date of the event: "+ moment(bandItem[i].datetime).format('MM/DD/YYYY'));
            console.log("________________________");
        }        
    })
} 
var movies = function(movieName){
    var movieQuery = "http://www.omdbapi.com/?apikey=trilogy&t="+ movieName;
    axios.get(movieQuery)
    .then(function(movieResponse){
        var movieItem = movieResponse.data;
        console.log(movieItem);
        console.log("Title of the movie: "+ movieItem.Title);
        console.log("________________________");
        console.log("Year the movie came out: "+ movieItem.Year);
        console.log("________________________");
        console.log("IMDB Rating of the movie: "+ movieItem.imdbRating);
        console.log("________________________");
        console.log("Rotten Tomatoes Rating of the movie: "+ movieItem.Ratings[1].Value);
        console.log("________________________");
        console.log("Country where the movie was produced: "+ movieItem.Country);
        console.log("________________________");
        console.log("Language of the movie: "+ movieItem.Language);
        console.log("________________________");
        console.log("Plot of the movie: "+ movieItem.Plot);
        console.log("________________________");
        console.log("Actors in the movie: "+ movieItem.Actors);
        console.log("________________________");
    })
}
var doThis = function(){
    fs.readFile('random.txt', 'utf8', function(err, data){
        var split = data.split(",");
        if (split.length == 2){
            console.log(split[0], split[1]);
            //take split[0], split[1] and run node on command line as process.argv[2] and process.argv[3]
        }else if(split.length == 1){
            // take (split[0]) and run node on command line as process.argv[2];
        }
    });
};
//switch cases to hold the different commands from user
var choose = function (caseData, functionData){
    switch(caseData) {
        case 'do-what-it-says':
            doThis(caseData, functionData); 
            break;
        case 'spotify-this-song':
            spotifySong(functionData);
            break;
        case 'movie-this':
            movies(functionData);
            break;
        case 'concert-this':
            bands(functionData);
            break;
        default:
        console.log('LIRI does not do that');
    }
}
//function to pass arguments into switch case 
var clientToServer = function(command,item){ 
    choose(command, item)
};
//call back function will take in the command as index[2] and the item searching for as index[3]. use .SLICE.JOIN to account for the user inputing more than one word after the command
let query = process.argv.slice(3).join(' ');
clientToServer(process.argv[2], query);    