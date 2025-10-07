import ratingService from '../services/rating.service.js'

const createRating = async (req, res) => {
    const user = req.user;
    try {
        const rating = await ratingService.createRating(req.body, user)
        return res.status(201).send(rating)
    } catch (error) {
        throw new Error({ error: error.message })
    }
}


const getAllRating = async (req, res) => {
    const productId = req.params.productId
    const user = req.user;
    try {
        const rating = await ratingService.getAllRating(productId)
        return res.status(201).send(rating)
    } catch (error) {
        throw new Error({ error: error.message })
    }
}

export default {
    createRating,
    getAllRating
}