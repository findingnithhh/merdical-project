import React from "react";
import Image from "next/image";
import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";

const blogPosts = [
  {
    imageSrc: "/daily-blog/blog1.svg",
    date: "18",
    month: "NOV",
    category: "Food",
    author: "Admin",
    comments: 65,
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    imageSrc: "/daily-blog/blog2.svg",
    date: "18",
    month: "NOV",
    category: "Food",
    author: "Admin",
    comments: 65,
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    imageSrc: "/daily-blog/blog3.svg",
    date: "18",
    month: "NOV",
    category: "Food",
    author: "Admin",
    comments: 65,
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
];

const DailyBlogCard = () => {
  return (
    <div className="container mx-auto p-2 md:p-0 mt-20">
      <div className="flex justify-between items-center my-[32px]">
        <div>
          <p className="text-[20px] md:text-[32px] font-semibold text-black">
            Daily Blog
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
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto rounded-md gap-4">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group w-full h-[570px] border rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="h-[394px] relative">
              <Image
                src={post.imageSrc}
                alt="blog"
                width={100}
                height={100}
                className="w-full"
              />
              <div className="absolute bottom-0 left-5 flex flex-col justify-center items-center bg-gray-50 w-[66px] h-[74.94px] rounded">
                <p className="text-xl font-medium text-[#1A1A1A]">
                  {post.date}
                </p>
                <p className="text-xs text-[#808080]">{post.month}</p>
              </div>
            </div>
            <div className="h-[176px] p-[24px] group-hover:text-primary transition-colors">
              <div className="flex items-center gap-2 text-[#666666] text-sm font-normal mt-3">
                <GoTag />
                <p>{post.category}</p>
                <CiUser />
                <p>By {post.author}</p>
                <VscComment />
                <p>{post.comments} Comments</p>
              </div>
              <div className="mt-2">
                <p className="text-lg font-medium">{post.title}</p>
              </div>
              <div className="flex items-center mt-[12px] font-semibold text-primary">
                <button className="mr-2">Read More</button>
                <IoArrowForwardOutline />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyBlogCard;
