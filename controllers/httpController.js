const model = require("../model/model");

module.exports = function (app) {
    //home page
    model(app, (obj) => {
        app.get("/", (request, response) => {
            console.log(obj);
            response.render("index", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
        });
    })

    //quests
    model(app, (obj) => {
        app.get("/quests", (request, response) => {
            console.log(obj);
            response.render("quests", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
        });
    })

    //prizes
    model(app, (obj) => {
        app.get("/prizes", (request, response) => {
            console.log(obj);
            response.render("prizes", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
        });
    })
	
    //trophies
    model(app, (obj) => {
        app.get("/trophies", (request, response) => {
            console.log(obj);
            response.render("trophies", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
        });
    })
	
    //activities
    model(app, (obj) => {
        app.get("/activities", (request, response) => {
            console.log(obj);
            response.render("activities", { INFO: obj, DATE: (new Date().getYear()) + 1900 });
        });
    })
};