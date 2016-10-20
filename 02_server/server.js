'use strict';

const http = require("http");
const fs = require("fs");
const config = require("./config/config");

var handler = function(req,res) {
  console.log(req.url);
  let url = req.url;
  if(url == "/index" || url == "/index.html"){
    fs.readFile(__dirname + "/index.html",function(err, data){
    if(err) console.log(err);
    res.writeHead(200,{
      "Content-Type":"text/html",
      "Server":"Buho@0.0.0"
    });
    res.write(data);
    res.end();
  });
  } else {
    res.write("En contrucción.");
    res.end();
  }
};
const server = http.createServer(handler);

server.listen(config.port, config.ip, function() {
  console.log(`Server running @ http://${config.ip}:${config.port}/`);
});