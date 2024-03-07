import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const Links = [
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Our Works",
      href: "/our_works",
    },
    {
      name: "Contact Us",
      href: "/contact_us",
    },
  ];

  const socialLinks =[
    {
        name: "Instagram",
        link: "https://www.instagram.com/the_weekend_coders/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
    },
    {
        name: "Twitter",
        link: "https://twitter.com/weekendcoders"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/the-weekend-coders-twc/"
    },
    {
        name: "Behance",
        link: "https://www.behance.net/theweekendcoderstwc"
    },
    {
        name: "Dribbble",
        link: "https://dribbble.com/The_Weekend_Coders"
    }
  ]

  return (
    <section className="text-white backdrop-blur-xl px-4 py-10 lg:p-10 flex flex-col gap-16 lg:flex-row justify-between rounded-t-lg">
      <div className="">
        <Link href="/"><Image src="/images/logo.svg" width={300} height={300} alt="Logo" /></Link>
      </div>
      <div className="">
        <h2 className="text-lg text-gray-400 font-light my-4">About</h2>
        <div className="flex flex-col gap-2 justify-start text-white text-lg tracking-tight">
          {Links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`relative font-normal underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-fit after:transition-all after:duration-300 cursor-pointer}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-20">
        <div className="flex flex-col md:flex-row gap-4 md:gap-20">
          <div>
            <h2 className="text-lg text-gray-400 font-light my-4">Contact</h2>
            <div className="flex flex-col justify-start text-white text-lg tracking-tight">
              <p>+91 9789260864</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg text-gray-400 font-light my-4">Email</h2>
            <div className="flex flex-col justify-start text-white text-lg tracking-tight">
              <p>theweekendcodershq.gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            {
                socialLinks.map((link, index) => (
                    <Link href={link.link} target="_blank" className="text-lg tracking-tight relative font-normal underline-offset-8 after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:top-7 hover:after:w-fit after:transition-all after:duration-300 cursor-pointer" key={index}>{link.name}</Link>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Footer;
