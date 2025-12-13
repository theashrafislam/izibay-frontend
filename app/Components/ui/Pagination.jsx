"use client";

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center bg-[#F0F0F0]">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-l-md border border-gray-300 text-lg font-semibold ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-red-600 transition-colors"
        }`}
      >
        &lt;
      </button>

      {/* Current Page Display */}
      <span className="px-6 py-2 border-t border-b border-gray-300 bg-white text-black font-medium text-lg">
        {currentPage}/{totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-r-md border border-gray-300 text-lg font-semibold ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-red-600 transition-colors"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;