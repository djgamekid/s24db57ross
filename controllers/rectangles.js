var Rectangle = require('../models/rectangle');
// List of all rectangles
exports.rectangle_list = function(req, res) {
res.send('NOT IMPLEMENTED: Rectangle list');
};
// for a specific Rectangle.
exports.rectangle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Rectangle detail: ' + req.params.id);
};
// Handle Rectangle create on POST.
exports.rectangle_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Rectangle create POST');
};
// Handle Rectangle delete from on DELETE.
exports.rectangle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Rectangle delete DELETE ' + req.params.id);
};
// Handle Rectangle update form on PUT.
exports.rectangle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Rectangle update PUT' + req.params.id);
};
