const { request, response } = require("express")
const CategoriaService = require ("../services/categoria.service")
const service =  new CategoriaService()


async function crearCategoria(req = request ,res = response) {
  try {
   const categoria = await service.create(req.body)
   res.status(201).send("se creo la categoria: " + categoria.nombres)
  } catch (error) {
    res.status(400).json({message:error.message})
  }  
}

async function listadoCategorias(req = request,res = response) {
     try {
   const listaUser = await service.listaCategorias()
   
      res.status(201).json(listaUser)

    return 

  } catch (error) {
   res.status(400).json({message: error.message})
  }  
    
}







module.exports = {crearCategoria,listadoCategorias}