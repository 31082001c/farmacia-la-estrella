const { Categoria, CategoriaSchema } = require("./categoria.model")
const { Cliente, ClienteSchema } = require("./clientes.model")
const { OrdenDetalle, OrdenDetallelSchema } = require("./detalleOrden.model")
const { Factura, facturaSchema } = require("./facturas.model")
const { Orden, OrdenesSchema } = require("./ordenes.model")
const { Producto,ProductSchema } = require("./productos.model")
const{Usuario,UsuarioSchema} = require ("./usuarios.model")


function setupModels(sequelize) {
    Usuario.init(UsuarioSchema, Usuario.config(sequelize))
    Producto.init(ProductSchema,Producto.config(sequelize))
    Cliente.init(ClienteSchema,Cliente.config(sequelize))
    Categoria.init(CategoriaSchema,Categoria.config(sequelize))
    Orden.init(OrdenesSchema,Orden.config(sequelize))
    OrdenDetalle.init(OrdenDetallelSchema,OrdenDetalle.config(sequelize))
    Factura.init(facturaSchema,Factura.config(sequelize))
    //aqui van las asociaciones

Usuario.associate(sequelize.models)
Cliente.associate(sequelize.models)
Categoria.associate(sequelize.models)
Producto.associate(sequelize.models)
Orden.associate(sequelize.models)
OrdenDetalle.associate(sequelize.models)
Factura.associate(sequelize.models)


}
module.exports= setupModels


