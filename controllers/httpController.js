const bodyParser = require("body-parser");
const model = require("../model/model");
const updatemodel = require("../model/updatemodel");
const addmodel = require("../model/addmodel");

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
			response.render("loggedin", {INFO: objectModel, DATE: (new Date().getYear()) + 1900 });
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

//PLAYER MANAGEMENT
	//admin
	app.get("/admin", (request, response) => {
		response.render("adminindex", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
	});		

	//admin player management
	app.get("/admin/player/:id", (request, response) => {
		response.render("adminplayer", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
	});
	
	//admin add new player
	app.get("/admin/newplayer", (request, response) => {
		response.render("newplayer", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
	});

	//admin player update
	app.post("/admin/update", (request, response) => {
		updatemodel(
			app, 
			{user: request.body.uname, pwd: request.body.psw, money: request.body.submitcoins,
				health: request.body.submithp, xp: request.body.submitxp, stars: request.body.submitstars, 
				name: request.body.submitname, nickname: request.body.submituser, rank: request.body.submitrank,
				studentid: request.body.studentid, img: request.body.submitimg, remove: request.body.submitdelete}, 
			(objectModel) => {		
		response.render("updatesuccessful", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
		obj = objectModel;
		});
	});
	
	//admin player add
	app.post("/admin/add", (request, response) => {
		addmodel(app, {user: request.body.uname, pwd: request.body.psw, money: request.body.submitcoins,
			health: request.body.submithp, xp: request.body.submitxp, stars: request.body.submitstars, 
			name: request.body.submitname, nickname: request.body.submituser, rank: request.body.submitrank,
			studentid: request.body.studentid, img: request.body.submitimg}, (objectModel) => {		
		response.render("updatesuccessful", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
		obj = objectModel;
		});
	});

//QUEST MANAGEMENT
    //admin quests
    app.get("/admin/quests", (request, response) => {
        response.render("adminquests", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
    });

    //admin quest management
    app.get("/admin/quests/:id", (request, response) => {
        response.render("managequest", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
    });

    //admin add new quest
    app.get("/admin/newquest", (request, response) => {
        response.render("newquest", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
    });

    //admin quest update
    app.post("/admin/quests/update", (request, response) => {
        updatemodel(
            app,
            {
                user: request.body.uname, pwd: request.body.psw, money: request.body.submitcoins,
                health: request.body.submithp, xp: request.body.submitxp, stars: request.body.submitstars,
                name: request.body.submitname, nickname: request.body.submituser, rank: request.body.submitrank,
                studentid: request.body.studentid, img: request.body.submitimg, remove: request.body.submitdelete
            },
            (objectModel) => {
                response.render("updatesuccessful", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
                obj = objectModel;
            });
    });

    //admin quest add
    app.post("/admin/quests/add", (request, response) => {
        addmodel(app, {
            user: request.body.uname, pwd: request.body.psw, money: request.body.submitcoins,
            health: request.body.submithp, xp: request.body.submitxp, stars: request.body.submitstars,
            name: request.body.submitname, nickname: request.body.submituser, rank: request.body.submitrank,
            studentid: request.body.studentid, img: request.body.submitimg
        }, (objectModel) => {
            response.render("updatesuccessful", { INFO: obj, DATE: (new Date().getYear()) + 1900, ID: request.params.id });
            obj = objectModel;
        });
    });

	
};
