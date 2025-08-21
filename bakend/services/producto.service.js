
const { Producto} = require("../models/productos.model");




class ProductoService {
    constructor() {

    }
    async createProducto(data) {
        const producto = await Producto.create(data)
        console.log("este servicio" + producto)
        return producto

    }

    async findProducto() {
      const lista = await Producto.findAll()
        return lista
    }

    async actualizar(id,cambios) {
    const producto = await Producto.findByPk(id)
    if (!producto){
        return "producto no encontrado"

    }    
     await producto.update(cambios)
     return producto   
    }

    async eliminar(id) {
        const producto = await Producto.findByPk(id)
        if (!producto  ) {
            console.log(producto)

        throw new Error("producto no encontrado");
        
        }
        await producto.destroy()
         

        return "se ha eliminado producto:" + producto.nombreProducto
    }







}
    
    

module.exports = ProductoService
