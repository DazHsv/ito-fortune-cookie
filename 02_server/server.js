'use strict';

const http = require("http");
const fs = require("fs");
const config = require("./config/config");

var handler = function(req,res) {
  let url = req.url;
  if(url == "/index" || url == "/index.html"){
    fs.readFile(__dirname + "/index.html", 'utf-8',function(err, data){
      if(err) throw err;
      res.writeHead(200,{
        "Content-Type":"text/html",
        "Server":"Buho@0.0.0"
      });
      res.end(data);
    });
  } else {
    res.writeHead(404,{
      "Content-Type":"text/plain",
      "Server":"Buho@0.0.0"
    });
    res.end("En contrucción.");
  }
};
const server = http.createServer(handler);

server.listen(config.port, config.ip, function() {
  console.log(`Server running @ http://${config.ip}:${config.port}/`);
});