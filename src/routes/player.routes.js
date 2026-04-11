import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import * as allPlayerServices from "../controllers/player.controller.js"

const router = Router()

router.use(authMiddleware)

router.get("/me/player", allPlayerServices.getPlayerPlaybackState)
router.put("/me/player/play", allPlayerServices.playerPlay)
router.put("/me/player/pause", allPlayerServices.playerPause)
router.put("/me/player/volume", allPlayerServices.playerSetVolume)
router.put("/me/player/shuffle", allPlayerServices.playerShuffle)
router.post("/me/player/previous", allPlayerServices.playerPreviousTrack)
router.post("/me/player/next", allPlayerServices.playerNextTrack)

export default router