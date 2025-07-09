import React from 'react';

const Pagination = ({
  currentPage = 1,
  totalEntries = 256000,
  entriesPerPage = 8,
  onPageChange = () => {}
}) => {
  const totalPages = 40;
  const start = (currentPage - 1) * entriesPerPage + 1;
  const end = Math.min(currentPage * entriesPerPage, totalEntries);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-700 mt-4 w-full'>
      {/* Info Text */}
      <div>
        Showing data {start} to {end} of {(totalEntries / 1000).toFixed(0)}K entries
      </div>

      {/* Pagination Controls */}
      <div className='flex items-center flex-wrap gap-1'>
        {/* Left Arrow */}
        <button
          className='px-2 py-1 rounded bg-gray-200'
          onClick={() => goToPage(currentPage - 1)}
        >
          <i className='pi pi-arrow-left' />
        </button>

        {/* First few pages */}
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={`px-3 py-1 rounded ${
              currentPage === num ? 'bg-violet-600 text-white' : 'bg-gray-200'
            }`}
          >
            {num}
          </button>
        ))}

        {/* Ellipsis */}
        <span className='px-2 py-1 text-gray-500'>...</span>

        {/* Last Page */}
        <button
          onClick={() => goToPage(totalPages)}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages ? 'bg-violet-600 text-white' : 'bg-gray-200'
          }`}
        >
          {totalPages}
        </button>

        {/* Right Arrow */}
        <button
          className='px-2 py-1 rounded bg-gray-200'
          onClick={() => goToPage(currentPage + 1)}
        >
          <i className='pi pi-arrow-right' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
