import express from 'express';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import tipRoutes from './routes/tip.route.js'
import authRoutes from './routes/auth.route.js'

configDotenv();

mongoose.connect(process.env.MONGO).then(() => {
        console.log('MongoDB is connected');
    }).catch((err) => {
        console.log(err)
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

app.use('/', authRoutes);
app.use('/', tipRoutes);

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        const errorMessages = Object.values(err.errors).map(error => error.message);
        res.status(400).json({ errors: errorMessages });
      } else {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';
        return res.status(statusCode).json({
           success: false,
           message,
           statusCode
        });
      }
})