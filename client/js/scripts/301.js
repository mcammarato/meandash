// Grab the first player's name and put it into main box

var firstnameLeft;
/*function nameFunctionLeft() {

    firstnameLeft = document.getElementById('nameOne').value;
    document.getElementById('playerOne').innerHTML = firstnameLeft;

    // Hide enterInfo div
     $('#enterinfoLeft').hide();
}*/

  // Grab second player's name and put it into main box

var firstnameRight;
function nameFunctionRight() {

    firstnameRight = document.getElementById('nameTwo').value;
    document.getElementById('playerTwo').innerHTML = firstnameRight;

    // Hide enterInfo div
     $('#enterinfoRight').hide();
}

  // 301 Math Player 1

  var firstThrow;
  var secondThrow;
  var thirdThrow;
  var roundTotal;
  var start = 301;

  function threeZeroOneCalc() {

    // Player 1 Assign values of inputs to variables
    firstThrow = document.getElementById('p1firstThrow').value;
    secondThrow = document.getElementById('p1secondThrow').value;
    thirdThrow = document.getElementById('p1thirdThrow').value;

    roundTotal = parseInt(firstThrow,10) + parseInt(secondThrow,10) + parseInt(thirdThrow,10);

    start -= roundTotal;

    document.getElementById('score').innerHTML = start;

  if (start < 0)
      {
        $('#bust').show();
        document.getElementById('bust').innerHTML = firstnameLeft + " " + "loses!";
      }
  else if (start == 0)
      {
        $('#win').show();
        document.getElementById('win').innerHTML = firstnameLeft +" " + "Wins!";
      }
  else
      {

      }
  }
// 301 Math Player 2

  var p2firstThrow;
  var p2secondThrow;
  var p2thirdThrow;
  var p2roundTotal;
  var p2start = 301;

function threeZeroOneCalcRight() {

    // Player 2 Assign values of inputs to variables
    p2firstThrow = document.getElementById('p2firstThrow').value;
    p2secondThrow = document.getElementById('p2secondThrow').value;
    p2thirdThrow = document.getElementById('p2thirdThrow').value;

    p2roundTotal = parseInt(p2firstThrow,10) + parseInt(p2secondThrow,10) + parseInt(p2thirdThrow,10);

    p2start -= p2roundTotal;

    document.getElementById('scoreRight').innerHTML = p2start;

  if (p2start < 0)
      {
        $('#bustRight').show();
        document.getElementById('bustRight').innerHTML = firstnameRight + " " + "Loses!";
      }
  else if (p2start == 0)
      {
        $('#winRight').show();
        document.getElementById('winRight').innerHTML = firstnameRight +" " + "Wins!";
      }
  else
      {

      }
  }
