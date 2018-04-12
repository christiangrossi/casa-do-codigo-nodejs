var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();

// como esse código não vai se carregado o tempo inteiro, podemos deixa-lo
// fora da função e retornar apenas a variável com o mesmo objeto
module.exports = function (){    
    // set -> definir varíaveis pro express
    app.set('view engine','ejs');// seta ejs como engine
    app.set('views','./app/views');
    app.use(bodyParser.urlencoded({extended: true}));

    load('routes',{cwd: 'app'})
        .then('infra')
    .into(app);

    return app;
}