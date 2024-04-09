"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const Links = [
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Showcase",
      href: "/our_works",
    },
    {
      name: "Contact Us",
      href: "/contact_us",
    },
  ];

  const [selectMenu, setSelectMenu] = useState(false);

  const toggleSelectMenu = () => {
    setSelectMenu(!selectMenu);
  };

  return (
    <div className="my-14 px-4 lg:px-16 flex flex-row justify-between">
      <div className="">
        <Link href="/">
          <Image src="/images/logo.svg" width={280} height={280} alt="Logo" className=""/>
        </Link>
      </div>
      <div>
        <Image
          src={`/images/menu.svg`}
          width={30}
          height={30}
          alt="Menu"
          className="lg:hidden"
          onClick={toggleSelectMenu}
        />
      </div>
      {selectMenu && (
        <div
          className={
            selectMenu
              ? "absolute bottom-0 right-0 top-0 z-10 h-[100%] flex flex-col gap-4 text-white backdrop-blur-2xl bg-black/40 w-[300px] pr-4 pt-14 ease-in duration-200"
              : "absolute bottom-0 right-0 hidden top-0 z-10 h-screen flex-col gap-4 text-white backdrop-blur-2xl bg-black/40 w-[300px] pr-4 pt-14 ease-in duration-200"
          }
        >
          <div className="flex flex-col justify-end items-end gap-10 w-full">
            <Image
              src="/images/close.svg"
              width={30}
              height={30}
              alt="close"
              onClick={toggleSelectMenu}
              className=" w-[32px] h-[32px] ml-8 lg:hidden"
            />
            <div className="flex flex-col gap-8 items-end">
              {Links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`relative font-medium text-2xl ${
                    pathname === link.href
                      ? `underline decoration-wavy underline-offset-8`
                      : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                  }`}
                  onClick={toggleSelectMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center text-white text-lg gap-10 font-medium tracking-tight">
        {Links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`relative font-medium ${
              pathname === link.href
                ? `underline underline-offset-8`
                : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
