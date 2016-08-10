// Use this to insert test user
var User = require('../../server/models/User.model');
  
// create new user
var chris = new User({
  name: 'namey',
  username: 'mcnameface',
  password: 'password' 
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});