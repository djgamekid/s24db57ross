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

// Handle a show one view with id specified by query
exports.rectangle_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Rectangle.findById( req.query.id)
    res.render('rectangledetail',
    { title: 'Rectangle Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.rectangle_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('rectanglecreate', { title: 'Rectangle Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
// for a specific Rectangle.
exports.rectangle_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Rectangle.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle Rectangle create on POST.
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
exports.rectangle_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await Rectangle.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle Rectangle update form on PUT.
exports.rectangle_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Rectangle.findById( req.params.id)
// Do updates of properties
if(req.body.width)
toUpdate.width = req.body.width;
if(req.body.height) toUpdate.height = req.body.height;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
