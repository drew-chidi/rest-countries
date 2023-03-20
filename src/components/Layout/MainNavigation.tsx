import { MdDarkMode, MdOutlineSearch } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { ReducerTypes } from "@/redux/store/root-reducer";
import { setMode } from "../../redux/slices";

type Props = {};

const MainNavigation = (props: Props) => {
  const mode = useSelector((state: ReducerTypes) => state.globalStore.mode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMode());
  };

  console.log(mode);

  return (
    <header>
      <nav className='px-6 py-8 border-b'>
        <ul className='justify-between items-center flex'>
          <li className='font-bold'>Where in the world?</li>
          <li className=''>
            {mode === "dark" ? (
              <span
                className='flex justify-center items-center gap-2 '
                onClick={handleClick}
              >
                <MdDarkMode color='black' />
                Dark Mode
              </span>
            ) : (
              <span
                className='flex justify-center items-center gap-2 '
                onClick={handleClick}
              >
                <CiDark />
                Dark Mode
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
