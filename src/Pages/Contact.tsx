import { useState, useEffect } from 'react';
import { UserAuth } from 'utils/context/AuthContext';
import Footer from 'components/structure/Footer/Footer';
import SmallButton from 'components/globals/buttons/SmallButton';
import Input from 'components/globals/Input';
import InfoBox from 'components/partials/Contact/InfoBox';
import { socials } from 'data/pages/Home/ContactData';
import { text, leaveInfo } from 'data/pages/ContactData';
import { classesBox } from 'data/pages/ClassesData';
import {
  uniqueClasses,
  sortClassesAlphabetically,
} from 'utils/helpers/Pages/ContactHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ClassItem = {
  title: string;
};

function Login() {
  const { title, info, mainText } = text;
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const authContext = UserAuth();

  useEffect(() => {
    if (authContext && authContext.user) {
      setEmail(authContext.user.email || '');
      setFullName(
        authContext.user.firstName + ' ' + authContext.user.lastName || ''
      );
    }
  }, [authContext]);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  const uniqueSortedClasses: ClassItem[] = sortClassesAlphabetically(
    uniqueClasses(classesBox)
  );

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>

        <div className="bg-white py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
              {title}
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
              {mainText}
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              {info.map((section, index) => (
                <InfoBox key={index} {...section} />
              ))}

              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10">Follow Us On</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[18px] font-medium text-black flex gap-5">
                  {socials.map((social, index) => (
                    <FontAwesomeIcon
                      icon={social.icon}
                      key={index}
                      className={
                        'p-[10px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white'
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
            <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
            <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
            {leaveInfo.map((infoItem, index) => (
              <Input
                key={index}
                {...infoItem}
                onChange={(e) => {
                  if (infoItem.placeHolder === 'Full Name') {
                    setFullName(e.target.value);
                  } else if (infoItem.placeHolder === 'Email Address') {
                    setEmail(e.target.value);
                  }
                }}
                value={infoItem.placeHolder === 'Full Name' ? fullName : email}
              />
            ))}
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option>Select Class</option>
              {uniqueSortedClasses.map((classItem, index) => (
                <option key={index}>{classItem.title}</option>
              ))}
            </select>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            />
            <span>*Email address is required</span>
            <SmallButton
              type="submit"
              className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              submit now
            </SmallButton>
          </form>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
          allowFullScreen
          loading="lazy"
          title="map"
          style={{ width: '100%', height: '45rem', border: '0px' }}
        />
        <Footer />
      </section>
    </>
  );
}

export default Login;
