
// init project
var express = require('express');
var app = express();

function softwareSubstring(str){
  return str.substring(1,str.length-1);
}

app.get("*",function(req,res){
  var headers = req.headers;
  res.send({
  ipadress: headers['x-forwarded-for'].split(',')[0],
  language: headers['accept-language'].split(',')[0],
  software: softwareSubstring(headers['user-agent'].match(/\(.+?\)/)[0])
  });
})

app.listen(process.env.PORT);