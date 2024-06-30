"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch, CiCalendar } from "react-icons/ci";

const categories = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 },
];

const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Launch",
  "Dinner",
];

const recentlyAddedItems = [
  {
    imgSrc: "/blog/recently1.svg",
    title: "Curabitur porttitor orci eget nequ accumsan.",
    date: "Apr 25, 2021",
  },
  {
    imgSrc: "/blog/recently2.svg",
    title: "Donec mattis arcu faucibus suscipit viverra.",
    date: "Apr 25, 2021",
  },
  {
    imgSrc: "/blog/recently3.svg",
    title: "Quisque posuere tempus rutrum. Integer velit ex.",
    date: "Apr 25, 2021",
  },
];

const SideBar = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setActiveTag((prevTag) => (prevTag === tag ? null : tag));
  };

  return (
    <div className="w-full">
      {/* Search */}
      <div className="hidden md:flex items-center border rounded-md">
        <span className="w-[45px] flex items-center justify-center">
          <CiSearch className="text-[#1A1A1A] w-5 h-5" />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-[355px] h-[45px] outline-none border-none pl-2 py-[12px] px-[18px]"
        />
      </div>

      {/* Horizontal Rule */}
      <hr className="w-full border-spacing-0 my-8 text-[#E5E7EB]" />

      {/* Categories */}
      <div>
        <h1 className="text-[20px] text-[#1A1A1A] font-medium">
          Top Categories
        </h1>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm my-3"
          >
            <p className="text-[#111928]">{category.name}</p>
            <p className="text-[#6B7280]">({category.count})</p>
          </div>
        ))}
      </div>

      {/* Horizontal Rule */}
      <hr className="w-full border-spacing-0 my-8 text-[#E5E7EB]" />

      {/* Popular Tags */}
      <div>
        <h1 className="text-[20px] text-[#1A1A1A] font-medium mb-4">
          Popular Tags
        </h1>
        <div className="flex flex-wrap gap-2 p-4">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-6 py-2 rounded-full text-sm ${
                activeTag === tag ? "bg-primary text-white" : "text-[#1A1A1A]"
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="w-full border-spacing-0 my-8 text-[#E5E7EB]" />

      {/* Gallery */}
      <div>
        <h1 className="text-[20px] text-[#1A1A1A] font-medium mb-4">
          Our Gallery
        </h1>
        <div className="grid grid-cols-4 gap-x-2 gap-y-4">
          {Array.from({ length: 8 }, (_, i) => (
            <Image
              key={i}
              src={`/blog/gallery${i + 1}.svg`}
              alt={`gallery${i + 1}`}
              width={100}
              height={100}
              className="md:w-[103px] md:h-[103px]"
            />
          ))}
        </div>
      </div>

      {/* Recently Added */}
      <div className="mt-10">
        <h1 className="text-[20px] text-[#1A1A1A] font-medium mb-4">
          Recently Added
        </h1>
        {recentlyAddedItems.map((item, index) => (
          <div key={index} className="flex gap-x-3 py-2">
            <Image
              src={item.imgSrc}
              alt={`recently-added-${index}`}
              width={50}
              height={50}
              className="md:w-[100px] md:h-[77px]"
            />
            <div>
              <h1 className="text-[#1A1A1A] font-medium mt-2">{item.title}</h1>
              <div className="flex items-center">
                <CiCalendar className="text-primary" />
                <p className="text-sm text-[#666666]">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
