const { Model, DataTypes } = require("sequelize")


const TABLA_PRODUCTOS = "productos"
const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombreProducto: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    marca: {
        allowNull: false,
        type: DataTypes.STRING
    },
    categoriaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references : {
        model: "categorias",
        key : "id"
        
        } 

    },
    precio: {
        allowNull: false,
        type: DataTypes.INTEGER,

    },
    descripcion: {
        allowNull: false,
        type: DataTypes.TEXT

    },

    cantidadStock: {

    allowNull: false,
        type: DataTypes.INTEGER,

    },

    lote: {
        allowNull: false,
        type: DataTypes.STRING

    },
    idProveedor: {

        allowNull: false,
        type: DataTypes.INTEGER,

    },
}

class Producto extends Model {
    static associate(models) {
    this.belongsTo(models.Categoria,{
     as : "categoria" , foreignKey: "categoriaId"  
    }) 
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLA_PRODUCTOS,
            modelName: 'Producto',
            timestamps: false,

        }
    }
}
module.exports = { TABLA_PRODUCTOS, ProductSchema, Producto }
