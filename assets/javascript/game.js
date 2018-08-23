//arrey
var randomResult;
var losses = 0;
var win = 0;
var previous = 0;


//computer number 19-120
//crystal ball 1-12
var restart = function () {

    $(".crystals").empty();

    var images = [
        '', 
        '',
        '',
        ''];

    //Random Galaxy Number
    randomResult = Math.floor(Math.random() * 101) + 19;

    $("#galaxy").html('Galaxy Number: ' + randomResult);


    //4 Crystal ball assign with random number
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;



        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
            "id" : 'crystal-' + i
        });

        // crystal.css({
        //     "background-image":"url('" + images[i] + "')",
        // })

        console.log(random);

        $(".crystals").append(crystal);
    }
}

restart();

var reset = function() {}

$(document).on('click', ".crystal", function () {
//$(."crystal").on('click'), function ()
//even Delegation



    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#player-score").html("Your Total Score: " + previous);

    // console.log(previous);

    if (previous > randomResult) {
        losses++;

        $("#lost").html("Losses: " + losses);

        previous = 0;

        restart();
    }
    else if (previous === randomResult) {
        win++;

        $("#win").html("Win: " + win);

        previous = 0;

        restart();
    }


});
//assign with a random number 1-12
//new set of number every game
//when crystal is click, the number will be added til it to evens with random number or over.
//if over ++lose
//if equal ++win

// $(document).ready(function() {
// var wins = 0;
// var losses= 0;
// var yourTotalScore = [];

// $('#crystal').on('click', function() {

//     alert('magic!');


// });