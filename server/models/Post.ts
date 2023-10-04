import mongoose, { Document, Model } from 'mongoose';

export interface PostType extends Document {
  postId: string;
  imgPost?: string;
  imgRecentPost?: string;
  title: string;
  writeAt: string;
  theme: string;
  content: string;
  details?: string;
}

const PostSchema = new mongoose.Schema<PostType>(
  {
    postId: {
      type: String,
    },
    imgPost: {
      type: String,
    },
    imgRecentPost: {
      type: String,
    },
    title: {
      type: String,
    },
    writeAt: {
      type: String,
    },
    theme: {
      type: String,
    },
    content: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post: Model<PostType> = mongoose.model('Post', PostSchema);
export default Post;
