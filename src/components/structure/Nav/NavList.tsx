import { scrollTop } from '../../../utils/helpers/scrollTopHelper';
import { links } from '../../../data/layout/NavbarData';

function NavList() {
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        {links.map((link, index) => (
          <li
            key={index}
            style={{ transition: 'all 0.3s' }}
            className=" cursor-pointer hover:text-[#ff0336]"
            onClick={scrollTop}
          >
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavList;
