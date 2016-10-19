var http = require("http");
var fs = require("fs");
var handler = function(req,res) {
  fs.readFile(__dirname + "/index.html",function(err, data){
    if(err) console.log(err);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.write(data);
    res.end();
  });
};
var server = http.createServer(handler);

server.listen(8080, function() {
  console.log("Server running.");
});