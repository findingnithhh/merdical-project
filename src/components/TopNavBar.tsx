import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
const TopNavBar = () => {
  return (
    <>
      <div className="w-full md:container h-[44px] flex items-center justify-between mx-auto">
        {/* top navbar left */}
        <div className="flex justify-center items-center text-[#666666] gap-[8px]">
          <IoLocationOutline />
          <p className="text-sm hidden md:block">
            Store Location: No.2A, Down Town Road No 7, Phum Kork Chambak,Phnom
            Penh
          </p>
        </div>
        {/* top navbar right */}
        <div className="flex justify-center items-center text-[#666666] gap-[8px]">
          <div className="flex gap-5 text-sm">
            <select className="border outline-none border-none">
              {/* <option selected></option> */}
              <option value="Eng">Eng</option>
              <option value="KH">KH</option>
            </select>
          </div>
          <span className="border border-1 h-4 flex mx-2"></span>
          <div className="flex gap-5 text-sm">
            <Link href="/" >
              Sign In
            </Link>
            <Link href="/" >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
