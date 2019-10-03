# LIRI-node-app
## Link to Deployed Application: 
## Overview: 
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. LIRI node app is a Command Line Interface(CLI) application which takes in three arguments (process.argv). You'd type in `node` then one of these commands:
- `concert-this` then a concert name you're interested in, 
- `spotify-this-song` to get details on a song from Spotify's API,
- `movie-this` to get OMDB's response on a particular movie, 
- `do-what-it-says` to get a random response from one of the three commands above! 

## Role in App development:
This is an individual project with no contributors
## Techonologies Used:
- Axios
- moment
- DotEnv
- Node-Spotify-API
- Node.js
- JavaScript
## How the app works(Screen-Shots):
- `do-what-it-says` 
Using the `fs` Node package, LIRI will take the text inside of `random.txt` and then use it to call one of LIRI's commands.
![do-what-it-says](/screen-Shots/do_what_it_says.png)
- `movie-this`
This will output the following information to your terminal/bash window:
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

![movie-this](/screen-Shots/moive_this.png)
- `concert-this`
This will search the Bands in Town Artist Events API `("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")` for an artist and render the following information about each event to the terminal:
* Name of the venue
* Venue location
* Date of the Event 
![concert-this](/screen-Shots/concert.png)

- `spotify-this-song`
This will show the following information about the song in your terminal/bash window:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
![spotify-this-song](/screen-Shots/spotify_this_song.png)

## Next Steps:
- read up in bands in town API documentation to be able to limit results to 3 instead of the default of getting all the concerts the artist has in the future
- have default entries for when the user doesn't type an entry after the command
## Installation: 
>Git clone the repo into your device.
>run the LIRI.js file in the terminal.
>If you want to clone this app from github and run it youselves, you would need to supply your own .env file for it to work.

