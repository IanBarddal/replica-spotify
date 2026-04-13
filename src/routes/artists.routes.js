import { Router } from "express"
import * as allArtistControllers from "../controllers/artists.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/:id", allArtistControllers.getArtistDetails)

export default router