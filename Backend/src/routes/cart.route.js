import express from 'express'
import authenticate from '../middleware/authenticate';
import cartController from '../controller/cart.controller';
const router = express.Router();


router.get("/", authenticate, cartController.findUserCart)
router.get("/add", authenticate, cartController.addItemToCart)

export default router