import { Router } from "express"
import { getCurrentUser } from "../controllers/user.controller.js"
import { authenticateUser } from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/me", authenticateUser, getCurrentUser)

export default router