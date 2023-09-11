type BlogContent = {
  bgClass: string;
  date: string;
  title: string;
  description: string;
};

export const blogContent: BlogContent[] = [
  {
    bgClass: 'box1Bg',
    date: '22.03.2023',
    title: 'Yoga For Everyone in 2023',
    description:
      'This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds. ',
  },
  {
    bgClass: 'box2Bg',
    date: '13.09.2023',
    title: 'Getting Back Into CrossFit After Vacation',
    description:
      'Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.',
  },
  {
    bgClass: 'box3Bg',
    date: '28.06.2023',
    title: 'Meet Fitness Ambassador Grace',
    description:
      'Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.',
  },
];
