import { exchangeCodeForToken } from "../services/auth.service.js"

export async function handleSpotifyCallback (req, res) {

    const code = req.query.code

    try {

        const data = await exchangeCodeForToken(code)

        res.json(data)
    } catch (error) {

        console.error(error)
        res.status(500).send("Erro na autenticação!")
    }
}