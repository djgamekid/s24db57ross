var Rectangle = require('../models/rectangle');
// List of all rectangles
exports.rectangle_list = async function(req, res) {
    try{
    theRectangles = await Rectangle.find();
    res.send(theRectangles);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// // VIEWS
// Handle a show all view
exports.rectangle_view_all_Page = async function(req, res) {
    try{
    theRectangles = await Rectangle.find();
    res.render('rectangle', { title: 'Rectangle Search Results', results: theRectangles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
