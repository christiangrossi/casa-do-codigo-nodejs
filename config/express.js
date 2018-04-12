var app = require('express')();

// set -> definir varíaveis pro express
app.set('view engine','ejs');// seta ejs como engine
app.set('views','./app/views');

// como esse código não vai se carregado o tempo inteiro, podemos deixa-lo
// fora da função e retornar apenas a variável com o mesmo objeto
module.exports = function (){    
    return app;
}