var express = require('express');
var router = express.Router();
const multer  = require('multer')

let adminController = require('../controller/admin');
let showController = require('../controller/show_controller');

/* Multer Storage */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

/* GET admins listing. */

router.post('/add_destination', upload.array('image', 5), adminController.add_destination);
router.get('/show_destination', adminController.show_destination);
router.patch('/update_destination/:id', adminController.update_destination);
router.delete('/delete_destination/:id', adminController.delete_destination);

router.post('/add_place', upload.array('image', 5), adminController.add_place);
router.get('/show_place', adminController.show_place);
router.patch('/update_place/:id', adminController.update_place);
router.delete('/show_place/:id', adminController.delete_place);

router.post('/add_hotel', upload.array('image', 5), adminController.add_hotel);
router.get('/show_hotel', adminController.show_hotel);
router.patch('/update_hotel/:id', adminController.update_hotel);
router.delete('/delete_hotel/:id', adminController.delete_hotel);

router.post('/add_activity', upload.single('image'), adminController.add_activity);
router.get('/show_activity', adminController.show_activity);
router.patch('/update_activity/:id', adminController.update_activity);
router.delete('/delete_activity/:id', adminController.delete_activity);

router.get('/view_place/:d_id', showController.show_places);
router.post('/view_hotel', showController.view_hotels);
router.post('/view_activity', showController.view_activity);

router.post('/add_trip', upload.single('photo'), adminController.add_trip);
router.get('/show_trip/:id', adminController.show_trip);
router.patch('/update_trip/:id', adminController.update_trip);
router.delete('/delete_trip/:id', adminController.delete_trip);

router.post('/add_transport', adminController.add_transport);
router.get('/show_transport/:id', adminController.show_transport);
router.get('/showall_transport', adminController.showall_transport);
router.patch('/update_transport/:id', adminController.update_transport);
router.delete('/delete_transport/:id', adminController.delete_transport);

router.get('/show_cart/:id', showController.show_cart);

router.post('/add_day', adminController.add_day);
// router.post('/add_static',upload.single('day1[0][photo]'),adminController.add_static)

module.exports = router;
