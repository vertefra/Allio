import express from "express"
import mongoose from "mongoose"
import { setConfig } from "./config/config"

const app = express()
const config = setConfig()

const DB_NAME = config.DB_NAME
const DB_USER = config.DB_USER
const DB_PSW = config.DB_PSW

// MONGO CONNECTION

const URI = `mongodb+srv://${DB_USER}:${DB_PSW}@cluster0-fg0dv.gcp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on("connected", () => {
  console.log('Allio connected with database => ', DB_NAME)
  console.log("ENV is ", process.env.NODE_ENV )
})




// MIDDLEWARE

app.use(express.json())

app.listen(config.PORT, () => {
  console.log("server listening on port ", config.PORT)
  console.log("Environment: ",process.env.NODE_ENV)
})