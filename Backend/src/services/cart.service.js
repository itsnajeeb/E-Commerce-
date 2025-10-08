import Cart from '../models/cart.model.js';
import CartItem from '../models/cartItem.model.js';
import Product from '../models/product.model.js';

const createCart = async (userId) => {
  try {
    const cart = new Cart({ user: userId });
    const createdCart = await cart.save();
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserCart = async (userId) => {
  try {
    
    let cart = await Cart.findOne({ user: userId });

    if (!cart) return null; // optionally: createCart(userId)

    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price * cartItem.quantity;
      totalDiscountPrice += cartItem.discountedPrice * cartItem.quantity;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.discount = totalDiscountPrice;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addCartItem = async (userId, req) => {
  try {
    // Find or create cart
    
    let cart = await Cart.findOne({ user: userId });
    console.log("CART",cart);
    
    if (!cart) {
      cart = await createCart(userId);
    }

    // Find product
    const product = await Product.findById(req.productId);
    if (!product) throw new Error("Product not found");

    // Check if item already in cart
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });

    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountedPrice: product.discountedPrice, // fixed field name
      });

      const createdCartItem = await cartItem.save();

      // Add to cart.cartItems if this field exists in schema
      if (!cart.cartItems) cart.cartItems = [];
      cart.cartItems.push(createdCartItem._id);
      await cart.save();

      return "Item added to cart";
    } else {
      return "Item already in cart";
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  createCart,
  findUserCart,
  addCartItem,
};
