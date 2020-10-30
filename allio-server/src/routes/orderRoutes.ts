import express from 'express'
import menu from '../models/data'
import { OrderModel } from '../models/order'
require('colors')
require ('express-async-errors' )

const orderRouter = express.Router()

// @desc    receive an order
// @route   POST /api/orders
// @access  will be private

orderRouter.post('/', async (req: express.Request, res: express.Response) => {
  const order: OrderModel = req.body.order
  console.log(`Receiving `.green)
  console.log(order)
  res.send("ok")

})


export default orderRouter