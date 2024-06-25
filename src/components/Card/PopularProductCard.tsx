import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const PopularProductCard = () => {
  return (
    <>
      <div className="container mx-auto p-2 md:p-0">
        <div className="flex justify-between items-center my-[32px]">
          <div>
            <p className="text-[20px] md:text-[32px] font-semibold">
              Popular Products
            </p>
          </div>
          <div className="flex items-center gap-3 text-primary">
            <p className="text-sm md:text-md">View All</p>
            <IoArrowForward />
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularProductCard