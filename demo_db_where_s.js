var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Snisken",
    password: "123456789Jd!",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});