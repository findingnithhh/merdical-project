import { Carousel } from "flowbite-react";
import Image from "next/image";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrow";
import { IoArrowForwardOutline } from "react-icons/io5";

export function Banner() {
  return (
    <div className="bg-[#F2F2F2] !rounded-none overflow-hidden h-[640px] sm:h-[640px] xl:h-[640px] 2xl:h-[640px]">
      <Carousel
        leftControl={<CustomLeftArrow />}
        rightControl={<CustomRightArrow />}
        className="h-full !rounded-none"
      >
        <div className="flex flex-col sm:flex-row w-full h-full items-center justify-center bg-[#F2F2F2] !rounded-none">
          <div className="w-full sm:w-1/2 p-10 md:pl-52 flex justify-center items-center">
            <Image
              src="/banner.svg"
              alt="banner"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
          <div className="w-full h-full sm:w-1/2 flex flex-col py-5 md:py-20 px-4 sm:px-10 mb-10 md:mb-0">
            <div className="flex flex-col gap-3 md:gap-[18px]">
              <p className="text-primary font-semibold text-lg sm:text-xl">
                Medicom experienced since 1993 in
              </p>
              <h1 className="w-full md:w-[70%] text-2xl sm:text-3xl lg:text-[52px] font-extrabold lg:leading-tight">
                Medical Equipment Provider
              </h1>
            </div>
            <div className="mt-1 md:mt-16">
              <p className="text-lg sm:text-xl lg:text-[32px]">
                Sale up to{" "}
                <span className="text-[#FF8A00] font-semibold">30% OFF</span>
              </p>
              <p className="text-sm mt-0 md:mt-4 w-full md:w-7/12 text-[#808080]">
                Medicom is one of the major suppliers of medical and Laboratory
                Equipment throughout the kingdom.
              </p>
            </div>
            <div className="mt-6">
              <button className="w-[150px] h-[40px] md:w-[191px] md:h-[51px] bg-primary text-white flex justify-center items-center rounded-full font-semibold text-sm md:text-base">
                Shop Now <IoArrowForwardOutline size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full h-full items-center justify-center bg-[#F2F2F2] !rounded-none">
          <div className="w-full sm:w-1/2 p-10 md:pl-52 flex justify-center items-center">
            <Image
              src="/banner.svg"
              alt="banner"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
          <div className="w-full h-full sm:w-1/2 flex flex-col py-5 md:py-20 px-4 sm:px-10 mb-10 md:mb-0">
            <div className="flex flex-col gap-3 md:gap-[18px]">
              <p className="text-primary font-semibold text-lg sm:text-xl">
                Medicom experienced since 1993 in
              </p>
              <h1 className="w-full md:w-[70%] text-2xl sm:text-3xl lg:text-[52px] font-extrabold lg:leading-tight">
                Medical Equipment Provider
              </h1>
            </div>
            <div className="mt-1 md:mt-16">
              <p className="text-lg sm:text-xl lg:text-[32px]">
                Sale up to{" "}
                <span className="text-[#FF8A00] font-semibold">30% OFF</span>
              </p>
              <p className="text-sm mt-0 md:mt-4 w-full md:w-7/12 text-[#808080]">
                Medicom is one of the major suppliers of medical and Laboratory
                Equipment throughout the kingdom.
              </p>
            </div>
            <div className="mt-6">
              <button className="w-[150px] h-[40px] md:w-[191px] md:h-[51px] bg-primary text-white flex justify-center items-center rounded-full font-semibold text-sm md:text-base">
                Shop Now <IoArrowForwardOutline size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full h-full items-center justify-center bg-[#F2F2F2] !rounded-none">
          <div className="w-full sm:w-1/2 p-10 md:pl-52 flex justify-center items-center">
            <Image
              src="/banner.svg"
              alt="banner"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
          <div className="w-full h-full sm:w-1/2 flex flex-col py-5 md:py-20 px-4 sm:px-10 mb-10 md:mb-0">
            <div className="flex flex-col gap-3 md:gap-[18px]">
              <p className="text-primary font-semibold text-lg sm:text-xl">
                Medicom experienced since 1993 in
              </p>
              <h1 className="w-full md:w-[70%] text-2xl sm:text-3xl lg:text-[52px] font-extrabold lg:leading-tight">
                Medical Equipment Provider
              </h1>
            </div>
            <div className="mt-1 md:mt-16">
              <p className="text-lg sm:text-xl lg:text-[32px]">
                Sale up to{" "}
                <span className="text-[#FF8A00] font-semibold">30% OFF</span>
              </p>
              <p className="text-sm mt-0 md:mt-4 w-full md:w-7/12 text-[#808080]">
                Medicom is one of the major suppliers of medical and Laboratory
                Equipment throughout the kingdom.
              </p>
            </div>
            <div className="mt-6">
              <button className="w-[150px] h-[40px] md:w-[191px] md:h-[51px] bg-primary text-white flex justify-center items-center rounded-full font-semibold text-sm md:text-base">
                Shop Now <IoArrowForwardOutline size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
