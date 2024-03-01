import express from 'express';
import mongoose from 'mongoose';
import habbitsRoutes from './routes/habbitsRoutes.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json());
const port = 6000

app.use('/api/Habbits', habbitsRoutes);

app.listen(port ,()=>{
    console.log(`this server is running on port ${port}`);

})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("The database is connected");
})