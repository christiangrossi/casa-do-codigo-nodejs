var express = require('express');
var load = require('express-load');
var app = express();

// como esse código não vai se carregado o tempo inteiro, podemos deixa-lo
// fora da função e retornar apenas a variável com o mesmo objeto
module.exports = function (){    
    // set -> definir varíaveis pro express
    app.set('view engine','ejs');// seta ejs como engine
    app.set('views','./app/views');
    load('routes',{cwd: 'app'})
        .then('infra')
    .into(app);

    return app;
}