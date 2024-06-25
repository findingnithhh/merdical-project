import Image from "next/image";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

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
        <div className="grid grid-cols-2 md:grid-cols-4">
          {/* product card discount */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] relative flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
              <p className="absolute top-2 md:top-0 left-1 bg-[#EA4B48] py-[3px] md:py-[5px] px-[10px] md:px-[12px] font-normal text-white rounded-md">
                Sale %50
              </p>
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>
                    $14.99{" "}
                    <span className="text-[#999999] font-normal">$20.99</span>
                  </h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
          {/* product card */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>$14.99</h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
          {/* product card discount */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] relative flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
              <p className="absolute top-2 md:top-0 left-1 bg-[#EA4B48] py-[3px] md:py-[5px] px-[10px] md:px-[12px] font-normal text-white rounded-md">
                Sale %50
              </p>
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>
                    $14.99{" "}
                    <span className="text-[#999999] font-normal">$20.99</span>
                  </h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
          {/* product card */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>$14.99</h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
          {/* product card discount */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] relative flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
              <p className="absolute top-2 md:top-0 left-1 bg-[#EA4B48] py-[3px] md:py-[5px] px-[10px] md:px-[12px] font-normal text-white rounded-md">
                Sale %50
              </p>
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>
                    $14.99{" "}
                    <span className="text-[#999999] font-normal">$20.99</span>
                  </h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
          {/* product card */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>$14.99</h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
          {/* product card discount */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] relative flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
              <p className="absolute top-2 md:top-0 left-1 bg-[#EA4B48] py-[3px] md:py-[5px] px-[10px] md:px-[12px] font-normal text-white rounded-md">
                Sale %50
              </p>
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>
                    $14.99{" "}
                    <span className="text-[#999999] font-normal">$20.99</span>
                  </h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
          {/* product card */}
          <div className="w-full h-[450px] md:h-[526px] border p-3 md:p-[16px] hover:border-primary">
            {/* top */}
            <div className="h-[290px] md:h-[369.3px] flex justify-center items-center">
              <Image
                src="/products/sarasoft.svg"
                alt="sarasoft"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            {/* bottom */}
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-sm text-[#4D4D4D]">HealthCare</p>
                <h1 className="text-xl text-[#374151] font-extrabold">
                  Sarasoft AG
                </h1>
                <div className="text-2xl text-[#1A1A1A]">
                  <h3>$14.99</h3>
                </div>
                <div className="flex text-yellow-300 mt-1">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarOutline />
                </div>
              </div>
              <div>
                <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProductCard;
