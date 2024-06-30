"use client";
import React from "react";
import { useParams } from "next/navigation";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import SideBar from "@/components/SideBar/SideBar";

const Details = () => {
  const params = useParams();
  console.log("id", params);

  return (
    <>
      <div className="w-full lg:container mx-auto h-full mb-10 px-4 lg:px-0">
        <div className="flex flex-wrap items-center py-6">
          <GoHome className="w-6 h-6 text-gray-500" />
          <IoIosArrowForward className="w-4 h-4 text-gray-500 ml-1 md:ml-2" />
          <p className="text-primary ml-2">Blog details</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          <div className="col-span-12 lg:col-span-8"></div>
          <div className="col-span-12 lg:col-span-4">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
