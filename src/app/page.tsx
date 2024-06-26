import React from "react";
import BenefitCardLists from "@/components/Card/BenefitCardLists";
import CategoryCard from "@/components/Card/CategoryCardLists";
import { Banner } from "@/components/Banner/Banner";
import PopularProductCard from "@/components/Card/PopularProductCard";
import Promotion from "@/components/Banner/Promotion";
import DailyBlogCard from "@/components/Card/DailyBlogCard";
import CampaniesLogo from "@/components/Card/CampaniesLogo";

async function getData() {
  const response = await fetch("http://localhost:8000/products", {
    cache: "no-store", // Use 'no-store' to always fetch fresh data (or use 'force-cache' for static data)
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data = await getData();  
  // console.log('my data : ', data);
  
  return (
    <>
      <Banner />
      <BenefitCardLists />
      <CategoryCard />
      <PopularProductCard data={data} />
      <Promotion />
      <DailyBlogCard />
      <CampaniesLogo />
    </>
  );
}
