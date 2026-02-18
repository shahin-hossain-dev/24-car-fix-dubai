"use client";
import { navMenus, siteInfo } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import { ScrollTrigger } from "gsap/all";
import Booking from "./Booking";
import useModalController from "@/context/useModalController";
import MobileNav from "./MobileNav";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const { showModal, isModalOpen, handleCancel } = useModalController();
  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const viewport = window?.visualViewport?.pageTop;

      const bottomNav = document.getElementById("bottom-nav");

      if (viewport > 100) {
        bottomNav.classList.add(
          "fixed",
          "duration-200",
          "translate-y-0",
          "!bg-[#ffffffCC]",
        );
      } else {
        bottomNav.classList.remove("fixed", "!bg-[#ffffffCC]");
      }
    });
  }, []);

  // useGSAP(() => {
  //   gsap.from("#bottom-nav img", {
  //     x: -200,
  //     opacity: 0,
  //     ease: "expo.inOut",
  //     duration: 1,
  //   });
  // }, []);

  return (
    <nav className="nav-container absolute top-0 left-0 w-full z-50 ">
      <div className="top-nav  bg-gradient-to-r from-yellow-300 to-yellow-400">
        <Link
          href={`tel:${siteInfo.phone}`}
          className="flex gap-2 items-center "
        >
          <FaPhoneFlip className="text-neutral-500" />{" "}
          <span className="text-neutral-500 font-normal">{siteInfo.phone}</span>
        </Link>

        <div className="flex gap-4 items-center">
          <Link
            href={`mailto:${siteInfo.email}`}
            className="flex gap-2 items-center"
          >
            <HiOutlineMail className="text-neutral-500 text-xl" />{" "}
            <span className="text-neutral-500 font-normal">
              {siteInfo.email}
            </span>
          </Link>
          <div className="flex gap-2 items-center  py-1 px-4 rounded-full ">
            <FaLocationDot className="" />{" "}
            <span className="text-neutral-500 font-normal">
              {siteInfo.location}
            </span>
          </div>
        </div>
      </div>
      <div className="bottom-nav ">
        <div id="bottom-nav" className="bottom-nav-body bg-[#ffffffcc]">
          <Link href={"/"}>
            <Image
              src={"/images/logo.webp"}
              alt="Logo"
              width={150}
              height={50}
              className="w-[70px] lg:w-[90px]"
            />
          </Link>

          <div className="nav-menus-container hidden lg:flex items-center">
            <ul className="flex-center gap-4  ">
              {navMenus?.map((menu, idx) => (
                <div key={idx} className="relative">
                  <li className="nav-menu group/menu hover:text-primary-500  truncate cursor-pointer flex gap-1 items-center">
                    <Link
                      href={menu?.href || "/"}
                      className={` text-sm ${
                        pathname === menu?.href
                          ? "text-primary-500 font-semibold"
                          : ""
                      }`}
                    >
                      <span className="uppercase">{menu.label}</span>
                    </Link>
                    {menu?.children?.length > 0 && (
                      <span className="">
                        <IoIosArrowDown />
                      </span>
                    )}
                    {menu?.children?.length > 0 && (
                      <ul className="nav-sub-menus group-hover/menu:opacity-100 invisible group-hover/menu:visible  duration-200 group-hover/menu:translate-y-0  translate-y-4  opacity-10 absolute top-4 h-full -left-1/2 z-50   p-4 ">
                        {menu?.children.map((item, idx) => (
                          <li
                            key={idx}
                            className="nav-sub-menus text-neutral-500 first:rounded-t  last:rounded-b last:border-0 border-b border-neutral-100/20 px-8 py-2 bg-neutral-500 duration-200 hover:bg-primary-500 hover:text-neutral-500"
                          >
                            <Link
                              href={`/service-details/${item?.href}` || "/"}
                            >
                              {item?.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* <div className="w-[130px] h-[40px] lg:w-[145px] lg:h-[55px] bg-primary-500/50 absolute top-1/2 left-1/2 -translate-1/2 -z-10 rounded-3xl animate-pulse"></div> */}
              <button
                onClick={showModal}
                className=" cursor-pointer  bg-gradient-to-r from-yellow-300 to-amber-400 !text-neutral-500 flex-center roboto-serif gap-2 rounded-3xl px-3 py-1 md:px-4 md:py-2 "
              >
                <FaCalendarCheck />
                <span className="text-sm md:text-base font-bai-jamjuree uppercase">
                  Book Now
                </span>
              </button>
            </div>
            <MobileNav navMenus={navMenus} />
          </div>
        </div>
      </div>
      <Booking isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </nav>
  );
};

export default Navbar;
