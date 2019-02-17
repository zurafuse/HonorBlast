module.exports = function(app, obj){
	app.get("/", (request, response) => {
		console.log(obj);
		response.render("index", {INFO: obj, DATE: (new Date().getYear()) + 1900});		
	});
};