import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { genericSearch } from "../controllers/search.controller.js"

const router = Router()

router.use(authMiddleware)

router.get("/", genericSearch)

export default router