
var app = require('./config/express')();

app.set('view engine','ejs');

// rotas
app.get('/', function(req, res){
    res.send("Voce esta na home");
})

app.get('/produtos', function(req, res){
    console.log('listando');
    res.render("produtos/lista");
})

app.listen(3000, function(){
    console.log('Servidor ouvindo na porta 3000');
})