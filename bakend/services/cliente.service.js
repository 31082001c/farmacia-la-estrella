const { Cliente} = require("../models/clientes.model");
const { Usuario } = require("../models/usuarios.model");

class ClienteService {
  constructor() {}
  
  async register(data) {
  // Creamos el usuario
    const user = await Usuario.create({
      email: data.email,
      contrasena: data.contrasena,
      rol: 'cliente' 
    });
    // Creamos el cliente físico y lo vinculamos
    const customer = await Cliente.create({
      id: data.id,
      nombres: data.nombres,
      direccion: data.direccion,
      telefono: data.telefono,
      userId: user.id
    });

    delete user.dataValues.contrasena;
console.log(user,customer)
    return { user, customer };
  }


  async find(Clientes) {
    const customer = await Cliente.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Cliente.sequelize.models.Usuario,
          as: "usuario", // alias usado en la asociación
          attributes: {
            exclude: ["contrasena"],
          },
        },
      ],
    });


    console.log("esto trae"+ customer)
    return customer;
  }
}

module.exports = ClienteService;