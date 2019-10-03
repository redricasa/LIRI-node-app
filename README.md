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
![do-what-it-says](/screen-Shots/do_what_it_says.png)
- `movie-this`
![movie-this](/screen-Shots/moive_this.png)
- `concert-this`
This will search the Bands in Town Artist Events API `("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")` for an artist and render the following information about each event to the terminal:
- Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")
![concert-this](/screen-Shots/concert.png)
- `spotify-this-song`
![spotify-this-song](/screen-Shots/spotify_this_song.png)

## Next Steps:
- read up in bands in town API documentation to be able to limit results to 3 instead of the default of getting all the concerts the artist has in the future
## Installation: 
>If you want to clone this app from github and run it youselves, you would need to supply your own .env file for it to work.

