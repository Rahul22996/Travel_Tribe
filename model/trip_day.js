const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const days_model = new Schema({
  mainplace : String,
  sub_place : [String],
  other_benifits : [String],
  description : String,
  image : String
});
module.exports = mongoose.model('trip_days', days_model);