const { request, response } = require("express");
const ClienteService = require("../services/cliente.service");
const sequelize = require("../database/sequelize");
const service = new ClienteService(sequelize);

async function crearCliente(req = request, res = response, next) {
  try {
    const customer = await service.register(req.body);
    res.status(201).json(customer);
  } catch (error) {
    next(error)
  }
}

async function listaClientes(req = request, res = response) {
  try {
    const customers = await service.find();
    res.status(201).json(customers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { crearCliente, listaClientes};