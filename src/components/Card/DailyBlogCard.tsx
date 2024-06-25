import React from "react";
import Image from "next/image";
import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
const DailyBlogCard = () => {
  return (
    <>
      <div className="container mx-auto p-2 md:p-0 mt-20">
        <div className="flex justify-between items-center my-[32px]">
          <div>
            <p className="text-[20px] md:text-[32px] font-semibold">
              Daily Blog
            </p>
          </div>
          <div className="flex items-center gap-3 text-white cursor-pointer">
            <div className="border border-[#E6E6E6] p-2 rounded-full text-black">
              <IoArrowBack />
            </div>
            <div className="bg-primary p-2 rounded-full">
              <IoArrowForwardOutline />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto rounded-md">
          {/* daily card */}
          <div className="w-[469px] h-[570px] border rounded-lg shadow-xl hover:shadow-2xl">
            {/* top */}
            <div className="h-[394px] relative">
              <Image
                src="/daily-blog/blog1.svg"
                alt="blog"
                width={100}
                height={100}
                className="w-full"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center items-center bg-gray-50 w-[66px] h-[74.94px] rounded">
                <p className="text-xl font-medium text-[#1A1A1A]">18</p>
                <p className="text-xs text-[#808080]">NOV</p>
              </div>
            </div>
            {/* bottom */}
            <div className="h-[176px] p-[24px]">
              <div className="flex items-center gap-2 text-[#666666] text-sm font-normal">
                <GoTag />
                <p>Food</p>
                <CiUser />
                <p>By Admin</p>
                <VscComment />
                <p>65 Comments</p>
              </div>
              <div className="mt-2">
                <p className="text-lg text-primary font-medium">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>
              </div>
              <div className="flex items-center mt-[12px] font-semibold text-primary">
                <button className="mr-2">Read More</button>
                <IoArrowForwardOutline />
              </div>
            </div>
          </div>
          {/* daily card */}
          <div className="w-[469px] h-[570px] border rounded-lg shadow-xl hover:shadow-2xl">
            {/* top */}
            <div className="h-[394px] relative">
              <Image
                src="/daily-blog/blog2.svg"
                alt="blog"
                width={100}
                height={100}
                className="w-full"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center items-center bg-gray-50 w-[66px] h-[74.94px] rounded">
                <p className="text-xl font-medium text-[#1A1A1A]">18</p>
                <p className="text-xs text-[#808080]">NOV</p>
              </div>
            </div>
            {/* bottom */}
            <div className="h-[176px] p-[24px]">
              <div className="flex items-center gap-2 text-[#666666] text-sm font-normal">
                <GoTag />
                <p>Food</p>
                <CiUser />
                <p>By Admin</p>
                <VscComment />
                <p>65 Comments</p>
              </div>
              <div className="mt-2">
                <p className="text-lg text-primary font-medium">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>
              </div>
              <div className="flex items-center mt-[12px] font-semibold text-primary">
                <button className="mr-2">Read More</button>
                <IoArrowForwardOutline />
              </div>
            </div>
          </div>
          {/* daily card */}
          <div className="w-[469px] h-[570px] border rounded-lg shadow-xl hover:shadow-2xl">
            {/* top */}
            <div className="h-[394px] relative">
              <Image
                src="/daily-blog/blog3.svg"
                alt="blog"
                width={100}
                height={100}
                className="w-full"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center items-center bg-gray-50 w-[66px] h-[74.94px] rounded">
                <p className="text-xl font-medium text-[#1A1A1A]">18</p>
                <p className="text-xs text-[#808080]">NOV</p>
              </div>
            </div>
            {/* bottom */}
            <div className="h-[176px] p-[24px]">
              <div className="flex items-center gap-2 text-[#666666] text-sm font-normal">
                <GoTag />
                <p>Food</p>
                <CiUser />
                <p>By Admin</p>
                <VscComment />
                <p>65 Comments</p>
              </div>
              <div className="mt-2">
                <p className="text-lg text-primary font-medium">
                  Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                  fermentum.
                </p>
              </div>
              <div className="flex items-center mt-[12px] font-semibold text-primary">
                <button className="mr-2">Read More</button>
                <IoArrowForwardOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyBlogCard;
