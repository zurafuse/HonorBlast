const connection = require("./connection");

module.exports = function(app, callback){
	var studentModel = {
		players: [],
		prizes: [],
		trophies: [],
        activities: [],
        quests: []
	};
	
	//populate students/players
    connection.query("SELECT * FROM students WHERE parentid = 1", function (err, result, fields) {
        if (err) throw err;
        studentModel.players = result;
        populateStudentInfo();
    });

    var populateStudentInfo = () => {
        for (var i = 0; i < studentModel.players.length; i++) {
            //populate quests
            connection.query(`SELECT * FROM quests WHERE studentid = ${studentModel.players[i].id}`, (err, questResult, fields) => {
                if (err) throw err;
                for (var j = 0; j < questResult.length; j++) {
                    studentModel.quests.push(questResult[j]);
                }
            });
            /*populate student trophies
            connection.query(`SELECT * FROM studenttrophies WHERE studentid = ${studentModel.players[i].id}`, (err, trophyResult, fields) => {
                if (err) throw err;
                studentModel.trophies.push(trophyResult);
            });
            //populate student prizes
            connection.query(`SELECT * FROM studentprizes WHERE studentid = ${studentModel.players[i].id}`, (err, prizeResult, fields) => {
                if (err) throw err;
                studentModel.prizes.push(prizeResult);
            });
            //populate activities
            connection.query(`SELECT * FROM activities WHERE studentid = ${studentModel.players[i].id}`, (err, actResult, fields) => {
                if (err) { throw err; }
                else { studentModel.activities.push(actResult); }
            });*/
        }
    }

	//populate prizes
    try {
        connection.query('SELECT * from prizes WHERE parentid = 1', function (err, result, fields) {
            if (err) { throw err; }
            else { studentModel.prizes = result; }
        });
    }
    catch (err) {
        console.log(err);
    }
	//populate trophies
       try {
           connection.query('SELECT * from trophies WHERE parentid = 1', function (err, result, fields) {
               if (err) { throw err; }
               else { studentModel.trophies = result; }
           });
       }
       catch (err) {
           console.log(err);
       }

	callback(studentModel);
};

