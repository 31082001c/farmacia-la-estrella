const { Model, DataTypes } = require("sequelize");

const ORDENES_TABLE = "ordenes";

const OrdenesSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "clientes",
      key: "id",
    },
  },
  estado: {
    type: DataTypes.ENUM(
      "pendiente",
      "pagado",
      "enviado",
      "entregado",
      "cancelado"
    ),
    allowNull: false,
    defaultValue: "pendiente",
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  metodoPago: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccionEnvio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaOrden: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  fechaEntrega: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

class Orden extends Model {
  static associate(models) {
  this.belongsTo(models.Cliente, { as: "cliente", foreignKey: "clienteId" });
  this.hasMany(models.OrdenDetalle, { as: "detallesOrden", foreignKey: "ordenId" });
  this.hasOne(models.Factura, { as: "factura", foreignKey: "ordenId" });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDENES_TABLE,
      modelName: "Orden",
    };
  }
}
module.exports = { ORDENES_TABLE,OrdenesSchema,Orden};