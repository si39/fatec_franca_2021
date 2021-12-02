const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const Cid = require('../models/CidadeModels.js');
const Pref = require('../models/PrefeitoModels.js');

const conex = new Sequelize(dbConfig);

try{
    conex.authenticate();
    console.log('Conexão iniciada!!!'); 

}catch(error) {
    console.log('Conexão recusada!!!', error); 
}

Cid.init(conex);
Pref.init(conex);

Cid.associate(conex.models);
Pref.associate(conex.models);


module.exports = conex;
