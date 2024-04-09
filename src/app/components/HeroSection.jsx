import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="my-24 px-4 lg:px-16 tracking-[-3px]">
      <div className=" md:items-start leading-tight">
        <h1 className="text-[40px] text-white lg:text-[64px] font-normal">
          Coffee, Code, Clients.
        </h1>
        <h1 className="text-[64px] max-w-[400px] md:max-w-full text-white lg:text-[96px] font-normal">
          That's Our Weekend.
        </h1>
      </div>
      <div className="flex justify-center md:justify-start">
      <Link href="/contact_us"><button className="my-10 px-14 py-7 lg:px-20 lg:py-8 backdrop-blur-[10px] text-white text-2xl font-medium border-2 border-gray-500 rounded-full hover:scale-105 duration-150">Get in Touch</button></Link>
      </div>
      <h1 className="text-white text-4xl text-center mt-20 mb-10">We are experts in</h1>
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between lg:justify-center xl:justify-between items-center gap-10 text-5xl text-white backdrop-blur-lg p-14 lg:rounded-full rounded-md border-2 border-gray-500">
        <p className="hover:text-orange-300">ReactJS</p>
        <p className="hover:text-gray-200">NextJS</p>
        <p className="hover:text-green-300">MongoDB</p>
        <p className="hover:text-purple-300">Figma</p>
        <p className="hover:text-blue-300">WebFlow</p>
    </div>
    </div>
  );
};

export default HeroSection;
