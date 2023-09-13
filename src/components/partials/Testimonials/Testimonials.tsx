import { useState } from 'react';
import TestimonialImg from '../../../assets/images/testimonials/testimonial-new.jpg';
import TitleBg from '../../../assets/images/pricing/titlebg.svg';
import TestimonialBox from './TestimonialBox';
import { logos, testimonials } from '../../../data/pages/Home/TestimonialsData';
import SmallButton from '../../globals/buttons/SmallButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          <div className="text-center relative items-center w-full flex flex-col">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              alt="title_img"
              src={TitleBg}
              className="w-[21rem] absolute -top-[6px] "
            />
          </div>

          <div className="border-[#efefef] mt-[17rem] md1000:mt-[9rem] bg-white border-solid border-[9px] p-[30px] min540:h-[48rem] min375:h-[60rem]">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              <img
                alt="girl_img"
                src={TestimonialImg}
                className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px] md1000:hidden"
              />

              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <TestimonialBox
                    key={index}
                    text={testimonial.text}
                    name={testimonial.name}
                    job={testimonial.job}
                    isActive={index === currentIndex}
                  />
                ))}
              </div>

              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                <SmallButton
                  title="left"
                  onClick={handleLeftClick}
                  style={{ transition: 'all 0.2s' }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </SmallButton>
                <SmallButton
                  title="right"
                  onClick={handleRightClick}
                  style={{ transition: 'all 0.2s' }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </SmallButton>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap
        "
        >
          {Object.values(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="scale-[.8] hover:invert"
              style={{ transition: 'all 0.3s' }}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonials;
