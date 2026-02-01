"use client";

import Section from "@/components/partials/Section";
import { siteInfo } from "@/constants";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import { TbPhoneCall } from "react-icons/tb";
const ContactTop = () => {
  return (
    <div className="bg-primary-500 lg:absolute top-0 left-0 w-full lg:-translate-y-1/2  text-white">
      <Section>
        <div className="grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-3 relative py-6 lg:py-10 place-items-center">
          <div>
            <h2 className="text-xl lg:text-2xl text-center lg:text-start">
              If you need service feel free get in touch{" "}
            </h2>
          </div>
          <div>
            <div className="lg:absolute bottom-0 left-1/2 lg:-translate-x-1/2 ">
              <Image
                src={
                  "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764526949/person-2_nxl2gg.png"
                }
                height={250}
                width={250}
                alt="Person"
              />
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="bg-[#ffffff80] p-2 rounded-full">
                <div className="w-[55px] h-[55px] rounded-full bg-white flex items-center justify-center">
                  <TbPhoneCall className="text-neutral-500 text-4xl animate-pulse" />
                </div>
              </div>
              <div>
                <h4 className="text-xl">We are available 24/7</h4>
                <h2 className="text-2xl">{siteInfo.phone}</h2>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactTop;
