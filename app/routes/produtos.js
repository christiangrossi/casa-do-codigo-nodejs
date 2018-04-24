module.exports = function(app){
    var listaProdutos = function(req, res){
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.lista(function(err, results){
            console.log(err);
            res.format({
                html:function(){
                    res.render('produtos/lista',{ lista:results })
                },
                json: function(){
                    res.json(results);
                }
            });

            
        });
        connection.end();
    }

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form');
    });

        
    app.post('/produtos',function(req, res){
        var produto = req.body;
        console.log(produto);

        var validatorTitulo = req.assert('titulo', 'Titulo é obrigatório');
        validatorTitulo.notEmpty();
        var erros = req.validationErrors();

        if(erros){
            res.render('produtos/form');
            return;
        }

        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.salvar(produto, function(err, results){
            console.log(err);
            res.redirect('/produtos');
        });
    });

}
