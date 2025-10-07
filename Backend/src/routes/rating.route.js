import express from 'express'
import authenticate from '../middleware/authenticate.js'
import ratingController from '../controller/rating.controller.js'
const router = express.Router()


router.post("/create", authenticate,ratingController.createRating )
router.put("/product/:productId", authenticate,ratingController.getAllRating )

export default router