import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors';

/* CONFIGURATIONS */
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

/* MODEL */
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', UserSchema);

/* MONGOOSE SETUP */
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/GymMate', {
  dbName: 'GymMate',
});

/* ROUTES */
app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'This user already exists.' });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, 'your_secret_token');

    return res.status(201).json({ token, user: savedUser });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'An error occurred.' });
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
