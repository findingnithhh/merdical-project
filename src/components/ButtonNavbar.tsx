"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Import the icon from React Icons
import { FiPhoneCall } from "react-icons/fi";
interface MenuItem {
  text: string;
  link: string;
  hasDropdown?: boolean;
}

const ButtonNavbar = () => {
  const pathname = usePathname();
  const menuItems: MenuItem[] = [
    { text: "Home", link: "/" },
    { text: "Shop", link: "/shop", hasDropdown: true },
    { text: "Blog", link: "/blog", hasDropdown: true },
    { text: "About Us", link: "/about-us" },
    { text: "Contact Us", link: "/contact-us" },
  ];

  const isActive = (link: string) => pathname === link;

  return (
    <>
      <div className="w-full bg-[#333333]">
        <nav className="container bg-[#333333] h-[60px] mx-auto flex items-center justify-between">
          <div className="flex">
            {menuItems.map((item) => (
              <ul key={item.link}>
                <Link href={item.link}>
                  <li
                    className={`py-[10px] px-[16px] font-medium text-white flex items-center ${
                      isActive(item.link) ? "bg-[#008001]" : ""
                    }`}
                  >
                    {item.text}
                    {item.hasDropdown && (
                      <FaChevronDown className="ml-2 w-[16px] h-[16px]" />
                    )}
                  </li>
                </Link>
              </ul>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <FiPhoneCall className="w-[20px] h-[20px]" />
            <p>(+855) 088 5654 093</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ButtonNavbar;
