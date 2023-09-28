import { Link } from 'react-router-dom';
import AboutCard from './AboutCard';
import BigButton from '../../globals/buttons/BigButton';
import {
  cardList,
  presentationText,
  icons,
  images,
} from 'data/pages/Home/AboutData';
import { scrollTop } from 'utils/helpers/scrollTopHelper';

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            {cardList.map((item, index) => (
              <Link to="/contact" onClick={scrollTop} key={index}>
                <AboutCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            ))}
          </div>

          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            <div className="mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md1000:pl-0 mb-12">
                {presentationText.title}
              </p>
              <img
                src={presentationText.img}
                alt="text_bg"
                className="w-[31%] absolute -top-[6px] md1000:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
                {presentationText.subTitle}
              </h2>
              <p className="text-[16px] text-[#646464] font-medium ">
                {presentationText.mainText}
              </p>

              <div className="flex mt-12 mb-[7rem] gap-[2px] min620:flex-col ">
                {icons.map((icon, index) => (
                  <div key={index} className={icon.className}>
                    <img
                      src={icon.img}
                      alt="icon_img"
                      className={`w-[5.4rem] mb-6 h-auto`}
                    />
                    <h3 className="uppercase font-bold text-[20px] leading-snug">
                      {icon.text}
                    </h3>
                  </div>
                ))}
              </div>

              <BigButton
                color={`!text-white`}
                bg={`bg-[#3f3f3f]`}
                cN="about-cta"
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              />
            </div>

            <div className="relative md1000:hidden">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.img}
                  alt={image.alt}
                  className={image.className}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
