var mysql = require('mysql');
var connection;
var port = 3000;

app.listen(process.env.PORT || port);

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database:'burgers_db'
        });
    };

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});

module.exports = connection;