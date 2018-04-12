
var rotasProdutos = require('./app/routes/produtos')(app);

app.set('view engine','ejs');

app.get('/', function(req, res){
    res.send("Voce esta na home");
})

app.listen(3000, function(){
    console.log('Servidor ouvindo na porta 3000');
})