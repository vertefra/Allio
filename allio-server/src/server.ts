import express from "express"
import { config, connectDB } from "./config/config"
import menuRoutes from "./routes/menuRoutes"

const app = express()

connectDB(config)





// MIDDLEWARE

app.use(express.json())

app.get('/', (req, res) => {
  res.send("api running")
})

app.use('/api/menu', menuRoutes)

app.listen(config.PORT, () => {
  console.log("server listening on port ", config.PORT)
  console.log("Environment: ",process.env.NODE_ENV)
})