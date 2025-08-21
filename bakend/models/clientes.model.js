const { Model, DataTypes } = require("sequelize")




const TABLA_CLIENTES = "clientes"
const ClienteSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER // documento de identidad
  },
  nombres: {
    allowNull: false,
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  }
};
class Cliente extends Model {
  static associate(models) {
  this.belongsTo(models.Usuario, {as:"usuario",foreignKey:"userId"})
  }
 
  static config(sequelize) {
      return {
        sequelize,
        tableName: TABLA_CLIENTES,
        modelName: 'Cliente',
        


      }
    }
}

module.exports = { TABLA_CLIENTES, ClienteSchema, Cliente }