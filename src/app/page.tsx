import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src='/banner.svg' alt="banner" width="100" height="100" className="w-full" />
    </>
  );
}
