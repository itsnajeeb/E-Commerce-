import app from './app.js';
import connectDB from './config/db.js'
const PORT = 5454;

app.listen(PORT, async () => {
    await connectDB()
    console.log(`App is listening at PORT : ${PORT}`);

})