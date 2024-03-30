const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const place_model = new Schema({
  name : String,
  destination : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'destination'
  },
  image : [String],
  description : String,
  hotel : [{
    type : Schema.Types.ObjectId,
    ref : "hotel"
  }],
  activity : [{
    type : Schema.Types.ObjectId,
    ref : "activity"
  }],
  days : Number,
  rating : Number,
  description : String
});
module.exports = mongoose.model('place', place_model); 