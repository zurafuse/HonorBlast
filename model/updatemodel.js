
module.exports = function (app, login, callback) {
	
	console.log(login.money);
	
	const con = require("../model/connection");
	var connection = con(login.user, login.pwd);
	
	function handleDisconnect(conn) {
		conn.on('error', function (err) {
			if (!err.fatal) {
				return;
			}
	
			if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
				throw err;
				conn.release();
			}
	
			console.log('Re-connecting lost connection: ' + err.stack);
			connection = mysql.createConnection(conn.config);
			handleDisconnect(connection);
			connection.connect();
		});
	}
	
	handleDisconnect(connection);
	
	connection.connect(function (err) {
		if (!err) {
			console.log("Database is connected");
		} else {
			console.log("Error connecting database ... nn");
		}
	});	
	

	var studentModel = {
		players: [],
		prizes: [],
		trophies: [],
        activities: [],
        quests: [],
        studenttrophies: [],
        studentprizes: []
    };

    var populateStudentInfo = () => {
        for (var i = 0; i < studentModel.players.length; i++) {
            //populate quests
            connection.query(`SELECT * FROM quests WHERE studentid = ${studentModel.players[i].id}`, (err, questResult, fields) => {
                if (err) throw err;
                for (var j = 0; j < questResult.length; j++) {
                    studentModel.quests.push(questResult[j]);
                }
            });
            //populate student trophies
            connection.query(`SELECT * FROM studenttrophies WHERE student = ${studentModel.players[i].id}`, (err, trophyResult, fields) => {
                if (err) throw err;
                for (var j = 0; j < trophyResult.length; j++) {
                    studentModel.studenttrophies.push(trophyResult[j]);
                }
            });
            //populate student prizes
            connection.query(`SELECT * FROM studentprizes WHERE student = ${studentModel.players[i].id}`, (err, prizeResult, fields) => {
                if (err) throw err;
                for (var j = 0; j < prizeResult.length; j++) {
                    studentModel.studentprizes.push(prizeResult[j]);
                }
            });

            //populate activities
            connection.query(`SELECT description, DATE_FORMAT(adate, '%m/%d/%Y %H:%i') as 'date' FROM activities WHERE studentid = ${studentModel.players[i].id}`, (err, activityResult, fields) => {
                if (err) throw err;
                for (var j = 0; j < activityResult.length; j++) {
                    studentModel.activities.push(activityResult[j]);
                }
            });
        }
    }

    var populateArrays = () => {
        //populate students/players
        connection.query("SELECT * FROM students WHERE parentid = 1", function (err, result, fields) {
            if (err) throw err;
            studentModel.players = result;
            populateStudentInfo();
        });

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
    };
	
    populateArrays();
    callback(studentModel);
};
