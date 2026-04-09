import { Router } from "express"
import { getCurrentUser, getCurrentUserPlaylists, getCurrentUserRecentlyPlayedTracks, getCurrentUserTopArtists, 
         getCurrentUserTopTracks } from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me", getCurrentUser)
router.get("/me/playlists", getCurrentUserPlaylists)
router.get("/me/top/tracks", getCurrentUserTopTracks)
router.get("/me/top/artists", getCurrentUserTopArtists)
router.get("/me/player/recently-played", getCurrentUserRecentlyPlayedTracks)

export default router