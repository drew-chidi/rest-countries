import { MdDarkMode, MdOutlineSearch } from "react-icons/md";
import { CiDark } from "react-icons/ci";

type Props = {};

const MainNavigation = (props: Props) => {
  return (
    <header>
      <nav className='px-6 py-8 border-b'>
        <ul className='justify-between items-center flex'>
          <li className='font-bold'>Where in the world?</li>
          <li className=''>
            <span className='flex justify-center items-center gap-2 '>
              <MdDarkMode color='black' />
              Dark Mode
            </span>
            <span className='flex justify-center items-center gap-2 '>
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
