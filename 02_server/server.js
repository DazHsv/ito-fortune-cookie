'use strict';

const http = require("http");
const fs = require("fs");
const config = require("./config/config");
const path = require('path');

var visitCount = 0;

var handler = function(req,res) {
  let url, contentType = "text/plain";
  url = req.url;
  if (url == "/") {
    url = path.resolve(`${config.static_path}/index.html`);
  } else {
    url = path.resolve(config.static_path + url);
  }

  switch(path.extname(url)) {
    case '.js':
      contentType = "text/javascript";
      break;
    case '.css':
      contentType = "text/css";
      break;
    case '.html':
      contentType = "text/html";
      break;
  };

  fs.access(url,function(accessErr) {
    if(!accessErr) {
      fs.readFile(url, function(docErr, data) {

        if(!docErr) {
          res.writeHead(200, {
            "Content-Type":contentType,
            "Server":"Buho@0.0.1"
          });
          
          if(path.basename(url) != "404.html" && path.extname(url) == ".html") {
            visitCount++;
          }

          res.end(data.toString().replace(/visitCount/, visitCount));
        } else {
          res.writeHead(200, {
            "Content-Type":"text/plain",
            "Server":"Buho@0.0.1"
          });
          res.end("500: Server Error.");
        }

      });
    } else {
      fs.readFile(`${config.static_path}/404.html`, function(docErr, data) {
        if(!docErr) {
          res.writeHead(404, {
            "Content-Type":"text/html",
            "Server":"Buho@0.0.1"
          });
          res.end(data);
        } else {
          res.writeHead(200, {
            "Content-Type":"text/plain",
            "Server":"Buho@0.0.1"
          });
          res.end("500: Server Error.");
        }
      });
    }
  });
};
const server = http.createServer(handler);

server.listen(config.port, config.ip, function() {
  console.log(`Server running @ http://${config.ip}:${config.port}/`);
});