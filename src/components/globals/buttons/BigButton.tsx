import { Link } from 'react-router-dom';
import { scrollTop } from '../../../utils/helpers/scrollTopHelper';

export type BigButtonProps = {
  color?: string;
  bg?: string;
  cN?: string;
  hover?: string;
  text?: string;
  goTo?: string;
};
function BigButton({ color, bg, cN, hover, text, goTo }: BigButtonProps) {
  return (
    <Link
      onClick={scrollTop}
      to={goTo !== undefined ? goTo : ''}
      className={`text-[15px]  ${color} ${bg} ${cN} text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 ${hover} `}
    >
      {text} &nbsp;
    </Link>
  );
}

export default BigButton;
