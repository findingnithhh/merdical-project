import React from "react";
import Image from "next/image";

const BenefitCard = ({ icon, title, description }: any) => {
  return (
    <div className="w-full md:w-[347px] h-[200px] md:h-[224px] flex flex-col justify-center items-center gap-4 ">
      <Image
        src={icon}
        alt={title}
        width={50}
        height={50}
        className="md:w-[72px] md:h-[72px]"
      />
      <div className="flex flex-col text-center gap-2">
        <p className="text-sm md:text-lg font-semibold">{title}</p>
        <span className="text-[#999999] font-normal text-xs md:text-sm">
          {description}
        </span>
      </div>
    </div>
  );
};

export default BenefitCard;
