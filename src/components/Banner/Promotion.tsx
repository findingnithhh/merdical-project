import React from "react";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

const Promotion = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="rounded-lg w-full h-[584px] relative">
          <Image
            src="/promote/sale.svg"
            alt="sale"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="absolute top-[38.13px] left-0 text-center w-full h-full flex justify-center">
            <div>
              <p className="text-[#6B7280] uppercase text-sm">Best Deals</p>
              <h1 className="text-[40px] font-semibold mt-2">
                Sale of the Month
              </h1>
              <div className="flex justify-center mt-2">
                <div className="text-[#1F2A37]">
                  <p className="text-[24px] ">00</p>
                  <p className="uppercase text-sm">Days</p>
                </div>
                <p className="text-white -mt-0.5 mx-3 text-[24px] font-normal">
                  :
                </p>
                <div className="text-[#1F2A37]">
                  <p className="text-[24px] ">02</p>
                  <p className="uppercase text-sm">Hours</p>
                </div>
                <p className="text-white -mt-0.5 mx-3 text-[24px] font-normal">
                  :
                </p>
                <div className="text-[#1F2A37]">
                  <p className="text-[24px] ">18</p>
                  <p className="uppercase text-sm">Mins</p>
                </div>
                <p className="text-white -mt-0.5 mx-3 text-[24px] font-normal">
                  :
                </p>
                <div className="text-[#1F2A37]">
                  <p className="text-[24px] ">46</p>
                  <p className="uppercase text-sm">Secs</p>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button className="w-[150px] h-[40px] md:w-[191px] md:h-[51px] bg-primary text-white flex justify-center items-center rounded-full font-semibold text-sm md:text-base">
                  Shop Now <IoArrowForwardOutline size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-full h-[584px] relative">
          <Image
            src="/promote/meterials.svg"
            alt="sale"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="absolute top-[38.13px] left-0 text-center w-full h-full flex justify-center">
            <div>
              <p className="text-[#fff] uppercase text-sm">New products</p>
              <h1 className="text-[40px] font-semibold mt-2 text-white">
                Materials Doctor
              </h1>
              <div className="flex justify-center mt-2">
                <p className="text-lg text-white">
                  Started at{" "}
                  <span className="text-[20px] font-semibold text-[#D82525]">
                    $79.99
                  </span>
                </p>
              </div>
              <div className="flex justify-center mt-7">
                <button className="w-[150px] h-[40px] md:w-[191px] md:h-[51px] bg-white border-2 border-primary text-primary flex justify-center items-center rounded-full font-semibold text-sm md:text-base">
                  Shop Now <IoArrowForwardOutline size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-full h-[584px] relative">
          <Image
            src="/promote/discount.svg"
            alt="sale"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="absolute top-[38.13px] left-0 text-center w-full h-full flex justify-center">
            <div>
              <p className="text-secondary uppercase text-sm">Summer Sale</p>
              <h1 className="text-[40px] font-semibold mt-2 text-[#1A1A1A]">
                Discount
              </h1>
              <div className="flex justify-center mt-2">
                <p className="text-lg text-[#1A1A1A]">
                  Up to
                  <span className="text-[20px] font-semibold bg-black py-[6px] px-[12px] text-[#FCC900] rounded-md ml-2">
                    64% OFF
                  </span>
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <button className="w-[150px] h-[40px] md:w-[191px] md:h-[51px] bg-white border-2 border-primary text-primary flex justify-center items-center rounded-full font-semibold text-sm md:text-base">
                  Shop Now <IoArrowForwardOutline size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
