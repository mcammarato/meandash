// Use this to insert test user
var User = require('../../server/models/User.model');
  
// create new user
var namey = new User({
  name: 'namey',
  username: 'mcnameface',
  password: 'password' 
});

// Save user 
namey.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});