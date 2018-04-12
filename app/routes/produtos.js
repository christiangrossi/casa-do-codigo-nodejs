module.exports =  function(app){
    app.get('/produtos', function(req, res){
        console.log('listando');
        
        var connection = app.infra.connectionFactory();
        connection.query('select * from produtos', function(err, results){
            res.render('produtos/lista',{ lista:results })
        });

        connection.end();

    });
}
