import Image from "next/image";
import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import Link from "next/link";
import { siteInfo } from "@/constants";
import BookNow from "./BookNow";

const Hero = () => {
  return (
    <div className="hero top-0 w-full -z-10">
      <div className="relative  ">
        <div className="w-full h-[470px] md:h-[500px] lg:h-[550px] bg-gradient-to-tr from-emerald-500 via-teal-600 to-green-600"></div>
        <div className="absolute top-0 left-0  h-full w-full">
          <div className="position-center w-full grid grid-cols-1 lg:grid-cols-12 place-items-center lg:mt-12">
            <div className=" lg:col-span-7 !space-y-2 lg:space-y-4 text-gradient px-8 text-neutral-500 mt-24 md:mt-12 lg:mt-0 ">
              <div className="flex justify-center lg:justify-start">
                <span className="px-4 py-1 inline-block mb-2 rounded-full bg-primary-100/20 border border-primary-300 text-white text-sm font-thin">
                  <HiLightBulb className="inline text-amber-300 text-lg" /> 24/7
                  Car Repair Service
                </span>
              </div>

              <h1 className="!font-bold text-xl md:text-3xl lg:text-5xl text-center lg:text-start leading-tight  ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                  Best Car Repairing and Mechanic Servicing{" "}
                  <span className="text-white">in Dubai</span>
                </span>
              </h1>

              <p className=" hero-subtitle text-center lg:text-start text-sm md:text-base lg:text-lg font-light text-white">
                Expert repairs and rebuilds with honest pricing you can rely on.
              </p>

              <div className="space-y-4">
                <ButtonGroup />
                {/* <FeaturesSection /> */}
              </div>
            </div>
            <div className="lg:col-span-5">
              <Image
                src={"/images/others/hero-2.png"}
                height={400}
                width={500}
                alt="Hero Image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

export const ButtonGroup = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4  ">
      {/* Call Now Button */}
      <Link
        href={`tel:${siteInfo?.phone}`}
        className="flex items-center gap-1 md:gap-2 bg-[#FFB300] hover:bg-orange-500 text-white font-semibold py-2 px-3 lg:py-3 lg:px-6 rounded-lg transition-colors"
      >
        <HiPhone className="text-xs lg:text-xl" />
        <span className="text-xs lg:text-base">Call Now</span>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${(siteInfo?.phone).slice(1)}?text=${encodeURIComponent(siteInfo?.whatsappText)}`}
        className="flex items-center gap-1 md:gap-2 bg-[#2ECC71] hover:bg-green-600 text-white font-semibold py-2 px-3 lg:py-3 lg:px-6 rounded-lg transition-colors"
      >
        <FaWhatsapp className="text-xs lg:text-xl" />
        <span className="text-xs lg:text-base">WhatsApp</span>
      </Link>

      <BookNow />
    </div>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      title: "No Hidden Charge",
      icon: <HiOutlineCheckCircle className="text-3xl text-green-400" />,
      iconBg: "bg-green-500/20",
    },
    {
      title: "Quick Home Repairs",
      icon: <IoTimeOutline className="text-3xl text-blue-300" />,
      iconBg: "bg-blue-500/20",
    },
    {
      title: "Service Guarantee",
      icon: <HiOutlineShieldCheck className="text-3xl text-purple-400" />,
      iconBg: "bg-purple-500/20",
    },
  ];

  return (
    <div className="hidden lg:block max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/5 shadow-lg"
          >
            {/* Icon Container */}
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full mb-2 ${feature.iconBg}`}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-neutral-500 text-sm font-bold text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

FeaturesSection;
