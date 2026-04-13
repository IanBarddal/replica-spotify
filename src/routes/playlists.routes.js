import Router from "express"
import * as allPlaylistControllers from "../controllers/playlists.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me/playlists", allPlaylistControllers.getUsersPlaylists)
router.get("/:id", allPlaylistControllers.getPlaylist)
router.post("/me/playlists", allPlaylistControllers.createPlaylist)
router.post("/:id/items", allPlaylistControllers.addTracks)
router.put("/:id", allPlaylistControllers.changePlaylistDetails)

export default router