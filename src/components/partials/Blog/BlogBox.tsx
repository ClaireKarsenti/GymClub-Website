import { Link } from 'react-router-dom';
import { scrollTop } from '../../../utils/helpers/scrollTopHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export type BlogBoxProps = {
  date: string;
  title: string;
  description: string;
  bgClass: string;
};

function BlogBox({ date, title, description, bgClass }: BlogBoxProps) {
  return (
    <div
      className={`w-[37rem] min540:w-[100%] shadow-xl flex flex-col px-[3rem] py-[5rem] ${bgClass}`}
    >
      <p className="text-[15px] font-bold border-[#323232] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
        {date}
      </p>
      <h3 className="text-[22px] font-bold py-5">{title}</h3>
      <p className="text-[15px] text-[#646464] font-medium mb-10">
        {description}
      </p>
      <div className="mt-auto">
        <Link
          to="/blog"
          onClick={scrollTop}
          className="text-[15px] uppercase font-bold w-[16rem] h-[5rem] bg-[#FF0336] text-white text-center flex items-center justify-center transition-colors hover:bg-[#cc002e]"
        >
          Read more <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
        </Link>
      </div>
    </div>
  );
}

export default BlogBox;
