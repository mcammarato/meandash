var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Book        = require('./Book.model');

mongoose.connect('mongodb://localhost:27017/caldwellMeetups');

app.use(bodyParser());

app.use(express.static('client/partials'));

// Middleware to cutout "client" in route calls
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/font', express.static(__dirname + '/client/font'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(3000, function() {
  console.log('I\'m Listening');
});