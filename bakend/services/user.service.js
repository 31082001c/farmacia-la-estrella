const { models } = require("../database/sequelize");
const { Usuario} = require("../models/usuarios.model");




class UsuarioService {
    constructor() {



    }
    async create(data) {
        const nuevo_usuario = await Usuario.create(data)
        delete nuevo_usuario.dataValues.contrasena
        return nuevo_usuario

    }

    async findUsers() {
      const lista= await Usuario.findAll({
      
      attributes: {
        exclude: ['contrasena'],
      },
    })
        console.log("esto trae" + lista)
        return lista
    }


}
    
    

module.exports = UsuarioService
