import React from "react";
import BenefitCardLists from "@/components/Card/BenefitCardLists";
import CategoryCard from "@/components/Card/CategoryCardLists";
import { Banner } from "@/components/Banner/Banner";
import PopularProductCard from "@/components/Card/PopularProductCard";
import Promotion from "@/components/Banner/Promotion";
import DailyBlogCard from "@/components/Card/DailyBlogCard";

export default function Home() {
  return (
    <>
      <Banner />
      <BenefitCardLists />
      <CategoryCard />
      <PopularProductCard />
      <Promotion />
      <DailyBlogCard />
      {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus consequatur non quaerat consectetur perferendis architecto, est placeat inventore vitae nulla, repudiandae, aspernatur quam ipsam delectus officiis nisi atque nobis?</div> */}
    </>
  );
}
