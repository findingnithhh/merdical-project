import Image from 'next/image'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaSearch } from 'react-icons/fa';
import { PiHandbag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const MainNavBar = () => {
  return (
    <nav className="container h-[85px] mx-auto flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </div>
      {/* search */}
      <div className="flex items-center border rounded-l-md">
        <div className="flex">
          <span className="w-[45px] flex items-center justify-center">
            <CiSearch className="text-[#1A1A1A] w-5 h-5" />
          </span>
        </div>
        <input
          type="search"
          placeholder="Search"
          className="w-[355px] h-[45px] outline-none rounded-r-md pl-2 py-[12px] px-[18px]"
        />
        <button className="w-[96px] h-[45px] bg-[#008001] text-white rounded-r-md">
          Search
        </button>
      </div>
      {/* icon */}
      <div className="flex items-center text-[#666666] gap-[8px]">
        <div className="flex gap-4">
          <CiHeart className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
        </div>
        <span className="border border-1 h-6 flex mx-2"></span>
        <div className="flex items-center gap-3 text-sm">
          <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
          <p className="text-[11px]">Shopping cart:</p>
          <span className="text-sm font-bold text-[#1A1A1A]">$0</span>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar