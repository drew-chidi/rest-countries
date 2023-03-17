import React, { Fragment } from "react";
import { MdOutlineSearch } from "react-icons/md";
import CountryList from "./CountryList";

const regions = [
  //   { key: null, region: "Filter by Region" },
  { key: "africa", region: "Africa" },
  { key: "america", region: "America" },
  { key: "asia", region: "Asia" },
  { key: "europe", region: "Europe" },
  { key: "oceania", region: "Oceania" },
];

type Props = {};

const Countries = (props: Props) => {
  return (
    <Fragment>
      <section className='px-6 py-8'>
        {/* FILTER AND SEARCH */}
        <div>
          {/* SEARCH BAR */}
          <div className='flex items-center gap-6 border px-7 py-3 rounded-lg mb-10'>
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
          <div className='mb-10'>
            <label htmlFor='regions'>
              <select
                id='regions'
                name='regions'
                className='outline-0 px-7 py-5'
                placeholder='Filter by Region'
              >
                {regions.map((item) => (
                  <option>{item.region}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* CountryList Cards */}
        <CountryList />
      </section>
    </Fragment>
  );
};

export default Countries;
