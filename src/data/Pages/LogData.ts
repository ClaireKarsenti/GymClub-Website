type Log = {
  label: string;
  placeHolder: string;
  type: string;
  className: string;
};
export const login: Log[] = [
  {
    label: 'Email',
    placeHolder: 'gymate@gymail.com',
    type: 'email',
    className: 'text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ',
  },
  {
    label: 'Password',
    placeHolder: 'password',
    type: 'password',
    className: 'text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ',
  },
];

export const signup: Log[] = [
  {
    label: 'First Name',
    placeHolder: 'John',
    type: 'text',
    className: 'text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ',
  },
  {
    label: 'Last Name',
    placeHolder: 'Doe',
    type: 'text',
    className: 'text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ',
  },
  {
    label: 'Email',
    placeHolder: 'gymate@gymail.com',
    type: 'email',
    className: 'text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ',
  },
  {
    label: 'Password',
    placeHolder: 'password',
    type: 'password',
    className: 'text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] ',
  },
];
