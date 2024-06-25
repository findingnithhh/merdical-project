import BenefitCardLists from "@/components/Card/BenefitCardLists";
import CategoryCard from "@/components/Card/CategoryCardLists";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.svg"
        alt="banner"
        width="100"
        height="100"
        className="w-full"
      />
      <BenefitCardLists />
      <CategoryCard />
      {/* <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus consequatur non quaerat consectetur perferendis architecto, est placeat inventore vitae nulla, repudiandae, aspernatur quam ipsam delectus officiis nisi atque nobis?</div> */}
    </>
  );
}
