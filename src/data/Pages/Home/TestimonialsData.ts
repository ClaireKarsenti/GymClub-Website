import Logo1 from '../../../assets/images/testimonials/logo1.png';
import Logo2 from '../../../assets/images/testimonials/logo2.png';
import Logo3 from '../../../assets/images/testimonials/logo3.png';
import Logo4 from '../../../assets/images/testimonials/logo4.png';
import Logo5 from '../../../assets/images/testimonials/logo5.png';

type Logos = {
  Logo1: string;
  Logo2: string;
  Logo3: string;
  Logo4: string;
  Logo5: string;
};

export const logos: Logos = { Logo1, Logo2, Logo3, Logo4, Logo5 };

export type Testimonials = {
  text: string;
  name: string;
  job: string;
};

export const testimonials: Testimonials[] = [
  {
    text: " “I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”",
    name: 'John Wick',
    job: 'Starbucks Employee',
  },
  {
    text: ' “I have been part of Gymate for the last 10 months, and the journey has been truly incredible. The trainers exhibit expertise and provide unwavering support, the equipment is of exceptional quality, and the community of members exudes friendliness and motivation.”',
    name: 'Harry Potter',
    job: 'CEO of Hogwarts',
  },
  {
    text: " “I've been associated with Gymate for the past half-year, and the experience has been absolutely phenomenal. The trainers are incredibly knowledgeable and offer great support, the equipment is top-tier, and the camaraderie among members is both welcoming and inspiring.”",
    name: 'Bill Gates',
    job: 'Founder of Microsoft',
  },
];
