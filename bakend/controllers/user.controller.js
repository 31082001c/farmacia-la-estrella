const { request, response } = require("express")
const UsuarioService = require ("../services/user.service")
const service =  new UsuarioService()


async function crearUsuario(req = request ,res = response) {
  try {
   const usuario = await service.create(req.body)
   res.status(201).json(usuario)
  } catch (error) {
    res.status(400).json({message:error.message})
  }  
}

async function listaUsuarios(req = request,res = response) {
     try {
   const listaUser = await service.findUsers()
   console.log("esto trae" + listaUser)
      res.status(201).json(listaUser)

    return 

  } catch (error) {
   res.status(400).json({message: error.message})
  }  
    
}







module.exports = {crearUsuario,listaUsuarios}