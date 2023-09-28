import Img1 from 'assets/images/pricing/img1.jpg';
import Img2 from 'assets/images/pricing/img2.jpg';
import Img3 from 'assets/images/pricing/img3.jpg';

export type Plan = {
  type: string;
  img: string;
  price: number;
  pack: string[];
};

export const plans: Plan[] = [
  {
    type: 'Beginner',
    img: Img1,
    price: 39,
    pack: ['Free Hand', 'Gym Fitness', 'Weight Loss'],
  },
  {
    type: 'Intermediate',
    img: Img2,
    price: 65,
    pack: ['Free Hand', 'Gym Fitness', 'Weight Loss', 'Cycling'],
  },
  {
    type: 'Professional',
    img: Img3,
    price: 100,
    pack: [
      'Free Hand',
      'Gym Fitness',
      'Weight Loss',
      'Cycling',
      'Personal Trainer',
    ],
  },
];
