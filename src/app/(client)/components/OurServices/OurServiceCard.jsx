import Image from "next/image";
import React from "react";
import { PiCarBattery } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Icon from "@/components/ui/Icon";
import { TiBatteryHigh } from "react-icons/ti";
import {
  TbBatteryAutomotive,
  TbBatteryCharging2,
  TbCircuitBattery,
  TbSteeringWheel,
} from "react-icons/tb";
import { BiSolidCarBattery } from "react-icons/bi";
import { MdAcUnit, MdOutlineElectricalServices } from "react-icons/md";
import { BsGear, BsTools } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";
import OurServiceHandler from "./OurServiceHandler";

const OurServiceCard = ({ service, index }) => {
  const icons = [
    PiCarBattery,
    TiBatteryHigh,
    TbCircuitBattery,
    TbBatteryAutomotive,
    TbBatteryCharging2,
    PiCarBattery,
    BiSolidCarBattery,
    BiSolidCarBattery,
    MdAcUnit,
    BiSolidCarBattery,
    BsGear,
    MdOutlineElectricalServices,
    PiCarBattery,
    FaCar,
    BsTools,
    TbSteeringWheel,
    IoCarSportOutline,
  ];

  return (
    <div className="hover:shadow-xl shadow-lg !space-y-1 flex flex-col justify-between  group/card border-1 border-neutral-500/30 hover:border-primary-500 hover:duration-200 rounded-xl !h-full">
      <div className="relative ">
        <div className="overflow-hidden rounded-t-xl">
          <Image
            src={service?.image?.url}
            alt={service?.image?.alt}
            height={200}
            width={400}
            className="w-full h-[180px] lg:h-[170px] object-cover rounded-t-xl group-hover/card:scale-105 delay-75 duration-200 "
          />
        </div>
        <div className="absolute flex items-end h-full top-0 left-0 rounded-t-xl w-full bg-gradient-to-t from-[#000000B3] to-[#00000000]">
          <div className="p-4 flex items-center gap-4">
            <div className="bg-primary-50 gap-4 p-1 rounded-lg">
              <Icon
                icon={
                  icons[index]
                    ? icons[index]
                    : icons[Math.round(Math.random(0) * 15 + 1)]
                }
                className="w-[40px] h-[40px] text-green-500"
              />
            </div>
            <h3 className="text-base lg:text-xl text-white font-semibold mt-2 mb-2">
              {service.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="p-4 flex flex-col gap-2">
          {service?.main?.includes?.slice(1, 5).map((item, idx) => (
            <div key={idx} className="flex gap-1  items-center">
              <IoMdCheckmarkCircleOutline className="shrink-0 text-primary-500 text-lg" />
              <span className="text-sm md:block text-neutral-500 ">{item}</span>
            </div>
          ))}
        </div>

        <OurServiceHandler service={service} />
      </div>
    </div>
  );
};

export default OurServiceCard;
