const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destination_model = new Schema({
  name : String,
  image : [String],
  description : String,
  place : [{
    type : Schema.Types.ObjectId,
    ref : "place"
  }],
  duration : String,
  dificulty : String,
  age_group : String
});
module.exports = mongoose.model('destination', destination_model);


