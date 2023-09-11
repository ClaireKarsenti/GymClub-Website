import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socials } from '../../../data/layout/NavbarData';
import TitleBg from '../../../assets/images/pricing/titlebg.svg';
import BigButton from '../../globals/buttons/BigButton';

function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-section w-full h-screen min800:flex min800:justify-center min800:text-center"
      >
        <div className="container-hero">
          <div
            className="flex flex-col text-white
           absolute hero-text min800:items-center min800:-right-[22rem] min620:-right-[20rem] min800:w-[80%] min540:-right-[17rem] min450:-right-[14rem] min375:-right-[11rem]"
          >
            <p className="text-black text-[16px] uppercase font-medium relative z-10 pl-16 min800:pl-0 mb-8">
              find your energy
            </p>
            <img
              src={TitleBg}
              alt="text_bg"
              className=" w-[52%] absolute -top-3 title-white min800:w-[24rem] "
            />
            <h1 className="font-bold text-[48px] uppercase mb-[4rem] min450:text-[40px]">
              make your body <br />
              <span className="font-thin">fit & perfect</span>
            </h1>

            <BigButton
              color={`text-black`}
              bg={`bg-white`}
              text="our classes"
              goTo="/classes"
            />
          </div>
        </div>

        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center min800:hidden"
        >
          <p className="uppercase text-3xl font-bold tracking-widest">share</p>
          <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7">
            {socials.slice(2).map((social, index) => (
              <FontAwesomeIcon
                icon={social}
                key={index}
                className="rotate-90 hover:text-[#FF0336] text-3xl cursor-pointer ease-in duration-200"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
