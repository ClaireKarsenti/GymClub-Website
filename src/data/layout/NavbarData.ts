import SideImg1 from '../../assets/images/sidebar/1.jpg';
import SideImg2 from '../../assets/images/sidebar/2.jpg';
import SideImg3 from '../../assets/images/sidebar/3.jpg';
import SideImg4 from '../../assets/images/sidebar/4.jpg';
import SideImg5 from '../../assets/images/sidebar/5.jpg';
import SideImg6 from '../../assets/images/sidebar/6.jpg';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type GalleryImg = {
  SideImg1: string;
  SideImg2: string;
  SideImg3: string;
  SideImg4: string;
  SideImg5: string;
  SideImg6: string;
};
export const galleryImg: GalleryImg = {
  SideImg1,
  SideImg2,
  SideImg3,
  SideImg4,
  SideImg5,
  SideImg6,
};

export const socials: IconDefinition[] = [
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
];

type Links = {
  label: string;
  path: string;
};

export const links: Links[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Gallery',
    path: '/gallery/page-1',
  },
  {
    label: 'Schedule',
    path: '/schedule/monday',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Pricing',
    path: '/pricing',
  },
  {
    label: 'Classes',
    path: '/classes',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];
