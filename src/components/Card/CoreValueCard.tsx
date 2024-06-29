import Image from "next/image";
import React from "react";

const CoreValueCard = () => {
  const coreValues = [
    {
      icon: "/icon/platform.svg",
      title: "Platform",
      description:
        "We keep Flowbite secure and free of spam and abuse so that this can be the platform where developers come together to create.",
    },
    {
      icon: "/icon/premium.svg",
      title: "Premium products",
      description:
        "We embody the shift toward investments in safe and secure software design practices with our world-class front-end products.",
    },
    {
      icon: "/icon/feature.svg",
      title: "Features",
      description:
        "Start with thousands of actions and applications from our community to help you build, improve, and accelerate your automated workflows.",
    },
    {
      icon: "/icon/support24.svg",
      title: "Support 24/7",
      description:
        " We provide high-quality services all around the world with personal assistance through our 24/7 premium service. ",
    },
  ];

  return (
    <>
      <div className="bg-[#F9FAFB]">
        <div className="w-full md:container mx-auto mt-10">
          <div className="text-center flex justify-center flex-col">
            <h1 className="text-2xl md:text-[40px] font-extrabold  mt-10">
              Core Values
            </h1>
            <p className="w-full md:w-5/12 mx-auto text-[#6B7280] text-sm md:text-[16px] lg:text-[18px] mt-5">
              Here at Flowbite, we focus on markets where technology,
              innovation, and capital can unlock long-term value and drive
              economic growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 mt-10">
            {coreValues.map((value, index) => (
              <div key={index} className="w-full p-[24px] rounded-md shadow-md mb-20">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={30}
                  height={30}
                  className="mb-5"
                />
                <div className="flex flex-col gap-2">
                  <h1 className="text-base md:text-[18px] text-[#111928] font-semibold">
                    {value.title}
                  </h1>
                  <p className="text-sm md:text-base text-[#6B7280]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreValueCard;
