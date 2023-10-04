import Post from '../models/Post.js';
import { Request, Response } from 'express';
import path from 'path';
import express from 'express';

/* READ */
export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
    express.static(path.join(__dirname, './public/assets/blogpage'));
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    res.status(404).json({ message: errorMessage });
  }
};
