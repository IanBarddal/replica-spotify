import { Router } from "express"
import * as allQueueControllers from "../controllers/queue.controller.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/", allQueueControllers.getQueue)
router.post("/", allQueueControllers.addTrackToQueue)

export default router