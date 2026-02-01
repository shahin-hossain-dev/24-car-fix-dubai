"use client";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaPinterest } from "react-icons/fa6";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

import { AiFillInstagram } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { siteInfo } from "@/constants";
import { serviceAreas } from "@/data/areas";

const Footer = () => {
  const ourServices = [
    { slug: "general-car-repair-dubai", title: "General Repair" },
    {
      title: "Battery Replacement",
      slug: "battery-replacement",
    },
    { slug: "car-oil-change-dubai", title: "Oil Change Service" },
    {
      title: "Battery Health Check",
      slug: "battery-health-check",
    },
    {
      title: "Battery Diagnostic Service",
      slug: "battery-diagnostic-service",
    },
    {
      slug: "premium-luxury-car-battery-service-dubai",
      title: "Premium/Luxury Car Battery Service",
    },
    {
      title: "Battery Terminal Cleaning",
      slug: "battery-terminal-cleaning",
    },
    { title: "Engine Repair & Rebuild", slug: "car-engine-repair-dubai" },
    {
      title: "Battery Recycling & Disposal",
      slug: "battery-recycling-and-disposal",
    },
    { slug: "car-auto-parts-dubai", title: "Auto Parts" },
    { title: "Electrical System Repair", slug: "car-electrical-repair-dubai" },
    {
      title: "Car Battery Installation",
      slug: "car-battery-installation",
    },
    {
      slug: "car-computer-diagnostics-dubai",
      title: "Inspection / Computer Diagnostics",
    },
    { slug: "car-ac-repair-service-dubai", title: "Car AC Repair & Service" },
    {
      title: "Hybrid Car Battery Service",
      slug: "hybrid-car-battery-service",
    },
    {
      title: "Car AC Repair & Service",
      slug: "car-ac-repair-and-service",
    },
    {
      slug: "car-steering-repair-dubai",
      title: "Steering Repair & Service",
    },
    { slug: "car-modification-dubai", title: "Vehicle Modification" },
  ];

  return (
    <div>
      <footer
        className={
          "bg-[url(/images/others/bg-scoll2-1.webp)] bg-contain bg-no-repeat  bg-center relative "
        }
      >
        <div className="absolute inset-0 bg-black/60 "></div>
        <div className="footer-main z-10 relative">
          <aside className="space-y-4">
            <Image
              src={"/images/logo.webp"}
              width={250}
              height={50}
              alt="Car Repairs Services logo"
              className="w-[150px]"
            />
            <p className="footer-description font-light">
              Car Repairs Services Dubai. your trusted car battery repairing
              partner.
            </p>
            <div className="!space-y-4 mt-4 font-light">
              <h2 className="text-primary-500 font-bold text-xl">
                Call Any Time
              </h2>
              <Link
                href={`tel:${siteInfo.phone}`}
                className="flex text-2xl lg:text-4xl gap-2 items-center"
              >
                <span>
                  <FaPhoneAlt className="text-primary-500" />
                </span>
                <span className="text-white font-bold font-bai-jamjuree">
                  {siteInfo.phone}
                </span>
              </Link>
              <Link
                href={`mailto:${siteInfo.email}`}
                className="flex gap-2 items-center"
              >
                <span className="shrink-0">
                  <HiOutlineMail className="text-primary-500" />
                </span>
                <span className="text-white">{siteInfo.email}</span>
              </Link>
              <p className="flex gap-2 items-center">
                <span className="shrink-0">
                  <IoLocationSharp className="text-primary-500" />
                </span>
                <span className="text-white">{siteInfo.location}</span>
              </p>
            </div>
          </aside>

          <nav>
            <img src="/images/icons/stats-1.svg" className="" width={50} />
            <h6 className="footer-title">Services</h6>

            {ourServices
              ?.slice(0, Math.ceil(ourServices.length / 2))
              ?.map((service, idx) => (
                <span
                  key={idx}
                  // href={`service-details/${service.slug}`}
                  className="link"
                >
                  {service.title}
                </span>
              ))}
          </nav>
          <nav>
            <img src="/images/icons/stats-1.svg" width={50} />
            <h6 className="footer-title">Services Area</h6>
            {serviceAreas?.map((area, idx) => (
              <span
                key={idx}
                // href={`service-details/${service.slug}`}
                className="flex items-center gap-1 link"
              >
                <IoLocationSharp className="text-primary-500 text-xs shrink-0" />
                <span>{area}</span>
              </span>
            ))}
          </nav>
          <nav>
            <img src="/images/icons/stats-1.svg" width={50} />
            <h6 className="footer-title">Company</h6>
            <Link href="/about-us" className="link">
              About
            </Link>
            <Link href="/contact-us" className="link">
              Contact
            </Link>
            <Link href="/" className="link">
              Terms of use
            </Link>
            <Link href="/" className="link">
              Privacy policy
            </Link>
          </nav>
          <div className="space-y-4">
            <img src="/images/icons/stats-1.svg" width={50} />
            <h6 className="footer-title ">Social </h6>

            <div className="mt-4">
              <div className="social-items flex items-center flex-wrap gap-3 lg:gap-4">
                <span
                  // href="https://www.facebook.com/"
                  className="link  bg-sky-500 "
                >
                  <FaFacebookF className="text-xl lg:text-2xl" />
                </span>
                <Link
                  href={`https://wa.me/${siteInfo?.phone}?text=${siteInfo?.whatsappText}`}
                  className="link bg-green-500"
                >
                  <FaWhatsapp className="text-xl lg:text-2xl" />
                </Link>
                <Link href="/" className="link bg-[#e23167]">
                  <LuInstagram className="text-xl lg:text-2xl" />
                </Link>
                {/* <Link
                  href="https://www.pinterest.com/"
                  className="link bg-[#e60023]"
                >
                  <FaPinterest className="text-xl lg:text-2xl" />
                </Link>
                
                <Link href="https://x.com/" className="link bg-neutral-500">
                  <BsTwitterX className="text-xl lg:text-2xl" />
                </Link>
                <Link
                  href="https://www.youtube.com/"
                  className="link bg-[#ed0000]"
                >
                  <RiYoutubeLine className="text-xl lg:text-2xl" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="text-primary-500 relative z-10" />
        <div className="footer-bottom relative z-10 text-white text-center pt-4 pb-12 lg:py-4 font-light">
          <small>
            <span className="text-xs">
              &copy; {new Date().getFullYear()} {siteInfo?.siteName} All Rights
              Reserved.{" "}
              <Link
                className="text-primary-500"
                target="_blank"
                href={"https://shahin-hossain-portfolio.vercel.app"}
              >
                Developer
              </Link>
            </span>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
