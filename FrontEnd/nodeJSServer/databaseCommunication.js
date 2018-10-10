var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express()
var path = require('path');
//const { Pool, Client } = require('pg')
var async = require('async');
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
  
  
  function search2(){
      results = pool.query('SELECT * FROM schneider_search.tags', (err,res) =>{
      if (err) { console.log(err.stack)
      }else{ console.log(res.rows[0]) }
      return res
      pool.end()
	  })
  }
  
  function getDocIdFromTag(tag){
	return new Promise(async function(resolve,reject){
		const res = await pool.query('SELECT * FROM schneider_search.tags')
		await pool.end()
		resolve( res )
	})
  }
///////////////END DB QUERY////////////////////////
const resp = getDocIdFromTag("testTag") 
var temp = resp
	.then(function whenOk(response) {
	    console.log("suc")
	    return response
	  })
console.log(temp)
