import { ButtonGroup } from "@/app/(client)/components/Hero";
import Image from "next/image";
import React from "react";

const PageBanner = ({ image, title, subTitle }) => {
  return (
    <div className="hero top-0 w-full -z-10">
      <div className="relative">
        {/* <Image
          src={image}
          alt={title}
          width={1440}
          height={400}
          className="w-full h-[220px] lg:h-[350px] object-cover"
        /> */}
        <div className="bg-gradient-to-tr from-emerald-500 via-teal-600 to-green-600 w-full h-[280px] lg:h-[350px]"></div>
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="position-center w-full grid grid-cols-1  place-items-center">
            <div className=" !space-y-2   py-5 px-8 mt-10! lg:mt-8! ">
              <h1 className=" font-bai-jamjuree text-white   hero-title text-xl md:text-2xl lg:text-4xl font-bold !text-center lg:text-start lg:leading-16   uppercase">
                {title}
              </h1>
              {subTitle && (
                <p className="text-white text-center text-sm lg:text-base">
                  {subTitle}
                </p>
              )}
              <div className="flex justify-center items-center md:!mt-4">
                <ButtonGroup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
