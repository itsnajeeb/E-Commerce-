import express from 'express'
import authenticate from '../middleware/authenticate.js';
import adminOrderController from '../controller/adminOrder.controller.js';
const router = express.Router();

router.get('/', authenticate, adminOrderController.getAllOrders)
router.put("/:orderId/confirmed", authenticate, adminOrderController.confirmedOrder)
router.put("/:orderId/ship", authenticate, adminOrderController.shippOrder)
router.put("/:orderId/delivery", authenticate, adminOrderController.deleteOrder)
router.put("/:orderId/cancel", authenticate, adminOrderController.cancelOrder)
router.put("/:orderId/delete", authenticate, adminOrderController.deleteOrder)

export default router