"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { GoHome, GoTag } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import SideBar from "@/components/SideBar/SideBar";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import Link from "next/link";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { CiLink } from "react-icons/ci";
import axios from "axios";
import { LuDot } from "react-icons/lu";
import SmallBanner from "@/components/Banner/SmallBanner";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Comment from "@/components/Comment/Comment";

interface UserDetail {
  date: string;
  read: string;
  name: string;
}

interface PostDetail {
  id: number;
  imageSrc: string;
  date: string;
  month: string;
  category: string;
  author: string;
  comments: number;
  title: string;
  subTitle: string;
  descriptionTop: string;
  descriptionBottom: string;
  subImageUrl: string[];
  user: UserDetail;
}

const Details = () => {
  const params = useParams();
  const [post, setPost] = useState<Partial<PostDetail>>({}); // Use singular 'post' instead of 'posts' for clarity

  const id = params.id;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}`);
        setPost(response.data); // Assuming response.data contains the fetched blog post details
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching blog post: ", error);
      }
    };
    fetchBlog();
  }, [id]);
  return (
    <>
      <div className="w-full lg:container mx-auto h-full mb-10 px-1 lg:px-0">
        <div className="flex flex-wrap items-center py-6">
          <GoHome className="w-6 h-6 text-gray-500" />
          <IoIosArrowForward className="w-4 h-4 text-gray-500 ml-1 md:ml-2" />
          <p className="text-primary ml-2">Blog details</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          <div className="col-span-12 lg:col-span-8 order-last lg:order-first">
            <div className="w-full">
              <Image
                // src={post.imageSrc}
                src={post.imageSrc || "/details/banner.svg"}
                alt="banner"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 text-xs md:text-sm font-normal text-[#666666] mt-3">
                <GoTag className="text-primary" />
                <p>Food</p>
                <CiUser className="text-primary" />
                <p>By Admin</p>
                <VscComment className="text-primary" />
                <p>Comments</p>
              </div>
              <div className="mt-2">
                <p className="text-base md:text-[32px] font-semibold leading-10">
                  {post.title}
                </p>
              </div>
              {/* user card */}
              <div className="py-10 flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <Image
                    src="/details/user.svg"
                    alt="user"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h1 className="text-[#111928] text-base font-medium">
                      {post.user?.name}
                    </h1>
                    <p className="text-sm text-[#4B5563] flex items-center">
                      {post.user?.date}
                      <span>
                        <LuDot className="mx-1" />
                      </span>
                      {post.user?.read}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#4D4D4D] text-[18px]">
                  <Link
                    href="/"
                    className="hover:text-white hover:bg-primary rounded-full p-3"
                  >
                    <CgFacebook />
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-white hover:bg-primary rounded-full p-3"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-white hover:bg-primary rounded-full p-3"
                  >
                    <FaPinterestP />
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-white hover:bg-primary rounded-full p-3"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="/"
                    className="hover:text-white hover:bg-primary rounded-full p-3"
                  >
                    <CiLink />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-[#111928]">{post.subTitle}</h1>
              <p className="text-sm md:text-lg text-[#6B7280] text-justify my-4">
                {post.descriptionTop}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <Image
                    src="/details/image1.svg"
                    alt="test"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
                <div>
                  <Image
                    src="/details/image2.svg"
                    alt="test"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
              </div>
              <p className="text-sm md:text-lg text-[#6B7280] text-justify my-4">
                {post.descriptionBottom}
              </p>
            </div>
            <div>
              <SmallBanner />
            </div>
            <div>
              <h1 className="text-base md:text-[24px] text-[#1A1A1A] font-medium my-10">
                Leave a Comment
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullname">Full name</label> <br />
                  <Input label="" type="text" placeholder="example : John" />
                </div>
                <div>
                  <label htmlFor="email">Email</label> <br />
                  <Input label="" type="text" placeholder="john@gmail.com" />
                </div>
              </div>
              <div>
                <label htmlFor="email">Your message</label> <br />
                <textarea
                  id="message"
                  className="border h-[160px] border-[#D1D5DB] rounded-[8px] w-full mt-3 py-[14px] px-[20px] text-[#6B7280] focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
            </div>
            <div className="flex items-center my-4">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  rounded"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm  text-[#6B7280]"
              >
                Save my name and email in this browser for the next time I
                comment.
              </label>
            </div>
            <Button className="rounded-full text-sm md:text-base px-5 py-3 md:px-10 md:py-4">
              Post Comments
            </Button>
            <div>
              <Comment />
            </div>
            <button className="rounded-full text-sm md:text-base px-5 py-3 md:px-10 md:p3-4 bg-transparent border-2 border-primary text-primary !important">
              Load More
            </button>
          </div>
          <div className="col-span-12 lg:col-span-4 order-first lg:order-last">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
