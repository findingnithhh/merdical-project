import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React from "react";

const Pagination = ({ totalPage = 5 }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
        <IoIosArrowBack className="text-xl text-gray-600" />
      </button>
      <span className="text-gray-700">
        {[...Array(totalPage)].map((_ele, index) => (
          <button
            key={index}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline
            -none"
          >
            {index + 1}
          </button>
        ))}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
          <IoIosArrowForward className="text-xl text-gray-600" />
        </button>
      </span>
    </div>
  );
};

export default Pagination;
