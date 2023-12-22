const { Router } = require("express")

const ensureAuthenticate = require("../middlewares/ensureAuthenticate")
const PurchasesController = require("../controllers/PurchaseController")
const purchasesController = new PurchasesController()

const purchasesRoutes = Router()

purchasesRoutes.post("/", ensureAuthenticate, purchasesController.create)
purchasesRoutes.get("/", ensureAuthenticate, purchasesController.index)
purchasesRoutes.patch("/:id", purchasesController.update)

module.exports = purchasesRoutes
