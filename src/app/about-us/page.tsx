import React from "react";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const AboutUS = () => {
  return (
    <>
      <div className="container mx-auto h-full mb-10">
        <div className="flex items-center py-6 px-10 md:px-0">
          <GoHome className="w-[24px] h-[24px] text-[#6B7280]" />
          <IoIosArrowForward className="w-[18px] h-[18px] text-[#6B7280] ml-1 md:ml-2" />
          <p className="text-primary">About Us</p>
        </div>
        {/* top 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-10">
            <h1 className="text-[30px] md:text-[52px] font-extrabold">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-base text-justify md:text-[18px] text-[#666666] mt-4 px-0 md:pr-10">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <Image
              src="/about-us/building.svg"
              alt="building"
              width={100}
              height={100}
              className="w-10/12 md:w-full"
            />
          </div>
        </div>
        {/* row 2 */}
      </div>
      <div className="w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative hidden lg:block">
            <Image
              src="/about-us/doctor-bg.svg"
              alt="doctor background"
              layout="responsive"
              width={100}
              height={100}
              className="w-6/12"
            />
            <div className="absolute bottom-0 right-0 md:right-[-1rem]">
              <Image
                src="/about-us/female-doctor.svg"
                alt="female doctor"
                layout="responsive"
                width={100}
                height={100}
                className="object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-10 md:px-36">
            <h1 className="text-[30px] md:text-[52px] font-bold mb-4">
              Mission
            </h1>
            <p className="text-sm md:text-base text-[#808080]">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-y-10">
              <div className="flex items-center ">
                <Image
                  src="/about-us/icon/organic.svg"
                  alt="organic"
                  width={72}
                  height={72}
                />
                <div className="ml-2">
                  <h1 className="text-[#1A1A1A] text-lg font-medium">
                    100% Organic food
                  </h1>
                  <p className="text-[#808080] text-sm font-normal">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <Image
                  src="/about-us/icon/support.svg"
                  alt="organic"
                  width={72}
                  height={72}
                />
                <div className="ml-2">
                  <h1 className="text-[#1A1A1A] text-lg font-medium">
                    Great Support 24/7
                  </h1>
                  <p className="text-[#808080] text-sm font-normal">
                    Instant access to Contact
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <Image
                  src="/about-us/icon/feedback.svg"
                  alt="organic"
                  width={72}
                  height={72}
                />
                <div className="ml-2">
                  <h1 className="text-[#1A1A1A] text-lg font-medium">
                    Customer Feedback
                  </h1>
                  <p className="text-[#808080] text-sm font-normal">
                    Our happy customer
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <Image
                  src="/about-us/icon/secure.svg"
                  alt="organic"
                  width={72}
                  height={72}
                />
                <div className="ml-2">
                  <h1 className="text-[#1A1A1A] text-lg font-medium">
                    100% Secure Payment
                  </h1>
                  <p className="text-[#808080] text-sm font-normal">
                    We ensure your money is save
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <Image
                  src="/about-us/icon/shipping.svg"
                  alt="organic"
                  width={72}
                  height={72}
                />
                <div className="ml-2">
                  <h1 className="text-[#1A1A1A] text-lg font-medium">
                    Free Shipping
                  </h1>
                  <p className="text-[#808080] text-sm font-normal">
                    Free shipping with discount
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <Image
                  src="/about-us/icon/box.svg"
                  alt="organic"
                  width={72}
                  height={72}
                />
                <div className="ml-2">
                  <h1 className="text-[#1A1A1A] text-lg font-medium">
                    100% Organic Food
                  </h1>
                  <p className="text-[#808080] text-sm font-normal">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
