import React from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { ICategory } from "@/types/Category";
interface Props {
  data: ICategory[];
}

const Categories: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="container mx-auto p-2 md:p-0">
        <div className="flex justify-between items-center my-[32px]">
          <div>
            <p className="text-[20px] md:text-[32px] font-semibold">
              Popular Categories
            </p>
          </div>
          <div className="flex items-center gap-3 text-primary">
            <p className="text-sm md:text-md">View All</p>
            <IoArrowForward />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 cursor-pointer">
          {data.map((catagory, index) => (
            <div key={index} className="hover:text-primary w-full h-[200px] md:h-[262px] flex flex-col justify-center items-center gap-4 border rounded-md hover:border-2 hover:border-primary hover:shadow-sm">
              <Image
                src={catagory.imageUrl}
                alt={catagory.categoryName}
                width={50}
                height={50}
                className="md:w-[176px] md:h-[160px]"
              />
              <p className="text-sm md:text-lg mt-4">{catagory.categoryName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
