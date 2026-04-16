import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import * as allPlayerControllers from "../controllers/player.controller.js"

const router = Router()

router.use(authMiddleware)

router.get("/me/player", allPlayerControllers.getPlayerPlaybackState)
router.get("/me/player/currently-playing", allPlayerControllers.getCurrentlyPlayingTrack)
router.put("/me/player/play", allPlayerControllers.playerPlay)
router.put("/me/player/pause", allPlayerControllers.playerPause)
router.put("/me/player/volume", allPlayerControllers.playerSetVolume)
router.put("/me/player/shuffle", allPlayerControllers.playerShuffle)
router.put("/me/player/repeat", allPlayerControllers.playerRepeatMode)
router.post("/me/player/previous", allPlayerControllers.playerPreviousTrack)
router.post("/me/player/next", allPlayerControllers.playerNextTrack)

export default router