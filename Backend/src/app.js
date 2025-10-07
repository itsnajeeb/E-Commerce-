import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.status(200).send({
    message: "Welcome to our E-commerce API",
    success: true
  });

});

export default app;
