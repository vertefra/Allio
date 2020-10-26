import dotenv from 'dotenv'

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
    console.log("Env is Development")
    return devConfig
  } else {
    console.log("Env is Production")
  }

}

export { setConfig }
