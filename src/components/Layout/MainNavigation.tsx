import { MdDarkMode, MdOutlineSearch } from "react-icons/md";
import { CiDark } from "react-icons/ci";

type Props = {};

const MainNavigation = (props: Props) => {
  return (
    <header>
      <nav>
        <ul className='justify-between items-center flex'>
          <li className='font-bold'>Where in the world?</li>
          <li className=''>
            <span>
              <MdDarkMode color='white' />
              Dark Mode
            </span>
            <span>
              <CiDark />
              Dark Mode
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
