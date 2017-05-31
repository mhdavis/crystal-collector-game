$(document).ready(function () {

/*
Things we need:
userSum
guessValue
totalsWins
totalLoses


*/

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
    
  });

}); // end document.ready


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
