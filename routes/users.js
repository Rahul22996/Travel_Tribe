var express = require('express');
var router = express.Router();
let userController = require('../controller/userController')
let showController = require('../controller/show_controller');

/* GET users listing. */
router.post('/signup', userController.Signup);
router.post('/login', userController.Login);

router.post('/adduser_cart/:id/:uid', showController.add_destination);
router.post('/add_place/:id', showController.add_places);
router.post('/add_hotel/:id', showController.add_hotels);
router.post('/add_activity/:id', showController.add_activities);
router.post('/add_transport/:id', showController.add_transport);

router.post('/like_trip/:tid', showController.like_trip);

module.exports = router;
