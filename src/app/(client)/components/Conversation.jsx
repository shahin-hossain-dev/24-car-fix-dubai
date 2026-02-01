"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Tooltip } from "antd";
import gsap from "gsap";
import { siteInfo } from "@/constants";

const Conversation = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    tl.to(".vibrate", { rotate: 20, duration: 0.2 })
      .to(".vibrate", { rotate: -20, duration: 0.2 })
      .to(".vibrate", { rotate: 20, duration: 0.2 })
      .to(".vibrate", { rotate: -20, duration: 0.2 })
      .to(".vibrate", { rotate: 20, duration: 0.2 })
      .to(".vibrate", { rotate: 0, duration: 0.2 });

    return () => tl.kill(); // cleanup on unmount
  }, []);

  return (
    <section className="conversation-container fixed bottom-[10%] right-0 p-4 lg:p-8 z-50 space-y-3">
      <div>
        <Tooltip
          title={
            <span className=" font-normal text-lg text-white ">
              Text us now
            </span>
          }
          placement="left"
          color="#00c951"
        >
          <Link
            href={`https://wa.me/${(siteInfo?.phone).slice(1)}?text=${siteInfo?.whatsappText}`}
            className="block bg-green-500 tex p-2 rounded-full hover:scale-110  duration-300  cursor-pointer"
          >
            <FaWhatsapp className="vibrate text-4xl text-white  " />
          </Link>
        </Tooltip>
      </div>
      <div className="relative">
        <Tooltip
          title={<span className=" font-normal text-lg">Call Now</span>}
          placement="left"
          color="#00c951"
        >
          <Link
            href={`tel:${siteInfo?.phone}`}
            className="block   bg-green-500 p-2 rounded-full hover:scale-110  duration-300 cursor-pointer"
          >
            <FaPhoneAlt className="vibrate text-4xl text-white p-1" />
          </Link>
        </Tooltip>
      </div>
    </section>
  );
};

export default Conversation;
