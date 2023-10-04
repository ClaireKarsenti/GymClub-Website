type BlogContent = {
  bgClass: string;
  postId: string;
  date: string;
  title: string;
  description: string;
};

export const blogContent: BlogContent[] = [
  {
    bgClass: 'box1Bg',
    postId: 'post1',
    date: '25.02',
    title: 'Yoga For Everyone',
    description:
      'This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds. ',
  },
  {
    bgClass: 'box2Bg',
    postId: 'post2',
    date: '11.03',
    title: 'Getting Back Into CrossFit After Vacation',
    description:
      'Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.',
  },
  {
    bgClass: 'box3Bg',
    postId: 'post3',
    date: '15.03',
    title: 'Meet Fitness Ambassador Grace',
    description:
      'Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.',
  },
];
