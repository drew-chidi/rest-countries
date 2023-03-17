import React, { Fragment, useState } from "react";
import { MdOutlineSearch, MdOutlineKeyboardArrowDown } from "react-icons/md";
import CountryList from "./CountryList";

const regions = [
  { label: "Filter by Region", region: "" },
  { label: "africa", region: "Africa" },
  { label: "america", region: "America" },
  { label: "asia", region: "Asia" },
  { label: "europe", region: "Europe" },
  { label: "oceania", region: "Oceania" },
];

type Props = {};

const Countries = (props: Props) => {
  const [selected, setSelected] = useState<string>("Filter by Region");
  const [option, setOption] = useState<boolean>(false);
  return (
    <Fragment>
      <section className='px-6 py-8'>
        {/* FILTER AND SEARCH */}
        <div className='lg:flex justify-between'>
          {/* SEARCH BAR */}
          <div className='flex items-center gap-6 border px-7 py-3 rounded-lg mb-10 lg:basis-2/5'>
            <span>
              <MdOutlineSearch size={28} />
            </span>
            <label htmlFor='search'>
              <input
                placeholder='Search for a country...'
                id='search'
                className=''
              />
            </label>
          </div>
          {/* FILTER */}
          <div className='mb-10 w-4/6 sm:w-2/5 relative lg:basis-1/3 xl:basis-1/5'>
            <div
              className='flex justify-between items-center px-7 py-5 mb-2 border rounded-md shadow-md'
              onClick={() => setOption((prev) => !prev)}
            >
              <p className='font-semibold'>{selected}</p>
              <MdOutlineKeyboardArrowDown size={24} />
            </div>
            {option && (
              <div className=' py-5 border rounded-md flex flex-col gap-2 absolute w-full z-10 bg-white shadow-md'>
                {regions.map((item) => (
                  <p
                    className='px-7 py-0.5 font-semibold cursor-pointer hover:bg-slate-100'
                    onClick={() => {
                      setSelected(item.region);
                      setOption((prev) => !prev);
                    }}
                  >
                    {item.region}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* CountryList Cards */}
        <CountryList />
      </section>
    </Fragment>
  );
};

export default Countries;
