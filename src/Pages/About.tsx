import Footer from 'components/structure/Footer/Footer';
import BigButton from 'components/globals/buttons/BigButton';
import TitleRed from 'assets/images/who-we-are/title-bg.svg';
import Target from 'assets/images/AboutPage/target.png';
import Mountain from 'assets/images/AboutPage/mountain.png';
import { images } from 'data/pages/Home/AboutData';
import { images as img, texts } from 'data/pages/AboutData';

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                {texts.title}
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21rem] absolute top-[120px] min450:top-[84px] min375:top-[68px]"
              />

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                {texts.subTitle}
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                {texts.who}
              </p>
              <BigButton
                color={`!text-white`}
                bg={`bg-[#ff0336]`}
                goTo="/contact"
                text="contact us"
                cN="pricing-cta blog-cta"
              />
            </div>

            <div className="relative w-[80%] -top-[90px] left-[40px] md1000:hidden">
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

          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  {texts.history}
                </p>
              </div>
              {Object.values(img).map((image, index) => (
                <div className="w-full bg-white h-[43rem]" key={index}>
                  <img
                    src={image}
                    alt="about_img"
                    className="w-full h-full object-cover bg-center"
                  />
                </div>
              ))}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Mountain} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our Philosophy</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  {texts.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;
