var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express()
var path = require('path');
//const { Pool, Client } = require('pg')
const pg = require('pg')
const client = new pg.Client();


const pool = new pg.Pool()


///////////////DB QUERY////////////////////////////
	//Insert function here
	function search( searchQuery){
		client.connect();		
		client.query('select doc_id from schneider_search.tags where tag= $1',[searchQuery], (err,res) => {
			console.log("SEARCHFUNC: ");
			console.log(err ? err.stack : res.row[0].doc_id)
			console.log("SEARCHFUNCEND");
		});
	}
///////////////END DB QUERY////////////////////////

////////////////WebServer config///////////////////
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname + '/../html')));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
	var name = req.body.firstname;
	var results = ""
	results = pool.query('SELECT * FROM schneider_search.tags', (err,res) =>{
		if (err) {
      		console.log(err.stack)
    	} else {
      		console.log(res.rows[0])
    	}
		return res
		pool.end()
	})
	console.log("Out")
	console.log(results);
	res.render(__dirname + '/../html/displaySearch.html',{name:name});
  	console.log(name + ' said Hi');
});

app.get('/',function(req,res){
	res.sendFile(__dirname + '/../html/index.html')
	console.log('Index.html has been sent!!!')
});

app.listen(3000, function(){
	console.log('listening on port 3000!');
});

////////////////END WebServer config///////////////
