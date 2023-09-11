import { useState } from 'react';
import ClassesBox from '../components/partials/ClassesBox/ClassesBox';
import Footer from '../components/structure/Footer/Footer';
import SmallButton from '../components/globals/buttons/SmallButton';
import { classesBox } from '../data/pages/ClassesData';

function Classes() {
  const [showMore, setShowMore] = useState(false);

  const classesToShow = showMore ? classesBox : classesBox.slice(0, 9);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>

        <div
          className={`container gap-12 page-padding py-[3rem] md1000:grid-cols-2 min620:grid-cols-1 grid-cols-3 grid-rows-3 text-left grid`}
        >
          {classesToShow.map((item, index) => (
            <ClassesBox
              key={index}
              bgImg={item.bgImg}
              title={item.title}
              trainer={item.trainer}
              date={item.date}
            />
          ))}
        </div>

        {classesBox.length > 9 && (
          <SmallButton
            className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
            onClick={toggleShowMore}
          >
            {showMore ? 'show less' : 'show more'}
          </SmallButton>
        )}
        <Footer />
      </section>
    </>
  );
}

export default Classes;
