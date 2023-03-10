const mongoose = require('mongoose');

// Define a Mongoose schema for a person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0 // Set a default value for age
  },
  favoriteFoods: {
    type: [String],
    default: [] // Set a default value for favoriteFoods
  }
});

// Create a Mongoose model for a person based on the personSchema
const Person = mongoose.model('Person', personSchema);

// Find a person by _id using Model.findById()
const personId = '602d97bbca1c401430b32c6d'; // Replace with your own _id value
Person.findById(personId, function(err, person) {
  if (err) {
    console.error(err);
  } else {
    console.log('Person with _id', personId + ':', person);
  }
});
