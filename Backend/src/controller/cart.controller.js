import cartService from "../services/cart.service.js";

const findUserCart = async (req, res) => {
    const user = req.user;
    try {
        const cart = await cartService.findUserCart(user._id)
        return res.status(200).json(cart)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const addItemToCart = async (req, res) => {
    const user = req.user;
    try {
        const cartItem = await cartService.addCartItem(user._id, req.body)
        return res.status(200).json(cartItem)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

export default {
    findUserCart,
    addItemToCart
}