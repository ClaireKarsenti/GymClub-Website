import RoundedButton from '../../globals/buttons/RoundedButton';

type ClassCardProps = {
  className: string;
  time: string;
  trainer: string;
};

function ClassCard({ className, time, trainer }: ClassCardProps) {
  return (
    <ul className="flex justify-between w-full min800:flex-col min800:text-center">
      <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Class Name</p>
        <p className="text-[18px] text-black font-bold mt-3">{className}</p>
      </li>
      <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
        <p className="text-[18px] text-black font-bold mt-3">{time}</p>
      </li>
      <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
        <p className="text-[18px] text-black font-bold mt-3">{trainer}</p>
      </li>
      <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full  min800:justify-center items-center flex justify-end">
        <RoundedButton
          onClick={() => window.scrollTo(0, 0)}
          to="/contact"
          className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
          label="Join Now"
        />
      </li>
    </ul>
  );
}

export default ClassCard;
