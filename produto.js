var http = require('http');


let server = http.createServer(function(req,res){
    res.end("<h1>Hello World</h1>");
});
server.listen(3000);

console.log("Servidor rodando");