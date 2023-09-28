type BgImages = {
  [key: string]: string;
};

const bgImages: BgImages = {
  cycling: require('assets/images/classes/cycling.png'),
  meditation: require('assets/images/classes/meditation.jpg'),
  mma: require('assets/images/classes/mma.jpg'),
  karate: require('assets/images/classes/karate.jpg'),
  powerlifting: require('assets/images/classes/powerlifting.jpg'),
  workout: require('assets/images/classes/workout.jpg'),
  crossfit: require('assets/images/classes/crossfit.jpg'),
  running: require('assets/images/classes/running.jpg'),
  barre: require('assets/images/classes/barre.png'),
  bodybuilding: require('assets/images/classes/bodybuilding.jpg'),
  flyingyoga: require('assets/images/classes/flyingyoga.png'),
  trx: require('assets/images/classes/trx.png'),
  step: require('assets/images/classes/step.png'),
  box: require('assets/images/classes/box.jpg'),
  fitness: require('assets/images/classes/fitness.jpg'),
  yoga: require('assets/images/classes/yoga.jpg'),
};

type ClassesBox = {
  bgImg: string;
  title: string;
  trainer: string;
  date: string;
};
const classesBox: ClassesBox[] = [
  {
    bgImg: 'cycling',
    title: 'Cycling',
    trainer: 'Dorian Yate',
    date: 'Wed: 9:00 am',
  },
  {
    bgImg: 'meditation',
    title: 'Meditation',
    trainer: 'Maria Mich',
    date: 'Fri: 1:00 pm',
  },
  {
    bgImg: 'mma',
    title: 'Boxing',
    trainer: 'John Flex',
    date: 'Tue: 4:00 pm',
  },
  {
    bgImg: 'karate',
    title: 'Karate',
    trainer: 'David Rich',
    date: 'Sat: 9:00 am',
  },
  {
    bgImg: 'powerlifting',
    title: 'Power Lifting',
    trainer: 'Larry Wheels',
    date: 'Mon: 8:00 pm',
  },
  {
    bgImg: 'workout',
    title: 'Workout',
    trainer: 'Shawn Ray',
    date: 'Sun: 10:00 am',
  },
  {
    bgImg: 'crossfit',
    title: 'Crossfit',
    trainer: 'Jenifer Alex',
    date: 'Wen: 9:00 pm',
  },
  {
    bgImg: 'running',
    title: 'Running',
    trainer: 'Zinia Zessy',
    date: 'Fri: 6:00 am',
  },
  {
    bgImg: 'barre',
    title: 'Barre',
    trainer: 'Jess Ica',
    date: 'Thu: 02:00 pm',
  },
  {
    bgImg: 'meditation',
    title: 'Meditation',
    trainer: 'Maria Mich',
    date: 'Fri: 1:00 pm',
  },
  {
    bgImg: 'mma',
    title: 'Boxing',
    trainer: 'John Flex',
    date: 'Tue: 4:00 pm',
  },
  {
    bgImg: 'karate',
    title: 'Karate',
    trainer: 'David Rich',
    date: 'Sat: 9:00 am',
  },
  {
    bgImg: 'powerlifting',
    title: 'Power Lifting',
    trainer: 'Larry Wheels',
    date: 'Mon: 8:00 pm',
  },
  {
    bgImg: 'workout',
    title: 'Workout',
    trainer: 'Shawn Ray',
    date: 'Sun: 10:00 am',
  },
  {
    bgImg: 'crossfit',
    title: 'Crossfit',
    trainer: 'Jenifer Alex',
    date: 'Wen: 9:00 pm',
  },
  {
    bgImg: 'running',
    title: 'Running',
    trainer: 'Zinia Zessy',
    date: 'Thu: 12:00 am',
  },
  {
    bgImg: 'bodybuilding',
    title: 'Body Building',
    trainer: 'Jake Paul',
    date: 'Mon: 8:00 pm',
  },
  {
    bgImg: 'box',
    title: 'MMA',
    trainer: 'Becky Lynch',
    date: 'Fri: 6:00 am',
  },
  {
    bgImg: 'yoga',
    title: 'Yoga',
    trainer: 'Marta Mich',
    date: 'Wen: 8:00 am',
  },
  {
    bgImg: 'fitness',
    title: 'Fitness',
    trainer: 'Mia Malkova',
    date: 'Sat: 5:00 pm',
  },
  {
    bgImg: 'flyingyoga',
    title: 'Flying Yoga',
    trainer: 'Coco Look',
    date: 'Fri: 5:00 pm',
  },
  {
    bgImg: 'trx',
    title: 'TRX',
    trainer: 'Joshua Tree',
    date: 'Wen: 8:00 am',
  },
  {
    bgImg: 'step',
    title: 'Step',
    trainer: 'Julia Winter',
    date: 'Tue: 10:00 am',
  },
  {
    bgImg: 'barre',
    title: 'Barre',
    trainer: 'Jess Ica',
    date: 'Mon: 05:00 pm',
  },
];

export { bgImages, classesBox };
