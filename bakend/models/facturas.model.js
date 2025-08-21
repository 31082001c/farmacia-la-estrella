const { Model, DataTypes } = require("sequelize");

const FACTURA_TABLE = "facturas";

const facturaSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ordenId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: "ordenes",
      key: "id",
    },
  },
  numeroFactura: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  fechaEmision: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  iva: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

class Factura extends Model {
  static associate(models) {
    this.belongsTo(models.Orden, { as: "orden", foreignKey: "ordenId" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FACTURA_TABLE,
      modelName: "Factura",
    };
  }
}
module.exports = { FACTURA_TABLE,facturaSchema,Factura };