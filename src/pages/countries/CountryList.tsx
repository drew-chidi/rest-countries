import React from "react";

type Props = {};

const CountryList = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <article className='border pb-8'>
        <div className='w-[270px] mb-4'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
            alt='flag of germany'
          />
        </div>
        <div className='pl-7'>
          <h5 className='mb-2 font-extrabold'>Germany</h5>
          <div className='flex flex-col gap-1'>
            <div className='flex'>
              <p>Population:&#160; </p>
              <p>81,770,900</p>
            </div>
            <div className='flex'>
              <p>Region:&#160;</p>
              <p>Europe</p>
            </div>
            <div className='flex'>
              <p>Capital:&#160;</p>
              <p>Berlin</p>
            </div>
          </div>
        </div>
      </article>
      <article className='border pb-8'>
        <div className='w-[270px] mb-4'>
          <img
            src='https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg'
            alt='flag of USA'
          />
        </div>
        <div className='pl-7'>
          <h5 className='mb-2 font-extrabold'>United States of America</h5>
          <div className='flex flex-col gap-1'>
            <div className='flex'>
              <p>Population:&#160; </p>
              <p>323,947,000</p>
            </div>
            <div className='flex'>
              <p>Region:&#160;</p>
              <p>Americas</p>
            </div>
            <div className='flex'>
              <p>Capital:&#160;</p>
              <p>Washington, D.C.</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CountryList;
