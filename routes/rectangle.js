var express = require('express');
const rectangle_controllers = require('../controllers/rectangles');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET home page. */
router.get('/', rectangle_controllers.rectangle_view_all_Page);

/* GET detail rectangle page */
router.get('/detail', rectangle_controllers.rectangle_view_one_Page);

/* GET create rectangle page */
router.get('/create', rectangle_controllers.rectangle_create_Page);

/* GET create update page */
router.get('/update', secured, rectangle_controllers.rectangle_update_Page);

/* GET delete rectangle page */
router.get('/delete', rectangle_controllers.rectangle_delete_Page);

module.exports = router;
