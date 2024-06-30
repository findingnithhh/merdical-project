import React from "react";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import Link from "next/link";

// Define type for a single blog post
type BlogPost = {
  id: number; // Assuming id is of type number
  imageSrc: string;
  date: string;
  month: string;
  category: string;
  author: string;
  comments: number;
  title: string;
};

type BlogCardProps = {
  posts: BlogPost[];
};

const BlogCard: React.FC<BlogCardProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/detail/${post.id}`}>
          <div className="group border rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <div className="relative">
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={100}
                height={100}
                className="object-cover rounded-t-lg md:h-[394px] min-w-full"
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
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
