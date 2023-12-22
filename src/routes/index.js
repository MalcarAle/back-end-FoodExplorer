const { Router } = require("express")

const usersRouter = require("./usersRoutes")
const dishesRouter = require("./dishesRoutes")
const favoritesRouter = require("./favoriteRoutes")
const requestsRouter = require("./requestsRoutes")
const purchasesRouter = require("./purchaseRoutes")
const sessionsRouter = require("./sessionsRoutes")

const router = Router()
router.use("/users", usersRouter)
router.use("/dishes", dishesRouter)
router.use("/favorites", favoritesRouter)
router.use("/requests", requestsRouter)
router.use("/purchases", purchasesRouter)
router.use("/sessions", sessionsRouter)

router.get("/", (request, response) =>
  response.send(`<h1>Welcome API FoodExplorer</h1>`)
)

module.exports = router
