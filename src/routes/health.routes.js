import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {

    res.status(200).send("O servidor está rodando normalmente!")
})

export default router