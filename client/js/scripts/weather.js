jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/bb2eae0cb8e12806/geolookup/conditions/q/NJ/Caldwell.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var zip = parsed_json['location']['zip'];
  var state = parsed_json['location']['state'];
  document.getElementById("temp").innerHTML = temp_f;
  document.getElementById("card1").innerHTML = location + "," + " " + state;
  //("Current temperature in " + location + " is: " + temp_f);

  }
  });
});