import { trainers } from 'data/pages/Home/TrainersData';
import TitleRed from 'assets/images/who-we-are/title-bg.svg';
import TrainerCard from './TrainerCard';

function Trainers() {
  return (
    <>
      <section id="team" className="trainers-section">
        <div className="container page-padding py-[12rem]">
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
              gym trainers
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[21rem] absolute -top-[6px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Team Of Expert Coaches
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Expert team of coaches helps you succeed in any goal,
              <br /> personalized guidance and motivation provided!
            </p>
          </div>

          <div className="flex mt-20 md1000:flex-col gap-20">
            {trainers.map((trainer, index) => (
              <TrainerCard
                key={index}
                img={trainer.img}
                name={trainer.name}
                job={trainer.job}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
