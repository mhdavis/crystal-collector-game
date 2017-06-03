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
      winNum++;
      $("#blue-ranger-icon").off('click');
      $("#red-ranger-icon").off('click');
      $("#yellow-ranger-icon").off('click');
      $("#pink-ranger-icon").off('click');

      randomNumOne = randomIntFromInterval(1, 10);
      randomNumTwo = randomIntFromInterval(10, 20);
      randomNumThree = randomIntFromInterval(20, 30);
      randomNumFour = randomIntFromInterval(30, 50);
      $("#wins").html(winNum);


      return startGame();

    } else if (userSum > guessValue) {
      loseNum++;
      $("#blue-ranger-icon").off('click');
      $("#red-ranger-icon").off('click');
      $("#yellow-ranger-icon").off('click');
      $("#pink-ranger-icon").off('click');

      randomNumOne = randomIntFromInterval(1, 10);
      randomNumTwo = randomIntFromInterval(10, 20);
      randomNumThree = randomIntFromInterval(20, 30);
      randomNumFour = randomIntFromInterval(30, 50);
      $("#losses").html(loseNum);

      return startGame();
    }
  }

  $("#display-value").html(guessValue);
  $("#player-value").html(userSum);

  $("#blue-ranger-icon").on("click", function () {
    userSum += randomNumOne;
    $("#player-value").html(userSum);
    reset();
  });

  $("#red-ranger-icon").on("click", function () {
    userSum += randomNumTwo;
    $("#player-value").html(userSum);
    reset();
  });

  $("#yellow-ranger-icon").on("click", function () {
    userSum += randomNumThree;
    $("#player-value").html(userSum);
    reset();
  });

  $("#pink-ranger-icon").on("click", function () {
    userSum += randomNumFour;
    $("#player-value").html(userSum);
    reset();
  });
}

}); // end document.ready


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
