const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trip_model = new Schema({
    destination : String,
    tour_name : String,
    price : Number,
    duration : String,
     day1 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     }, 
     day2 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     }, 
     day3 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
     day4 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
     day5 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
     day6 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
     day7 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
     day8 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
     day9 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
     day10 : {
        type : Schema.Types.ObjectId,
        ref : "trip_days"
     },
    tour_type : String,
    batch_size : Number,
    age_group : String
    
});
module.exports = mongoose.model('trips', trip_model);
