import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import * as allDevicesControllers from "../controllers/devices.controller.js"

const router = Router()

router.use(authMiddleware)

router.get("/", allDevicesControllers.getPlayerDevices)

export default router