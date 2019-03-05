
module.exports = function (app, login, callback) {
		
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
		parentid: -1,
		players: [],
		prizes: [],
		trophies: [],
        activities: [],
        quests: [],
        studenttrophies: []
    };
	
	var getStarted = () => {
        connection.query(`SELECT * FROM users WHERE email = "${login.user}"`, (err, result, fields) => {
			if (err){
				throw err;
			}
			else {
				studentModel.parentid = result[0].id;
				doDeletes();
			}
		});	
	}
	
	var doDeletes = () => {
        if (login.remove == "true") {
            if (login.type == "quest") {
                connection.query(`DELETE FROM quests WHERE id = ${login.quest};`, (err, result, fields) => {
                    if (err) throw err;
                });
            }
            if (login.type == "prize") {
                connection.query(`DELETE FROM prizes WHERE id = ${login.prize};`, (err, result, fields) => {
                    if (err) throw err;
                });
            }
            if (login.type == "trophy") {
                connection.query(`DELETE FROM trophies WHERE id = ${login.trophy};`, (err, result, fields) => {
                    if (err) throw err;
                });
            }
            else {
			connection.query(`DELETE FROM students WHERE id = ${login.studentid};`, (err, result, fields) => {
				if (err) throw err;			
                });
            }
		}
		makeChanges();
	};
	
	var makeChanges = () => {
		var changes = login;
        var charImage = changes.img;

        if (changes.type == "quest") {
            changes.questName = changes.questName.replace("'", "''");
            changes.questDescription = changes.questDescription.replace("'", "''");

            //update changes for quest          
            if (changes.questName != "default") {
                connection.query(`UPDATE quests SET name = '${changes.questName}' WHERE id = ${changes.quest};`, (err, result, fields) => {
                    if (err) throw err;
                });
            }  
            if (changes.questDescription != "default") {
                connection.query(`UPDATE quests SET description = '${changes.questDescription}' WHERE id = ${changes.quest};`, (err, result, fields) => {
                    if (err) throw err;
                });
            } 
            if (changes.studentid != "default") {
                connection.query(`UPDATE quests SET studentid = ${changes.studentid} WHERE id = ${changes.quest};`, (err, result, fields) => {
                    if (err) throw err;
                });
            } 
            if (changes.complete == "true") {
                connection.query(`UPDATE quests SET complete = 1 WHERE id = ${changes.quest};`,
                    (err, result, fields) => {
                    if (err) throw err;
                });
                connection.query(`INSERT INTO activities(studentid, description, adate)VALUES(${changes.studentid}, '${changes.studentname} has completed the ${changes.questName} Task and has won these prizes: ${changes.prizes}.', 
                    CURDATE());`, (err, result, fields) => {
                        if (err) throw err;
                    });
            }
            if (changes.prizes != "default") {
                connection.query(`UPDATE quests SET prizes = '${changes.prizes}' WHERE id = ${changes.quest};`, (err, result, fields) => {
                    if (err) throw err;
                });
            }
        }

        else if (changes.type == "prize") {
            changes.prizeName = changes.prizeName.replace("'", "''");
            changes.prizeDescription = changes.prizeDescription.replace("'", "''");

            //update changes for prize          
            if (changes.prizeName != "default") {
                connection.query(`UPDATE prizes SET name = '${changes.prizeName}' WHERE id = ${changes.prize};`, (err, result, fields) => {
                    if (err) { throw err; }
                });
            }
            if (changes.prizeDescription != "default") {
                connection.query(`UPDATE prizes SET description = '${changes.prizeDescription}' WHERE id = ${changes.prize};`, (err, result, fields) => {
                    if (err) { throw err; }
                });
            }
            if (changes.cost != "default") {
                connection.query(`UPDATE prizes SET cost = ${changes.cost} WHERE id = ${changes.prize};`, (err, result, fields) => {
                    if (err) { throw err; }
                });
            }
        }

        else if (changes.type == "trophy") {
            changes.trophyDescription = changes.trophyDescription.replace("'", "''");
			changes.award = changes.award.replace("'", "''");

            //update changes for trophy          
            if (changes.trophyDescription != "default") {
                connection.query(`UPDATE prizes SET description = '${changes.trophyDescription}' WHERE id = ${changes.trophy};`, (err, result, fields) => {
                    if (err) { throw err; }
                });
            }
            //award trophy to a user          
            if (changes.assigned != "default") {
			connection.query(`INSERT INTO studenttrophies(student, trophy, details)VALUES(${changes.assigned}, ${changes.trophy},'${changes.award}');`, (err, result, fields) => {
                    if (err) { throw err; }
                });
            connection.query(`INSERT INTO activities(studentid, description, adate)VALUES(${changes.assigned}, 'The Trophy -${changes.trophyDescription}- has been awarded to Student ID ${changes.assigned}.', 
                CURDATE());`, (err, result, fields) => {
                    if (err) throw err;
                });
            }
			
        }

        else {
		    //update changes for players	
		    if (changes.money != "default"){
		    	connection.query(`UPDATE students SET money = ${changes.money} WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;				
		    	});
		    	
		    }
		    if (changes.health != "default"){
		    	connection.query(`UPDATE students SET health = ${changes.health} WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;
		    	});			
		    }
		    if (changes.xp != "default"){
		    	connection.query(`UPDATE students SET xp = ${changes.xp} WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;
		    	});			
		    }
		    if (changes.stars != "default"){
		    	connection.query(`UPDATE students SET stars = ${changes.stars} WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;
		    	});			
		    }
		    if (changes.name != "default"){
		    	connection.query(`UPDATE students SET name = '${changes.name}' WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;
		    	});			
		    }
		    if (changes.nickname != "default"){
		    	connection.query(`UPDATE students SET username = '${changes.nickname}' WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;
		    	});			
		    }
		    if (changes.rank != "default"){
		    	connection.query(`UPDATE students SET title = '${changes.rank}' WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;
		    	});			
		    }
		    if (charImage != "default"){
		    	connection.query(`UPDATE students SET img = '${charImage}' WHERE id = ${login.studentid};`, (err, result, fields) => {
		    		if (err) throw err;
		    	});		
            }
        }
		populateArrays();	
	};
	
    var populateArrays = () => {		
        //populate students/players
        connection.query(`SELECT * FROM students WHERE parentid = ${Number(studentModel.parentid)}`, function (err, result, fields) {
            if (err) throw err;
            studentModel.players = result;
            populateStudentInfo();
        });

        //populate prizes
        try {
            connection.query(`SELECT * from prizes WHERE parentid = ${Number(studentModel.parentid)}`, function (err, result, fields) {
                if (err) { throw err; }
                else { studentModel.prizes = result; }
            });
        }
        catch (err) {
            console.log(err);
        }
        //populate trophies
        try {
            connection.query(`SELECT * from trophies WHERE ${Number(studentModel.parentid)}`, function (err, result, fields) {
                if (err) { throw err; }
                else { studentModel.trophies = result; }
            });
        }
        catch (err) {
            console.log(err);
        }
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

            //populate activities
            connection.query(`SELECT description, DATE_FORMAT(adate, '%m/%d/%Y ') as 'date' FROM activities WHERE studentid = ${studentModel.players[i].id}`, (err, activityResult, fields) => {
                if (err) throw err;
                for (var j = 0; j < activityResult.length; j++) {
                    studentModel.activities.push(activityResult[j]);
                }
            });
        }
    }
	
	getStarted();	
    callback(studentModel);
};
