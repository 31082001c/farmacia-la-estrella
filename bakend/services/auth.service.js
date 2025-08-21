const bcrypt = require('bcrypt');
const { Usuario } = require('../models/usuarios.model');

class AuthService {

  async validateUser(email, contrasena) {
    const usuarios = await Usuario.findOne({ where: { email } });
    if (!usuarios) throw new Error('Valida tus credenciales');

    const isMatch = await bcrypt.compare(contrasena, usuarios.contrasena);
    if (!isMatch) throw new Error('Valida tus credenciales');

    return usuarios;

  }
}

module.exports = AuthService