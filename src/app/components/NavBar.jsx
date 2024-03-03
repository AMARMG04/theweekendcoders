"use client"

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname();

  const Links = [
    {
      name: "Services",
      href: "/services"
    },
    {
      name: "Showcase",
      href: "/our_works"
    },
    {
      name: "Contact Us",
      href: "/contact_us"
    }
  ]

  const [selectMenu, setSelectMenu] = useState(false);

  const toggleSelectMenu = () => {
    setSelectMenu(!selectMenu);
  }

  return (
    <div className="my-14 px-4 lg:px-16 flex flex-row justify-between">
      <div className="">
        <Link href='/'><Image src="/images/logo.svg" width={300} height={300} alt="Logo" /></Link>
      </div>
      <div>
      <Image
          src={`${selectMenu? '/images/close.svg' : '/images/menu.svg'}`}
          width={30}
          height={30}
          alt="Menu"
          className="lg:hidden"
          onClick={toggleSelectMenu}
        />
      </div>
      {selectMenu && (
        <div className="overlay lg:hidden absolute top-24 left-0 w-full h-full bg-black bg-opacity-90 z-10 flex justify-center pt-[200px]">
          <div className="text-white text-2xl flex flex-col items-center gap-10">
            {Links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className={`relative font-normal ${
                  pathname === link.href
                    ? `underline underline-offset-8`
                    : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
                }`}
                onClick={toggleSelectMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center text-white text-lg gap-10 font-medium tracking-tight">
          {
            Links.map((link, index) => (
              <Link href={link.href} key={index} className={`relative font-medium ${pathname === link.href ? `underline underline-offset-8` : ` underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}`}>{link.name}</Link>
            ))
          }
      </div>
    </div>
  );
};

export default NavBar;
