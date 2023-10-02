export const text = {
  title: 'We are here to help you! Shape Your Body.',
  info: [
    {
      title: 'New York City, USA',
      line1: '85 Briston Mint Street',
      line2: 'London, E1 8LG, USA',
    },
    {
      title: 'Opening Hours',
      line1: 'Mon to Fri: 7:00 am — 21:00 pm',
      line2: 'Saturday: 7:00 am — 19:00 pm',
    },
    {
      title: 'Information',
      line1: '+800-123-4567',
      line2: '  gymat@gmail.com',
    },
  ],
  mainText:
    'At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.',
};

type LeaveInfo = {
  placeHolder: string;
  type: string;
  className: string;
};
export const leaveInfo: LeaveInfo[] = [
  {
    placeHolder: 'Full Name*',
    type: 'text',
    className:
      'w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8',
  },
  {
    placeHolder: 'Email Address*',
    type: 'email',
    className:
      'w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8',
  },
];
