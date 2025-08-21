const { Router } = require("express");
const routerAuth = Router();
const { loginController, logoutController } = require('../controllers/auth.controller');

routerAuth.post('/login', loginController);
routerAuth.post('/logout', logoutController);

module.exports = routerAuth;