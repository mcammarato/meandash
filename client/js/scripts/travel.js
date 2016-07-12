function calculate() {
    var airfare = document.getElementById('i1').value;
    var hotel = document.getElementById('i2').value;
    var food = document.getElementById('i3').value;
    var result = parseInt(airfare,10) + parseInt(hotel,10) + parseInt(food,10);
    document.getElementById('result').innerHTML = result;
  }