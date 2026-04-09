import { authServices } from "../services/auth.service.js"

export const handleSpotifyCallback = async (req, res) => {

    const code = req.query.code

    console.log(code)

    if (!code) {
    
        return res.status(400).send("Code não fornecido pelo Spotify");
    }

    try {

        const data = await authServices.exchangeCodeForToken(code)

        res.json(data)
    
    } catch (error) {

        console.error(error)

        res.status(500).send("Erro na autenticação!")
    }
} 

export const login = (req, res) => {
    
    const url = authServices.buildSpotifyAuthURL()

    return res.redirect(url)
}

export const handleRefreshAccessToken = async (req, res) => {

    const { refreshToken } = req.body

    if (!refreshToken) {

        return res.status(400).json({ error: "Token não fornecido!" })
    }

    try {

        const data = await authServices.refreshAccessToken(refreshToken)

        res.json(data)

    } catch (error) {

        console.error(error.response?.data || error.message);
        
        res.status(500).json({ error: "Falha ao atualizar access token" })
    }
}