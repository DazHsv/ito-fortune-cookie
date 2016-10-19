var http = require("http");
var fs = require("fs");
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
var server = http.createServer(handler);

server.listen(8080, function() {
  console.log("Server running.");
});