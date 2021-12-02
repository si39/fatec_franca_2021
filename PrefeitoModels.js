const { Model, DataTypes } = require('sequelize');

class Prefeitos extends Model {
   static init(sequelize) {

    
    super.init({
        pre_nome: DataTypes.STRING,
        pre_apelido: DataTypes.STRING,
        pre_partido: DataTypes.STRING,
        pre_sexo: DataTypes.STRING
    }, {
        sequelize
    })        
    }

    static associate(models) {
        this.hasMany(models.Cidades, { foreignKey: 'pre_codigo', as: 'prefeitos' });
    }
}

module.exports = Prefeitos;

