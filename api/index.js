const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const config = require('./config/database');
const sequelize = new Sequelize(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var conn = sequelize.authenticate()
    .then(function(){
        console.log("Conexão com o banco feita com sucesso");
    })
    .catch(function(err){
        console.log(err)
        console.log("Não foi possivel conectar");
    })
    .done();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
    console.log(`API runing on port ${process.env.PORT}!`);
});
