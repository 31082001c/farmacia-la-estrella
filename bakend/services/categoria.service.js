const { Categoria } = require("../models/categoria.model")





class CategoriaService {
    constructor() {



    }
    async create(data) {
        const categoria = await Categoria.create(data)
        return categoria

    }

    async listaCategorias() {
      const lista= await Categoria.findAll()
        
        return lista
    }


}
    
    

module.exports = CategoriaService
