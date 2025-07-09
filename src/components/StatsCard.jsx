import React from 'react';
import image1 from '../assets/images/Ellipse 58.png'
import image2 from '../assets/images/Ellipse 59.png'
import image3 from '../assets/images/Ellipse 60.png'
import image4 from '../assets/images/Ellipse 61.png'
import image5 from '../assets/images/Ellipse 62.png'

const StatsCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-[10px] shadow p-6'>

        {/* Total Customers */}
        <div className='flex items-center space-x-4 border-r pr-8'>
            <div className='bg-green-100 rounded-full p-3'>
                <i className='pi pi-users text-green-600 text-3xl' />
            </div>

            <div>
                <p className='text-sm text-gray-500'>Total Customers</p>
                <h2 className='text-2xl font-bold'>5,423</h2>
                <p className='text-xs text-green-600 mt-1'>
                    <span className='pi pi-arrow-up text-xs mr-1'></span>16% this month
                </p>
            </div>
        </div>

        {/* Members */}
        <div className='flex items-center space-x-4 border-r pr-8'>
            <div className='bg-green-100 rounded-full p-3'>
                <i className='pi pi-user text-green-600 text-3xl' />
            </div>

            <div>
                <p className='text-sm text-gray-500'>Members</p>
                <h2 className='text-2xl font-bold'>1,893</h2>
                <p className='text-xs text-red-500 mt-1'>
                    <span className='pi pi-arrow-down text-xs mr-1'></span>1% this month
                </p>
            </div>
        </div>

        {/* Active Now */}
        <div className='flex items-center space-x-4'>
            <div className='bg-green-100 rounded-full p-3'>
                <i className='pi pi-desktop text-green-600 text-3xl' />
            </div>

            <div>
                <p className='text-sm text-gray-500'>Active Now</p>
                <h2 className='text-2xl font-bold'>189</h2>
                <div className='flex items-center mt-1'>
                    <img
                        src={image1}
                        alt='user'
                        className='w-6 h-6 rounded-full border-2 border-white'
                    />

                    <img
                        src={image2}
                        alt='user'
                        className='w-6 h-6 rounded-full border-2 border-white -ml-2'
                    />

                    <img
                        src={image3}
                        alt='user'
                        className='w-6 h-6 rounded-full border-2 border-white -ml-2'
                    />

                    <img
                        src={image4}
                        alt='user'
                        className='w-6 h-6 rounded-full border-2 border-white -ml-2'
                    />

                    <img
                        src={image5}
                        alt='user'
                        className='w-6 h-6 rounded-full border-2 border-white -ml-2'
                    />
                </div>


            </div>
        </div>
    </div>
  );
};

export default StatsCard;
