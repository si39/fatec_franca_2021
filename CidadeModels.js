const { Model, DataTypes } = require('sequelize');

class Cidades extends Model {
   static init(sequelize) {

    
    super.init({
        cid_nomecidade: DataTypes.STRING,
        cid_estado: DataTypes.STRING,
        cid_habitantes: DataTypes.STRING,
        cid_economia: DataTypes.INTEGER
    }, {
        sequelize
    })        
    }

    static associate(models) {
        this.belongsTo(models.Prefeitos, { foreignKey: 'pre_codigo', as: 'prefeitos' });        
    }
}

module.exports = Cidades;

