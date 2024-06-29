import Image from "next/image";
import React from "react";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: "Bonnie Green", role: "Senior Front-end Developer" },
  { name: "Bonnie Green", role: "Senior Front-end Developer" },
  { name: "Bonnie Green", role: "Senior Front-end Developer" },
  { name: "Bonnie Green", role: "Senior Front-end Developer" },
];

const TeamCard: React.FC = () => {
  return (
    <div className="container mx-auto p-2 md:p-0 mt-20 bg-white my-20">
      <div className="flex justify-between items-center my-8 md:my-16">
        <div>
          <p className="text-2xl md:text-4xl font-semibold text-black">
            Our team
          </p>
          <p className="text-sm md:text-[18px] text-[#6B7280] w-full md:w-8/12 mt-2">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-center gap-3 mb-5"
          >
            <Image
              src={`/about-us/doctor${index + 1}.svg`}
              alt={`doctor ${index + 1}`}
              width={100}
              height={100}
              className="md:w-[144px] md:h-[144px]"
            />
            <div className="text-center gap-3 flex flex-col">
              <h1 className="text-base md:text-[20px] font-extrabold text-[#111928]">
                {member.name}
              </h1>
              <p className="text-sm md:text-base text-[#6B7280]">
                {member.role}
              </p>
              <div className="flex justify-center gap-4">
                {["facebook", "telegram", "linkedin", "instagram"].map(
                  (icon, i) => (
                    <Image
                      key={i}
                      src={`/icon/${icon}.svg`}
                      alt={`${icon} icon`}
                      width={18}
                      height={18}
                      className="md:w-[20px] md:h-[20px]"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
