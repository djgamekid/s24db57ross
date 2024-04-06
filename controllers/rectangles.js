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
// Handle Costume create on POST.
exports.rectangle_create_post = async function(req, res) {
console.log(req.body)
let document = new Rectangle();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"width":15.0, "height":8.0};
document.width = req.body.width;
document.height = req.body.height;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle Rectangle delete from on DELETE.
exports.rectangle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Rectangle delete DELETE ' + req.params.id);
};
// Handle Rectangle update form on PUT.
exports.rectangle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Rectangle update PUT' + req.params.id);
};
