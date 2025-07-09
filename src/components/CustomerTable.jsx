import React, { useState } from 'react';
import Pagination from './Pagination';

const customers = [
  { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'USA', status: 'Active' },
  { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
  { name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
  { name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active' },
  { name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
];

const CustomerTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest');

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-full bg-white rounded-lg shadow p-4 md:p-6'>
      {/* Top Bar */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
        <h1 className='text-xl md:text-2xl font-bold'>All Customers</h1>

        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
          {/* Search input */}
          <div className='relative w-full sm:w-64'>
            <span className='absolute inset-y-0 left-3 flex items-center text-gray-400'>
              <i className='pi pi-search'></i>
            </span>
            <input
              type='text'
              placeholder='Search'
              className='w-full pl-10 pr-4 py-2 border rounded bg-[#F9FBFF] focus:outline-none'
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Sort dropdown */}
          <select
            className='border rounded bg-[#F9FBFF] px-4 py-2'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      {/* Table wrapper for overflow */}
      <div className='overflow-x-auto'>
        <table className='min-w-full h-[712px] table-auto text-sm text-left'>
          <thead className='text-[#B5B7C0] uppercase text-xs'>
            <tr>
              {['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status'].map((head) => (
                <th key={head} className='px-4 py-3 border-b whitespace-nowrap'>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {filteredCustomers.map((c, i) => (
              <tr key={i} className='hover:bg-gray-50'>
                <td className='px-4 py-3 border-b'>{c.name}</td>
                <td className='px-4 py-3 border-b'>{c.company}</td>
                <td className='px-4 py-3 border-b'>{c.phone}</td>
                <td className='px-4 py-3 border-b'>{c.email}</td>
                <td className='px-4 py-3 border-b'>{c.country}</td>
                <td className='px-4 py-3 border-b'>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='mt-6'>
        <Pagination />
      </div>
    </div>
  );
};

export default CustomerTable;
