import BenefitCardLists from "@/components/Card/BenefitCardLists";
import CategoryCard from "@/components/Card/CategoryCardLists";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
export default function Home() {
  return (
    <>
      
      <Banner />
      <BenefitCardLists />
      <CategoryCard />
      {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus consequatur non quaerat consectetur perferendis architecto, est placeat inventore vitae nulla, repudiandae, aspernatur quam ipsam delectus officiis nisi atque nobis?</div> */}
    </>
  );
}
