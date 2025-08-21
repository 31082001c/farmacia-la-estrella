const { Model, DataTypes } = require("sequelize")



const TABLA_CATEGORIA = "categorias"
const CategoriaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombres: {
    allowNull: false,
    type: DataTypes.STRING
  }
 }

 class Categoria extends Model {
   static associate(models) {
   this.hasMany(models.Producto, {as:"productos",foreignKey:"categoriaId"})
   }
  
   static config(sequelize) {
       return {
         sequelize,
         tableName: TABLA_CATEGORIA,
         modelName: 'Categoria',
         
 
 
       }
     }
 }
 
 module.exports = { TABLA_CATEGORIA,CategoriaSchema,Categoria }