import mongoose, { Document } from 'mongoose';

export interface UserType extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<UserType>(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<UserType>('User', UserSchema);
export default User;
