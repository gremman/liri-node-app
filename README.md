# Using LIRI 

## Objective
This app is used to run LIRI, which stands for Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will help you search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Before You Use this App
    Install the following packages using the terminal:
        - [] package.json: "npm init -y"
        - [] Spotify API: "npm i node-spotify-api" 
        - [] Request API: "npm i request" 
        - [] dotenv: Run "npm i dotenv"
        - [] Moment API: "npm i moment"

## Using this App
You can run 4 commands in the terminal:

### **1.  concert-this**
Type in a band currently on tour and you will see the following information about their next concert:

         * Name of the venue
         * Venue location
         * Date of the Event 
        
If this command is run without information about a concert, you'll see information about the next NeedToBreathe concert.

See example of the output: ![concert-this](/images/concert-this.png)


### **2.  spotify-this-song**
Type in a song/track name after the command and you will receive the following information about that song:

         * Artist(s)
         * The song's name
         * Spotify URL
         * Song album

If no song is provided then you'll see information about "The Sign" by Ace of Base.

See example of the output: ![spotify-this-song](/images/spotify-this-song.png)


### **3. movie-this**
Type in a movie name after the command and you will receive the following information about that movie:

         * Title of the movie
         * Year the movie came out
         * IMDB Rating of the movie
         * Rotten Tomatoes Rating of the movie
         * Country where the movie was produced
         * Language of the movie
         * Plot of the movie
         * Actors in the movie

If a movie is not provided then you'll see information about the movie "Mr. Nobody."

See example of the output: ![movie-this](/images/movie-this.png)

### **4. do-what-it-says**
LIRI will draw commands from the random.txt file and run the following commands:

        * spotify-this-song: Song "I Want It That Way" info will display
        
        * movie-this: Movie "Remember the Titans" info will display

        * concert-this: Concert info for NeedtoBreathe will display

You can change the movie, song, and concert information in the random.txt file -- but **DO NOT** change the order of the text.

See example of the output: ![do-what-it-says](/images/do-what-it-says.png)