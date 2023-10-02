import { Request, Response } from 'express';
import ContactInfo from '../models/ContactInfo';

export const saveContactInfo = async (req: Request, res: Response) => {
  try {
    const { fullName, email, selectedClass, comment } = req.body;

    const contactInfo = new ContactInfo({
      fullName,
      email,
      selectedClass,
      comment,
    });

    await contactInfo.save();
    res.status(201).json({ message: 'Data saved successfully.' });
  } catch (error) {
    console.error('Error saving data :', error);
    res.status(500).json({
      error: 'An error occurred while saving data.',
    });
  }
};
