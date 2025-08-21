const { Router } = require("express");

const { crearCategoria, listadoCategorias} = require("../controllers/categoria.controller");
const routerCategoria= Router();

routerCategoria.post("/nueva-categoria",crearCategoria);
routerCategoria.get("/listado-categorias",listadoCategorias);

module.exports = routerCategoria;