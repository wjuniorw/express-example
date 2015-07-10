module.exports = function(app) {

/*
 *
 *  Páginas HTML
 *
 */
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/public/index.html');
});

/*
 *
 *  API
 *
 */
//Vamos pegar as informações
app.get('/api/:collection', function (req, res, next) {
  //buscamos todas as informações das collections
  req.collection.find({}, { sort: [['ordem', 1]] }).toArray(function (erro, results) {
    if (erro) {
      return next(erro);
    }

    //retornamos os resultados
    res.send(results);
  });
});


//Vamos inserir alguma informação na nossa collection
app.post('/api/:collection', function(req, res, next) {
  //pegamos os valores enviados pelo usuário
  var json = req.body;


  //inserimos no banco
  req.collection.insert(json, {}, function (e, results) {
    if (e) {
      return next(e);
    }

    //retornamos o resultado
    res.send(results);
  });
});


//Vamos buscar um item pelo id
app.get('/api/:collection/:id', function (req, res, next) {
  //pagamos o parâmetro id enviado pelo usuário
  var id = req.params.id;

  //buscamos na nossa coléction pelo id enviado
  req.collection.findById(id, function (e, result) {
    if (e) {
      return next(e);
    }

    //retornamos o resultado
    res.send(result);
  });
});


//Vamos buscar um item pela categoria
app.get('/api/:collection/categoria/:categoria', function (req, res, next) {
  //pagamos o parâmetro categoria enviado pelo usuário
  var categoria = req.params.categoria;

  //buscamos na nossa coléction pelo id enviado
  req.collection.find({ categoria: categoria }).toArray(function (e, result) {
    if (e) {
      return next(e);
    }

    //retornamos o resultado
    res.send(result);
  });
});


//Vamos atualizar utilizando o id
app.put('/api/:collection/:id', function (req, res, next) {
  //pega a informação enciada pelo usuário
  var json = req.body,
      id   = req.params.id;

  //faz um update buscando pelo id
  req.collection.updateById(id, { $set: json }, { safe: true, multi:false }, function (e, result) {
    if (e) {
      return next(e);
    }

    if (result === 1) {
      res.send({ msg: 'successo' });

    } else {
      res.send({ msg: 'erro' });
    }
  });
});

//Vamos remover um item buscando pelo id
app.delete('/api/:collection/:id', function(req, res, next) {
  //pagamos o parâmetro id enviado pelo usuário
  var id = req.params.id;

  //removemos o item buscando pelo id
  req.collection.removeById(id, function (e, result) {
    if (e) {
      return next(e);
    }

    if (result === 1) {
      res.send({ msg: 'successo' });

    } else {
      res.send({ msg: 'erro' });
    }
  });
});
};
