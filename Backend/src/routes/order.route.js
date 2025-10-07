import express from 'express'
import authenticate from '../middleware/authenticate'
import orderController from '../controller/order.controller'
const router  = express.Router()

router.post("/", authenticate,orderController.createOrder)
router.post("/user", authenticate,orderController.orderHistory)
router.post("/:id", authenticate,orderController.findOrderById)

export default router