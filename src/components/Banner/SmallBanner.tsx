import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { IoArrowForward } from "react-icons/io5";

const SmallBanner = () => {
  return (
    <div className="relative">
      <Image
        src="/details/smallBanner.svg"
        alt="smallBanner"
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <div className="absolute top-5 right-28 sm:right-18 sm:top-4 md:right-60 md:top-16 lg:right-32 lg:top-5 xl:top-16 xl:right-64 p-2">
        <p className="text-[#6B7280] text-xs sm:text-sm uppercase">Summer Sales</p>
        <h1 className="text-sm sm:text-base md:text-xl lg:text-3xl text-[#111928] font-bold">Sed dictum</h1>
        <Button className="mt-2 text-[10px] sm:text-sm md:text-base rounded-full w-[100px] h-[25px] sm:w-[100px] sm:h-[30px] md:w-[140px] md:h-[40px] lg:w-[200px] lg:h-[52px] flex items-center justify-center">
          Shop Now
          <IoArrowForward />

        </Button>
      </div>
      <div className="absolute top-8 right-4 sm:top-16 sm:right-8 md:top-16 md:right-16 lg:top-8 lg:right-5 xl:top-20 xl:right-24 bg-[#1A1A1A] flex flex-col items-center justify-center rounded-full w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[103px] md:h-[103px]">
        <p className="text-xs text-[#B3B3B3]">up to</p>
        <h1 className="text-lg md:text-2xl text-[#FF8A00] font-semibold">56%</h1>
        <p className="text-xs text-[#B3B3B3]">Off</p>
      </div>
    </div>
  );
};

export default SmallBanner;
