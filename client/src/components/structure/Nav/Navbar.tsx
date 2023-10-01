import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scrollTop } from 'utils/helpers/scrollTopHelper';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, setLogout } from '../../../state/authSlice';
import Logo from 'assets/images/logo/logo.svg';
import LogoSide from 'assets/images/logo/logo.svg';
import NavList from './NavList';
import SmallButton from '../../globals/buttons/SmallButton';
import { galleryImg, links } from 'data/layout/NavbarData';
import { socials } from 'data/layout/NavbarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLess } from '@fortawesome/free-brands-svg-icons';
import { faBarChart, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowRightFromBracket,
  faPlus,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const isAuth = useSelector((state: AuthState) => state.token !== null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(setLogout());
      navigate('/login');
      scrollTop();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleLogin = async () => {
    navigate('/login');
    scrollTop();
  };

  useEffect(() => {
    setSideBar(false);
  }, []);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setSideBar((prevSideBar) => !prevSideBar);
  };

  const toggleHamburgerMenu = () => {
    setHamburger((prevMenu) => !prevMenu);
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12 fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? 'shadow-xl !bg-black' : ''
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            onClick={scrollTop}
            className="w-full h-auto"
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            <div
              className={`flex top-0 flex-col fixed w-full -left-[100%] h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                !hamburger ? '-left-[100%]' : 'left-0'
              }`}
            >
              <FontAwesomeIcon
                icon={faLess}
                onClick={toggleHamburgerMenu}
                className="text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              />

              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                {links.map((link, index) => (
                  <li key={index} onClick={toggleHamburgerMenu}>
                    <a
                      onClick={scrollTop}
                      className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                      href={link.path}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 -left-[100%] z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                  !sideBar ? '-left-[100%]' : 'left-0'
                }
                `}
              >
                <div className={`flex justify-between items-center`}>
                  <img src={LogoSide} alt="logo_img" className="w-[13rem]" />
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={toggleNavbar}
                    className="text-[#ff0336] text-[3.3rem] cursor-pointer"
                  />
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    {Object.values(galleryImg).map((img, index) => (
                      <Link
                        key={index}
                        to="/gallery/page-1"
                        onClick={scrollTop}
                      >
                        <img
                          src={img}
                          alt="sidebar_gallery"
                          className="rounded-xl cursor-pointer "
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[#ff0336]"
                    />
                    &nbsp; 59 Street, House New-York City
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-[#ff0336]"
                    />
                    &nbsp; +123-678800090
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[#ff0336]"
                    />
                    &nbsp; gymate@gmail.com
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    {socials.slice(0, 4).map((social, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={social}
                        className="text-[2.2rem] text-white p-[10px] bg-[#ff0336] rounded-full cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <FontAwesomeIcon
              icon={faBars}
              onClick={toggleHamburgerMenu}
              className="fa-bars hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            />

            <SmallButton onClick={isAuth ? handleLogout : handleLogin}>
              <FontAwesomeIcon
                icon={isAuth ? faArrowRightFromBracket : faUser}
                className="text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
              />
            </SmallButton>

            <FontAwesomeIcon
              icon={faBarChart}
              onClick={toggleNavbar}
              className="text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            />
          </div>

          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <SmallButton
              onClick={scrollTop}
              to={'/contact'}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center "
            >
              <FontAwesomeIcon
                icon={faPlus}
                className={`bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                  spin ? 'nav-btn-hover' : ''
                }`}
              />
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join class now
              </h3>
            </SmallButton>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
