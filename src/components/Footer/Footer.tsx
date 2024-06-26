import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const privacies = [
  { text: "Terms", link: "/" },
  { text: "Privacy", link: "/" },
  { text: "Cookies", link: "/" },
];

const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* top */}
        <div className="flex justify-between items-center h-[88px] px-3 md:px-0">
          <div className="flex gap-[16px] text-xs md:text-base">
            {privacies.map((privacy, index) => (
              <Link key={index} href={privacy.link}>
                {privacy.text}
              </Link>
            ))}
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
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full h-[600px] md:h-[405px] bg-[#1A1A1A] relative">
        <Image
          src="/icon/bg.svg"
          alt="bg"
          width={100}
          height={100}
          className="w-[200px] h-[205px] md:w-[316px] md:h-[373px]"
        />
        <div className="container mx-auto">
          <div className="container h-full m-auto absolute top-0 z-40 text-white">
            <div className="flex justify-between">
              <div className="py-4 md:py-14 px-2 w-full">
                <div className="flex justify-between flex-wrap">
                  {/* about company */}
                  <div className="flex flex-col gap-4 w-full md:w-3/12 text-sm md:text-base">
                    <Link href="/">
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        width={40}
                        height={40}
                        className="md:w-[40px] md:h-[40px]"
                      />
                    </Link>
                    <p>
                      Address: No.2A, Down Town Road No 7, Phum Kork
                      Chambak,Phnom Penh
                    </p>
                    <p>Office: (+855) 088 5654 093</p>
                    <p>Support: info@medi.com</p>
                  </div>
                  <div className="grid grid-cols-2 mt-5 md:grid-cols-4 w-full md:w-7/12">
                    {/* my account */}
                    <div className="mt-2">
                      <h1 className="mb-5 text-sm md:text-base">My Account</h1>
                      <div className="text-[#999999] text-xs md:text-sm flex flex-col gap-3">
                        <Link href="/" className=" hover:text-white">
                          My Account
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Order History
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Shoping Cart
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Wishlist
                        </Link>
                      </div>
                    </div>
                    {/* helps */}
                    <div className="mt-2">
                      <h1 className="mb-5 text-sm md:text-base">Helps</h1>
                      <div className="text-[#999999] text-xs md:text-sm flex flex-col gap-3">
                        <Link href="/" className=" hover:text-white">
                          Contact
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Faqs
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Terms & Condition
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Privacy Policy
                        </Link>
                      </div>
                    </div>
                    {/* proxy */}
                    <div className="mt-5 md:mt-2">
                      <h1 className="mb-5 text-sm md:text-base">Proxy</h1>
                      <div className="text-[#999999] text-xs md:text-sm flex flex-col gap-3">
                        <Link href="/" className=" hover:text-white">
                          About
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Shop
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Product
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Track Order
                        </Link>
                      </div>
                    </div>
                    {/* categories */}
                    <div className="mt-5 md:mt-2">
                      <h1 className="mb-5 text-sm md:text-base">Categories</h1>
                      <div className="text-[#999999] text-xs md:text-sm flex flex-col gap-3">
                        <Link href="/" className=" hover:text-white">
                          Fruit & Vegetables
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Meat & Fish
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Bread & Bakery
                        </Link>
                        <Link href="/" className=" hover:text-white">
                          Beauty & Health
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="border-t border-secondary mt-4 md:mt-3"></div>
          <p className="text-center mt-4 md:mt-5 text-[#808080] text-xs md:text-base">
            Developed by Digital Solution
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
