// npm i node-spotify-api to install Spotify API
// npm init -y to install package.json
// npm i request to install Request API
// npm i dotenv to install dotenv
// npm i moment to install moment

require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require('moment');

var nodeArgs = process.argv;
var action = process.argv[2];

var searchRequest = "";


for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      searchRequest = searchRequest + "+" + nodeArgs[i];
    } else {
      searchRequest = searchRequest + nodeArgs[i];
    }
};
console.log(searchRequest); 

switch (action) {
    case "concert-this":
      if (searchRequest) {concertThis(searchRequest);
      } else {
      concertThis("Carrie Underwood");    
      } 
      break;
    
    case "spotify-this-song":
      if (searchRequest) {spotifyThisSong(searchRequest);
      } else {
      spotifyThisSong("The Sign");    
      }
      break;
    
    case "movie-this":
      if (searchRequest) {movieThis(searchRequest);
      } else {
      movieThis("Mr. Nobody");    
      } 
      break;
    
    case "do-what-it-says":
      doWhatItSays();
      break;
    };

    function concertThis(searchRequest) {
        var bandsInTown = "https://rest.bandsintown.com/artists/" + searchRequest + "/events?app_id=codingbootcamp"
        request(bandsInTown, function (error, response, body) {
        console.log("------------------------");
        var concertInfo = JSON.parse(body);
        console.log("Name of Venue: " + concertInfo[0].venue.name + "\nVenue Location: " + concertInfo[0].venue.city + "," + concertInfo[0].venue.region)
        console.log("Date of Event: " + moment(concertInfo[0].datetime).format("MM/DD/YYYY"));
        console.log("------------------------");
        })
    };


    function spotifyThisSong(searchRequest) {
        spotify.search({type: "track", query: searchRequest, limit: 2}, function(err, result) {
            if (err) {
              console.log("Error has occurred.");
            }
            console.log("------------------------")
            console.log("Artist: " + result.tracks.items[0].artists[0].name + "\nSong Name: " + result.tracks.items[0].name + "\nSong Link: " + result.tracks.href + "\nAlbum: " + result.tracks.items[0].album.name);
            console.log("------------------------");
          });
        };

    
    function movieThis(searchRequest) {
        var omdbURL = "http://www.omdbapi.com/?t=" + searchRequest + "&y=&plot=short&apikey=trilogy"
        request(omdbURL, function (error, response, body) {
        console.log("------------------------");
        var movieInfo =JSON.parse(body);
        console.log("Title: " + movieInfo.Title + "\nMovie Release Year: " + movieInfo.Year + "\nIMDB Rating: " + movieInfo.imdbRating + "\nRotten Tomatoes Rating: " + movieInfo.Ratings[1].Value + "\nCountry: " + movieInfo.Country + "\nLanguage: " + movieInfo.Language + "\nMovie Plot: " + movieInfo.Plot + "\nMovie Actors: " + movieInfo.Actors);
        console.log("------------------------");
        })
    };


    function doWhatItSays() {
        fs.readFile("random.txt", "utf8", function(error, data) {
            console.log(data);
            var dataArr = data.split(",");
            console.log("------------------------");
            spotifyThisSong(dataArr[1]);
            console.log("------------------------");
            movieThis(dataArr[3]);
            console.log("------------------------");
            concertThis(dataArr[5]);
            console.log("------------------------");
          });
    }