const connection = require("./connection");
const httpController = require("../controllers/httpController");

module.exports = function(app){
	var studentModel = {
		loaded: false,
		players: [],
		prizes: [],
		trophies: [],
		activities: []
	};
	
		//populate students/players
		connection.query("SELECT * FROM students WHERE parentid = 1", function (err, result, fields) {
			if (err) throw err;
			studentModel.players = result;
			studentModel.players.trophies = [];
			studentModel.players.prizes = [];
			studentModel.players.quests = [];
			
			for (var i = 0; i < result; i++){
				//populate quests
				connection.query(`SELECT * FROM quests WHERE studentid = ${result[i].id}`, (errB, questResult, fields) => {
					if (errB) throw errB;
					studentModel.quests.push(questResult);
				});
			}
			
			for (var i = 0; i < result; i++){
				//populate student trophies
				connection.query(`SELECT * FROM studenttrophies WHERE studentid = ${result[i].id}`, (errB, trophyResult, fields) => {
					if (errB) throw errB;
					studentModel.trophies.push(trophyResult);
				});
			}
			for (var i = 0; i < result; i++){
				//populate student prizes
				connection.query(`SELECT * FROM studentprizes WHERE studentid = ${result[i].id}`, (errB, prizeResult, fields) => {
					if (errB) throw errB;
					studentModel.prizes.push(prizeResult);
				});
			}
		});
		/*
		//populate prizes
		connection.query("SELECT * from prizes WHERE parentid = 1", function (err, result, fields) {
			if (err) throw err;
			studentModel.prizes = result;
		});
		
		//populate trophies
		connection.query("SELECT * from trophies WHERE parentid = 1", function (err, result, fields) {
			if (err) throw err;
			studentModel.trophies = result;
		});
		
			//populate activities
			connection.query("SELECT * FROM activities WHERE parentid = 1", (err, result, fields) => {
				if (err) throw err;
				studentModel.activities.push(result);
			});
		*/
		
		httpController(app, studentModel);
};

