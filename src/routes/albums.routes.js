import { Router } from "express"
import * as allAlbumControllers from "../controllers/albums.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/:id", allAlbumControllers.getAlbumDetails)

export default router