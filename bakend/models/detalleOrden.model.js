const { Model, DataTypes } = require("sequelize");

const ORDEN_DETALLE_TABLE = "orden_detalles";

const OrdenDetallelSchema = {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ordenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ordenes',
        key: 'id'
      }
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    precioUnidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }

class OrdenDetalle extends Model {
  static associate(models) {
  this.belongsTo(models.Orden, { as: "orden", foreignKey: "ordenId" });
  this.belongsTo(models.Producto, { as: "producto", foreignKey: "productoId" });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDEN_DETALLE_TABLE,
      modelName: "OrdenDetalle",
    };
  }
}
module.exports = { ORDEN_DETALLE_TABLE,OrdenDetallelSchema,OrdenDetalle};