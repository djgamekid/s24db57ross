var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var rectangle_controller = require('../controllers/rectangles');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Rectangle ROUTES ///
// POST request for creating a Rectangle.
router.post('/rectangles', rectangle_controller.rectangle_create_post);
// DELETE request to delete Rectangle.
router.delete('/rectangles/:id', rectangle_controller.rectangle_delete);
// PUT request to update Rectangle.
router.put('/rectangles/:id', rectangle_controller.rectangle_update_put);
// GET request for one Rectangle.
router.get('/rectangles/:id', rectangle_controller.rectangle_detail);
// GET request for list of all Rectangle items.
router.get('/rectangles', rectangle_controller.rectangle_list);
module.exports = router;
