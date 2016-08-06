var express     = require('express'),
    app         = express(),
    http        = require('http').Server(app),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Book        = require('./Book.model'),
    PythonShell = require('python-shell'),
    spawn       = require('child_process').spawn;


mongoose.connect('mongodb://localhost:27017/caldwellMeetups');

app.use(bodyParser());

app.use(express.static('client/partials'));

// Node Modules
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/open-sans', express.static(__dirname + '/node_modules/npm-font-open-sans/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route/'));

// Middleware to shorten paths
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/font', express.static(__dirname + '/client/font'));

// Root index page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

// Node Server
app.listen(3000, function() {
  console.log('I\'m Listening');
});

http.listen(3001, function(){
  console.log('Python listening on *:3000');
});