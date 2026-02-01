"use client";
import AnimatedCounters from "@/components/animations/AnimatedCounters";
import Section from "@/components/partials/Section";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { BsGear } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { FaCar } from "react-icons/fa";

const Counters = () => {
  return (
    <>
      <div
        id="counters"
        className="bg-gradient-to-tr from-emerald-600 via-teal-600 to-green-600 py-12 mt-6 "
      >
        <div className="!w-[60%] lg:!w-[100%]   mx-auto">
          <Section
            className={
              "flex gap-6 flex-col lg:flex-row justify-between items-start lg:!w-[85%] "
            }
          >
            <div className="flex flex-col lg:flex-row flex-start text-white gap-2">
              <div className="flex lg:block">
                <div className="bg-primary-500/30 p-2 rounded ">
                  <BsGear className="text-5xl" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xl lg:text-2xl">Car Engine Replacement</p>
                <h2 className="text-5xl ">
                  <AnimatedCounters from={0} to={100} duration={3} /> +
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-start text-white gap-2">
              <div className="flex lg:block">
                <div className="bg-primary-500/30 p-2 rounded ">
                  <BsTools className="text-5xl" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xl lg:text-2xl">
                  Car Battery Repair & Service
                </p>
                <h2 className="text-5xl ">
                  {" "}
                  <AnimatedCounters from={0} to={500} duration={3} /> +
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-start text-white gap-2">
              <div className="flex lg:block">
                <div className="bg-primary-500/30 p-2 rounded ">
                  <FaCar className="text-5xl" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xl lg:text-2xl">Car Mechanic Service</p>
                <h2 className="text-5xl ">
                  <AnimatedCounters from={0} to={200} duration={3} /> +
                </h2>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default Counters;
