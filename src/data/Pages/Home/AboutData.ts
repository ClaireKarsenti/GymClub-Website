import TitleRed from '../../../assets/images/who-we-are/title-bg.svg';
import TrainersIcon from '../../../assets/images/who-we-are/weightlifter.png';
import ModernIcon from '../../../assets/images/who-we-are/equpments.png';
import LiftIcon from '../../../assets/images/who-we-are/gym.png';
import GirlRunning from '../../../assets/images/who-we-are/girl-run.png';
import GirlRedBg from '../../../assets/images/who-we-are/girl-redbg.svg';
import GirlText from '../../../assets/images/who-we-are/girl-side-text.png';
import GirlWind from '../../../assets/images/who-we-are/wind.png';
import ProgressionImg from '../../../assets/images/who-we-are/progresion.png';
import WorkoutImg from '../../../assets/images/who-we-are/workout.png';
import NutritionImg from '../../../assets/images/who-we-are/nutritions.png';

type Card = {
  img: string;
  title: string;
  description: string;
};

export const cardList: Card[] = [
  {
    img: ProgressionImg,
    title: 'Progression',
    description:
      'Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.',
  },
  {
    img: WorkoutImg,
    title: 'Workout',
    description:
      " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
  },
  {
    img: NutritionImg,
    title: 'Nutritions',
    description:
      'Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.',
  },
];

type PresentationText = {
  title: string;
  img: string;
  subTitle: string;
  mainText: string;
};

export const presentationText: PresentationText = {
  title: 'who we are',
  img: TitleRed,
  subTitle: 'Take Your Health And Body To Next Level',
  mainText:
    'Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.',
};

type Icon = {
  className: string;
  img: string;
  text: string;
};

export const icons: Icon[] = [
  {
    className:
      'flex flex-col  items-center text-center py-10 px-14 pl-7 min620:px-0',
    img: TrainersIcon,
    text: 'professional trainers',
  },
  {
    className:
      'flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none',
    img: ModernIcon,
    text: 'modern equipments',
  },
  {
    className:
      'flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0',
    img: LiftIcon,
    text: 'fancy gym machines',
  },
];

type Image = {
  className: string;
  img: string;
  alt: string;
};

export const images: Image[] = [
  {
    className: 'girl-running',
    img: GirlRunning,
    alt: 'girl_running',
  },
  {
    className: 'girl-red',
    img: GirlRedBg,
    alt: 'girl-red',
  },
  {
    className: 'girl-text',
    img: GirlText,
    alt: 'girl-text',
  },
  {
    className: 'girl-wind',
    img: GirlWind,
    alt: 'girl-wind',
  },
];
