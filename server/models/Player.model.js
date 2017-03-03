// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var playerSchema = new Schema({
  lastName: { type: String, required: true },
  firstThrow: { type: String, required: true },
  secondThrow: { type: String, required: true },
  thirdThrow: { type: String, required: true },
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('Player', userSchema);

// make this available to our users in our Node applications
module.exports = User;