import mongoose, { Document, Model } from 'mongoose';

export interface ContactInfoType extends Document {
  fullName: string;
  email: string;
  selectedClass: string;
  comment: string;
}

const ContactInfoSchema = new mongoose.Schema<ContactInfoType>(
  {
    fullName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    selectedClass: {
      type: String,
    },
    comment: {
      type: String,
      required: true,
      min: 2,
    },
  },
  { timestamps: true }
);
ContactInfoSchema.index({ email: 1 }, { unique: false });

const ContactInfo: Model<ContactInfoType> = mongoose.model(
  'ContactInfo',
  ContactInfoSchema
);
export default ContactInfo;
