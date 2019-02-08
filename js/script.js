/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Everywhere", "1,000 Miles", "Genie in a Bottle", "Spice up your Life"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var albumCovers = ["https://i.jeded.com/i/michelle-branch-everywhere.154-26270.jpg", "https://img.discogs.com/Q0H2cyTCvUCnBTafOwgHVtr9apo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3373320-1505890212-7004.jpeg.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Genie_in_a_Bottle.png/220px-Genie_in_a_Bottle.png", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Spice_Up_Your_Life.jpg/220px-Spice_Up_Your_Life.jpg"];

var artists = ["Michelle Branch", "Vanessa Carlton", "Christina Aguilera", "Spice Girls"];

var songLengths = ["3:35","4:28", "3:36","3:06"];

var songLinks = ["https://www.youtube.com/watch?v=HLCasyAh7ic","https://www.youtube.com/watch?v=Cwkej79U3ek","https://img.discogs.com/Q0H2cyTCvUCnBTafOwgHVtr9apo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3373320-1505890212-7004.jpeg.jpg",
"https://www.youtube.com/watch?v=9wfpXI5PKlw"];



    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo(){
   songs.forEach(function(sickbeat){
       $("#songs").append('<p>'+ sickbeat+ " "+ '</p>');
   });
   
   albumCovers.forEach(function(image){
       $("#images").append(`<img src = "${image}">`);
   });
   
   artists.forEach(function(singer){
       $("#artists").append('<p>'+ singer+ " "+ '</p>');
   });
    
    songLengths.forEach(function(time){
        $("#lengths").append('<p>'+ time+ " "+ '</p>')
        
    });
    
    songLinks.forEach(function(link){
        $("#links").append(`<a href = "${link}">Listen Up Y'all</a>`)
        
    });
    
    
}


function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    
    // Use jQuery to empty all of the remaining divs


}

function addSongInfo(){
    var newSong = $("#song").val();
    songs.push(newSong);
    var newArtist = $("#artist").val();
    artists.push(newArtist);
    var newCover = $("#image")
    albumCovers.push(newCover);
    var newLength =$("#length").val();
    songLengths.push(newLength);
    var newLink =$("#link").val();
    songLinks.push(newLink);
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
