


//starting the game the scores and numbers should be reset to default
$(document).ready(function () {

    //variables 
    var wins = 0;
    var losses = 0;
    var playerNum = 0;
    var randomNumber = 0;
    var audio = new Audio("https://raw.githubusercontent.com/NathanNovak/unit-4-game/master/assets/Images/Ahh%20lower.wav");
    var audioLose = new Audio("https://raw.githubusercontent.com/NathanNovak/unit-4-game/master/assets/Images/fail-trombone-03.wav");
    var audioWin = new Audio("https://raw.githubusercontent.com/NathanNovak/unit-4-game/master/assets/Images/Ta%20Da.wav");

    start();

    //generates numbers for crystals and random number
    function start() {
        crystalNumbers();
        generateNumber();
        playerNum = 0;
        $("#number-box3").html(playerNum);
    }

    //a random number is generated and displayed in the lower box by the score
    function generateNumber() {
        var minNumber = 19;
        var maxNumber = 120;
        randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#number-box1").html(randomNumber);

    }

    //each crystal is given a value between 1 and 12 and generates a new value randomaly at the beginning of every game
    function crystalNumbers() {
        for (var i = 1; i <= 4; i++) {
            var crystalNumber = Math.floor(Math.random() * 11 + 1);
            $("#crystal-" + i).val(crystalNumber);
            console.log(crystalNumber);
        }
    }

    //player clicks on each crystal to and the value is added to the bottom number
    $(".crystal").on("click", function () {
        var crystalValue = $(this).val();
        // audio.play();
        playerNum = playerNum + parseInt(crystalValue);
        $("#number-box3").html(playerNum);
        //if player's total matches the generated one then they win

        //if players total goes over then they lose
        if (playerNum > randomNumber) {
            losses++
            var test = audioLose.play();
            $("#losses").html(losses);
            start();
        }
        if (playerNum === randomNumber) {
            wins++
            var test = audioWin.play();
            $("#wins").html(wins);
            start();
        }
        
    });

});













