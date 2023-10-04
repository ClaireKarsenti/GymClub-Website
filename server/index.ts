import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import postRoutes from './routes/postRoutes.js';

/* CONFIGURATIONS */
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/assets', express.static('assets'));

/* ROUTES */
app.use('/auth', authRoutes);
app.use('/contact', contactRoutes);
app.use('/posts', postRoutes);

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
  .catch((error: any) => console.error(`${error} did not connect`));
