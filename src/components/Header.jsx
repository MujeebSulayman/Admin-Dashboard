import React from 'react';

const Header = ({ category, title, subTitle }) => {
  return (
    <div className='mb-10 '>
      <p className='text-gray-400'>{category}</p>

      <p className='text-3xl font-extrabold tracking-tighter text-slate-900'>
        {title}
      </p>
      <p className='text-1xl font-normal tracking-tighter text-slate-400'>
        {subTitle}
      </p>
    </div>
  );
};

export default Header;
