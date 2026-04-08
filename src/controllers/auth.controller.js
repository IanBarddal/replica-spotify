import { exchangeCodeForToken, buildSpotifyAuthURL } from "../services/auth.service.js"

export async function handleSpotifyCallback (req, res) {

    const code = req.query.code

    console.log(req.query)

    try {

        const data = await exchangeCodeForToken(code)

        res.json(data)
    } catch (error) {

        console.error(error)
        res.status(500).send("Erro na autenticação!")
    }
}

export function login (req, res) {
    
    const url = buildSpotifyAuthURL()

    return res.redirect(url)
}