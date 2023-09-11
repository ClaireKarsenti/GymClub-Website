type InfoBoxType = { title: string; line1: string; line2: string };

const InfoBox = ({ title, line1, line2 }: InfoBoxType) => {
  return (
    <div className="flex flex-col relative">
      <h3 className="text-[2rem] font-bold mb-10">{title}</h3>
      <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
      <div className="text-[15px] font-medium text-[#646464]">
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
    </div>
  );
};

export default InfoBox;
