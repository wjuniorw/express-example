##Aplicação de exmplo utilizando [NodeJS](http://nodejs.org) e [Express](http://expressjs.com)

Vamos utilizar o o serviço do [MognoLab](https://mongolab.com). Depois vamos fazer o deploy no [Heroku](https://www.heroku.com).

Para rodar localmente primeiro instale o NodeJS, depois instale o express e as dependencias com o comando:

```
npm install
```

Agora podemos iniciar o servidor

```
node server.js
```

Abra o navegador na página http://127.0.0.1:5000

-----
CRUD - Criando, Atualizando, Excluindo e Buscando dados
-------
  Para criar ou inserir usamos o metodo POST:

Nova collection:
```
 POST - localhost://5000/api/Mycollection
```
  Para atualizar uma unica informacao usamos o metodo put com id ex.:
  ````
  PUT - localhost://5000/api/Mycollection/556e3e13d63da39407d55dba
  ````
  Para excluir o metodo delete:
  ````
  delete - localhost://5000/api/Mycollection/556e3e13d63da39407d55dba
  ````
  Para buscar todas informações de uma collection metodo GET:
  ````
  GET - localhost://5000/api/Mycollection/
  ````
  Para buscar uma unica informaçao, metodo GET com id:
  ````
  GET - localhost://5000/api/Mycollection/556e3e13d63da39407d55dba
  ````
