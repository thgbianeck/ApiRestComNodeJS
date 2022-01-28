const express = require("express");
const routes = express.Router();

const UsuarioController = require("./src/controllers/UsuarioController");
const usuarioController = new UsuarioController();

routes.post("/usuarios", usuarioController.login);
routes.get("/usuarios", usuarioController.obter);

module.exports = routes;
