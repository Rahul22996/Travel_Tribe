var destination = require("../model/destintation")
var hotel = require("../model/hotels")
var placess = require("../model/place");
const trip = require("../model/trip");
var cart = require('../model/userCart')
// var jwt = require('jsonwebtoken');

exports.add_destination = async (req, res) => {

    // var uid = await jwt.verify(req.headers.token, 'pass');   
    // req.body.uid = uid.id
    var userid = req.params.uid
    var did = req.params.id;
    req.body.destination = did;
    const select = await cart.findOneAndUpdate(
        { "uid": userid }, // Search criteria
        req.body, // New data to update
        { new: true } // To return the updated document
    );
    res.status(201).json({
        status: "Success",
        message: "add to destination",
        select
    })
 
}

exports.show_places = async (req, res) => {

    var d_id = req.params.d_id

    var places = await destination.findById(d_id)
    console.log(places.place);
    var aaa = places.place.length
   var place = places.place
//    console.log(place)
    // console.log(aaa)
    for(var i=0; i<aaa; i++){

        var placeee = placess.findById(place[i])
        console.log(placeee.schema.obj)

    }
    var place = places.place
    var data = place[0].name
    res.status(201).json({
        status: "Success",
        message: "Places to Visit",
        place
    })
}

exports.add_places = async (req, res) => {

    var userid = req.params.id
    var select = await cart.findOneAndUpdate({"uid":userid}, req.body)
    res.status(201).json({
        status: "Success",
        message: "Places Added by User",
        select
    })
}

exports.view_hotels = async (req, res) => {

    var pid = req.body.pid
    var hotels = []
    for (var p_id of pid) {
        var data = await places.findById(p_id).populate("hotel")
        hotels.push(data)
    }

    res.status(201).json({
        status: "Success",
        message: "Hotels to Checkout",
        hotels
    })
}

exports.add_hotels = async (req, res) => {

    var userid = req.params.id
    var select = await cart.findOneAndUpdate({"uid":userid},req.body)

    res.status(201).json({
        status: "Success",
        message: "Hotels Added by User",
        select
    })
}

exports.view_activity = async (req, res) => {

    var pid = req.body.pid
    var activity = []
    for (var p_id of pid) {
        var data = await places.findById(p_id).populate("activity")
        activity.push(data)
    }


    res.status(201).json({
        status: "Success",
        message: "Fun Activities",
        activity
    })
}

exports.add_activities = async (req, res) => {

    var userid = req.params.id
    var select = await cart.findOneAndUpdate({"uid":userid},req.body)
    res.status(201).json({
        status: "Success",
        message: "Activities Added by User",
        select
    })
}

exports.show_cart = async (req, res) => {

    var userid = req.params.id
    
    var data = await cart.findOne({ "uid": userid }).populate('destination', 'place', 'hotel', 'activity')
    console.log(data[0]);
    res.status(201).json({
        status: "Success",
        message: "User Cart",
        data
    })
}

exports.add_transport = async (req, res) => {

    var userid = req.params.id
    var select = await cart.findOneAndUpdate({"uid":userid},req.body)
    res.status(201).json({
        status: "Success",
        message: "Transport Added",
        select
    })
}

exports.like_trip = async function (req, res, next) {
    try {
        let uid = await jwt.verify(req.headers.token, 'pass')
        var id = uid.id
        var tid = req.params.tid
        let data = await trip.findById(tid)

        var like = data.like
        console.log(like);
        if (!like.includes(id)) {
            like.push(id)
        }
        else {
            var new_like = []
            for (let likes of like) {
                if (likes == id) {
                    null
                }
                else {
                    new_like.push(likes)
                }
            }
            like = new_like
        }
        var count = await trip.findByIdAndUpdate(tid, { "like": like })
        res.status(200).json({
            status: "Success",
            message: "like added",
            count
        })
    }

    catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}