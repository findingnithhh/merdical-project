import Button from "@/components/Button/Button";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { CiSliderHorizontal } from "react-icons/ci";
import SideBar from "@/components/SideBar/SideBar";
import BlogCard from "@/components/Card/BlogCard";

async function getBlogData() {
  const response = await fetch("http://localhost:8000/blogs", {
    cache: "no-store", // Use 'no-store' to always fetch fresh data (or use 'force-cache' for static data)
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

const Blog = async () => {
  const blogData = await getBlogData();
  console.log('blog data : ', blogData);
  
  return (
    <>
      <div className="w-full lg:container mx-auto h-full mb-10">
        <div className="flex items-center py-6">
          <GoHome className="w-6 h-6 text-gray-500" />
          <IoIosArrowForward className="w-4 h-4 text-gray-500 ml-1 md:ml-2" />
          <p className="text-primary ml-2">Blog</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Button className="flex items-center justify-center rounded-full w-[152px] h-[52px]">
              Filter <CiSliderHorizontal className="ml-2" />
            </Button>
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2">
              Sort by:
            </label>
            <select className="border border-[#D1D5DB] rounded-[8px] mt-3 py-[10px] px-[18px] text-[#6B7280] focus:ring-green-500 focus:border-green-500">
              <option value="latest" disabled selected>
                Latest
              </option>
              <option value="1 week">1 week ago</option>
              <option value="2 weeks">2 weeks ago</option>
              <option value="1 month">1 month ago</option>
            </select>
          </div>
          <div>
            <p>
              <span>52</span> Results Found
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10 mt-10">
          <div className="col-span-4">
            <SideBar />
          </div>
          <div className="col-span-8">
            <BlogCard posts={blogData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
