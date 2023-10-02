import Img1 from 'assets/images/blogpage/1.jpg';
import Img2 from 'assets/images/blogpage/2.jpg';
import Img3 from 'assets/images/blogpage/3.jpg';
import Img4 from 'assets/images/blogpage/4.jpg';
import Img5 from 'assets/images/blogpage/5.jpg';
import Img6 from 'assets/images/blogpage/6.jpg';
import Img7 from 'assets/images/blogpage/7.jpg';
import Recent1 from 'assets/images/blogpage/recent1.jpg';
import Recent2 from 'assets/images/blogpage/recent2.jpg';
import Recent3 from 'assets/images/blogpage/recent3.jpg';
import Recent4 from 'assets/images/blogpage/recent4.jpg';
import Recent5 from 'assets/images/blogpage/recent5.jpg';
import Recent6 from 'assets/images/blogpage/recent6.jpg';

export type BlogContent = {
  postId: string;
  img: string;
  title: string;
  writeAt: string;
  theme: string;
};
export const blogContent: BlogContent[] = [
  {
    postId: "post1",
    img: Img1,
    title: 'Yoga For Everyone in 2022',
    writeAt: 'February 25',
    theme: 'Yoga',
  },
  {
    postId: "post2",
    img: Img2,
    title: 'Getting Back Into CrossFit After Vacation',
    writeAt: 'March 11',
    theme: 'Crossfit',
  },
  {
    postId: "post3",
    img: Img3,
    title: 'Meet Fitness Ambassador Grace',
    writeAt: 'March 15',
    theme: 'Fitness',
  },
  {
    postId: "post4",
    img: Img4,
    title: 'The Best are European Materials Direct',
    writeAt: 'April 20',
    theme: 'Meditation',
  },
  {
    postId: "post5",
    img: Img5,
    title: 'Give your Fitness a Boost with our Gym',
    writeAt: 'June 5',
    theme: 'Boxing',
  },
  {
    postId: "post6",
    img: Img6,
    title: 'How to Get Fit Your Kids Moving Throughout The Summer',
    writeAt: 'July 30',
    theme: 'Fitness',
  },
  {
    postId: "post7",
    img: Img7,
    title: 'Give your fitness a boost with our new gym challenge',
    writeAt: 'August 11',
    theme: 'Fitness',
  },
];

export const recentPosts = [
  { img: Recent1, date: 'March 22, 2022', title: 'Yoga For Everyone in 2022' },
  { img: Recent2, date: 'March 22, 2022', title: 'Getting Back Into CrossFit' },
  {
    img: Recent3,
    date: 'March 22, 2022',
    title: 'Meet Fitness Abassador Grace',
  },
  {
    img: Recent4,
    date: 'March 22, 2022',
    title: 'The best are European Meditation Practitioner',
  },
  {
    img: Recent5,
    date: 'March 22, 2022',
    title: 'Learn Boxing With Our Trainer John',
  },
  {
    img: Recent6,
    date: 'March 22, 2022',
    title: 'How To Get Lean For The Summer',
  },
];

export const categories: string[] = [
  'Body Building',
  'Boxing',
  'Crossfit',
  'Fitness',
  'Meditation',
  'Yoga',
];

export const tags: string[] = [
  'Crossfit',
  'Fitness',
  'Gym',
  'Meditation',
  'Running',
  'Workout',
  'Yoga',
  'Boxing',
];
