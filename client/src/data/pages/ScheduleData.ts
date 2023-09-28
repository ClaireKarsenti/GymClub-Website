export type Days = {
  day: string;
  label: string;
};

export const days: Days[] = [
  { day: 'monday', label: 'Monday' },
  { day: 'tuesday', label: 'Tuesday' },
  { day: 'wednesday', label: 'Wednesday' },
  { day: 'thursday', label: 'Thursday' },
  { day: 'friday', label: 'Friday' },
  { day: 'saturday', label: 'Saturday' },
];

export type ClassInfo = {
  className: string;
  time: string;
  trainer: string;
};

export type ClassesByDay = {
  [day: string]: ClassInfo[];
};

export const classesByDay: ClassesByDay = {
  monday: [
    { className: 'Fitness', time: '9:00am - 10:00am', trainer: 'David Vila' },
    {
      className: 'Body Building',
      time: '10:00pm - 11:00pm',
      trainer: 'John Weights',
    },
    {
      className: 'Running',
      time: '4:00pm - 5:00pm',
      trainer: 'Jenifer Jonas',
    },
    {
      className: 'Cycling',
      time: '6:00pm - 7:00pm',
      trainer: 'Robert Louis',
    },
  ],
  tuesday: [
    {
      className: 'Boxing',
      time: '10:00pm - 11:00pm',
      trainer: 'Mike Tyson',
    },
    {
      className: 'Yoga',
      time: '4:00pm - 5:00pm',
      trainer: 'Mia Kha',
    },
    {
      className: 'Crossfit',
      time: '6:00pm - 7:00pm',
      trainer: 'Cristofer Columbo',
    },
  ],
  wednesday: [
    { className: 'Cycling', time: '9:00am - 10:00am', trainer: 'Mario Verco' },
    {
      className: 'Body Building',
      time: '10:00pm - 11:00pm',
      trainer: 'John Weights',
    },
    {
      className: 'Fitness',
      time: '4:00pm - 5:00pm',
      trainer: 'Tom Rizzly',
    },
    {
      className: 'Running',
      time: '6:00pm - 7:00pm',
      trainer: 'Michael Jonson',
    },
  ],
  thursday: [
    { className: 'Fitness', time: '9:00am - 10:00am', trainer: 'David Vila' },
    {
      className: 'Body Building',
      time: '10:00pm - 11:00pm',
      trainer: 'John Weights',
    },
    {
      className: 'Running',
      time: '4:00pm - 5:00pm',
      trainer: 'Jenifer Jonas',
    },
  ],
  friday: [
    { className: 'Crossfit', time: '9:00am - 10:00am', trainer: 'Mike Mich' },
    {
      className: 'Karate',
      time: '10:00pm - 11:00pm',
      trainer: 'John Jones',
    },
    {
      className: 'Meditation',
      time: '4:00pm - 5:00pm',
      trainer: 'Lara Croft',
    },
    {
      className: 'Workout',
      time: '6:00pm - 7:00pm',
      trainer: 'Lary Wheels',
    },
  ],
  saturday: [
    {
      className: 'Power Lifting',
      time: '9:00am - 10:00am',
      trainer: 'David Laidy',
    },
    {
      className: 'Boxing',
      time: '10:00pm - 11:00pm',
      trainer: 'Tyson Fury',
    },
    {
      className: 'Yoga',
      time: '4:00pm - 5:00pm',
      trainer: 'Milica Tails',
    },
  ],
};
