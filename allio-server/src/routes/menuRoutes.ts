import express from 'express'
import menu from '../models/data'
require ('express-async-errors' )

const menuRouter = express.Router()

menuRouter.get('/', async (req: express.Request, res: express.Response) => {
  res.json({ menu})
})


export default menuRouter