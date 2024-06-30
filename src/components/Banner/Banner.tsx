'use client'
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrow";
import { IoArrowForwardOutline } from "react-icons/io5";

// Define the data for the slides
const slidesData = [
  {
    src: "/banner.svg",
    alt: "banner",
    title: "Medicom experienced since 1993 in",
    heading: "Medical Equipment Provider",
    saleText: "Sale up to ",
    discount: "30% OFF",
    description:
      "Medicom is one of the major suppliers of medical and Laboratory Equipment throughout the kingdom.",
    buttonText: "Shop Now",
  },
  {
    src: "/healthcare.svg",
    alt: "healthcare",
    title: "Trusted Partner in Healthcare",
    heading: "Quality Medical Supplies",
    saleText: "Exclusive offer: ",
    discount: "25% OFF",
    description:
      "Your trusted partner for quality medical supplies and equipment across the region.",
    buttonText: "Explore Now",
  },
  {
    src: "/banner2.svg",
    alt: "surgery",
    title: "Excellence in Surgical Supplies",
    heading: "Top Surgical Instruments",
    saleText: "Limited Time Offer: ",
    discount: "35% OFF",
    description:
      "Supplying top-quality surgical instruments and equipment for healthcare professionals.",
    buttonText: "Shop Now",
  },

  // Add more slide data objects as needed
];

// BannerSlide component
const BannerSlide = ({ slide }: any) => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-full items-center justify-center bg-[#F2F2F2] !rounded-none">
      <div className="w-full sm:w-1/2 p-10 md:pl-52 flex justify-center items-center">
        <Image
          src={slide.src}
          alt={slide.alt}
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <div className="w-full h-full sm:w-1/2 flex flex-col py-5 md:py-20 px-4 sm:px-10 mb-10 md:mb-0">
        <div className="flex flex-col gap-3 md:gap-[18px]">
          <p className="text-primary font-semibold text-lg sm:text-xl">
            {slide.title}
          </p>
          <h1 className="w-full md:w-[70%] text-2xl sm:text-3xl lg:text-[52px] font-extrabold lg:leading-tight">
            {slide.heading}
          </h1>
        </div>
        <div className="mt-1 md:mt-16">
          <p className="text-lg sm:text-xl lg:text-[32px]">
            {slide.saleText}
            <span className="text-[#FF8A00] font-semibold">
              {slide.discount}
            </span>
          </p>
          <p className="text-sm mt-0 md:mt-4 w-full md:w-7/12 text-[#808080]">
            {slide.description}
          </p>
        </div>
        <div className="mt-6">
          <button className="w-[150px] h-[40px] md:w-[191px] md:h-[51px] bg-primary hover:bg-green-400 text-white flex justify-center items-center rounded-full font-semibold text-sm md:text-base">
            {slide.buttonText}{" "}
            <IoArrowForwardOutline size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#F2F2F2] !rounded-none overflow-hidden h-[640px] sm:h-[640px] xl:h-[640px] 2xl:h-[640px] relative">
      <Carousel
        leftControl={<CustomLeftArrow />}
        rightControl={<CustomRightArrow />}
        className="h-full !rounded-none"
        onSlideChange={(index) => setActiveIndex(index)}
      >
        {slidesData.map((slide, index) => (
          <BannerSlide key={index} slide={slide} />
        ))}
      </Carousel>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
