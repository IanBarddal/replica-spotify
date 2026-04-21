import Router from "express"
import * as allFavoritesControllers from "../controllers/favorites.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me/following", allFavoritesControllers.getCurrentUserFavoriteArtists)

export default router