const { Router } = require("express")

const ensureAuthenticate = require("../middlewares/ensureAuthenticate")
const RequestsController = require("../controllers/RequestsController")
const requestsController = new RequestsController()

const requestsRoutes = Router()
requestsRoutes.use(ensureAuthenticate)

requestsRoutes.post("/", requestsController.create)
requestsRoutes.get("/", requestsController.index)
requestsRoutes.delete("/:id", requestsController.delete)

module.exports = requestsRoutes
