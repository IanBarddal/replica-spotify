import { Router } from "express"
import * as allUserServices from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me", allUserServices.getCurrentUser)
router.get("/me/playlists", allUserServices.getCurrentUserPlaylists)
router.get("/me/top/tracks", allUserServices.getCurrentUserTopTracks)
router.get("/me/top/artists", allUserServices.getCurrentUserTopArtists)
router.get("/me/player/recently-played", allUserServices.getCurrentUserRecentlyPlayedTracks)
router.get("/me/tracks", allUserServices.getCurrentUserLikedTracks)
router.get("/me/albums", allUserServices.getCurrentUserLikedAlbums)
router.get("/me/following", allUserServices.getCurrentUserFollowedArtists)
router.get("/me/player", allUserServices.getCurrentUserPlaybackState)
router.get("/me/player/currently-playing", allUserServices.getCurrentUserCurrentlyPlayingTrack)
router.put("/me/player/play", allUserServices.currentUserPlayerPlay)
router.put("/me/player/pause", allUserServices.currentUserPlayerPause)
router.post("/me/player/previous", allUserServices.currentUserPlayerPreviousTrack)

export default router