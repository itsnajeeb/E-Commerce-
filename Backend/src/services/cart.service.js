import Cart from '../models/cart.model.js'
import CartItem from '../models/cartItem.model.js'
import Product from '../models/product.model.js';

const createCart = async (user) => {
    try {
        const cart = new Cart({ user });
        const createCart = await cart.save()
        return createCart
    } catch (error) {
        throw new Error(error.message)
    }

}

const findUserCart = async (userId) => {
    try {
        let cart = await Cart.findOne({ user: user });
        let CartItems = await CartItem.find({ cart: cart._id }).populate("product")
        cart.CartItems = CartItems;
        let totalPrice = 0;
        let totalDiscountPrice = 0;
        let totalItem = 0;

        for (let cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountPrice += cartItem.discountedPrice;
            totalItem = cartItem.quantity
        }

        cart.totalPrice = totalPrice
        cart.totalItem = totalItem
        cart.discount = totalDiscountPrice;

        return cart

    } catch (error) {
        throw new Error(error.message)
    }
}

async function addCartItem(userId, req) {
    try {
        const cart = await Cart.findOne({ user: userId })
        const product = Product.findById(req.productId)
        const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId })
        if (!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountPrice: product.discountedPrice
            })

            const createdCartItem = await cartItem.save()
            cart.cartItems.push(createdCartItem)
            await cart.save()
            return "Item added to cart"
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
export default {
    createCart,
    findUserCart,
    addCartItem
}