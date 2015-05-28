var express    = require('express'),
    bodyParser = require('body-parser'),
    mongoskin  = require('mongoskin'),
    db         = mongoskin.db(process.env.DATABASE_URL, { safe: true }),
	  app        = express();

//Adiciona header que permite requests de outros dominios
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};
app.use(allowCrossDomain);

//Faz o parser do body para receber parâmetros dos POSTs
app.use(bodyParser());

//Adiciona a pasta public como local dos arquivos estáticos (html, css, js imagens ...)
app.use(express.static('public'));

//Adiciona o parametro collection em todas as ulr
app.param('collection', function (req, res, next, collection) {
  req.collection = db.collection(collection);
  return next();
});
require('./rotas/routes');

//Roda o servidor na porta 5000
app.listen(process.env.PORT || 5000);
console.log('Server running at http://127.0.0.1:5000/');
