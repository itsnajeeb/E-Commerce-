import express from 'express'
import authenticate from '../middleware/authenticate.js';
import cartController from '../controller/cart.controller.js';
const router = express.Router();


router.post("/add", authenticate, cartController.addItemToCart)
router.get("/", authenticate, cartController.findUserCart)

export default router