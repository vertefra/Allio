import express from "express"
import { config, connectDB } from "./config/config"
import menuRouter from "./routes/menuRoutes"
import orderRouter from "./routes/orderRoutes"

const app = express()

connectDB(config)





// MIDDLEWARE

app.use(express.json())


app.get('/', (req, res) => {
  res.send("api running")
})

app.use('/api/menu', menuRouter)
app.use('/api/orders', orderRouter)

app.listen(config.PORT, () => {
  console.log("server listening on port ", config.PORT)
  console.log("Environment: ",process.env.NODE_ENV)
})