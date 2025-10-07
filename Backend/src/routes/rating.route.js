import express from 'express'
import authenticate from '../middleware/authenticate'
import ratingController from '../controller/rating.controller'
const router = express.Router()


router.post("/create", authenticate,ratingController.createRating )
router.put("/product/:productId", authenticate,ratingController.getAllRating )

export default router