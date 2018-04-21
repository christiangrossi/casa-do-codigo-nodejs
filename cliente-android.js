var http = require('http');

var configuracoes= {
    hostname:'localhost',
    port: 3000,
    path: '/produtos'
};

http.get(configuracoes,function(res){
    console.log(res.statusCode);
    res.on('data',function(body){
        console.log('Corpo: ' + body);
    });
    res.on('error', function(erro){
        console.log(error);
    })
});