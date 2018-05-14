
//variables 
var number = 0;
var wins = 0;
var losses = 0;
var playerNum = 0;

//starting the game the scores and numbers should be reset to default

//a random number is generated and displayed in the lower box by the score

$("#number-box1").on("click", function(){
    var minNumber = 19;
    var maxNumber = 120;
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    $(this).html(randomNumber);
    console.log(randomNumber);
});

//each crystal is given a value between 1 and 12 and generates a new value randomaly at the beginning of every game

//player clicks on each crystal to and the value is added to the bottom number

//if player's total matches the generated one then they win

//if players total goes over then they lose

