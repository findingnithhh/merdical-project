import Link from "next/link";
import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* top */}
        <div className="flex justify-between items-center h-[88px]">
          <div className="flex gap-[16px]">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
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
    </>
  );
};

export default Footer;
