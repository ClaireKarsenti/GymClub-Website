import { Link } from 'react-router-dom';
import { scrollTop } from 'utils/helpers/scrollTopHelper';
import FooterLogo from 'assets/images/logo/logo-footer.svg';
import { socials, classes, schedule } from 'data/pages/Home/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            <div className="flex flex-col w-1/3 gap-8">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>

              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                {socials.map((social, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={social}
                    style={{ transition: 'all 0.3s' }}
                    className={
                      'p-[10px] bg-[#efefef] p-4 rounded-full hover:bg-[#ff0336] hover:text-white'
                    }
                  />
                ))}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | ©{new Date().getFullYear()} Gymate <br /> Code
                with <FontAwesomeIcon icon={faHeart} /> by{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/claire-karsenti/"
                  aria-label="My linkedin"
                >
                  <span className="me">Claire Karsenti</span>
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              {classes.map((cls, index) => (
                <Link key={index} to={'/classes'} onClick={scrollTop}>
                  <p
                    key={index}
                    className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold"
                  >
                    {cls}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>
              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              {schedule.map((schedule, index) => (
                <div key={index}>
                  <p className="text-[16px]  text-[#646464] font-bold">
                    {schedule.day}:
                  </p>
                  <p className="text-[16px] text-[#646464] font-medium">
                    {schedule.time}
                  </p>
                </div>
              ))}
            </div>
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
