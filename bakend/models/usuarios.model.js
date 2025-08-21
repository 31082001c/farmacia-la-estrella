const { Model, DataTypes } = require("sequelize")
const { Cliente } = require("./clientes.model")
const bcrypt = require("bcrypt")

const TABLA_USUARIOS = "usuarios"
const UsuarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        msg: "Debe ser un correo electrónico válido",
      },
    }, 
     },
    contrasena: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    rol: {
      allowNull: false,
      type: DataTypes.ENUM("user", "admin", "customer", "supplier", "employee"),
      defaultValue: "user",
    },
  }


class Usuario extends Model {
static associate(models) {
this.hasOne(models.Cliente,{as:"cliente",foreignKey:"userId"})
console.log(models)
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLA_USUARIOS,
      modelName: 'Usuario',
     hooks: {
        beforeSave: async (user) => {
          const contrasena = await bcrypt.hash(user.contrasena, 10);
          user.contrasena = contrasena;
        },
      },
      
    }
  }
}
module.exports = {TABLA_USUARIOS,UsuarioSchema,Usuario}

