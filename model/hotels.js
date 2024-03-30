const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotel_model = new Schema({
  name : String,
  place : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'place'
  },
  image : [String],
  price : Number,
  description : String,
  reviews : String,
  ratings : Number
});
module.exports = mongoose.model('hotel', hotel_model);