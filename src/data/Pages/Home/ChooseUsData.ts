import VideoImg from '../../../assets/images/choose-us/main-img.png';
import TrainingIcon from '../../../assets/images/choose-us/training.png';
import EquipmentsIcon from '../../../assets/images/choose-us/bench-press.png';
import BagIcon from '../../../assets/images/choose-us/gym-bag.png';
import WaterBottleIcon from '../../../assets/images/choose-us/bottle-of-water.png';
import PlayImg from '../../../assets/images/choose-us/play.png';

type Video = {
  img: string;
  alt: string;
  className: string;
};

export const video: Video[] = [
  {
    img: VideoImg,
    alt: 'video_img',
    className: 'relative w-[94%] h-auto',
  },
  {
    img: PlayImg,
    alt: 'play',
    className:
      'absolute w-[2.4rem] top-[42%] left-[44%] z-10 cursor-pointer min450:left-[47%] min450:top-[44%]',
  },
];

type Text = {
  title: string;
  subtitle: string;
  mainText: string;
};

export const text: Text = {
  title: ' why choose us',
  subtitle: 'We Can Give A Shape Of Your Body Here!',
  mainText:
    'At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.',
};

type Equipments = {
  img: string;
  text: string;
};

export const equipments: Equipments[] = [
  {
    img: TrainingIcon,
    text: 'Free Fitness Training',
  },
  {
    img: EquipmentsIcon,
    text: 'Modern Gym Equipments',
  },
  {
    img: BagIcon,
    text: 'Gym Bag Equipments',
  },
  {
    img: WaterBottleIcon,
    text: 'Fresh Bottle Watter',
  },
];
