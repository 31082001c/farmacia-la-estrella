const {Router} = require("express")

const {createProducto,listaProducto, actualizarProducto, eliminarProducto} = require("../controllers/producto.controller")
const routerProducto = Router()


routerProducto.post("/nuevo-producto",createProducto)

routerProducto.get("/lista-productos",listaProducto)

routerProducto.put("/actualizar", actualizarProducto)

routerProducto.delete("/eliminar", eliminarProducto)


module.exports = routerProducto