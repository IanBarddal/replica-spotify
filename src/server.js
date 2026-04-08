import "./config/dotenv.js"
import app from "./app.js"
import { env } from "../env.js"

app.listen(env.port, () => {

    console.log(`Servidor rodando normalmente em http://localhost:${env.port}`)
})