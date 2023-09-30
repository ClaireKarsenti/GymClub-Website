import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

/* CONFIGURATIONS */
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use('/auth', authRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL || 'mongodb://localhost:27017/GymMate', {
    dbName: 'GymMate',
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error(`${error} did not connect`));
