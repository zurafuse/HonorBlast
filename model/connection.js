const mysql = require("mysql");



module.exports = function(usern, pwd){
	
	var con = mysql.createConnection({
		host: "localhost",
		user: usern,
		password: pwd,
		database: "honorblast"
	});	
	
	
	return con;	
};

