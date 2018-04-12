var http = require('http');


let server = http.createServer(function(req,res){
    if(req.url =="/produtos"){
        res.end("<h1>Listando Produtos</h1>");
    } else {
        res.end('<h1>Você está na Home</h1>');
    }
    
});
server.listen(3000);

console.log("Servidor rodando");