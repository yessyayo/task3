import React from 'react';

const TopBar = () => {
  return (
    <div className='flex justify-between items-center py-4'>
      <h2 className='text-lg font-medium'>Hello Evano 👋🏼</h2>

      <div className='relative w-64 rounded-lg'>
        <input
          type='text'
          placeholder='Search'
          className='w-full shadow rounded-2xl pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500'
        />
        <i className='pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm' />
      </div>
    </div>
  );
};

export default TopBar;
