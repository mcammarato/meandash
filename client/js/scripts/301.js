function threeZeroOne() {
  var firstThrow = document.getElementById('t1').value;
  var secondThrow = document.getElementById('t2').value;
  var thirdThrow = document.getElementById('t3').value;
  var total = parseInt(firstThrow,10) + parseInt(secondThrow,10) + parseInt(thirdThrow,10);
  document.getElementById('total').innerHTML = total;
}