import Img1 from 'assets/images/blogpage/1.jpg';
import Img2 from 'assets/images/blogpage/2.jpg';
import Img3 from 'assets/images/blogpage/3.jpg';
import Img4 from 'assets/images/blogpage/4.jpg';
import Img5 from 'assets/images/blogpage/5.jpg';
import Img6 from 'assets/images/blogpage/6.jpg';
import Img7 from 'assets/images/blogpage/7.jpg';
import Recent1 from 'assets/images/blogpage/recent1.jpg';
import Recent2 from 'assets/images/blogpage/recent2.jpg';
import Recent3 from 'assets/images/blogpage/recent3.jpg';
import Recent4 from 'assets/images/blogpage/recent4.jpg';
import Recent5 from 'assets/images/blogpage/recent5.jpg';
import Recent6 from 'assets/images/blogpage/recent6.jpg';

export type BlogContent = {
  postId: string;
  imgPost?: string;
  imgRecentPost?: string;
  title: string;
  writeAt: string;
  theme: string;
  content: string;
  details?: string;
};
export const blogContent: BlogContent[] = [
  {
    postId: 'post1',
    imgPost: Img1,
    imgRecentPost: Recent1,
    title: 'Yoga for everyone',
    writeAt: 'February 25',
    theme: 'Yoga',
    content:
      "Yoga is more than just a physical exercise; it's a holistic practice that encompasses the mind, body, and spirit. Originating in ancient India, yoga has gained immense popularity worldwide for its numerous physical and mental health benefits.",
    details:
      "One of the beautiful aspects of yoga is its inclusivity. It can be adapted to various fitness levels and physical abilities, making it accessible to people of all ages. Whether you're a beginner or an experienced yogi, there's a yoga style and practice suitable for you. Yoga is not just a fitness trend; it's a lifestyle that promotes overall well-being. By incorporating yoga into your routine, you can experience the myriad benefits it offers for your physical health, mental well-being, and spiritual growth. So, roll out your mat and embark on a journey to discover the transformative power of yoga.",
  },
  {
    postId: 'post2',
    imgPost: Img2,
    imgRecentPost: Recent2,
    title: 'Getting back into CrossFit after vacation',
    writeAt: 'March 11',
    theme: 'Crossfit',
    content:
      "Vacations are a wonderful way to relax and unwind, but they can disrupt your regular fitness routine. If you've been away from CrossFit due to a vacation break, getting back into the swing of things can be both exciting and challenging. Fortunately, we've designed a specialized program to help you seamlessly transition back into your CrossFit journey.",
    details:
      "We understand that vacations are essential for rejuvenation, but so is your fitness. By following our program and expert guidance, you'll quickly regain your strength, stamina, and mental focus. Welcome back to the world of CrossFit, where every workout is a step closer to achieving your fitness goals. Let's make your return journey a successful and rewarding one!",
  },
  {
    postId: 'post3',
    imgPost: Img3,
    imgRecentPost: Recent3,
    title: 'Meet fitness ambassador Grace',
    writeAt: 'March 15',
    theme: 'Fitness',
    content:
      "Grace is not just a fitness enthusiast; she's a true fitness ambassador who embodies the principles of a healthy and active lifestyle. Her journey is an inspiring story of dedication, perseverance, and the transformative power of fitness.",
    details:
      "In 'Meet Fitness Ambassador Grace,' we encounter a dedicated and inspiring individual who has made fitness a central part of her life. Her story reminds us that fitness is not just about aesthetics but also about feeling strong, confident, and fulfilled. Grace's journey serves as a testament to the positive impact of fitness on both physical and mental well-being. She encourages us all to embrace fitness as a lifestyle and discover the transformative power it can have on our lives.",
  },

  {
    postId: 'post4',
    imgPost: Img4,
    imgRecentPost: Recent4,
    title: 'Do your meditation',
    writeAt: 'April 20',
    theme: 'Meditation',
    content:
      'Meditation is a practice that has been embraced across cultures and traditions for centuries, and its benefits are now widely recognized in the modern world. It is a mental exercise that involves focusing your mind on a particular object, thought, or activity to achieve mental clarity, relaxation, and heightened awareness.',
    details:
      "Meditation is not just a relaxation technique; it's a holistic practice that benefits the mind, body, and spirit. By incorporating meditation into your daily routine, you can experience the profound positive effects it offers for stress reduction, emotional well-being, and self-discovery. Start your journey to inner peace and balance through meditation today.",
  },
  {
    postId: 'post5',
    imgPost: Img5,
    imgRecentPost: Recent5,
    title: 'Give your boxing a boost with our gym',
    writeAt: 'June 5',
    theme: 'Boxing',
    content:
      "Boxing is a dynamic and exhilarating sport that has gained popularity worldwide. Whether you're a professional boxer or someone looking to get in shape, our gym offers a comprehensive and supportive environment for all boxing enthusiasts.",
    details:
      "Safety is our top priority. We provide a safe and controlled training environment, and our coaches emphasize proper technique and protective gear to minimize the risk of injury. Boxing is an inclusive sport that can be enjoyed by people of all ages and backgrounds. Whether you're interested in competitive boxing or simply want to improve your fitness, our gym welcomes individuals with diverse goals and aspirations.",
  },
  {
    postId: 'post6',
    imgPost: Img6,
    imgRecentPost: Recent6,
    title: 'How to get fit your kids moving throughout the summer',
    writeAt: 'July 30',
    theme: 'Fitness',
    content:
      'Summer is the perfect time to inspire your kids to stay active and engaged. With longer days and beautiful weather, there are numerous opportunities to encourage physical activity and help them lead a healthy lifestyle. ',
    details:
      'By combining outdoor adventures, sports, family activities, and a balanced approach to screen time, you can inspire your kids to stay physically active and make the most of their summer break. These activities not only promote fitness but also foster a lifelong love for a healthy and active lifestyle. So, get ready to make this summer a memorable and active one for your kids!',
  },
  {
    postId: 'post7',
    imgPost: Img7,
    title: 'Give your fitness a boost with our new gym challenge',
    writeAt: 'August 11',
    theme: 'Fitness',
    content:
      "Are you ready to take your fitness journey to the next level? Our brand-new gym challenge is designed to ignite your motivation, push your limits, and help you achieve your health and fitness goals. Whether you're a seasoned fitness enthusiast or just starting your fitness journey, this challenge offers a unique opportunity to transform your physical well-being.",
    details:
      "It is your opportunity to make a positive change in your life. Whether you're looking to enhance your physical fitness, manage your weight, or simply feel better both mentally and physically, this challenge is designed with your success in mind. Join us on this exciting journey, and let's work together to achieve your fitness aspirations. It's time to embrace a healthier, happier, and more energetic you!",
  },
];

export const categories: string[] = [
  'Body Building',
  'Boxing',
  'Crossfit',
  'Fitness',
  'Meditation',
  'Yoga',
];

export const tags: string[] = [
  'Crossfit',
  'Fitness',
  'Gym',
  'Meditation',
  'Running',
  'Workout',
  'Yoga',
  'Boxing',
];
