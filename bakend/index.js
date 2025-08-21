const express = require("express")
const session = require("express-session")
const routerUser = require('./routes/user.routes')
const routercliente = require("./routes/cliente.routes")
const errorHandler = require("../bakend/middlewares/error.handler")
const routerProducto = require("./routes/producto.routes")
const routerCategoria = require("./routes/categoria.routes")
const { config } = require("./config/config")
const routerAuth = require("./routes/auth.routes")
const app = express()

const port = config.port



app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}));  // esto me inicializa la config del login manual.
app.use("/",routerAuth)
app.use("/usuarios",routerUser)
app.use("/clientes",routercliente)
app.use("/producto",routerProducto)
app.use("/categoria",routerCategoria)











app.use(errorHandler)
app.get('/', (req, res) => {
  res.send('salud desde el backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on 🚀`)
})