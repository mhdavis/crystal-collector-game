$(document).ready(function () {

/*
Things we need:
userSum
guessValue
totalsWins
totalLoses

*/

let winNum = 0;
$("#wins").html(winNum);
let loseNum = 0;
$("#losses").html(loseNum);

startGame();

function startGame () {
  let userSum = 0;
  let guessValue = randomIntFromInterval(1, 100);

  let randomNumOne = randomIntFromInterval(1, 10);
  let randomNumTwo = randomIntFromInterval(10, 20);
  let randomNumThree = randomIntFromInterval(20, 30);
  let randomNumFour = randomIntFromInterval(30, 50);

  function reset () {
    if (userSum === guessValue) {
      console.log("entered win condition");
      winNum++;
      $("#jewel-one").off('click');
      $("#jewel-two").off('click');
      $("#jewel-three").off('click');
      $("#jewel-four").off('click');

      randomNumOne = randomIntFromInterval(1, 10);
      randomNumTwo = randomIntFromInterval(10, 20);
      randomNumThree = randomIntFromInterval(20, 30);
      randomNumFour = randomIntFromInterval(30, 50);
      $("#wins").html(winNum);


      return $("#wins").html(winNum);

    } else if (userSum > guessValue) {
      console.log("entered lose condition");
      loseNum++;
      $("#jewel-one").off('click');
      $("#jewel-two").off('click');
      $("#jewel-three").off('click');
      $("#jewel-four").off('click');

      randomNumOne = randomIntFromInterval(1, 10);
      randomNumTwo = randomIntFromInterval(10, 20);
      randomNumThree = randomIntFromInterval(20, 30);
      randomNumFour = randomIntFromInterval(30, 50);

      return $("#losses").html(loseNum);
    }
  }

  $("#display-value").html(guessValue);
  $("#player-value").html(userSum);

  $("#jewel-one").on("click", function () {
    userSum += randomNumOne;
    $("#player-value").html(userSum);
    reset();
  });

  $("#jewel-two").on("click", function () {
    userSum += randomNumTwo;
    $("#player-value").html(userSum);
    reset();
  });

  $("#jewel-three").on("click", function () {
    userSum += randomNumThree;
    $("#player-value").html(userSum);
    reset();
  });

  $("#jewel-four").on("click", function () {
    userSum += randomNumFour;
    $("#player-value").html(userSum);
    reset();
  });
}

}); // end document.ready


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
