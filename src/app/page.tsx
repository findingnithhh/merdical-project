import React from "react";
import BenefitCardLists from "@/components/Card/BenefitCardLists";
import { Banner } from "@/components/Banner/Banner";
import PopularProductCard from "@/components/Card/PopularProductCard";
import Promotion from "@/components/Banner/Promotion";
import DailyBlogCard from "@/components/Card/DailyBlogCard";
import CampaniesLogo from "@/components/Card/CampaniesLogo";
import Categories from "@/components/Card/Categories";

async function getProductData() {
  const response = await fetch("http://localhost:8000/products", {
    cache: "no-store", // Use 'no-store' to always fetch fresh data (or use 'force-cache' for static data)
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

async function getCategoryData() {
  const response = await fetch("http://localhost:8000/categories", {
    cache: "no-store", // Use 'no-store' to always fetch fresh data (or use 'force-cache' for static data)
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
}

export default async function Home() {
  const productData = await getProductData();
  const categoryData = await getCategoryData();
  // console.log("product data : ", productData);
  // console.log("catagory data : ", categoryData);
  
  return (
    <>
      <Banner />
      <BenefitCardLists />
      <Categories data={categoryData} />
      <PopularProductCard data={productData} />
      <Promotion />
      <DailyBlogCard />
      <CampaniesLogo />
    </>
  );
}
