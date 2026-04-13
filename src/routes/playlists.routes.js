import Router from "express"
import * as allPlaylistControllers from "../controllers/playlists.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me/playlists", allPlaylistControllers.getUsersPlaylists)

export default router