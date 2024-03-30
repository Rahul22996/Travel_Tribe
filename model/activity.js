const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activity_model = new Schema({
  name : String,
  image : String,
  description : String,
  inclusion : String,
  duration : String,
  destination : {
    type : Schema.Types.ObjectId,
    ref : "destination"
  },
  price : String
});
module.exports = mongoose.model('activity', activity_model);