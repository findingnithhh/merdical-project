import React from "react";
import Image from "next/image";

const companyLogos = [
  { src: "/company/steps.svg", alt: "step company" },
  { src: "/company/mango.svg", alt: "mango company" },
  { src: "/company/food-network.svg", alt: "food network company" },
  { src: "/company/food-co.svg", alt: "food co company" },
  { src: "/company/book-off.svg", alt: "book-off company" },
  { src: "/company/gserise.svg", alt: "gserise company" },
];

const CompaniesLogo = () => {
  return (
    <div className="container mx-auto p-2 md:p-0 mt-20">
      <div className="flex flex-wrap justify-between items-center w-full py-[20px] md:py-[60px]">
        {companyLogos.map((logo, index) => (
          <React.Fragment key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="w-[60px] h-[24px] sm:w-[70px] sm:h-[28px] md:w-[82px] md:h-[32px] mb-4 md:mb-0"
            />
            {index < companyLogos.length - 1 && (
              <span className="hidden md:inline-block border h-6 text-[#E6E6E6]"></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CompaniesLogo;
