const {Router} = require("express")

const {crearUsuario,listaUsuarios} = require("../controllers/user.controller")
const routerUser = Router()


routerUser.post("/nuevo-usuarios",crearUsuario)

routerUser.get("/lista-usuarios",listaUsuarios)




module.exports = routerUser