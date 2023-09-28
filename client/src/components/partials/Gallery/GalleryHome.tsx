import TitleRed from 'assets/images/who-we-are/title-bg.svg';
import BgIcon from 'assets/images/gallery/bg-icon.png';
import { galleryImg } from 'data/pages/Home/GalleryData';

function Gallery() {
  return (
    <>
      <section id="gallery" className="relative min450:hidden">
        <img
          src={BgIcon}
          alt="bg_img"
          className="absolute top-[30px] right-0"
        />

        <div className="container page-padding py-[4rem]">
          <div className="flex flex-col text-center relative items-center ">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-10">
              GYMATE GALLERY
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]  "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Our Workplace Gallery
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br /> Attracts talents and showcases company's work atmosphere.
            </p>
          </div>

          <div className="gallery-grid py-24 w-full h-auto relative">
            {Object.values(galleryImg).map((image, index) => (
              <div
                key={index}
                className={`img-${index} gallery-img`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
