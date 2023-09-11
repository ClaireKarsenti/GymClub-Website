type Titles = {
  title: string;
  subTitle: string;
};

export const titles: Titles = {
  title: 'OUR FEATURED CLASS',
  subTitle: 'We Are Offering Best Flexible Classes',
};

type Schedule = {
  sport: string;
  day: string;
  hours: string;
  img: string;
};

export const schedule: Schedule[] = [
  {
    sport: 'Cycling',
    day: 'Wednesday',
    hours: ' 9:00am-10:00am',
    img: require('../../../assets/images/classes/cycling.png'),
  },
  {
    sport: 'Karate',
    day: 'Friday',
    hours: ' 10:00am-11:00am',
    img: require('../../../assets/images/classes/karate.jpg'),
  },
  {
    sport: 'Power',
    day: 'Saturday',
    hours: ' 9:00am-10:00am',
    img: require('../../../assets/images/classes/powerlifting.jpg'),
  },
  {
    sport: 'Meditation',
    day: 'Friday',
    hours: ' 1:00pm-2:00pm',
    img: require('../../../assets/images/classes/meditation.jpg'),
  },
  {
    sport: 'Boxing',
    day: 'Tuesday',
    hours: ' 6:00pm-7:00pm',
    img: require('../../../assets/images/classes/mma.jpg'),
  },
  {
    sport: 'Workout',
    day: 'Monday',
    hours: ' 4:00pm-5:00pm',
    img: require('../../../assets/images/classes/workout.jpg'),
  },
];
