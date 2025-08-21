const { request, response } = require("express")
const ProductoService = require("../services/producto.service")
const service = new ProductoService()


async function createProducto(req = request, res = response) {
    try {
        const producto = await service.createProducto(req.body)
        console.log("esto trae" + producto)
        res.status(201).json(producto)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function listaProducto(req = request, res = response) {
    try {
        const productos = await service.findProducto()

        res.status(201).json(productos)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function actualizarProducto(req = request, res = response, next) {

    const { id } = req.query
    const cambios = req.body

    try {
        const productoactualizado = await service.actualizar(id, cambios)

        res.status(200).json(productoactualizado)



    } catch (error) {
        next(error)

    }
}

    async function eliminarProducto(req = request, res = response, next) {
      const { id } = req.query
      try {
        const producto = await service.eliminar(id)
        res.status(200).json("se ha eliminado" + producto)  
      } catch (error) {
       res.status(404).json({error: error.message})
       
      } 
        
    }







module.exports = { createProducto, listaProducto, actualizarProducto,eliminarProducto }
