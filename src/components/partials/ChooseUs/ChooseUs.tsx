import TitleRed from 'assets/images/who-we-are/title-bg.svg';
import BigButton from '../../globals/buttons/BigButton';
import { video, text, equipments } from 'data/pages/Home/ChooseUsData';

function ChooseUs() {
  return (
    <>
      <section className="choose-section py-[12rem] ">
        <div className="container page-padding flex flex-row md1000:flex-col md1000:items-center gap-[7rem]">
          <div className="video-div relative w-[50%] md1000:w-[85%] md1000:flex md1000:justify-center">
            {video.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.alt}
                className={item.className}
              />
            ))}
            <span className="bg-white cursor-pointer p-14 absolute rounded-full top-[38.7%] left-[39.9%]"></span>
          </div>

          <div className="relative w-[50%] md1000:flex md1000:flex-col md1000:items-center md1000:text-center md1000:w-[85%]">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-14">
              {text.title}
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[22rem] absolute -top-[6px] -left-14 md1000:hidden "
            />
            <h2 className=" text-[3.6rem] text-white font-bold leading-[1.2] max-w-3xl md1000:max-w-[80%]">
              {text.subtitle}
            </h2>
            <p className="text-[16.5px] text-[#b4b4b4] mt-7 max-w-3xl md1000:max-w-[80%]">
              {text.mainText}
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-14 min450:flex min450:flex-col">
              {equipments.map((equipment, index) => (
                <div key={index} className="flex items-center gap-6">
                  <img
                    className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
                    src={equipment.img}
                    alt="icon"
                  />
                  <p className="text-white font-bold text-[18px] max-w-[150px]">
                    {equipment.text}
                  </p>
                </div>
              ))}

              <BigButton
                color={`!text-white`}
                bg={`bg-[#595959]`}
                text="our classes"
                cN="choose-cta"
                hover={`hover:bg-[#ff0336]`}
                goTo="/classes"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
