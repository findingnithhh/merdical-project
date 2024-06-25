import { IoArrowForward } from "react-icons/io5";
import CategoryCardLists from "./CategoryCard";

const CategoryCard = () => {
  return (
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <CategoryCardLists
          imageSrc="/popular-categories/syringe.svg"
          alt="syringe"
          text="Syringe and needles"
        />
        <CategoryCardLists
          imageSrc="/popular-categories/suture.svg"
          alt="suture"
          text="Suture"
        />
        <CategoryCardLists
          imageSrc="/popular-categories/blood-bag.svg"
          alt="blood-bag"
          text="Blood Bag"
        />
        <CategoryCardLists
          imageSrc="/popular-categories/blood-lancet.svg"
          alt="blood-lancet"
          text="Blood Lancet"
        />
        <CategoryCardLists
          imageSrc="/popular-categories/urine-bag.svg"
          alt="urine-bag"
          text="Urine Bag"
        />
        <CategoryCardLists
          imageSrc="/popular-categories/medical-tube.svg"
          alt="medical-tube"
          text="Medical Tube"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
