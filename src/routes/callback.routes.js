import { Router } from "express"
import { handleSpotifyCallback } from "./../controllers/auth.controller.js"

const router = Router()

router.get("/callback", handleSpotifyCallback)

export default router