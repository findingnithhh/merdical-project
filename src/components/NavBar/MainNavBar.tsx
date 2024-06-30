"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

const MainNavBar = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [count, setCount] = useState<number>(0);


  useEffect(() => {
    const listenStorageChange = () => {
      if (localStorage.getItem("numberOffCart")) {
        setCount(parseInt(localStorage.getItem("numberOffCart") as string));
      }
    };
    // Subscribe to Event `storage`
    window.addEventListener("storage", listenStorageChange);

    console.log('storage :', listenStorageChange);
    

    // Cleanup Event Listener
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);

  const toggleDrawer =
    (newOpen: boolean | ((prevState: boolean) => boolean)) => () => {
      setDrawerOpen(newOpen);
    };

  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Shop", link: "/shop", hasDropdown: true },
    { text: "Blog", link: "/blog", hasDropdown: true },
    { text: "About Us", link: "/about-us" },
    { text: "Contact Us", link: "/contact-us" },
    { text: "Sign In", link: "/sign-in" },
    { text: "Sign Up", link: "/sign-up" },
  ];

  const isActive = (link: string) => pathname === link;

  const DrawerList = (
    <div onClick={toggleDrawer(false)} className="mt-8 pl-8 pr-52">
      <div>
        <IoClose
          onClick={toggleDrawer(false)}
          className="w-6 h-6 cursor-pointer rounded-full"
        />
      </div>
      {menuItems.map((item) => (
        <ul key={item.link}>
          <Link href={item.link}>
            <li
              className={`my-5 text-sm flex items-center ${
                isActive(item.link) ? "text-[#008001]" : ""
              }`}
            >
              {item.text}
            </li>
          </Link>
        </ul>
      ))}
    </div>
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Check the window size on initial load
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full md:container h-[85px] mx-auto flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center">
        <div className="block md:hidden mx-3 rounded-full bg-[#F7F6F8] p-2 ">
          <HiOutlineMenuAlt2
            className="w-6 h-6 cursor-pointer "
            onClick={toggleDrawer(true)}
          />
        </div>
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="md:w-[40px] md:h-[40px]"
          />
        </Link>
      </div>
      {/* search */}
      <div className="hidden md:flex items-center border rounded-md ">
        <div className="flex">
          <span className="w-[45px] flex items-center justify-center">
            <CiSearch className="text-[#1A1A1A] w-5 h-5" />
          </span>
        </div>
        <input
          type="input"
          placeholder="Search"
          className="w-[355px] h-[45px] outline-none border-none focus:bg-none pl-2 py-[12px] px-[18px]"
        />
        <button className="w-[96px] h-[45px] bg-[#008001] text-white rounded-r-md">
          Search
        </button>
      </div>
      {/* icon */}
      <div className="flex items-center text-[#666666] gap-[8px]">
        <div className="mr-2">
          <CiSearch
            onClick={handleSearchOpen}
            className="text-[#1A1A1A] w-5 h-5 block md:hidden cursor-pointer"
          />
          <Modal
            className="flex justify-center items-center text-xl  bg-white"
            open={searchOpen}
            onClose={handleSearchClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="p-4 outline-none border-none">
              <input
                type="input"
                placeholder="Search"
                className="w-full h-10 outline-none bg-white px-3 border"
              />
              <button
                onClick={handleSearchClose}
                className="mt-3 w-full h-10 bg-[#008001] text-white"
              >
                Cancel
              </button>
            </Box>
          </Modal>
        </div>
        <div className="flex gap-4">
          <CiHeart className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
        </div>
        <span className="border border-1 h-6 flex mx-2"></span>
        <div className="flex items-center gap-3 text-sm">
          <div className="relative">
            <PiHandbag className="text-[#1A1A1A] w-[27.67px] h-[23.8px]" />
            <p className="bg-primary px-1 border rounded-full absolute -top-1 left-3.5 text-white text-xs">
              {count > 9 ? "9+" : count}
            </p>
          </div>
          <p className="hidden md:block text-[11px]">Shopping cart:</p>
          <span className="text-sm font-bold text-[#1A1A1A] pr-4">$0</span>
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
