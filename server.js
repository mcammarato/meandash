var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    User            = require('./server/models/User.model');
    

// Connect to DB 
mongoose.connect('mongodb://localhost:27017/meandash');

// Body Parser
app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

// Partials
app.use(express.static('client/partials'));

// Node Modules
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/open-sans', express.static(__dirname + '/node_modules/npm-font-open-sans/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route/'));
app.use('/angular-resource', express.static(__dirname + '/node_modules/angular-resource/'));
app.use('/jquery-validation', express.static(__dirname + '/node_modules/jquery-validation/dist/'));
app.use('/hovercss', express.static(__dirname + '/node_modules/hover.css/css'));

// Shorten Paths
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/font', express.static(__dirname + '/client/font'));

// Root index page
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

// REST API //

// Get all users
app.get('/api/users', function(req, res) {
  console.log('Getting all users');
  User.find({})
  .exec(function(err, results) {
    if (err)
    {
      res.send('error has occured');
    }
    else
    {
      console.log(results);
      res.json(results);
    }
  });
});

// Get specific user
app.get('/api/users/:id', function(req,res) {
  console.log('getting one book');
  User.findOne({
    _id: req.params.id
  })
  .exec(function (err, User) {
    if (err)
    {
      res.send('error has occured');
    }
    else
    {
      console.log('Users loaded sucessfully');
      res.json(User);
    }
  })
})

// Add a new user 

app.post('/api/users', function(req, res) {
  var newUser = new User();

  newUser.name = req.body.name;
  newUser.username = req.body.username;
  newUser.password = req.body.password;

  newUser.save(function(err, user) {
    if (err)
    {
      console.log('Error creating user');
    }
    else
    {
      console.log('User created sucessfully!');
      res.send(user);
    }
  })
})

// Update User
app.put('/api/users/:id', function(req, res) {
  User.findOneAndUpdate({
    _id: req.params.id
    },
    { $set: { name: req.body.name }
  }, {upsert: true}, function(err, newUser) {
    if (err) 
    {
      res.send('error updating ');
    } else {
      console.log(newUser);
      res.send(newUser);
    }
  });
});

// Delete User
app.delete('/api/users/:id', function(req, res) {
  User.findOneAndRemove({
    _id: req.params.id
  }, function(err, book) {
    if(err) {
      res.send('error removing')
    } else {
      console.log(User);
      res.status(204);
    }
  });
});

// Node Server
app.listen(3000, function() {
  console.log('I\'m Listening');
});