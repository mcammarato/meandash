var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-warmup');

app.use(express.static('client/partials'));

// Middleware to cutout "client" in route calls
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/font', express.static(__dirname + '/client/font'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

// app.get('/main', function(req, res) {
//   res.sendFile(__dirname + '/client/partials/main.html');
// });

app.listen(3000, function() {
  console.log('I\'m Listening');
});