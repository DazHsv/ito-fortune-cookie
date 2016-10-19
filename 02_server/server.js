'use strict';

const http = require("http");
const fs = require("fs");
const config = require("./config/config");

var handler = function(req,res) {
  fs.readFile(__dirname + "/index.html",function(err, data){
    if(err) console.log(err);
    res.writeHead(200,{
      "Content-Type":"text/html",
      "Server":"Buho@0.0.0"
    });
    res.write(data);
    res.end();
  });
};
const server = http.createServer(handler);

server.listen(8080, function() {
  console.log(`Server running @ http://${config.ip}:${config.port}/`);
});