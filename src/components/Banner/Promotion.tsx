import React from "react";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

const promotions = [
  {
    src: "/promote/sale.svg",
    alt: "sale",
    label: "Best Deals",
    title: "Sale of the Month",
    description: (
      <div className="flex justify-center mt-2">
        {/* time */}
        {["00", "02", "18", "46"].map((time, index) => (
          <React.Fragment key={index}>
            <div className="text-[#1F2A37] text-center">
              <p className="text-[24px]">{time}</p>
              <p className="uppercase text-sm">
                {["Days", "Hours", "Mins", "Secs"][index]}
              </p>
            </div>
            {index < 3 && (
              <p className="text-white mx-3 text-[24px] font-normal">:</p>
            )}
          </React.Fragment>
        ))}
      </div>
    ),
    buttonStyle: "bg-primary text-white",
    labelStyle: "text-[#6B7280]",
    titleStyle: "text-[40px] font-semibold mt-2",
    buttonText: "Shop Now",
  },
  {
    src: "/promote/meterials.svg",
    alt: "materials",
    label: "New products",
    title: "Materials Doctor",
    description: (
      <p className="text-lg text-white">
        Started at{" "}
        <span className="text-[20px] font-semibold text-[#D82525]">$79.99</span>
      </p>
    ),
    buttonStyle: "bg-white border-2 border-primary text-primary",
    labelStyle: "text-[#fff]",
    titleStyle: "text-[40px] font-semibold mt-2 text-white",
    buttonText: "Shop Now",
  },
  {
    src: "/promote/discount.svg",
    alt: "discount",
    label: "Summer Sale",
    title: "Discount",
    description: (
      <p className="text-lg text-[#1A1A1A]">
        Up to
        <span className="text-[20px] font-semibold bg-black py-[6px] px-[12px] text-[#FCC900] rounded-md ml-2">
          64% OFF
        </span>
      </p>
    ),
    buttonStyle: "bg-white border-2 border-primary text-primary",
    labelStyle: "text-secondary",
    titleStyle: "text-[40px] font-semibold mt-2 text-[#1A1A1A]",
    buttonText: "Shop Now",
  },
];

const Promotion = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
      {promotions.map((promo, index) => (
        <div key={index} className="rounded-lg w-full h-[584px] relative">
          <Image
            src={promo.src}
            alt={promo.alt}
            width={100}
            height={100}
            className="w-full"
          />
          <div className="absolute top-[38.13px] left-0 text-center w-full h-full flex justify-center">
            <div>
              <p className={`${promo.labelStyle} uppercase text-sm`}>
                {promo.label}
              </p>
              <h1 className={promo.titleStyle}>{promo.title}</h1>
              {promo.description}
              <div className="flex justify-center mt-8">
                <button
                  className={`w-[150px] h-[40px] md:w-[191px] md:h-[51px] ${promo.buttonStyle} flex justify-center items-center rounded-full font-semibold text-sm md:text-base`}
                >
                  {promo.buttonText} <IoArrowForwardOutline size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Promotion;
