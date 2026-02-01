import Link from "next/link";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";
import { PiUserCheck } from "react-icons/pi";

export const navMenus = [
  { key: 0, label: "Home", href: "/" },

  {
    key: 3,
    label: "Brands",
    href: "/brands",
    // children: [
    //   { key: 31, label: "Brand A", href: "/brands/a" },
    //   { key: 32, label: "Brand B", href: "/brands/b" },
    //   { key: 33, label: "Brand C", href: "/brands/c" },
    // ],
  },
  {
    key: 4,
    label: "Services",
    href: "/services",
    // children: [
    //   {
    //     key: 51,
    //     label: "General Car Repair",
    //     href: "general-car-repair-dubai",
    //   },
    //   {
    //     key: 52,
    //     label: "Battery Replacement",
    //     href: "car-battery-replacement-dubai",
    //   },
    //   {
    //     key: 53,
    //     label: "Oil Change Service",
    //     href: "car-oil-change-service-dubai",
    //   },
    //   {
    //     key: 54,
    //     label: "Battery Health Check",
    //     href: "car-battery-health-check-dubai",
    //   },
    //   {
    //     key: 55,
    //     label: "Battery Diagnostic Service",
    //     href: "battery-diagnostic-service-dubai",
    //   },
    //   {
    //     key: 56,
    //     label: "Battery Terminal Cleaning",
    //     href: "battery-terminal-cleaning-dubai",
    //   },
    //   {
    //     key: 57,
    //     label: "Battery Recycling & Disposal",
    //     href: "battery-recycling-disposal-dubai",
    //   },
    //   {
    //     key: 58,
    //     label: "Car Battery Installation",
    //     href: "car-battery-installation-dubai",
    //   },
    //   {
    //     key: 59,
    //     label: "Hybrid Car Battery Service",
    //     href: "hybrid-car-battery-service-dubai",
    //   },
    //   {
    //     key: 60,
    //     label: "Car AC Repair & Service",
    //     href: "car-ac-repair-service-dubai",
    //   },
    //   {
    //     key: 61,
    //     label: "Premium/Luxury Car Battery Service",
    //     href: "premium-luxury-car-battery-service-dubai",
    //   },
    //   {
    //     key: 62,
    //     label: "Car Engine Repair & Rebuild",
    //     href: "car-engine-repair-rebuild-dubai",
    //   },
    //   {
    //     key: 63,
    //     label: "Electrical System Repair",
    //     href: "car-electrical-repair-dubai",
    //   },
    //   {
    //     key: 64,
    //     label: "Inspection / Computer Diagnostics",
    //     href: "car-inspection-computer-diagnostics-dubai",
    //   },
    //   { key: 65, label: "Auto Parts", href: "car-auto-parts-dubai" },
    //   {
    //     key: 66,
    //     label: "Steering Repair & Service",
    //     href: "car-steering-repair-service-dubai",
    //   },
    //   {
    //     key: 67,
    //     label: "Vehicle Modification",
    //     href: "vehicle-modification-dubai",
    //   },
    // ],
  },
  // {
  //   key: 5,
  //   label: "Packages",
  //   children: [
  //     { key: 51, label: "Major Repair", href: "#major-minor" },
  //     { key: 52, label: "Minor Repair", href: "#major-minor" },
  //   ],
  // },
  { key: 6, label: "Contact Us", href: "/contact-us" },
  { key: 1, label: "About Us", href: "/about-us" },
  { key: 7, label: "Blogs", href: "/blogs" },
];

export const mobileNavMenus = [
  {
    key: "0",
    label: <Link href="/">Home</Link>,
  },
  { key: "1", label: <Link href="/about-us">About</Link> },
  // { key: "2", label: <Link href="/offers">Offers</Link> },
  // {
  //   key: "3",
  //   label: "Brands",
  //   children: [
  //     { key: "31", label: <Link href="/brands/a">Brand A</Link> },
  //     { key: "32", label: <Link href="/brands/b">Brand B</Link> },
  //     { key: "33", label: <Link href="/brands/c">Brand C</Link> },
  //   ],
  // },
  // { key: "4", label: <Link href="/services">Services</Link> },
  {
    key: "5",
    label: "Services",
    // children: [
    //   {
    //     key: "51",
    //     label: <Link href="general-car-repair-dubai">General Car Repair</Link>,
    //   },
    //   {
    //     key: "52",
    //     label: (
    //       <Link href="car-battery-replacement-dubai">Battery Replacement</Link>
    //     ),
    //   },
    //   {
    //     key: "53",
    //     label: (
    //       <Link href="car-oil-change-service-dubai">Oil Change Service</Link>
    //     ),
    //   },
    //   {
    //     key: "54",
    //     label: (
    //       <Link href="car-battery-health-check-dubai">
    //         Battery Health Check
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "55",
    //     label: (
    //       <Link href="battery-diagnostic-service-dubai">
    //         Battery Diagnostic Service
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "56",
    //     label: (
    //       <Link href="battery-terminal-cleaning-dubai">
    //         Battery Terminal Cleaning
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "57",
    //     label: (
    //       <Link href="battery-recycling-disposal-dubai">
    //         Battery Recycling & Disposal
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "58",
    //     label: (
    //       <Link href="car-battery-installation-dubai">
    //         Car Battery Installation
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "59",
    //     label: (
    //       <Link href="hybrid-car-battery-service-dubai">
    //         Hybrid Car Battery Service
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "60",
    //     label: (
    //       <Link href="car-ac-repair-service-dubai">
    //         Car AC Repair & Service
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "61",
    //     label: (
    //       <Link href="premium-luxury-car-battery-service-dubai">
    //         Premium/Luxury Car Battery Service
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "62",
    //     label: (
    //       <Link href="car-engine-repair-rebuild-dubai">
    //         Car Engine Repair & Rebuild
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "63",
    //     label: (
    //       <Link href="car-electrical-repair-dubai">
    //         Electrical System Repair
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "64",
    //     label: (
    //       <Link href="car-inspection-computer-diagnostics-dubai">
    //         Inspection / Computer Diagnostics
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "65",
    //     label: <Link href="car-auto-parts-dubai">Auto Parts</Link>,
    //   },
    //   {
    //     key: "66",
    //     label: (
    //       <Link href="car-steering-repair-service-dubai">
    //         Steering Repair & Service
    //       </Link>
    //     ),
    //   },
    //   {
    //     key: "67",
    //     label: (
    //       <Link href="vehicle-modification-dubai">Vehicle Modification</Link>
    //     ),
    //   },
    // ],
  },
  { key: "6", label: <Link href="/contact-us">Contact Us</Link> },
  { key: "7", label: <Link href="/blogs">Blogs</Link> },
];

export const services = [
  {
    id: 1,
    title: "General Repair",
    description:
      "Minor & major services including underbody repair, mechanical repair, electrical repair, and other general repairs.",
    image: "/images/icons/icon-1.png",
  },
  {
    id: 2,
    title: "Brakes Service",
    description:
      "Comprehensive brake inspection, pad replacement, rotor resurfacing, and brake fluid replacement.",
    image: "/images/icons/icon-2.png",
  },
  {
    id: 3,
    title: "Oil Change Service",
    description:
      "Quick and efficient oil changes to keep your engine running smoothly and efficiently.",
    image: "/images/icons/icon-3.png",
  },
  {
    id: 4,
    title: "Suspension Service",
    description:
      "Shock absorber replacement, suspension tuning, and full suspension system checks.",
    image: "/images/icons/icon-4.png",
  },
  {
    id: 5,
    title: "Gearbox/ Transmission Service",
    description:
      "Automatic and manual transmission repair, oil changes, and performance checks.",
    image: "/images/icons/icon-5.png",
  },
  {
    id: 6,
    title: "Tire Services",
    description:
      "Tire replacement, balancing, alignment, and puncture repair for all vehicle types.",
    image: "/images/icons/icon-6.png",
  },
  {
    id: 7,
    title: "Battery Replacement",
    description:
      "Fast battery testing, replacement, and charging system diagnostics.",
    image: "/images/icons/icon-7.png",
  },
  {
    id: 8,
    title: "AC Repair & Service",
    description:
      "AC gas refilling, compressor repair, and full air conditioning diagnostics.",
    image: "/images/icons/icon-8.png",
  },
  {
    id: 9,
    title: "Body Repair & Painting",
    description:
      "Accident repair, dent removal, and high-quality painting services.",
    image: "/images/icons/icon-9.png",
  },
  {
    id: 10,
    title: "Engine Repair & Rebuild",
    description:
      "Complete engine diagnostics, repairs, and full engine rebuild services.",
    image: "/images/icons/icon-10.png",
  },
  {
    id: 11,
    title: "Electrical System Repair",
    description:
      "Troubleshooting and repairing wiring, lighting, and electronic components.",
    image: "/images/icons/icon-11.png",
  },
  {
    id: 12,
    title: "Inspection / Computer Diagnostics",
    description:
      "Advanced computer diagnostics and multi-point vehicle inspections.",
    image: "/images/icons/icon-12.png",
  },
  {
    id: 13,
    title: "Auto Parts",
    description:
      "High-quality auto parts for all makes and models with warranty support.",
    image: "/images/icons/icon-13.png",
  },
  {
    id: 14,
    title: "Steering Repair & Service",
    description:
      "Steering system inspection, repair, and replacement for smooth driving.",
    image: "/images/icons/icon-14.png",
  },
  {
    id: 15,
    title: "Auto Glass / Windscreen",
    description: "Windscreen repair, replacement, and tinting services.",
    image: "/images/icons/icon-15.png",
  },
  // {
  //   id: 16,
  //   title: "Battery Service / Replacement",
  //   description:
  //     "Battery testing, replacement, and charging system inspection.",
  //   image: "/images/icons/icon-16.png",
  // },
  {
    id: 17,
    title: "Vehicle Modification",
    description:
      "Custom modifications for performance, style, and functionality.",
    image: "/images/icons/icon-17.png",
  },
];

export const brandsItems = [
  {
    id: 1,
    name: "BUGATTI",
    image: "/images/brands/brand-1.png",
    origin: "French",
  },
  {
    id: 2,
    name: "ROLLS ROYCE",
    image: "/images/brands/brand-2.png",
    origin: "British",
  },
  {
    id: 3,
    name: "ALFA ROMEO",
    image: "/images/brands/brand-3.png",
    origin: "Other",
  },
  {
    id: 4,
    name: "BENTLEY",
    image: "/images/brands/brand-4.png",
    origin: "British",
  },
  {
    id: 5,
    name: "LAMBORGHINI",
    image: "/images/brands/brand-5.png",
    origin: "Other",
  },
  {
    id: 6,
    name: "PORCHE",
    image: "/images/brands/brand-6.png",
    origin: "German",
  },
  {
    id: 7,
    name: "FERRARI",
    image: "/images/brands/brand-7.png",
    origin: "Other",
  },
  {
    id: 8,
    name: "LAND ROVER",
    image: "/images/brands/brand-8.png",
    origin: "British",
  },
  {
    id: 9,
    name: "CADILLAC",
    image: "/images/brands/brand-9.png",
    origin: "American",
  },
  {
    id: 10,
    name: "MASERATI",
    image: "/images/brands/brand-10.png",
    origin: "Other",
  },
  {
    id: 11,
    name: "MCLAREN",
    image: "/images/brands/brand-11.png",
    origin: "British",
  },
  {
    id: 12,
    name: "NISSAN",
    image: "/images/brands/brand-12.png",
    origin: "Japanese",
  },
  {
    id: 13,
    name: "HYUNDAI",
    image: "/images/brands/brand-13.png",
    origin: "Other",
  },
  {
    id: 14,
    name: "TOYOTA",
    image: "/images/brands/brand-14.png",
    origin: "American",
  },
  {
    id: 15,
    name: "Ford",
    image: "/images/brands/brand-15.png",
    origin: "Other",
  },
  // {
  //   id: 16,
  //   name: "W MOTORS",
  //   image: "/images/brands/brand-16.jpg",
  //   origin: "Other",
  // },
  {
    id: 17,
    name: "W MOTORS",
    image: "/images/brands/brand-17.png",
    origin: "British",
  },
  {
    id: 18,
    name: "LOTUS",
    image: "/images/brands/brand-18.png",
    origin: "British",
  },
  {
    id: 19,
    name: "TESLA",
    image: "/images/brands/brand-19.png",
    origin: "American",
  },
  {
    id: 20,
    name: "ASTON MARTIN",
    image: "/images/brands/brand-20.png",
    origin: "British",
  },
  {
    id: 21,
    name: "MERCEDES",
    image: "/images/brands/brand-21.png",
    origin: "German",
  },
  {
    id: 22,
    name: "BMW",
    image: "/images/brands/brand-22.png",
    origin: "German",
  },
  {
    id: 23,
    name: "FIAT",
    image: "/images/brands/brand-23.png",
    origin: "Other",
  },
  {
    id: 24,
    name: "VOLVO",
    image: "/images/brands/brand-24.png",
    origin: "Other",
  },
  {
    id: 25,
    name: "ACURA",
    image: "/images/brands/brand-25.jpg",
    origin: "Japanese",
  },
  {
    id: 26,
    name: "LINCOLN",
    image: "/images/brands/brand-26.png",
    origin: "American",
  },
  {
    id: 27,
    name: "CHEVROLET",
    image: "/images/brands/brand-27.png",
    origin: "American",
  },
  {
    id: 28,
    name: "GMC",
    image: "/images/brands/brand-28.png",
    origin: "American",
  },
  {
    id: 29,
    name: "PEUGEOT",
    image: "/images/brands/brand-29.png",
    origin: "French",
  },
  {
    id: 30,
    name: "OPEL",
    image: "/images/brands/brand-30.png",
    origin: "German",
  },
  {
    id: 31,
    name: "SEAT",
    image: "/images/brands/brand-31.png",
    origin: "Other",
  },
  {
    id: 32,
    name: "PAGANI",
    image: "/images/brands/brand-32.png",
    origin: "Other",
  },
  {
    id: 33,
    name: "SKODA",
    image: "/images/brands/brand-33.png",
    origin: "Other",
  },
  {
    id: 34,
    name: "SUBARU",
    image: "/images/brands/brand-34.png",
    origin: "Japanese",
  },
  {
    id: 35,
    name: "DAIHATSU",
    image: "/images/brands/brand-35.png",
    origin: "Japanese",
  },
  {
    id: 36,
    name: "LEXUS",
    image: "/images/brands/brand-36.png",
    origin: "Japanese",
  },
  {
    id: 37,
    name: "JEEP",
    image: "/images/brands/brand-37.png",
    origin: "American",
  },
  {
    id: 38,
    name: "JAGUAR",
    image: "/images/brands/brand-38.png",
    origin: "British",
  },
  {
    id: 39,
    name: "MINI COOPER",
    image: "/images/brands/brand-39.png",
    origin: "British",
  },
  {
    id: 40,
    name: "HONDA",
    image: "/images/brands/brand-40.png",
    origin: "Japanese",
  },
  {
    id: 41,
    name: "RENAULT",
    image: "/images/brands/brand-41.png",
    origin: "French",
  },
  {
    id: 42,
    name: "MITSUBISHI",
    image: "/images/brands/brand-42.png",
    origin: "Japanese",
  },
  {
    id: 43,
    name: "DODGE",
    image: "/images/brands/brand-43.png",
    origin: "American",
  },
  {
    id: 44,
    name: "INFINITI",
    image: "/images/brands/brand-44.png",
    origin: "Japanese",
  },
  {
    id: 45,
    name: "KIA",
    image: "/images/brands/brand-45.png",
    origin: "Other",
  },
];

export const brands = [
  {
    id: 1,
    origin: "American",
    brands: [
      { name: "CADILLAC", image: "/images/brands/brand-9.png" },
      { name: "TOYOTA", image: "/images/brands/brand-14.png" },
      { name: "TESLA", image: "/images/brands/brand-20.png" },
      { name: "LINCOLN", image: "/images/brands/brand-27.png" },
      { name: "CHEVROLET", image: "/images/brands/brand-28.png" },
      { name: "GMC", image: "/images/brands/brand-29.png" },
      { name: "JEEP", image: "/images/brands/brand-38.png" },
      { name: "DODGE", image: "/images/brands/brand-44.png" },
    ],
  },
  {
    id: 2,
    origin: "German",
    brands: [
      { name: "PORCHE", image: "/images/brands/brand-6.png" },
      { name: "MERCEDES", image: "/images/brands/brand-22.png" },
      { name: "BMW", image: "/images/brands/brand-23.png" },
      { name: "OPEL", image: "/images/brands/brand-31.png" },
    ],
  },
  {
    id: 3,
    origin: "Japanese",
    brands: [
      { name: "NISSAN", image: "/images/brands/brand-12.png" },
      { name: "ACURA", image: "/images/brands/brand-26.png" },
      { name: "SUBARU", image: "/images/brands/brand-35.png" },
      { name: "DAIHATSU", image: "/images/brands/brand-36.png" },
      { name: "LEXUS", image: "/images/brands/brand-37.png" },
      { name: "HONDA", image: "/images/brands/brand-41.png" },
      { name: "MITSUBISHI", image: "/images/brands/brand-43.png" },
      { name: "INFINITI", image: "/images/brands/brand-45.png" },
    ],
  },
  {
    id: 4,
    origin: "British",
    brands: [
      { name: "ROLLS ROYCE", image: "/images/brands/brand-2.png" },
      { name: "BENTLEY", image: "/images/brands/brand-4.png" },
      { name: "LAND ROVER", image: "/images/brands/brand-8.png" },
      { name: "MCLAREN", image: "/images/brands/brand-11.png" },
      { name: "MG", image: "/images/brands/brand-18.png" },
      { name: "LOTUS", image: "/images/brands/brand-19.png" },
      { name: "ASTON MARTIN", image: "/images/brands/brand-21.png" },
      { name: "JAGUAR", image: "/images/brands/brand-39.png" },
      { name: "MINI COOPER", image: "/images/brands/brand-40.png" },
    ],
  },
  {
    id: 5,
    origin: "French",
    brands: [
      { name: "BUGATTI", image: "/images/brands/brand-1.png" },
      { name: "PEUGEOT", image: "/images/brands/brand-30.png" },
      { name: "RENAULT", image: "/images/brands/brand-42.png" },
    ],
  },
  {
    id: 6,
    origin: "Other",
    brands: [
      { name: "ALFA ROMEO", image: "/images/brands/brand-3.png" },
      { name: "LAMBORGHINI", image: "/images/brands/brand-5.png" },
      { name: "FERRARI", image: "/images/brands/brand-7.png" },
      { name: "MASERATI", image: "/images/brands/brand-10.png" },
      { name: "HYUNDAI", image: "/images/brands/brand-13.png" },
      { name: "Ford", image: "/images/brands/brand-15.png" },
      { name: "W MOTORS", image: "/images/brands/brand-17.png" },
      { name: "FIAT", image: "/images/brands/brand-24.png" },
      { name: "VOLVO", image: "/images/brands/brand-25.jpg" },
      { name: "SEAT", image: "/images/brands/brand-32.png" },
      { name: "PAGANI", image: "/images/brands/brand-33.png" },
      { name: "SKODA", image: "/images/brands/brand-34.png" },
      { name: "KIA", image: "/images/brands/brand-16.jpg" },
    ],
  },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Expert Technicians",
    description:
      "Our certified and experienced mechanics ensure every repair is done with precision and care.",
    image: (
      <div className="bg-green-500/10 w-[60px] h-[60px] rounded-xl flex items-center justify-center">
        <LuBadgeCheck className="text-green-500 group-hover/card:scale-110 duration-300 text-2xl" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Quality Service",
    description:
      "We use advanced tools and genuine parts to deliver reliable repairs you can trust.",
    image: (
      <div className="bg-pink-500/10 w-[60px] h-[60px] rounded-xl flex items-center justify-center">
        <IoShieldCheckmarkOutline className="text-pink-500 group-hover/card:scale-110 duration-300 text-2xl" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Fast & Efficient",
    description:
      "Get back on the road quickly with our streamlined repair process and timely service.",
    image: (
      <div className="bg-primary-500/10 w-[60px] h-[60px] rounded-xl flex items-center justify-center">
        <MdSpeed className="text-primary-500 group-hover/card:scale-110 duration-300 text-2xl" />
      </div>
    ),
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description:
      "We prioritize your comfort with transparent pricing, friendly staff, and a smooth experience.",
    image: (
      <div className="bg-blue-500/10 w-[60px] h-[60px] rounded-xl flex items-center justify-center">
        <PiUserCheck className="text-blue-500 group-hover/card:scale-110 duration-300 text-2xl" />
      </div>
    ),
  },
];

export const serviceDetails = [
  {
    id: 1,
    title: "General Repair",
    description:
      "Minor & major services including underbody repair, mechanical repair, electrical repair, and other general repairs.",
    details: {
      included_services: [
        "Minor Service",
        "Major Service",
        "Fleet Maintenance",
      ],
      scope:
        "Comprehensive mechanical and electrical diagnostics and repair across vehicle systems.",
    },
    image: "/images/icons/icon-1.png",
  },
  {
    id: 2,
    title: "Brakes Service",
    description:
      "Comprehensive brake inspection, pad replacement, rotor resurfacing, and brake fluid replacement.",
    details: {
      includes: [
        "Brake system inspection",
        "Brake pad and disc check",
        "Brake fluid inspection and top‑up",
      ],
    },
    image: "/images/icons/icon-2.png",
  },
  {
    id: 3,
    title: "Oil Change Service",
    description:
      "Quick and efficient oil changes to keep your engine running smoothly and efficiently.",
    details: {
      includes: [
        "Engine oil change",
        "Oil filter replacement",
        "Comprehensive fluid checks (coolant, transmission, brake, power steering, windshield washer)",
      ],
    },
    image: "/images/icons/icon-3.png",
  },
  {
    id: 4,
    title: "Suspension Service",
    description:
      "Shock absorber replacement, suspension tuning, and full suspension system checks.",
    details: {
      type: "Suspension Repair",
      scope:
        "Inspection and repair of suspension components to restore ride comfort and vehicle control.",
    },
    image: "/images/icons/icon-4.png",
  },
  {
    id: 5,
    title: "Gearbox/ Transmission Service",
    description:
      "Automatic and manual transmission repair, oil changes, and performance checks.",
    details: {
      type: "Transmission Repair",
      scope: "Comprehensive gearbox diagnostics, repair, and fluid checks.",
    },
    image: "/images/icons/icon-5.png",
  },
  {
    id: 6,
    title: "Tire Services",
    description:
      "Tire replacement, balancing, alignment, and puncture repair for all vehicle types.",
    details: {
      includes: [
        "Tire inspection",
        "Pressure adjustment",
        "Wheel alignment (including touchless)",
      ],
    },
    image: "/images/icons/icon-6.png",
  },
  {
    id: 7,
    title: "Battery Replacement",
    description:
      "Fast battery testing, replacement, and charging system diagnostics.",
    details: {
      includes: [
        "Battery health check",
        "Battery replacement",
        "Charging system inspection",
      ],
    },
    image: "/images/icons/icon-7.png",
  },
  {
    id: 8,
    title: "AC Repair & Service",
    description:
      "AC gas refilling, compressor repair, and full air conditioning diagnostics.",
    details: {
      includes: [
        "Refrigerant level check & refill",
        "Leak detection",
        "System cleaning",
        "Compressor and evaporator diagnostics",
        "Cooling performance testing",
      ],
      symptoms_addressed: [
        "Warm air output",
        "Unusual noise or odor",
        "AC compressor failure",
        "Gas leakage",
      ],
    },
    image: "/images/icons/icon-8.png",
  },
  {
    id: 9,
    title: "Body Repair & Painting",
    description:
      "Accident repair, dent removal, and high-quality painting services.",
    details: {
      includes: [
        "Full body repair & restoration",
        "Paintless dent repair (PDR)",
        "Scratch & paint correction",
        "Custom painting & refinishing",
        "Bumper repair/replacement",
        "Alloy wheel refurbishment",
        "Ceramic coating & Paint Protection Film",
        "Headlight/light restoration",
      ],
    },
    image: "/images/icons/icon-9.png",
  },
  {
    id: 10,
    title: "Engine Repair & Rebuild",
    description:
      "Complete engine diagnostics, repairs, and full engine rebuild services.",
    details: {
      services_offered: [
        "Engine Management System repair",
        "Engine Control Unit (ECU) repair",
        "Engine Cooling System repair",
      ],
      components_addressed: [
        "Sensors, relays, actuators",
        "ECU diagnostics",
        "Cooling system – radiator, thermostat, water pump, hoses",
        "Cylinder head, pistons, head gaskets",
        "Spark plugs, injectors",
        "Timing belt/chain inspection",
        "Oil leak fixes",
        "Engine overheating resolution",
        "Engine refurbishment/rebuilds for luxury SUVs (e.g. Range Rover)",
      ],
      symptoms_addressed: [
        "Check Engine light",
        "Overheating",
        "Stalling or misfiring",
        "Loss of power",
        "Starting issues",
        "Poor fuel economy",
      ],
    },
    image: "/images/icons/icon-10.png",
  },
  {
    id: 11,
    title: "Electrical System Repair",
    description:
      "Troubleshooting and repairing wiring, lighting, and electronic components.",
    details: {
      includes: [
        "Comfort system repair",
        "Software repair & programming",
        "Camera/radar calibration",
        "Electrical diagnostics",
      ],
    },
    image: "/images/icons/icon-11.png",
  },
  {
    id: 12,
    title: "Inspection / Computer Diagnostics",
    description:
      "Advanced computer diagnostics and multi-point vehicle inspections.",
    details: {
      includes: [
        "Pre‑purchase inspection (full checklist including engine, electronics, body, suspension, fluids, etc.)",
        "Multi‑point inspection during minor and major service",
        "Stop & Go quick check service",
      ],
    },
    image: "/images/icons/icon-12.png",
  },
  {
    id: 13,
    title: "Auto Parts",
    description:
      "High-quality auto parts for all makes and models with warranty support.",
    details: {
      features:
        "OEM parts available; backed with warranty; wide parts inventory",
    },
    image: "/images/icons/icon-13.png",
  },
  {
    id: 14,
    title: "Steering Repair & Service",
    description:
      "Steering system inspection, repair, and replacement for smooth driving.",
    details: {
      includes: [
        "Steering system inspection",
        "Repair and replacement services",
      ],
    },
    image: "/images/icons/icon-14.png",
  },
  {
    id: 15,
    title: "Auto Glass / Windscreen",
    description: "Windscreen repair, replacement, and tinting services.",
    details: {
      includes: ["Glass repair/replacement", "Windshield tinting"],
    },
    image: "/images/icons/icon-15.png",
  },
  {
    id: 17,
    title: "Vehicle Modification",
    description:
      "Custom modifications for performance, style, and functionality.",
    details: {
      scope:
        "Aftermarket and custom enhancements tailored to client preference",
    },
    image: "/images/icons/icon-17.png",
  },
];

export const majorMinor = [
  {
    title: "Major Service",
    description:
      "Thorough inspection and component replacement to extend your vehicle's life.",
    recommended_interval_km: "20,000 - 40,000 km",
    includes: [
      "All Minor Service tasks",
      "Brake pad & disc inspection/replacement",
      "Spark plug replacement",
      "Fuel filter replacement",
      "Cabin filter replacement",
      "Transmission oil replacement",
      "AC filter & system check",
      "Suspension & steering check",
      "Full engine diagnostics",
      "Timing belt/chain inspection",
      "Coolant flush and refill",
    ],
    image: "/images/person/person-4.jpg",
    duration: "4-6 hours",
    ideal_for: "Periodic deep maintenance or when performance declines",
  },
  {
    title: "Minor Service",
    description:
      "Essential maintenance tasks to keep your car running smoothly and safely.",
    recommended_interval_km: "5,000 - 10,000 km",
    includes: [
      "Engine oil and oil filter replacement",
      "Air filter inspection/cleaning",
      "Coolant level check & top-up",
      "Brake fluid level check",
      "Battery check",
      "Lights and horn inspection",
      "Wiper blade inspection",
      "Tire pressure and rotation check",
      "General health check",
    ],
    image: "/images/person/person-5.jpg",
    duration: "1-2 hours",
    ideal_for: "Routine maintenance for optimal performance",
  },
];

export const siteInfo = {
  siteName: "24 Car Fix Dubai",
  location:
    "498R+XJ6 - Nadd Hessa - Dubai Silicon Oasis - Dubai - United Arab Emirates",
  phone: "+971569347116",
  email: "salahuddinmohammadayyoobi@gmail.com",
  whatsappText: "Hello! 24 Car Fix Dubai.",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4054.934880753625!2d55.39029902224273!3d25.117555492071823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ef321d082e7c5cf%3A0xb52697d64cce4263!2sSalauddin%20Car%20Fix!5e0!3m2!1sen!2sbd!4v1769934311853!5m2!1sen!2sbd",
};
