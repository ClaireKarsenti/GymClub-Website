import {
  faFacebook,
  faTwitter,
  faYoutube,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const classes: string[] = [
  'Fitness Classes',
  'Aerobics Classes',
  'Power Yoga',
  'Learn Machines',
  'Full-body Strength',
];

export const socials: IconDefinition[] = [
  faFacebook,
  faTwitter,
  faPinterest,
  faYoutube,
];

type Schedule = {
  day: string;
  time: string;
};

export const schedule: Schedule[] = [
  {
    day: 'Monday - Friday',
    time: '7:00am - 21:00pm',
  },
  {
    day: 'Saturday',
    time: '7:00am - 19:00pm',
  },
  {
    day: 'Sunday',
    time: 'Closed',
  },
];
