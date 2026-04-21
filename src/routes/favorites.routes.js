import Router from "express"
import * as allFavoritesControllers from "../controllers/favorites.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me/following", allFavoritesControllers.getCurrentUserFollowingArtists)
router.get("/me/albums", allFavoritesControllers.getCurrentUserFavoriteAlbums)
router.get("/me/tracks", allFavoritesControllers.getCurrentUserFavoriteTracks)


export default router