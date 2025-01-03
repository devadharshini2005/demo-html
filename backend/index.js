import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoute.js'
const app=express();
app.use(bodyParser.json());
dotenv.config();
const PORT=process.env.PORT||3001;
const MONGO_URL=process.env.MONGO_URL;

app.use('/api/user',router);
mongoose.connect(MONGO_URL)
        .then(()=>{
            console.log("Mongodb connected");
    
            app.listen(PORT,()=>{
                console.log(`server running on port ${PORT}`);
            });
        })
        .catch((err) => {
            console.error("Failed to connect to MongoDB", err);
          });
        