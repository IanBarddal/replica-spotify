import { Router } from "express"
import * as allUserControllers from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/me", allUserControllers.getCurrentUser)

export default router