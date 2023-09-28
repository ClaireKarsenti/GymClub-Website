import { Link } from 'react-router-dom';
import TitleRed from 'assets/images/who-we-are/title-bg.svg';
import BigButton from '../../globals/buttons/BigButton';
import { titles, schedule } from 'data/pages/Home/FeaturedData';
import { scrollTop } from 'utils/helpers/scrollTopHelper';

function Featured() {
  const day = (item: string) => (item === 'monday' ? item : item.toLowerCase());

  return (
    <>
      <section id="featured" className="page-padding py-[12.5rem] bg-white">
        <div className="container">
          <div className="flex flex-col text-center items-center relative ">
            <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
              {titles.title}
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[24rem] absolute -top-[10px]"
            />
            <h2 className="text-[3.6rem] text-black font-bold my-10">
              {titles.subTitle}
            </h2>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 md1000:flex md1000:flex-col">
            {schedule.map((item, index) => (
              <Link
                to={`/schedule/${day(item.day)}`}
                onClick={scrollTop}
                className={`item-${index}-div relative`}
                key={index}
              >
                <div
                  onClick={scrollTop}
                  className={`item-${index}-div relative`}
                >
                  <img
                    alt="gallery_img"
                    className={`item-${index} ease-in duration-[0.4s]`}
                    src={item.img}
                  />
                  <div className="absolute z-10 bottom-10 left-10">
                    <p className="text-white text-[3rem] font-bold">
                      {item.sport}
                    </p>
                    <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                      {item.day}:{item.hours}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="featured-cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#ff0336] ">
        <div className="container page-padding ">
          <div className="flex items-center md1000:flex-col md1000:gap-12  md1000:text-center">
            <h2 className="text-white font-bold text-[3.7rem] md1000:text-[3rem] max-w-6xl px-7 leading-[1.2] min450:text-[2.4rem] ">
              We Are Always Providing Best Fitness Service For You
            </h2>
            <BigButton
              color={`text-black`}
              bg={`bg-white`}
              text="Join With Us"
              goTo="/contact"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
