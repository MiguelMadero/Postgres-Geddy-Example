var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var conString = "pg://myclimbinggym:password@localhost:5432/todotest";

//error handling omitted
pg.connect(conString, function(err, client) {

	if(err) {
		console.log(err);
		return;
	}

	client.query("SELECT NOW() as when", function(err, result) {
  	console.log("Row count: %d",result.rows.length);  // 1
  	console.log("Current year: %d", result.rows[0].when.getYear());
	});
});

