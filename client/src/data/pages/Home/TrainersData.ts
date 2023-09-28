import Trainer1 from 'assets/images/trainers/trainer1.png';
import Trainer2 from 'assets/images/trainers/trainer2.png';
import Trainer3 from 'assets/images/trainers/trainer3.png';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

export const socials: IconDefinition[] = [
  faFacebook,
  faTwitter,
  faInstagram,
  faEnvelope,
];
