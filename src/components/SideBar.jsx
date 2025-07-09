import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import image from '../assets/images/Ellipse 8.png';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={`h-[1198px] bg-white shadow px-4 py-6 flex flex-col justify-between transition-all duration-300 ${
        collapsed ? 'w-[80px]' : 'w-[306px]'
      }`}
    >
      <div>
        {/* Logo & Toggle Button */}
        <div className='flex items-center justify-between mb-10 px-2'>
          <div className='flex items-center space-x-2'>
            <i className='pi pi-home text-xl text-black' />
            {!collapsed && (
              <h1 className='text-lg font-bold'>
                Dashboard <span className='text-xs text-gray-400'>v.01</span>
              </h1>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className='text-sm text-gray-400 hover:text-black'
          >
            <i className={`pi ${collapsed ? 'pi-chevron-right' : 'pi-chevron-left'}`} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className='space-y-2'>
          <SidebarLink icon='pi pi-home' text='Dashboard' collapsed={collapsed} />
          <SidebarLink icon='pi pi-box' text='Product' collapsed={collapsed} />
          <SidebarLink icon='pi pi-users' text='Customers' active collapsed={collapsed} />
          <SidebarLink icon='pi pi-dollar' text='Income' collapsed={collapsed} />
          <SidebarLink icon='pi pi-megaphone' text='Promote' collapsed={collapsed} />
          <SidebarLink icon='pi pi-comment' text='Help' collapsed={collapsed} />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className='space-y-6'>
        {/* Upgrade Promo */}
        {!collapsed && (
          <div className='w-full bg-gradient-to-r from-purple-400 to-violet-600 text-white px-5 py-8 rounded-xl text-center text-sm'>
            <p className='mb-2 font-medium'>
              Upgrade to PRO to get<br />access all features!
            </p>
            <button className='w-full bg-white text-violet-600 rounded-[20px] py-2 px-4 text-xs font-semibold'>
              Get Pro Now!
            </button>
          </div>
        )}

        {/* User Profile */}
        <div className='flex items-center space-x-3'>
          <img src={image} alt='Evano' className='w-8 h-8 rounded-full' />
          {!collapsed && (
            <div className='flex-1'>
              <p className='text-sm font-medium'>Evano</p>
              <p className='text-xs text-gray-400'>Project Manager</p>
            </div>
          )}
          <i className='pi pi-chevron-down text-gray-500 text-xs' />
        </div>
      </div>
    </aside>
  );
};

const SidebarLink = ({ icon, text, active, collapsed }) => (
  <div
    className={`flex items-center px-3 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200 ${
      active ? 'bg-violet-600 text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <i className={`${icon} text-base`} />
    {!collapsed && <span className='ml-2'>{text}</span>}
  </div>
);

export default Sidebar;
