import { useState } from 'react';
import TrainerBg from '../../../assets/images/trainers/trainer-bg.png';
import Shape from '../../../assets/images/trainers/shape.png';
import { Trainers, socials } from '../../../data/pages/Home/TrainersData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function TrainerCard({ img, name, job }: Trainers) {
  const [imgHover, setImgHover] = useState(false);

  const hoverBox = () => {
    setImgHover(true);
  };

  const hoverBoxRemove = () => {
    setImgHover(false);
  };

  return (
    <>
      <div
        className="flex justify-center gap-[5rem] md1200:flex-wrap"
        style={{ margin: '0 auto' }}
      >
        <div
          onMouseEnter={hoverBox}
          onMouseLeave={hoverBoxRemove}
          className="relative cursor-pointer w-[35rem] min450:w-full flex flex-col select-none"
        >
          <img
            src={img}
            alt="trainer"
            style={{ transition: 'all 0.3s' }}
            className={`w-[22rem] z-10 relative grayscale mx-auto ${
              imgHover ? 'hover:grayscale-0' : ''
            }`}
          />

          <img
            style={{ transition: 'all 0.3s' }}
            src={TrainerBg}
            alt="trainer_background"
            className={`absolute top-[4px] w-full scale-[1] `}
          />

          <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
            <img
              alt="shape"
              src={Shape}
              className="absolute -top-[25px] left-[113px]"
            />
            <FontAwesomeIcon
              icon={faAngleUp}
              className="absolute -top-[16px] left-[162px] text-3xl"
            />
            <h3 className="font-bold text-[2.4rem] ">{name}</h3>
            <p className="font-medium text-[1.5rem] text-[#646464]">{job}</p>
            <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]">
              {socials.map((social, index) => (
                <FontAwesomeIcon key={index} icon={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainerCard;
