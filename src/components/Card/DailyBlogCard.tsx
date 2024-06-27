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
      <div className="flex justify-between items-center my-8 md:my-16">
        <div>
          <p className="text-2xl md:text-4xl font-semibold text-black">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="group border rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="relative">
              <Image
                src={post.imageSrc}
                alt="blog"
                layout="responsive"
                width={100}
                height={100}
                className="object-cover rounded-t-lg"
              />
              <div className="absolute bottom-4 left-4 flex flex-col justify-center items-center bg-gray-50 w-16 h-16 rounded-lg">
                <p className="text-lg font-medium text-[#1A1A1A]">
                  {post.date}
                </p>
                <p className="text-xs text-[#808080]">{post.month}</p>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 text-xs md:text-sm font-normal text-[#666666] mt-3">
                <GoTag />
                <p>{post.category}</p>
                <CiUser />
                <p>By {post.author}</p>
                <VscComment />
                <p>{post.comments} Comments</p>
              </div>
              <div className="mt-2">
                <p className="text-sm md:text-base font-medium">{post.title}</p>
              </div>
              <div className="flex items-center mt-4 md:mt-6 font-semibold text-primary text-sm md:text-base">
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
