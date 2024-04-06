var express = require('express');
const rectangle_controllers = require('../controllers/rectangles');
var router = express.Router();

/* GET home page. */
router.get('/', rectangle_controllers.rectangle_view_all_Page);

module.exports = router;
