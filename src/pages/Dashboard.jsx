import React from 'react';
import TopBar from '../components/TopBar';
import StatsCard from '../components/StatsCard';
import Sidebar from '../components/SideBar';
import CustomerTable from '../components/CustomerTable';

const Dashboard = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-[#FAFBFF]'>
      {/* Sidebar */}
      <div className='w-full lg:w-[306px]'>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className='flex-1 px-4 md:px-8 py-6 space-y-6'>
        <TopBar />
        <StatsCard />
        <CustomerTable />
      </div>
    </div>
  );
};

export default Dashboard;
