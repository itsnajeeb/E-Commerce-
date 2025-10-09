import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js';
import productRoutes from './routes/product.route.js';
import adminProductRoutes from './routes/adminProduct.route.js';
import cartRoutes from './routes/cart.route.js';
import cartItemsRoutes from './routes/cartItem.route.js';
import orderRoutes from './routes/order.route.js';
import reviewRoutes from './routes/review.route.js';
import ratingRoutes from './routes/rating.route.js';
import adminOrderRoutes from './routes/adminOrder.route.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/product',productRoutes)
app.use('/api/admin/products',adminProductRoutes)
app.use('/api/cart',cartRoutes)
app.use('/api/cart_items',cartItemsRoutes)
app.use('/api/orders',orderRoutes) 
app.use('/api/review',reviewRoutes)
app.use('/api/rating',ratingRoutes)
app.use('/api/admin/orders',adminOrderRoutes)


app.get('/', (req, res) => {
  res.status(200).send({
    message: "Welcome to our E-commerce API",
    success: true
  });

});

export default app;
