type AboutCardProps = {
  img: string;
  title: string;
  description: string;
};

function AboutCard({ img, title, description }: AboutCardProps) {
  return (
    <div className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]">
      <img src={img} alt="box_img" className=" w-[75px] mb-4" />
      <p className=" text-[24px] font-bold uppercase mb-7">{title}</p>
      <p className="text-[15px] font-medium leading-2 w-full">{description}</p>
    </div>
  );
}

export default AboutCard;
