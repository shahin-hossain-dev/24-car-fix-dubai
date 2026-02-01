"use client";
import Section from "@/components/partials/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import OurServiceCard from "./OurServiceCard";
import Link from "next/link";
import { useState } from "react";
import { Button } from "antd";
import { PiCarBattery } from "react-icons/pi";
import { TiBatteryHigh } from "react-icons/ti";
import {
  TbBatteryAutomotive,
  TbBatteryCharging2,
  TbCircuitBattery,
  TbSteeringWheel,
} from "react-icons/tb";
import { BiSolidCarBattery } from "react-icons/bi";
import { MdAcUnit, MdOutlineElectricalServices } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsGear, BsTools } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";
import { IoCarSportOutline } from "react-icons/io5";

const OurService = ({ services }) => {
  const [allServices, setAllServices] = useState(services || []);
  const [number, setNumber] = useState(8);

  return (
    <Section id="our-service" className={"py-6 lg:py-8"}>
      <div className="  container mx-auto">
        <div>
          <SectionTitle>
            Our <span className="text-primary-500">Car Repair</span> Services
          </SectionTitle>
          <p></p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.slice(0, number).map((service, idx) => (
              <div key={idx}>
                {/* <Link
                  href={`/service-details/${service.slug}`}
                  className="block h-full cursor-pointer"
                > */}
                <OurServiceCard service={service} index={idx} />
                {/* </Link> */}
              </div>
            ))}
          </div>
          <div
            className={`flex items-center justify-center mt-4 lg:mt-6  ${
              number > 8 ? "hidden" : "block"
            }`}
          >
            <button
              onClick={() => setNumber(allServices.length)}
              className={`group/show flex items-center gap-2 rounded-xl duration-200  border border-primary-500 hover:!bg-primary-600 cursor-pointer hover:border-primary-500/30 !bg-primary-500 !text-white  !font-semibold text-base lg:!text-lg !px-4 !py-2`}
            >
              <span>Show All Services</span> <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurService;

export const services = [
  {
    id: 0,
    slug: "general-car-repair-dubai",
    title: "General Car Repair",
    description:
      "Minor & major services including underbody repair, mechanical repair, electrical repair, and other general repairs.",

    includes: [
      "Alternator Fixing",
      "Starter Motor Repair",
      "Window Motor Repair",
      "Mobile Car Mechanic",
    ],
    icon: PiCarBattery,
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764694571/general_car_repair_uu4cyd.webp",
  },
  {
    id: 1,
    slug: "car-battery-replacement-dubai",
    title: "Battery Replacement",
    includes: [
      "Old Battery Removal",
      "New Battery Installation",
      "Battery Terminal Cleaning & Tightening",
      "Charging System Check (Alternator & Voltage Test)",
    ],
    icon: PiCarBattery,
    description:
      "Minor & major services including underbody repair, mechanical repair, electrical repair, and other general repairs.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764188725/car-battery-replacement_sl5xyx.avif",
  },
  {
    id: 3,
    slug: "car-oil-change-service-dubai",
    title: "Oil Change Service",
    description:
      "Quick and efficient oil changes to keep your engine running smoothly and efficiently.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764694604/oil_change_dkgdrn.jpg",
    icon: PiCarBattery,
    includes: [
      "Engine Oil Replacement",
      "Oil Filter Change",
      "Fluid Level Inspection",
      "Full Engine Health Check",
    ],
  },
  {
    id: 2,
    slug: "car-battery-health-check-dubai",
    title: "Battery Health Check",
    includes: [
      "Battery Voltage Testing",
      "Load Test & Capacity Check",
      "Charging System Inspection",
      "Battery Condition Report",
    ],
    icon: TiBatteryHigh,
    description:
      "Comprehensive brake inspection, pad replacement, rotor resurfacing, and brake fluid replacement.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764192442/battery-health-check_fmnvac.avif",
  },
  {
    id: 3,
    slug: "battery-diagnostic-service-dubai",
    title: "Battery Diagnostic Service",
    includes: [
      "Complete Battery Performance Analysis",
      "Alternator & Starter Testing",
      "Battery Drain (Parasitic Draw) Check",
      "On-board System Scan for Battery-Related Errors",
    ],
    icon: TbCircuitBattery,
    description:
      "Quick and efficient oil changes to keep your engine running smoothly and efficiently.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764694837/battery-diagnosis-_d6qnbt.webp",
  },
  {
    id: 4,
    slug: "battery-terminal-cleaning-dubai",
    title: "Battery Terminal Cleaning",
    includes: [
      "Corrosion Removal from Battery Terminals",
      "Terminal Cleaning with Special Solutions",
      "Terminal Tightening & Securing",
      "Anti-Corrosion Spray Application",
    ],
    icon: TbBatteryAutomotive,
    description:
      "Shock absorber replacement, suspension tuning, and full suspension system checks.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695084/battery-terminal-cleaning_itihtj.webp",
  },
  {
    id: 5,

    slug: "battery-recycling-disposal-dubai",
    title: "Battery Recycling & Disposal",
    icon: TbBatteryCharging2,
    includes: [
      "Safe Removal of Old Battery",
      "Environment-Friendly Battery Disposal",
      "Recycling According to Local Regulations",
      "Documentation of Proper Disposal",
    ],
    description:
      "Automatic and manual transmission repair, oil changes, and performance checks.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695184/car-batter-disposal_uxms9z.webp",
  },
  {
    id: 6,
    slug: "car-battery-installation-dubai",
    includes: [
      "Professional Battery Fitting",
      "Mobile On-Site Installation",
      "Battery Terminals Setup",
      "System Voltage & Health Testing",
    ],
    title: "Car Battery Installation",
    icon: BiSolidCarBattery,
    description:
      "Tire replacement, balancing, alignment, and puncture repair for all vehicle types.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695319/Car-Battery-Installation_fb8f4q.webp",
  },
  {
    id: 7,
    slug: "hybrid-car-battery-service-dubai",
    includes: [
      "Hybrid Battery Diagnostic Check",
      "Cooling System Inspection",
      "Battery Module Balancing",
      "Hybrid Battery Installation & Fitting",
    ],
    title: "Hybrid Car Battery Service",
    description:
      "Fast battery testing, replacement, and charging system diagnostics.",
    icon: BiSolidCarBattery,
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695486/car-battery_dqhgyl.jpg",
  },
  {
    id: 8,
    slug: "car-ac-repair-service-dubai",
    title: "Car AC Repair & Service",
    includes: [
      "AC Cooling Performance Check",
      "Refrigerant Gas Refill",
      "AC Leak Detection & Fix",
      "Compressor & Fan Inspection",
    ],
    icon: MdAcUnit,

    description:
      "AC gas refilling, compressor repair, and full air conditioning diagnostics.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695685/ac_repair_mklb7t.webp",
  },
  {
    id: 9,
    slug: "premium-luxury-car-battery-service-dubai",
    title: "Premium/Luxury Car Battery Service",
    includes: [
      "High-Performance Battery Installation",
      "Advanced ECU & System Reset",
      "Premium Battery Health Diagnostic",
      "On-Site Service for Luxury Vehicles",
    ],

    icon: BiSolidCarBattery,
    description:
      "Accident repair, dent removal, and high-quality painting services.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695590/1036_qb8khu.webp",
  },
  {
    id: 10,
    title: "Car Engine Repair & Rebuild",
    slug: "car-engine-repair-rebuild-dubai",
    includes: [
      "Engine Diagnostic Check",
      "Engine Overhauling",
      "Cylinder Head Repair",
      "Piston & Ring Replacement",
    ],
    icon: BsGear,
    description:
      "Complete engine diagnostics, repairs, and full engine rebuild services.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695757/1030_rovvf9.webp",
  },
  {
    id: 11,
    title: "Electrical System Repair",
    slug: "car-electrical-repair-dubai",
    includes: [
      "Alternator Repair",
      "Starter Motor Repair",
      "Battery & Wiring Inspection",
      "Fuse and Relay Replacement",
    ],
    icon: MdOutlineElectricalServices,
    description:
      "Troubleshooting and repairing wiring, lighting, and electronic components.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764695831/1024_h5jkxa.webp",
  },
  {
    id: 12,
    slug: "car-inspection-computer-diagnostics-dubai",
    title: "Inspection / Computer Diagnostics",
    includes: [
      "Full System Scan",
      "OBD Error Code Diagnosis",
      "Engine Performance Check",
      "Electrical Fault Detection",
    ],
    icon: FaCar,
    description:
      "Advanced computer diagnostics and multi-point vehicle inspections.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764696182/1188_jsprgp.jpg",
  },
  {
    id: 13,
    slug: "car-auto-parts-dubai",
    title: "Auto Parts",
    includes: [
      "Genuine Car Batteries",
      "Alternators & Starter Motors",
      "Engine & Mechanical Parts",
      "Filters, Belts & Sensors",
    ],
    icon: BsTools,
    description:
      "High-quality auto parts for all makes and models with warranty support.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764696030/1037_gcfilh.webp",
  },
  {
    id: 14,
    slug: "car-steering-repair-service-dubai",
    title: "Steering Repair & Service",
    includes: [
      "Steering Wheel Adjustment",
      "Power Steering Pump Repair",
      "Rack and Pinion Service",
      "Steering Fluid Check & Refill",
    ],
    icon: TbSteeringWheel,
    description:
      "Steering system inspection, repair, and replacement for smooth driving.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764696344/car-steering-repair_a3z2lu.avif",
  },
  // {
  //   id: 15,
  //   slug: "car-windscreen-repair-dubai",
  //   title: "Auto Glass / Windscreen",
  //   description: "Windscreen repair, replacement, and tinting services.",
  //   image: "/images/icons/icon-15.png",
  // },
  // {
  //   id: 16,
  //   title: "Battery Service / Replacement",
  //   description:
  //     "Battery testing, replacement, and charging system inspection.",
  //   image: "/images/icons/icon-16.png",
  // },
  {
    id: 17,
    slug: "vehicle-modification-dubai",
    title: "Vehicle Modification",
    includes: [
      "Body Kit Installation",
      "Custom Lighting Setup",
      "Interior Upgrades",
      "Suspension Modification",
    ],
    icon: IoCarSportOutline,
    description:
      "Custom modifications for performance, style, and functionality.",
    image:
      "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764696534/car-modification_xryfld.avif",
  },
];
