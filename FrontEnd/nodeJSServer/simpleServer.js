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
function getDocIdFromTag(tag){
	return new Promise(async function(resolve,reject){
		const results = await pool.query('SELECT * FROM schneider_search.tags')
		await pool.end()
		resolve( results )
	})
}
///////////////END DB QUERY////////////////////////

////////////////WebServer config///////////////////
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname + '/../html')));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
	var name = req.body.firstname;
	var gRes = res;
	const resp = getDocIdFromTag(name) 
	resp
		.then(function whenOk(response) {
		    console.log(response.rows[0].doc_id)
			name = name +"_ID = " +  response.rows[0].doc_id
			gRes.render(__dirname + '/../html/displaySearch.html',{name:name});
		})
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
