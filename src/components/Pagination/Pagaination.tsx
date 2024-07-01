"use client";
import { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }: any) => {
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPages = 5;
    const firstPages = 3;

    // Calculate the range of pages to display
    let startPage = 1;
    let endPage = Math.min(maxPages, totalPages);

    if (currentPage > firstPages) {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - (maxPages - 1));
    }

    // Generate page buttons
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 border rounded-full ${
            currentPage === i ? "bg-primary text-white" : "text-black"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis and last page if necessary
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="dots" className="px-3 py-1">
            ...
          </span>
        );
      }

      pageNumbers.push(
        <button
          key={totalPages}
          className={`px-3 py-1 border rounded-full ${
            currentPage === totalPages ? "bg-primary text-white" : "text-black"
          }`}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4 space-x-2">
      <button
        className={`px-3 py-1 border rounded-full ${
          currentPage === 1 ? "text-gray-400 pointer-events-none" : "text-black"
        }`}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {renderPageNumbers()}

      <button
        className={`px-3 py-1 border rounded-full ${
          currentPage === totalPages
            ? "text-gray-400 pointer-events-none"
            : "text-black"
        }`}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
