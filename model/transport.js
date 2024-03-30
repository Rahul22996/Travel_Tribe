const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transport_model = new Schema({
  destination : {
    type : Schema.Types.ObjectId,
    ref : 'destination'
  },
  cab : Number,
  local : Number,
  self_drive : Number
});
module.exports = mongoose.model('transport', transport_model);