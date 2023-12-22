const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const ensureAuthenticate = require("../middlewares/ensureAuthenticate")
const DishesController = require("../controllers/DishController")
const DishPhotoController = require("../controllers/DishPhotoController")
const dishesController = new DishesController()
const dishPhotoController = new DishPhotoController()

const dishesRoutes = Router()
dishesRoutes.use(ensureAuthenticate)

const upload = multer(uploadConfig.MULTER)

dishesRoutes.post("/", dishesController.create)
dishesRoutes.put("/:id", dishesController.update)
dishesRoutes.delete("/:id", dishesController.delete)
dishesRoutes.get("/:id", dishesController.show)
dishesRoutes.get("/", dishesController.index)
dishesRoutes.patch(
  "/photo/:id",
  upload.single("photo"),
  dishPhotoController.update
)

module.exports = dishesRoutes
