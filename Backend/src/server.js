import app from './app.js';
import connectDB from './config/db.js'

import dotenv from 'dotenv';
dotenv.config();

const PORT = 5454;

app.listen(PORT, async () => {
    await connectDB()
    console.log(`App is listening at PORT : ${PORT}`);

})