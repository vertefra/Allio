import dotenv from 'dotenv'
import colors from 'colors'
import mongoose from 'mongoose'

const setConfig = () => {

  dotenv.config()
  
  // let config: { DB_NAME: string; DB_USER: string; DB_PSW: string; PORT: number } = {
  //   DB_NAME: '',
  //   DB_USER: '',
  //   DB_PSW: '',
  //   PORT: 0
  // }

  const devConfig = {
    DB_NAME: process.env.DEV_DB,
    DB_USER: process.env.DB_USER,
    DB_PSW: process.env.DB_PSW,
    PORT: 3001
  }



  if (process.env.NODE_ENV === 'dev') {
    console.log("Environment is Development".green)
    return devConfig
  } else {
    console.log("Env is Production")
  }

}

const connectDB = (config: { DB_NAME: string; DB_USER: string; DB_PSW: string; PORT: number}) => {
  // MONGO CONNECTION

  const DB_NAME = config.DB_NAME
  const DB_USER = config.DB_USER
  const DB_PSW = config.DB_PSW


  const URI = `mongodb+srv://${DB_USER}:${DB_PSW}@cluster0-fg0dv.gcp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  
  mongoose.connection.on("connected", () => {
    console.log(`Connected with database ${DB_NAME}`)
    console.log("ENV is ", process.env.NODE_ENV)
  })
  
}

const config = setConfig()

export { config, connectDB }
