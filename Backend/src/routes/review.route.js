import express from 'express'
import authenticate from '../middleware/authenticate'
import reviewController from '../controller/review.controller'
const router = express.Router()

router.post("/create", authenticate, reviewController.createReview)
router.post("/product/:productId", authenticate, reviewController.getAllReview)

export default router