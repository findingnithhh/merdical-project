import React from "react";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import CoreValueCard from "@/components/Card/CoreValueCard";
import TeamCard from "@/components/Card/TeamCard";
const AboutUS = () => {
  return (
    <>
      <div className="w-full lg:container mx-auto h-full mb-10">
        <div className="flex items-center py-6">
          <GoHome className="w-6 h-6 text-gray-500" />
          <IoIosArrowForward className="w-4 h-4 text-gray-500 ml-1 md:ml-2" />
          <p className="text-primary ml-2">About Us</p>
        </div>
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          <div className="flex flex-col justify-center px-4 md:px-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-4">
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
              width={500}
              height={500}
              className="w-full "
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-10 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative hidden xl:block">
            <Image
              src="/about-us/doctor-bg.svg"
              alt="doctor background"
              layout="responsive"
              width={500}
              height={500}
              className="w-full"
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
          <div className="flex flex-col justify-center px-4 md:px-2 lg:px-20 mx-auto w-full lg:w-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Mission</h1>
            <p className="text-sm md:text-base text-gray-600">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 w-full pl-10 md:pl-0">
              <div className="flex items-center">
                <Image
                  src="/about-us/icon/organic.svg"
                  alt="organic"
                  width={72}
                  height={72}
                  className="w-[50px] h-[50px] md:w-[72px] md:h-[72px]"
                />
                <div className="ml-2">
                  <h1 className="text-gray-900 text-lg font-medium">
                    100% Organic food
                  </h1>
                  <p className="text-gray-600 text-sm font-normal">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/about-us/icon/support.svg"
                  alt="support"
                  width={72}
                  height={72}
                  className="w-[50px] h-[50px] md:w-[72px] md:h-[72px]"
                />
                <div className="ml-2">
                  <h1 className="text-gray-900 text-lg font-medium">
                    Great Support 24/7
                  </h1>
                  <p className="text-gray-600 text-sm font-normal">
                    Instant access to Contact
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/about-us/icon/feedback.svg"
                  alt="feedback"
                  width={72}
                  height={72}
                  className="w-[50px] h-[50px] md:w-[72px] md:h-[72px]"
                />
                <div className="ml-2">
                  <h1 className="text-gray-900 text-lg font-medium">
                    Customer Feedback
                  </h1>
                  <p className="text-gray-600 text-sm font-normal">
                    Our happy customer
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/about-us/icon/secure.svg"
                  alt="secure"
                  width={72}
                  height={72}
                  className="w-[50px] h-[50px] md:w-[72px] md:h-[72px]"
                />
                <div className="ml-2">
                  <h1 className="text-gray-900 text-lg font-medium">
                    100% Secure Payment
                  </h1>
                  <p className="text-gray-600 text-sm font-normal">
                    We ensure your money is safe.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/about-us/icon/shipping.svg"
                  alt="shipping"
                  width={72}
                  height={72}
                  className="w-[50px] h-[50px] md:w-[72px] md:h-[72px]"
                />
                <div className="ml-2">
                  <h1 className="text-gray-900 text-lg font-medium">
                    Free Shipping
                  </h1>
                  <p className="text-gray-600 text-sm font-normal">
                    Free shipping with discount
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/about-us/icon/box.svg"
                  alt="box"
                  width={72}
                  height={72}
                  className="w-[50px] h-[50px] md:w-[72px] md:h-[72px]"
                />
                <div className="ml-2">
                  <h1 className="text-gray-900 text-lg font-medium">
                    100% Organic Food
                  </h1>
                  <p className="text-gray-600 text-sm font-normal">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-10 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
          <div>
            <h1 className="text-2xl md:text-[52px] font-extrabold my-5 md:my-10">
              Vision
            </h1>
            <p className="text-sm md:text-lg text-[#6B7280]">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <div className="mt-10 flex flex-col gap-y-5 text-sm md:text-base">
              <div className="flex items-center">
                <div className="p-2 bg-[#DEF7EC] text-primary rounded-full mx-2 ">
                  <FaCheck />
                </div>
                Continuous integration and deployment
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-[#DEF7EC] text-primary rounded-full mx-2 ">
                  <FaCheck />
                </div>
                Development workflow
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-[#DEF7EC] text-primary rounded-full mx-2 ">
                  <FaCheck />
                </div>
                Knowledge management
              </div>
            </div>
            <button className="w-[100px] h-[40px] md:w-[159px] md:h-[56px] text-sm md:text-base text-white rounded-full bg-primary my-10">
              Shop Now
            </button>
          </div>
          <div>
            <Image
              src="/about-us/male-doctor.svg"
              alt="doctor"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <CoreValueCard />
      <TeamCard />
    </>
  );
};

export default AboutUS;
