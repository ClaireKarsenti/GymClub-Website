import Trainer1 from '../../../assets/images/trainers/trainer1.png';
import Trainer2 from '../../../assets/images/trainers/trainer2.png';
import Trainer3 from '../../../assets/images/trainers/trainer3.png';

export type Trainers = {
  img: string;
  name: string;
  job: string;
};
export const trainers: Trainers[] = [
  { img: Trainer1, name: 'John Lewis', job: 'Personal Trainer' },
  { img: Trainer2, name: 'Jonathan Doe', job: 'Crossfit Trainer' },
  { img: Trainer3, name: 'Ana June', job: 'Yoga Trainer' },
];

export const socials: string[] = [
  'fa-brands fa-facebook-f',
  'fa-brands fa-twitter',
  'fa-brands fa-instagram',
  'fa-regular fa-envelope',
];
