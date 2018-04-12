module.exports = function (){

    console.log('carregando módulo express')
    var app = require('express')();

    // set -> definir varíaveis pro express
    // setando ejs como engine
    app.set('view engine','ejs');
    return app;
}