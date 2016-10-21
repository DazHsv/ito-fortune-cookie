'use strict';

const http = require("http");
const config = require("./config/config");
const staticServer = require("./internals/static-server").serve;
const path = require("path");
const handlers = require("./internals/handlers");

var handler = function(req,res) {
  let url = req.url;
  if(url == "/")
    url = path.resolve(config.static_path + '/index.html');
  else if (typeof(handlers[url]) === 'function')
    // Dummy router handler
    handlers[url](url, res);
  else
    url = path.resolve(config.static_path + url);
  
  staticServer(url, res);
};
const server = http.createServer(handler);

server.listen(config.port, config.ip, function() {
  console.log(`Server running @ http://${config.ip}:${config.port}/`);
});