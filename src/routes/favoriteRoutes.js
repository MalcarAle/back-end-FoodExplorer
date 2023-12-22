const { Router } = require("express")

const ensureAuthenticate = require("../middlewares/ensureAuthenticate")
const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController()

const favoritesRoutes = Router()

favoritesRoutes.post("/", ensureAuthenticate, favoritesController.create)
favoritesRoutes.get("/", ensureAuthenticate, favoritesController.index)
favoritesRoutes.delete("/:id", favoritesController.delete)

module.exports = favoritesRoutes
