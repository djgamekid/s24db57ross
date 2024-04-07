var express = require('express');
const rectangle_controllers = require('../controllers/rectangles');
var router = express.Router();

/* GET home page. */
router.get('/', rectangle_controllers.rectangle_view_all_Page);

/* GET detail rectangle page */
router.get('/detail', rectangle_controllers.rectangle_view_one_Page);

/* GET create rectangle page */
router.get('/create', rectangle_controllers.rectangle_create_Page);

/* GET create update page */
router.get('/update', rectangle_controllers.rectangle_update_Page);


module.exports = router;
