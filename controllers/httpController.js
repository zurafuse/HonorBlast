const bodyParser = require("body-parser");
const model = require("../model/model");

module.exports = function (app) {
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	var obj = {};

	//home page login
    app.get("/", (request, response) => {
        response.render("index", { DATE: (new Date().getYear()) + 1900 });	
    });
	
	//Login home page
    app.post("/home", (request, response) => {
		model(app, {user: request.body.uname, pwd: request.body.psw}, (objectModel) => {
			response.render("loggedin", { DATE: (new Date().getYear()) + 1900 });
			obj = objectModel;
		});
			
	});	

	//home page
	app.get("/home", (request, response) => {
		response.render("home", { INFO: obj, DATE: (new Date().getYear()) + 1900 });	
	});
	
	//quests
	app.get("/quests", (request, response) => {
		response.render("quests", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
	});
	
	//prizes
	app.get("/prizes", (request, response) => {
		response.render("prizes", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
	});
	
	//trophies
	app.get("/trophies", (request, response) => {
		response.render("trophies", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
	});
	
	//activities
	app.get("/activities", (request, response) => {
		response.render("activities", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
	});
	
	//player
	app.get("/player/:id", (request, response) => {
		response.render("player", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
	});
	
	//player quests
	app.get("/player/:id/quests", (request, response) => {
		response.render("playerquests", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
	});
	
	//player trophies
	app.get("/player/:id/trophies", (request, response) => {
		response.render("playertrophies", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
	});
	
	//player prizes
	app.get("/player/:id/prizes", (request, response) => {
		response.render("playerprizes", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
	});
	
	//admin
	app.get("/admin", (request, response) => {
		response.render("adminindex", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
	});		
	
};
