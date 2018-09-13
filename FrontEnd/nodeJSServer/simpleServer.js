var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express()
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname + '/../html')));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
	//  res.send('You sent the name "' + req.body.firstname + '".<form action="http://51.140.3.27:3000/"><input type="submit" value="Go to Home" /></form>');
	var name = req.body.firstname;
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
