const { Router } = require("express");

const { crearCliente, listaClientes} = require("../controllers/cliente.controller");
const routercliente= Router();

routercliente.post("/registro-clientes",crearCliente);
routercliente.get("/lista-clientes",listaClientes);

module.exports = routercliente;