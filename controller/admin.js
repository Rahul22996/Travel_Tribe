let DESTINATION = require('../model/destintation');
let PLACE = require('../model/place');
let HOTEL = require('../model/hotels');
let ACTIVITY = require('../model/activity');
let TRIP = require('../model/trip');
let TRANSPORT = require('../model/transport');
let DAY = require('../model/trip_day');

exports.add_destination = async function (req, res, next) {
    try {
        req.body.image = req.files.map(file => file.filename);

        if (!req.body.name || !req.body.image || !req.body.description) {
            throw new Error("Enter Valid Fields");
        }
        const data = await DESTINATION.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Destination Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.show_destination = async function (req, res, next) {
    try {

        const data = await DESTINATION.find()

        res.status(200).json({
            status: "Success",
            message: "All Destinations",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

exports.update_destination = async function (req, res, next) {
    const id = req.params.id;
    const data = await DESTINATION.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        status: "Success",
        message: "Destination Details Updated",
        data: data
    })

}

exports.delete_destination = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await DESTINATION.findByIdAndDelete(id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Destination Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

/* Place Controller */
exports.add_place = async function (req, res, next) {
    try {
        req.body.image = req.files.map(file => file.filename);

        if (!req.body.name || !req.body.destination || !req.body.image) {
            throw new Error("Enter valid Field");
        }

        const data = await PLACE.create(req.body);

        res.status(200).json({
            status: "Success",
            message: "Place Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.show_place = async function (req, res, next) {
    try {

        const data = await PLACE.find().populate('destination').populate('hotel').populate('activity');
        console.log(data);
        res.status(200).json({
            status: "Success",
            message: "All places",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.update_place = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await PLACE.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Place Updated",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: "Fail to Update"
        })
    }
}

exports.delete_place = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await PLACE.findByIdAndDelete(id);

        res.status(200).json({
            status: "Success",
            message: "Place Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: "Fail to Delete"
        })
    }
}

/* Hotel Controller */
exports.add_hotel = async function (req, res, next) {
    try {
        req.body.image = req.files.map(file => file.filename);

        if (!req.body.name || !req.body.image || !req.body.price) {
            throw new Error("Enter Valid Fields");
        }
        const data = await HOTEL.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Hotel Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.show_hotel = async function (req, res) {
    const data = await HOTEL.find().populate('place');

    res.status(200).json({
        status: "Success",
        message: "All Hotels",
        data: data
    })
}

exports.update_hotel = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await HOTEL.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Hotel Data Updeted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

exports.delete_hotel = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await HOTEL.findByIdAndDelete(id);

        res.status(200).json({
            status: "Success",
            message: "Hotel Data Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

/* Activity Controller */
exports.add_activity = async function (req, res, next) {
    try {
        req.body.image = req.file.filename;

        if (!req.body.name || !req.body.image || !req.body.destination) {
            throw new Error("Enter Valid Fields");
        }
        const data = await ACTIVITY.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Activity Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.show_activity = async function (req, res) {
    const data = await ACTIVITY.find().populate('destination');

    res.status(200).json({
        status: "Success",
        message: "All Activities",
        data: data
    })
}

exports.update_activity = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await ACTIVITY.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Activity Data Updeted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

exports.delete_activity = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await ACTIVITY.findByIdAndDelete(id);

        res.status(200).json({
            status: "Success",
            message: "Activity Data Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

/* Trip Controller */
exports.add_trip = async function (req, res, next) {
    try {
        // req.body.photo = req.file.originalname

        const data = await TRIP.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Trip Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.show_trip = async function (req, res) {
    let id = req.params.id
    const data = await TRIP.findById(id).populate(['day1', 'day2', 'day3', 'day4', 'day5', 'day6']);
console.log(data);
    res.status(200).json({
        status: "Success",
        message: "Trip Data",
        data: data
    })
}

exports.update_trip = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await TRIP.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Activity Data Updeted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

exports.delete_trip = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await TRIP.findByIdAndDelete(id);

        res.status(200).json({
            status: "Success",
            message: "Activity Data Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

/* Transport Controller */
exports.add_transport = async function (req, res, next) {
    try {

        const data = await TRANSPORT.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Activity Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.show_transport = async function (req, res) {
    let id = req.params.id
    const data = await TRANSPORT.findOne({ "destination": id });

    res.status(200).json({
        status: "Success",
        message: "All Activities",
        data: data
    })
}

exports.showall_transport = async function (req, res) {
    // let id = req.params.id
    const data = await TRANSPORT.find().populate('destination')

    res.status(200).json({
        status: "Success",
        message: "All Activities",
        data: data
    })
}

exports.update_transport = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await TRANSPORT.findByIdAndUpdate(id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Activity Data Updeted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

exports.delete_transport = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await TRANSPORT.findByIdAndDelete(id);

        res.status(200).json({
            status: "Success",
            message: "Activity Data Deleted",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail"
        })
    }
}

exports.add_day = async function (req, res, next) {
    try {
        const data = await DAY.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Days Data Added",
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}