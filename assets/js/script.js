$(document).ready(function () {

/*
Things we need:
userSum
guessValue
totalsWins
totalLoses

*/

let winNum = 0;
$("wins").html(winNum);
let loseNum = 0;
$("losses").html(loseNum);

startGame();

function startGame () {
  let userSum = 0;
  let guessValue = randomIntFromInterval(1, 100);

  let randomNumOne = randomIntFromInterval(1, 10);
  let randomNumTwo = randomIntFromInterval(10, 20);
  let randomNumThree = randomIntFromInterval(20, 30);
  let randomNumFour = randomIntoFromInterval(30, 50);
  let randomNumArray = [randomNumOne, randomNumTwo, randomNumThree, randomNumFour];
}
  $("jewel-one").on("click", function () {
    userSum += randomNumOne;
  });

  $("jewel-two").on("click", function () {
    userSum += randomNumTwo;
  });

  $("jewel-three").on("click", function () {
    userSum += randomNumThree;
  });

  $("jewel-four").on("click", function () {
    userSum += randomNumFour;
  });

  if (userSum === guessValue) {

    winNum++;
    $("jewel-one").off('click');
    $("jewel-two").off('click');
    $("jewel-three").off('click');
    $("jewel-four").off('click');

    randomNumOne = randomIntFromInterval(1, 10);
    randomNumTwo = randomIntFromInterval(10, 20);
    randomNumThree = randomIntFromInterval(20, 30);
    randomNumFour = randomIntoFromInterval(30, 50);

    return $("#wins").html(winNum);

  } else if (userSum > guessValue) {

    loseNum++;
    $("jewel-one").off('click');
    $("jewel-two").off('click');
    $("jewel-three").off('click');
    $("jewel-four").off('click');

    randomNumOne = randomIntFromInterval(1, 10);
    randomNumTwo = randomIntFromInterval(10, 20);
    randomNumThree = randomIntFromInterval(20, 30);
    randomNumFour = randomIntoFromInterval(30, 50);

    return $("#losses").html(loseNum);
  }

}); // end document.ready


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
