import { GiAutoRepair } from "react-icons/gi";
import {
  MdCarRepair,
  MdOutlineTireRepair,
  MdOutlineSafetyCheck,
} from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";
import { GiOilDrum } from "react-icons/gi";
// Main Category Icons
import { GiCarBattery } from "react-icons/gi";

// Why Choose Icons
import { MdElectricBolt, MdEngineering } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { MdOutlineEco } from "react-icons/md";
import { MdRecycling } from "react-icons/md";
import { MdBuildCircle } from "react-icons/md";
import { MdElectricCar } from "react-icons/md";
import { FaSnowflake } from "react-icons/fa";
import { MdAcUnit } from "react-icons/md";
import { FaCarBattery, FaCrown } from "react-icons/fa";
import { FaCar, FaTools } from "react-icons/fa";
import { MdOutlineBuildCircle } from "react-icons/md";

import { FaBolt } from "react-icons/fa";
import {
  MdElectricalServices,
  MdOutlineSettingsInputComponent,
} from "react-icons/md";

import { MdOutlineComputer } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { MdVerified } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";

import { MdOutlineSettings } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";

import { MdBuild, MdOutlineCarRepair } from "react-icons/md";
import { GiCarWheel } from "react-icons/gi";

const servicesDetailsData = [
  // {
  //   id: 1,
  //   slug: "general-car-repair-dubai",
  //   metadata: {
  //     title: "Best General Car Repair & Maintenance Packages Dubai",
  //     description:
  //       "Secure your vehicle's performance with guaranteed general repair and maintenance packages in Dubai. Precision service from certified mechanics.",
  //     keywords: [
  //       "car repair in dubai",
  //       "car repair service in dubai",
  //       "types of car repair services",
  //       "car maintenance service package in dubai",
  //       "best car garage in dubai",
  //     ],
  //   },
  //   title: "General Car Repair Dubai",
  //   sub_title: "professional general car repair service",
  //   icon: GiAutoRepair,
  //   main: {
  //     title: "Reliable General Car Repair Service in Dubai",
  //     description:
  //       "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
  //     includes: [
  //       "Alternator Fixing",
  //       "Starter Motor Repair",
  //       "Window Motor Repair",
  //       "Mobile Car Mechanic",
  //     ],
  //   },

  //   whyChoose: {
  //     title: "Why Choose One Title",
  //     items: [
  //       {
  //         title: "Why Choose One Title",
  //         description: "Why choose one description",
  //         icon: MdCarRepair,
  //       },
  //       {
  //         title: "Why Choose Two Title",
  //         description: "Why choose one description",
  //         icon: MdOutlineTireRepair,
  //       },
  //       {
  //         title: "Why Choose Two Title",
  //         description: "Why choose one description",
  //         icon: LiaToolsSolid,
  //       },
  //       {
  //         title: "Why Choose Two Title",
  //         description: "Why choose one description",
  //         icon: AiOutlineSafety,
  //       },
  //     ],
  //   },
  //   faq: [
  //     {
  //       title: "How often should I service my car in Dubai? ",
  //       description:
  //         "Service your vehicle every 10,000 kilometers or six months, whichever comes first. Dubai's extreme heat and dusty conditions accelerate wear requiring more frequent maintenance than moderate climates. Manufacturer recommendations provide baseline intervals. Severe driving conditions demand shorter intervals. Regular service prevents expensive repairs and maintains reliability. Neglecting maintenance voids warranties and causes premature failures.",
  //     },
  //     {
  //       title: "What's included in a full car service? ",
  //       description:
  //         "Full service includes oil change, filter replacements, fluid top-ups, brake inspection, tire rotation, and multi-point inspection covering all major systems. We check belts, hoses, lights, wipers, and battery condition. Major services add spark plugs, transmission fluid, coolant flush, and timing belt inspection. Service scope varies by vehicle age and mileage. We provide detailed checklists explaining exactly what's included.",
  //     },
  //     {
  //       title: "How do I know if a repair is necessary?",
  //       description:
  //         "Necessary repairs address safety concerns, prevent further damage, or restore proper function. We explain problems clearly, show damaged parts when possible, and prioritize repairs by urgency. Safety issues need immediate attention. Preventive maintenance avoids expensive failures. Cosmetic issues can wait. We never pressure unnecessary services. Second opinions are welcome for expensive repairs.",
  //     },
  //     {
  //       title: "Can you repair all car brands?",
  //       description:
  //         "Yes, our technicians repair all vehicle makes including Japanese, European, American, and Korean brands. We have brand-specific diagnostic tools, access to technical information, and experience across multiple manufacturers. Exotic or rare vehicles may require specialized parts or longer repair times. We're honest about limitations referring specialized work when appropriate.",
  //     },
  //     {
  //       title: "Do you use genuine or aftermarket parts?",
  //       description:
  //         "We offer both options depending on your preference and budget. Genuine OEM parts guarantee exact fit and quality but cost more. Premium aftermarket parts from reputable brands perform comparably at lower prices. We never use cheap, substandard parts compromising quality. We explain differences and recommend best options for your situation and budget constraints.",
  //     },
  //     {
  //       title: "How long do repairs typically take?",
  //       description:
  //         "Simple repairs like oil changes or brake pads take hours. Major repairs including engine or transmission work need days or weeks depending on complexity and parts availability. We provide accurate time estimates after diagnosis. Delays happen occasionally due to unexpected complications or parts shortages. We communicate promptly keeping you informed throughout repairs.",
  //     },
  //     {
  //       title: "What if repairs cost more than estimated?",
  //       description:
  //         "We contact you immediately if additional problems appear during repairs or costs exceed original estimates. You approve all additional work before we proceed. Estimates cover diagnosed problems only. Hidden damage sometimes appears after disassembly. We explain reasons for cost increases and provide options. Your approval is always required for scope or price changes.",
  //     },
  //   ],
  // },
  {
    id: 0,
    slug: "general-car-repair-dubai",
    metadata: {
      title: "Best General Car Repair & Maintenance Packages Dubai",
      description:
        "Secure your vehicle's performance with reliable general car repair and maintenance packages in Dubai. Precision service from certified mechanics ensures safety, reliability, and smooth driving.",
      keywords: [
        "car repair in dubai",
        "car repair service in dubai",
        "types of car repair services",
        "car maintenance service package in dubai",
        "best car garage in dubai",
        "vehicle maintenance dubai",
        "mechanic service dubai",
        "engine repair dubai",
      ],
    },
    title: "General Car Repair Dubai",
    sub_title: "Professional General Car Repair Services",
    icon: GiAutoRepair,
    main: {
      title: "Reliable General Car Repair Services in Dubai",
      description:
        "Our expert mechanics provide comprehensive general car repair services in Dubai. From engine and brake inspections to battery and electrical system repairs, we ensure your vehicle runs smoothly and safely. We prioritize quality, speed, and transparency for every service.",
      includes: [
        "Engine Diagnostics & Repairs",
        "Brake Inspection & Repair",
        "Suspension & Steering Maintenance",
        "Battery & Electrical System Services",
        "Oil Change & Fluid Top-Ups",
      ],
    },

    whyChoose: {
      title: "Why Choose Our General Car Repair Service?",
      items: [
        {
          title: "Certified Mechanics",
          description:
            "Our technicians are fully certified and trained to handle all car makes and models with precision and expertise.",
          icon: MdCarRepair,
        },
        {
          title: "Quality Parts",
          description:
            "We use genuine OEM or high-quality aftermarket parts to ensure longevity and performance of your vehicle.",
          icon: MdOutlineTireRepair,
        },
        {
          title: "Fast & Efficient Service",
          description:
            "Our team works efficiently without compromising quality, so you spend less time waiting and more time driving.",
          icon: LiaToolsSolid,
        },
        {
          title: "Transparent Pricing",
          description:
            "All services come with clear pricing and estimates. No hidden charges or surprise costs.",
          icon: AiOutlineSafety,
        },
        {
          title: "Comprehensive Safety Checks",
          description:
            "Every car goes through detailed safety inspections to ensure reliable performance and peace of mind on the road.",
          icon: MdOutlineSafetyCheck,
        },
      ],
    },

    faq: [
      {
        title: "How often should I service my car in Dubai?",
        description:
          "We recommend servicing your car every 10,000 kilometers or six months, whichever comes first. Dubai's heat and dusty conditions require more frequent maintenance to prevent wear and tear and maintain optimal performance.",
      },
      {
        title: "What is included in a general car repair service?",
        description:
          "A typical general repair service includes engine diagnostics, brake inspection, fluid top-ups, battery checks, tire inspections, and electrical system evaluation. Our team ensures every key component is checked for safe and smooth operation.",
      },
      {
        title: "Do you repair all car brands?",
        description:
          "Yes, we service all car brands including Japanese, European, American, and Korean vehicles. Our mechanics have experience with a wide range of manufacturers and access to brand-specific diagnostic tools.",
      },
      {
        title: "Do you provide genuine or aftermarket parts?",
        description:
          "We offer both genuine OEM parts and high-quality aftermarket alternatives. Customers can choose based on budget and preference, while we always ensure durability and performance.",
      },
      {
        title: "How long does a general repair service take?",
        description:
          "Simple inspections and maintenance can take a few hours, while more complex repairs may take a day or two. We provide clear time estimates after assessing your vehicle, keeping you informed throughout the process.",
      },
      {
        title: "What if additional repairs are needed?",
        description:
          "If we identify extra repairs, we contact you before proceeding. We provide clear explanations and updated estimates so you can approve or decline additional work.",
      },
      {
        title: "Is your service safe and reliable?",
        description:
          "Yes, every vehicle undergoes rigorous safety and performance checks. We ensure all repairs meet industry standards, giving you confidence on the road.",
      },
    ],
  },
  {
    id: 1,
    slug: "car-battery-replacement-dubai",
    metadata: {
      title: "Battery Replacement Dubai | Fast Mobile Car Battery Service",
      description:
        "Get fast, reliable, and on-site car battery replacement service anywhere in Dubai. Premium battery brands, expert technicians, and 24/7 emergency assistance.",
      keywords: [
        "battery replacement dubai",
        "car battery change dubai",
        "mobile car battery service dubai",
        "emergency battery replacement dubai",
        "best battery service dubai",
      ],
    },

    title: "Battery Replacement Dubai",
    sub_title: "Professional mobile battery replacement service",

    icon: GiCarBattery, // (import from react-icons)

    main: {
      title: "Fast & Reliable Battery Replacement Service in Dubai",
      description:
        "A weak or dead battery can leave you stranded—especially in Dubai's extreme temperatures. Our expert technicians provide quick, reliable, and on-site battery replacement anywhere in Dubai. We perform complete battery diagnostics, charging system checks, and install premium, warranty-backed batteries that ensure long-lasting performance. With our fast response time and professional service, your car will be back on the road within minutes.",
      includes: [
        "Battery Health Testing",
        "On-Site Battery Replacement",
        "Alternator & Charging System Check",
        "Installation of Premium Battery Brands",
        "Emergency 24/7 Mobile Battery Support",
      ],
    },

    whyChoose: {
      title: "Why Choose Our Battery Replacement Service in Dubai?",
      items: [
        {
          title: "Fast On-Site Assistance",
          description:
            "We reach your location anywhere in Dubai with a compatible battery, offering quick installation without needing towing.",
          icon: MdElectricBolt,
        },
        {
          title: "Certified Battery Technicians",
          description:
            "Our experts are trained in electrical diagnostics, ensuring accurate testing and proper battery installation every time.",
          icon: MdEngineering,
        },
        {
          title: "Genuine Warranty-Backed Batteries",
          description:
            "We provide original, high-performance batteries with up to 12–24 months warranty for guaranteed reliability.",
          icon: LiaToolsSolid,
        },
        {
          title: "Affordable & Transparent Pricing",
          description:
            "No hidden charges—just honest pricing, quality service, and detailed installation reports.",
          icon: AiOutlineSafety,
        },
        {
          title: "24/7 Emergency Battery Service",
          description:
            "Available round the clock for breakdowns, roadside emergencies, and sudden battery failures anywhere in Dubai.",
          icon: MdOutlineTireRepair,
        },
      ],
    },

    faq: [
      {
        title: "What are the signs that my car battery needs replacement?",
        description:
          "Slow engine start, dim headlights, dashboard battery warning, clicking sounds while starting, or a battery older than 2–3 years in Dubai's climate all indicate it's time for a replacement.",
      },
      {
        title: "How long does a battery replacement take?",
        description:
          "A typical battery replacement takes 15–20 minutes. Our on-site mobile team performs diagnosis, removal, and installation quickly and safely.",
      },
      {
        title: "Do you provide emergency battery replacement in Dubai?",
        description:
          "Yes, we offer 24/7 emergency battery replacement anywhere in Dubai with fast arrival and immediate service.",
      },
      {
        title: "Which battery brands do you install?",
        description:
          "We install premium brands such as Amaron, Varta, Bosch, AC Delco, and Exide—ensuring exact compatibility for all car models.",
      },
      {
        title: "Do you check the alternator and charging system?",
        description:
          "Yes, we perform a complete alternator and charging system test to ensure your new battery delivers maximum lifespan and performance.",
      },
      {
        title: "Do your batteries come with warranty?",
        description:
          "All batteries include a manufacturer warranty ranging from 12 to 24 months depending on the brand and model.",
      },
      {
        title: "Is mobile battery replacement more expensive?",
        description:
          "No—our prices are competitive and transparent. You get on-site service at your location without any hidden callout fees.",
      },
    ],
  },
  {
    id: 2,
    slug: "car-oil-change-service-dubai",
    metadata: {
      title: "Car Oil Change Service Dubai | Fast, Affordable & Professional",
      description:
        "Get top-quality car oil change service in Dubai with premium engine oils, expert technicians, and quick service. Improve your engine performance and extend your vehicle’s lifespan.",
      keywords: [
        "car oil change service dubai",
        "oil change dubai",
        "engine oil change dubai",
        "car oil change near me dubai",
        "best car oil change dubai",
      ],
    },

    title: "Car Oil Change Service Dubai",
    sub_title: "Fast, professional & reliable oil change service",
    icon: GiOilDrum,

    main: {
      title: "Premium Car Oil Change Service in Dubai",
      description:
        "Regular oil changes are essential to keeping your engine healthy, especially in Dubai’s high temperatures. Our Car Oil Change Service Dubai uses top-grade synthetic and semi-synthetic oils to protect your engine from heat, friction, and sludge build-up. With expert technicians and advanced tools, we ensure your car receives the perfect oil grade recommended by your manufacturer, improving performance, fuel efficiency, and engine lifespan.",
      includes: [
        "High-Quality Engine Oil Replacement",
        "Oil Filter Replacement",
        "Fluid Level Inspection & Top-up",
        "Air & AC Filter Check",
        "Complete Engine Health Inspection",
      ],
    },

    whyChoose: {
      title: "Why Choose Our Car Oil Change Service?",
      items: [
        {
          title: "Premium Quality Oils",
          description:
            "We use top-grade synthetic and manufacturer-approved oils ideal for Dubai’s extreme climate, ensuring superior engine protection.",
          icon: MdEngineering,
        },
        {
          title: "Expert Technicians",
          description:
            "Your car is serviced by certified mechanics with experience across all brands, ensuring accurate oil grades and professional service.",
          icon: MdOutlineTireRepair,
        },
        {
          title: "Fast & Hassle-Free Service",
          description:
            "Our oil change process is quick, clean, and efficient—saving you time while maintaining the highest service standards.",
          icon: LiaToolsSolid,
        },
        {
          title: "Enhanced Engine Protection",
          description:
            "Proper oil change prevents engine overheating, friction damage, and costly repairs while improving fuel economy.",
          icon: AiOutlineSafety,
        },
      ],
    },

    faq: [
      {
        title: "How often should I get a car oil change in Dubai?",
        description:
          "Most cars need an oil change every 5,000–8,000 km depending on the oil type and driving conditions. Dubai’s heat causes oil to break down faster, so timely oil changes are essential.",
      },
      {
        title: "What type of oil is best for my car?",
        description:
          "This depends on your car brand and engine type. We offer fully synthetic, semi-synthetic, and mineral oils from top brands. Our experts recommend the ideal oil grade for your vehicle.",
      },
      {
        title: "Do you replace the oil filter as well?",
        description:
          "Yes. Every oil change includes a high-quality OEM or premium aftermarket oil filter to ensure proper engine protection and performance.",
      },
      {
        title: "How long does your oil change service take?",
        description:
          "A standard oil change takes about 20–30 minutes, including a free engine health check and fluid top-ups.",
      },
      {
        title: "Do you service all car brands?",
        description:
          "Yes, our technicians provide oil change services for all brands including Japanese, German, American, Korean, and luxury vehicles using brand-recommended oil grades.",
      },
    ],
  },
  {
    id: 3,
    slug: "car-battery-health-check-dubai",
    metadata: {
      title:
        "Car Battery Health Check Dubai | Professional Battery Testing Service",
      description:
        "Get a reliable car battery health check in Dubai with advanced diagnostics. Ensure longer battery life, prevent breakdowns, and enjoy expert inspection by professionals.",
      keywords: [
        "car battery health check dubai",
        "battery testing dubai",
        "car battery diagnosis dubai",
        "battery service dubai",
        "battery check near me dubai",
      ],
    },

    title: "Car Battery Health Check Dubai",
    sub_title: "Professional & advanced battery diagnostic service",
    icon: GiCarBattery,

    main: {
      title: "Reliable Car Battery Health Check Service in Dubai",
      description:
        "A weak battery is one of the most common reasons for unexpected car breakdowns in Dubai. Our Car Battery Health Check service uses advanced tools to analyze your battery condition, charging system, voltage stability, and overall performance. With accurate testing and expert recommendations, we help you avoid sudden failures, extend battery life, and keep your vehicle running smoothly in Dubai’s extreme weather.",
      includes: [
        "Complete Battery Voltage Test",
        "Charging System Evaluation",
        "Battery Load Testing",
        "Terminal Cleaning & Inspection",
        "Report on Battery Life & Recommendations",
      ],
    },

    whyChoose: {
      title: "Why Choose Our Battery Health Check Service?",
      items: [
        {
          title: "Advanced Diagnostic Tools",
          description:
            "We use modern battery analyzers to provide precise results, helping you understand the exact condition of your car battery.",
          icon: MdHealthAndSafety,
        },
        {
          title: "Quick & Reliable Service",
          description:
            "Our battery check is fast, professional, and highly accurate—ensuring you get results in just minutes.",
          icon: MdOutlineTireRepair,
        },
        {
          title: "Expert Technicians",
          description:
            "Certified professionals examine your battery, alternator, and charging system to identify any issues early.",
          icon: LiaToolsSolid,
        },
        {
          title: "Prevent Sudden Breakdowns",
          description:
            "Regular battery health checks help you avoid unexpected failures, especially in Dubai’s hot climate.",
          icon: AiOutlineSafety,
        },
      ],
    },

    faq: [
      {
        title: "How often should I check my car battery in Dubai?",
        description:
          "You should check your car battery every 6 months. Dubai’s extreme heat affects battery performance, making periodic testing essential.",
      },
      {
        title: "What are the signs of a weak battery?",
        description:
          "Slow engine start, dim headlights, electrical issues, and clicking sounds when starting are common signs of a failing battery.",
      },
      {
        title: "Do you check the alternator and charging system?",
        description:
          "Yes. Our battery health check includes alternator output, charging rate, and overall electrical health.",
      },
      {
        title: "How long does the battery health check take?",
        description:
          "The entire inspection takes around 10–15 minutes using advanced digital testers.",
      },
      {
        title: "Can you check batteries for all car models?",
        description:
          "Yes, we test batteries for all car makes—Japanese, German, American, Korean, and luxury brands.",
      },
    ],
  },
  {
    id: 4,
    slug: "battery-diagnostic-service-dubai",
    metadata: {
      title: "Battery Diagnostic Service Dubai | Advanced Car Battery Testing",
      description:
        "Get professional battery diagnostic service in Dubai using advanced testing tools. Identify battery issues early, prevent breakdowns, and ensure reliable vehicle performance.",
      keywords: [
        "battery diagnostic service dubai",
        "car battery diagnostics dubai",
        "battery testing service dubai",
        "battery problem check dubai",
        "car electrical diagnosis dubai",
      ],
    },

    title: "Battery Diagnostic Service Dubai",
    sub_title: "Advanced battery testing & electrical diagnostics",
    icon: GiCarBattery,

    main: {
      title: "Professional Battery Diagnostic Service in Dubai",
      description:
        "Battery issues are often hidden and can cause sudden breakdowns without warning—especially in Dubai’s extreme heat. Our Battery Diagnostic Service uses advanced digital tools to accurately test battery health, charging performance, and electrical stability. We identify early signs of battery failure, alternator problems, or electrical drain, helping you avoid costly repairs and unexpected roadside issues.",
      includes: [
        "Battery Voltage & Capacity Testing",
        "Load & Cranking Performance Analysis",
        "Alternator & Charging System Diagnostics",
        "Electrical Drain & Power Loss Detection",
        "Battery Terminal & Cable Inspection",
        "Detailed Diagnostic Report & Expert Advice",
      ],
    },

    whyChoose: {
      title: "Why Choose Our Battery Diagnostic Service?",
      items: [
        {
          title: "Advanced Diagnostic Equipment",
          description:
            "We use modern battery analyzers to provide accurate and reliable test results within minutes.",
          icon: MdHealthAndSafety,
        },
        {
          title: "Early Problem Detection",
          description:
            "Identify battery, alternator, or electrical issues before they lead to sudden breakdowns or costly repairs.",
          icon: MdOutlineElectricalServices,
        },
        {
          title: "Certified Auto Technicians",
          description:
            "Our experienced technicians understand complex electrical systems across all car brands.",
          icon: MdEngineering,
        },
        {
          title: "Prevents Unexpected Breakdowns",
          description:
            "Routine battery diagnostics help ensure your car starts reliably in Dubai’s harsh climate.",
          icon: AiOutlineSafety,
        },
        {
          title: "Transparent & Honest Reports",
          description:
            "You receive a clear diagnostic report explaining your battery condition with no pressure to replace unnecessarily.",
          icon: LiaToolsSolid,
        },
        {
          title: "Suitable for All Vehicles",
          description:
            "We diagnose batteries for all cars including sedans, SUVs, luxury vehicles, and commercial fleets.",
          icon: GiCarBattery,
        },
      ],
    },

    faq: [
      {
        title: "What is a battery diagnostic service?",
        description:
          "Battery diagnostic service involves testing battery voltage, capacity, load performance, and charging efficiency to identify hidden issues affecting battery reliability.",
      },
      {
        title: "How often should I get battery diagnostics in Dubai?",
        description:
          "It’s recommended every 6 months due to Dubai’s high temperatures, which significantly reduce battery lifespan.",
      },
      {
        title: "Can diagnostics detect alternator problems?",
        description:
          "Yes. Our service checks alternator output and charging efficiency to ensure your battery is charging properly.",
      },
      {
        title: "How long does a battery diagnostic test take?",
        description:
          "Most battery diagnostic tests take between 10–20 minutes using advanced electronic tools.",
      },
      {
        title: "Do I need to replace my battery after diagnostics?",
        description:
          "Not always. Diagnostics help determine whether your battery is healthy, needs maintenance, or requires replacement.",
      },
      {
        title: "Do you provide battery diagnostics for all car brands?",
        description:
          "Yes. We offer battery diagnostic service for Japanese, German, American, Korean, and luxury vehicles.",
      },
    ],
  },
  {
    id: 5,
    slug: "battery-terminal-cleaning-dubai",
    metadata: {
      title:
        "Battery Terminal Cleaning Dubai | Car Battery Maintenance Service",
      description:
        "Professional battery terminal cleaning service in Dubai to remove corrosion, improve electrical flow, and extend battery life. Fast, safe, and affordable car battery care.",
      keywords: [
        "battery terminal cleaning dubai",
        "car battery cleaning service dubai",
        "battery corrosion removal dubai",
        "battery maintenance service dubai",
        "car electrical service dubai",
      ],
    },

    title: "Battery Terminal Cleaning Dubai",
    sub_title: "Professional battery terminal & cable cleaning service",
    icon: GiCarBattery,

    main: {
      title: "Professional Battery Terminal Cleaning Service in Dubai",
      description:
        "Corroded or dirty battery terminals can prevent proper electrical flow, leading to starting problems and battery failure. Our Battery Terminal Cleaning Service in Dubai removes corrosion, dirt, and buildup from battery terminals and cables. Using safe cleaning methods and protective treatments, we restore proper electrical connection, improve battery efficiency, and help extend the overall lifespan of your battery—especially important in Dubai’s hot and dusty environment.",
      includes: [
        "Battery Terminal Corrosion Removal",
        "Positive & Negative Terminal Cleaning",
        "Battery Cable Inspection",
        "Electrical Connection Restoration",
        "Protective Anti-Corrosion Treatment",
        "Battery Performance Check After Cleaning",
      ],
    },

    whyChoose: {
      title: "Why Choose Our Battery Terminal Cleaning Service?",
      items: [
        {
          title: "Improves Electrical Connectivity",
          description:
            "Clean terminals ensure proper current flow, helping your car start smoothly every time.",
          icon: MdOutlineElectricalServices,
        },
        {
          title: "Prevents Battery Failure",
          description:
            "Removing corrosion reduces resistance and helps prevent premature battery replacement.",
          icon: AiOutlineSafety,
        },
        {
          title: "Professional Cleaning Methods",
          description:
            "Our technicians use safe tools and approved solutions to clean terminals without damaging components.",
          icon: MdCleaningServices,
        },
        {
          title: "Experienced Auto Technicians",
          description:
            "Certified professionals inspect terminals, cables, and connectors to identify early electrical issues.",
          icon: MdEngineering,
        },
        {
          title: "Extends Battery Lifespan",
          description:
            "Regular terminal cleaning helps your battery perform efficiently for a longer period.",
          icon: LiaToolsSolid,
        },
        {
          title: "Suitable for All Car Brands",
          description:
            "We provide battery terminal cleaning for all vehicle types including sedans, SUVs, luxury, and commercial vehicles.",
          icon: GiCarBattery,
        },
      ],
    },

    faq: [
      {
        title: "What causes battery terminal corrosion?",
        description:
          "Battery terminal corrosion is usually caused by acid vapor leaks, moisture, heat, and chemical reactions over time—common in Dubai’s climate.",
      },
      {
        title: "How often should battery terminals be cleaned?",
        description:
          "It’s recommended to clean battery terminals every 6–12 months or whenever corrosion buildup is visible.",
      },
      {
        title: "Can dirty terminals affect car starting?",
        description:
          "Yes. Corrosion restricts electrical flow, causing slow starts, power loss, or complete failure to start.",
      },
      {
        title: "Is battery terminal cleaning safe?",
        description:
          "Yes. When performed by professionals using proper tools and safety measures, it is completely safe and effective.",
      },
      {
        title: "Does terminal cleaning improve battery life?",
        description:
          "Yes. Clean terminals reduce resistance, helping your battery charge efficiently and last longer.",
      },
      {
        title: "Do you clean terminals for all car models?",
        description:
          "Yes. We offer battery terminal cleaning service for all car brands, including luxury and high-performance vehicles.",
      },
    ],
  },
  {
    id: 6,
    slug: "battery-recycling-disposal-dubai",
    metadata: {
      title:
        "Battery Recycling & Disposal Dubai | Eco-Friendly Battery Fix Pro",
      description:
        "Safe and eco-friendly battery recycling & disposal service in Dubai by Battery Fix Pro. Protect the environment with certified battery disposal and recycling solutions.",
      keywords: [
        "battery recycling dubai",
        "battery disposal dubai",
        "car battery recycling dubai",
        "eco friendly battery disposal dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Battery Recycling & Disposal Dubai",
    sub_title: "Safe, certified & eco-friendly battery disposal service",
    icon: GiCarBattery,

    main: {
      title: "Professional Battery Recycling & Disposal Service in Dubai",
      description:
        "Improper battery disposal can cause serious environmental and health risks due to hazardous chemicals and heavy metals. At Battery Fix Pro Dubai, we provide safe, certified, and eco-friendly battery recycling and disposal services. Our process ensures used and damaged batteries are handled responsibly, recycled through approved channels, and disposed of in compliance with UAE environmental regulations—helping protect both your safety and the environment.",
      includes: [
        "Safe Collection of Used Car Batteries",
        "Certified Battery Recycling Process",
        "Environmentally Responsible Disposal",
        "Handling of Lead-Acid & AGM Batteries",
        "Compliance with UAE Environmental Standards",
        "Disposal Report & Recycling Confirmation",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Battery Recycling?",
      items: [
        {
          title: "Eco-Friendly Recycling Process",
          description:
            "We ensure batteries are recycled through approved facilities, reducing environmental pollution and hazardous waste.",
          icon: MdOutlineEco,
        },
        {
          title: "Certified & Safe Disposal",
          description:
            "Our disposal process follows strict safety and environmental regulations set by UAE authorities.",
          icon: AiOutlineSafety,
        },
        {
          title: "Responsible Battery Handling",
          description:
            "Our trained professionals handle batteries carefully to prevent leaks, spills, or contamination.",
          icon: MdEngineering,
        },
        {
          title: "Supports Environmental Protection",
          description:
            "Recycling batteries helps conserve natural resources and reduces landfill waste.",
          icon: MdRecycling,
        },
        {
          title: "Trusted Battery Specialists",
          description:
            "Battery Fix Pro Dubai specializes exclusively in battery services, ensuring expert-level care and compliance.",
          icon: LiaToolsSolid,
        },
        {
          title: "Convenient & Hassle-Free Service",
          description:
            "We collect and dispose of your old battery responsibly, saving you time and effort.",
          icon: GiCarBattery,
        },
      ],
    },

    faq: [
      {
        title: "Why is battery recycling important?",
        description:
          "Car batteries contain hazardous materials like lead and acid. Recycling prevents environmental pollution and protects human health.",
      },
      {
        title: "Can I throw a car battery in regular trash?",
        description:
          "No. Disposing of car batteries in regular waste is unsafe and illegal due to toxic materials.",
      },
      {
        title: "What types of batteries do you recycle?",
        description:
          "We recycle lead-acid, AGM, and most automotive batteries used in cars and light commercial vehicles.",
      },
      {
        title: "Do you follow UAE environmental regulations?",
        description:
          "Yes. Battery Fix Pro Dubai strictly follows UAE environmental and waste management regulations.",
      },
      {
        title: "Is battery recycling safe?",
        description:
          "Yes, when handled by certified professionals using approved recycling facilities, battery recycling is completely safe.",
      },
      {
        title: "Do you provide battery recycling after replacement?",
        description:
          "Absolutely. When we replace your battery, we responsibly recycle the old one as part of our service.",
      },
    ],
  },
  {
    id: 7,
    slug: "car-battery-installation-dubai",
    metadata: {
      title:
        "Car Battery Installation Dubai | Professional Battery Fix Pro Service",
      description:
        "Get professional car battery installation in Dubai by Battery Fix Pro. Expert technicians, correct battery fitment, safety checks, and reliable performance guaranteed.",
      keywords: [
        "car battery installation dubai",
        "battery installation service dubai",
        "new battery installation dubai",
        "battery fitment dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Car Battery Installation Dubai",
    sub_title: "Professional, safe & accurate battery installation service",
    icon: GiCarBattery,

    main: {
      title: "Professional Car Battery Installation Service in Dubai",
      description:
        "Proper battery installation is critical for vehicle safety, electrical stability, and long-term performance. At Battery Fix Pro Dubai, our Car Battery Installation service ensures your new battery is installed correctly, securely, and safely. Our technicians follow manufacturer-recommended procedures, check all electrical connections, and test system performance—giving you peace of mind and reliable engine starts in Dubai’s extreme conditions.",
      includes: [
        "Correct Battery Size & Compatibility Check",
        "Safe Removal of Old Battery",
        "Professional New Battery Installation",
        "Terminal & Cable Connection Check",
        "Charging System & Voltage Testing",
        "Final Performance & Safety Inspection",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Battery Installation?",
      items: [
        {
          title: "Expert Battery Technicians",
          description:
            "Our specialists ensure proper battery fitment and secure installation for all car models.",
          icon: MdEngineering,
        },
        {
          title: "Correct Battery Compatibility",
          description:
            "We install the exact battery type recommended for your vehicle to ensure optimal performance.",
          icon: MdBuildCircle,
        },
        {
          title: "Safe & Secure Installation",
          description:
            "All installations follow safety standards to prevent electrical faults and battery damage.",
          icon: AiOutlineSafety,
        },
        {
          title: "Complete Electrical System Check",
          description:
            "We test voltage, alternator output, and charging stability after installation.",
          icon: MdOutlineElectricalServices,
        },
        {
          title: "Suitable for All Car Brands",
          description:
            "From economy cars to luxury vehicles, we install batteries for all brands and models.",
          icon: GiCarBattery,
        },
        {
          title: "Trusted Battery Specialists",
          description:
            "Battery Fix Pro Dubai focuses exclusively on battery services, delivering expert-level care.",
          icon: LiaToolsSolid,
        },
      ],
    },

    faq: [
      {
        title: "Why is professional battery installation important?",
        description:
          "Incorrect installation can cause electrical issues, battery damage, or safety risks. Professional installation ensures correct fitment and system stability.",
      },
      {
        title: "How long does car battery installation take?",
        description:
          "Most battery installations take 15–30 minutes, including testing and safety checks.",
      },
      {
        title: "Do you install batteries for all car brands?",
        description:
          "Yes. We install batteries for Japanese, German, American, Korean, and luxury vehicles.",
      },
      {
        title: "Do you test the car after installing the battery?",
        description:
          "Yes. We perform voltage, charging system, and starting tests to ensure proper operation.",
      },
      {
        title: "Can you install a battery at my location?",
        description:
          "Yes. Battery Fix Pro Dubai offers mobile battery installation anywhere in Dubai.",
      },
      {
        title: "Do you recycle the old battery?",
        description:
          "Absolutely. We safely collect and recycle your old battery following environmental regulations.",
      },
    ],
  },
  {
    id: 8,
    slug: "hybrid-car-battery-service-dubai",
    metadata: {
      title: "Hybrid Car Battery Service Dubai | Expert Hybrid Battery Care",
      description:
        "Professional hybrid car battery service in Dubai by Battery Fix Pro. Advanced diagnostics, repair, maintenance, and safe replacement for all hybrid vehicles.",
      keywords: [
        "hybrid car battery service dubai",
        "hybrid battery repair dubai",
        "hybrid battery diagnostics dubai",
        "hybrid battery replacement dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Hybrid Car Battery Service Dubai",
    sub_title: "Advanced hybrid battery diagnostics, repair & maintenance",
    icon: GiCarBattery,

    main: {
      title: "Professional Hybrid Car Battery Service in Dubai",
      description:
        "Hybrid vehicle batteries are complex, high-voltage systems that require specialized tools and expert handling. At Battery Fix Pro Dubai, our Hybrid Car Battery Service provides advanced diagnostics, performance testing, maintenance, and safe repair solutions. We help extend battery lifespan, restore efficiency, and ensure safe operation—giving hybrid vehicle owners confidence and reliability in Dubai’s demanding driving conditions.",
      includes: [
        "Hybrid Battery Health & Capacity Testing",
        "High-Voltage System Diagnostics",
        "Hybrid Battery Module Inspection",
        "Battery Cooling System Check",
        "Performance Optimization & Calibration",
        "Safety Inspection & Service Report",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Hybrid Battery Service?",
      items: [
        {
          title: "Hybrid Battery Specialists",
          description:
            "Our technicians are trained to handle complex hybrid battery systems safely and accurately.",
          icon: MdEngineering,
        },
        {
          title: "Advanced Diagnostic Technology",
          description:
            "We use specialized tools to detect capacity loss, imbalance, and performance issues.",
          icon: MdOutlineElectricalServices,
        },
        {
          title: "Safe High-Voltage Handling",
          description:
            "Strict safety procedures are followed to protect your vehicle and our technicians.",
          icon: AiOutlineSafety,
        },
        {
          title: "Extends Hybrid Battery Life",
          description:
            "Regular servicing helps maximize battery lifespan and maintain fuel efficiency.",
          icon: LiaToolsSolid,
        },
        {
          title: "Supports All Hybrid Models",
          description:
            "We service hybrid vehicles from Japanese, European, and American manufacturers.",
          icon: MdElectricCar,
        },
        {
          title: "Trusted Hybrid Battery Experts",
          description:
            "Battery Fix Pro Dubai is a trusted name in battery services, delivering reliable hybrid solutions.",
          icon: GiCarBattery,
        },
      ],
    },

    faq: [
      {
        title: "What is included in hybrid car battery service?",
        description:
          "Hybrid battery service includes health diagnostics, capacity testing, system inspection, cooling checks, and performance evaluation.",
      },
      {
        title: "How often should hybrid batteries be serviced?",
        description:
          "Hybrid batteries should be checked every 12 months or if you notice reduced fuel efficiency or warning lights.",
      },
      {
        title: "Can hybrid batteries be repaired instead of replaced?",
        description:
          "In many cases, yes. Faulty modules can be repaired or reconditioned depending on battery condition.",
      },
      {
        title: "Is hybrid battery service safe?",
        description:
          "Yes. Our technicians follow strict safety standards and use proper equipment for high-voltage systems.",
      },
      {
        title: "Do you service all hybrid car brands?",
        description:
          "Yes. We service Toyota, Lexus, Hyundai, Honda, and most hybrid vehicle brands.",
      },
      {
        title: "Can you replace a hybrid battery if needed?",
        description:
          "Yes. If replacement is required, we offer safe installation and proper recycling of the old battery.",
      },
    ],
  },
  {
    id: 9,
    slug: "car-ac-repair-service-dubai",
    metadata: {
      title: "Car AC Repair & Service Dubai | Expert Cooling Solutions",
      description:
        "Professional car AC repair & service in Dubai by Battery Fix Pro. AC gas refill, cooling repair, diagnostics, and complete air conditioning service for all car brands.",
      keywords: [
        "car ac repair dubai",
        "car ac service dubai",
        "auto ac gas refill dubai",
        "car air conditioning repair dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Car AC Repair & Service Dubai",
    sub_title: "Professional car air conditioning repair & maintenance service",
    icon: FaSnowflake,

    main: {
      title: "Professional Car AC Repair & Service in Dubai",
      description:
        "A properly functioning car AC is essential for comfortable driving in Dubai’s extreme heat. At Battery Fix Pro Dubai, our Car AC Repair & Service covers complete inspection, diagnostics, and repair of your vehicle’s air conditioning system. From weak cooling and gas leaks to compressor and electrical issues, our certified technicians ensure powerful cooling, clean airflow, and long-lasting AC performance for all car brands.",
      includes: [
        "Complete Car AC System Inspection",
        "AC Gas Refill & Pressure Testing",
        "Compressor & Condenser Check",
        "Cooling Performance Diagnostics",
        "Electrical & Sensor Inspection",
        "Final Cooling Efficiency Test",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Car AC Service?",
      items: [
        {
          title: "Expert AC Technicians",
          description:
            "Our technicians are trained to diagnose and repair all types of car AC systems accurately.",
          icon: MdEngineering,
        },
        {
          title: "Advanced AC Diagnostics",
          description:
            "We use modern diagnostic tools to detect leaks, pressure issues, and electrical faults.",
          icon: MdOutlineElectricalServices,
        },
        {
          title: "Powerful Cooling Performance",
          description:
            "Our service restores strong and consistent cooling even in Dubai’s extreme temperatures.",
          icon: MdAcUnit,
        },
        {
          title: "Safe & Environment-Friendly Gas",
          description:
            "We use approved refrigerants that are safe for your vehicle and the environment.",
          icon: AiOutlineSafety,
        },
        {
          title: "Suitable for All Car Brands",
          description:
            "We repair and service AC systems for Japanese, German, American, Korean, and luxury cars.",
          icon: FaSnowflake,
        },
        {
          title: "Trusted Automotive Specialists",
          description:
            "Battery Fix Pro Dubai delivers reliable AC solutions with transparent pricing and expert care.",
          icon: LiaToolsSolid,
        },
      ],
    },

    faq: [
      {
        title: "How often should I service my car AC in Dubai?",
        description:
          "Car AC should be serviced at least once a year. Dubai’s extreme heat puts extra load on AC systems, making regular servicing essential.",
      },
      {
        title: "What are signs my car AC needs repair?",
        description:
          "Weak cooling, bad odor, unusual noises, water leakage, or warm air blowing are common signs of AC issues.",
      },
      {
        title: "Do you provide AC gas refill service?",
        description:
          "Yes. We provide complete AC gas refill with pressure testing to ensure optimal cooling performance.",
      },
      {
        title: "How long does car AC service take?",
        description:
          "Basic AC service takes 30–60 minutes. Major repairs may take longer depending on the issue.",
      },
      {
        title: "Can you repair AC systems for all car brands?",
        description:
          "Yes. We service AC systems for all car brands including luxury and high-performance vehicles.",
      },
      {
        title: "Is AC repair safe for my car?",
        description:
          "Absolutely. Our technicians follow manufacturer guidelines and safety standards during all AC repairs.",
      },
    ],
  },
  {
    id: 10,
    slug: "premium-luxury-car-battery-service-dubai",
    metadata: {
      title: "Premium & Luxury Car Battery Service Dubai | Battery Fix Pro",
      description:
        "Specialized premium & luxury car battery service in Dubai. Expert battery diagnostics, replacement, and installation for high-end vehicles by Battery Fix Pro Dubai.",
      keywords: [
        "luxury car battery service dubai",
        "premium car battery replacement dubai",
        "high end car battery dubai",
        "battery fix pro dubai",
        "luxury vehicle battery service",
      ],
    },

    title: "Premium / Luxury Car Battery Service Dubai",
    sub_title: "Specialized battery service for premium & luxury vehicles",
    icon: FaCrown,

    main: {
      title: "Premium & Luxury Car Battery Service in Dubai",
      description:
        "Luxury and premium vehicles require advanced battery systems and expert handling. At Battery Fix Pro Dubai, our Premium & Luxury Car Battery Service is designed specifically for high-end vehicles, ensuring precise diagnostics, manufacturer-approved batteries, and safe installation. Whether you drive a luxury sedan, sports car, or premium SUV, we deliver reliable power, optimal performance, and complete peace of mind.",
      includes: [
        "Advanced Battery Diagnostics for Luxury Vehicles",
        "OEM & Manufacturer-Approved Battery Options",
        "Professional Battery Replacement & Installation",
        "Electrical System & Voltage Testing",
        "Battery Registration & System Reset",
        "Final Performance & Safety Inspection",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Luxury Car Batteries?",
      items: [
        {
          title: "Luxury Vehicle Specialists",
          description:
            "Our technicians are trained to handle premium and luxury car battery systems safely and accurately.",
          icon: MdEngineering,
        },
        {
          title: "OEM & High-Performance Batteries",
          description:
            "We use genuine and premium-grade batteries designed specifically for luxury vehicles.",
          icon: FaCarBattery,
        },
        {
          title: "Advanced Diagnostic Tools",
          description:
            "We use modern diagnostic equipment to protect sensitive electronics and onboard systems.",
          icon: MdOutlineElectricalServices,
        },
        {
          title: "Safe & Damage-Free Installation",
          description:
            "Battery replacement is performed without affecting vehicle electronics or warranty.",
          icon: AiOutlineSafety,
        },
        {
          title: "All Premium Brands Supported",
          description:
            "We service batteries for German, British, American, and other luxury car brands.",
          icon: FaCrown,
        },
        {
          title: "Trusted Premium Service in Dubai",
          description:
            "Battery Fix Pro Dubai is trusted for delivering reliable, transparent, and high-quality service.",
          icon: LiaToolsSolid,
        },
      ],
    },

    faq: [
      {
        title: "Do luxury cars need special batteries?",
        description:
          "Yes. Luxury vehicles often use AGM or advanced batteries designed to support high electrical loads and complex systems.",
      },
      {
        title: "Can you replace batteries in luxury cars without errors?",
        description:
          "Yes. We perform battery registration and system resets to prevent dashboard errors and electrical issues.",
      },
      {
        title: "Do you use genuine batteries for luxury cars?",
        description:
          "We provide OEM and premium-grade batteries approved for luxury and high-performance vehicles.",
      },
      {
        title: "How long does luxury car battery replacement take?",
        description:
          "Most replacements take 30–60 minutes, depending on vehicle model and battery location.",
      },
      {
        title: "Will battery replacement affect my car warranty?",
        description:
          "No. Our procedures follow manufacturer guidelines, ensuring your warranty remains protected.",
      },
      {
        title: "Do you provide on-site luxury car battery service?",
        description:
          "Yes. We offer mobile premium battery service across Dubai for your convenience.",
      },
    ],
  },
  {
    id: 11,
    slug: "car-engine-repair-rebuild-dubai",
    metadata: {
      title: "Car Engine Repair & Rebuild Service Dubai | Battery Fix Pro",
      description:
        "Professional engine repair & complete engine rebuild service in Dubai. Trusted diagnostics, precision repairs, and long-lasting solutions by Battery Fix Pro Dubai.",
      keywords: [
        "car engine repair dubai",
        "car engine rebuild dubai",
        "car engine overhaul dubai",
        "car engine maintenance service dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Car Engine Repair & Rebuild Dubai",
    sub_title: "Complete engine diagnostics, repair & rebuild service",
    icon: MdEngineering,

    main: {
      title: "Reliable Car Engine Repair & Rebuild Service in Dubai",
      description:
        "Car Engine problems can seriously affect your vehicle’s performance, safety, and fuel efficiency. At Battery Fix Pro Dubai, our Engine Repair & Rebuild Service provides comprehensive diagnostics, precision repairs, and full engine rebuild solutions when required. Whether it’s minor engine issues or complete engine overhauls, our expert technicians ensure long-term reliability and restored performance.",
      includes: [
        "Complete Engine Diagnostic & Inspection",
        "Engine Component Repair & Replacement",
        "Cylinder Head Repair & Gasket Replacement",
        "Full Engine Rebuild & Overhaul",
        "Timing Chain & Belt Repair",
        "Final Engine Testing & Performance Tuning",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Car Engine Repair?",
      items: [
        {
          title: "Expert Car Engine Technicians",
          description:
            "Our skilled mechanics specialize in advanced engine repair and rebuild procedures.",
          icon: MdEngineering,
        },
        {
          title: "Advanced Diagnostic Equipment",
          description:
            "We use modern engine diagnostic tools to identify issues accurately and efficiently.",
          icon: MdOutlineBuildCircle,
        },
        {
          title: "Quality Parts & Components",
          description:
            "Only high-quality and manufacturer-recommended parts are used for repairs and rebuilds.",
          icon: FaTools,
        },
        {
          title: "Cost-Effective Repair Solutions",
          description:
            "We recommend repair or rebuild options that save you money while ensuring reliability.",
          icon: LiaToolsSolid,
        },
        {
          title: "Safety & Performance Focused",
          description:
            "Our repairs prioritize engine safety, smooth performance, and fuel efficiency.",
          icon: AiOutlineSafety,
        },
        {
          title: "Trusted Auto Service in Dubai",
          description:
            "Battery Fix Pro Dubai is known for transparent pricing and dependable workmanship.",
          icon: FaCar,
        },
      ],
    },

    faq: [
      {
        title: "When does an car engine need repair or rebuild?",
        description:
          "Engine repair is suitable for minor issues like leaks or faulty components, while rebuilds are required for severe wear, overheating, or internal damage.",
      },
      {
        title: "What signs indicate engine problems?",
        description:
          "Common signs include knocking sounds, excessive smoke, loss of power, overheating, and warning lights.",
      },
      {
        title: "Is engine rebuild better than engine replacement?",
        description:
          "In many cases, rebuilding an engine is more cost-effective and restores performance without replacing the entire engine.",
      },
      {
        title: "How long does an engine rebuild take?",
        description:
          "Engine rebuild timelines vary but typically take several days depending on damage severity and parts availability.",
      },
      {
        title: "Do you repair all car brands?",
        description:
          "Yes. We service engines for Japanese, European, American, and luxury vehicle brands.",
      },
      {
        title: "Does engine repair improve fuel efficiency?",
        description:
          "Yes. Proper engine repair and tuning restore efficiency, performance, and reliability.",
      },
    ],
  },
  {
    id: 12,
    slug: "car-electrical-repair-dubai",
    metadata: {
      title: "Car Electrical System Repair Dubai | Battery Fix Pro",
      description:
        "Professional car electrical system repair service in Dubai. Expert diagnostics, wiring repair, battery & sensor solutions by Battery Fix Pro Dubai.",
      keywords: [
        "car electrical repair dubai",
        "auto electrical service dubai",
        "car wiring repair dubai",
        "battery electrical issues dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Car Electrical System Repair Dubai",
    sub_title: "complete auto electrical diagnostics & repair service",
    icon: MdElectricalServices,

    main: {
      title: "Reliable Car Electrical System Repair Service in Dubai",
      description:
        "Modern vehicles rely heavily on complex electrical systems to function properly. At Battery Fix Pro Dubai, our Car Electrical System Repair Service ensures accurate diagnostics and professional repairs for all electrical components. From battery-related electrical faults to wiring, sensors, and control modules, we restore your vehicle’s safety, performance, and reliability.",
      includes: [
        "Complete Electrical System Diagnosis",
        "Car Battery & Charging System Repair",
        "Wiring & Fuse Repair",
        "Starter Motor & Alternator Repair",
        "Sensor & Control Module Diagnostics",
        "Electrical Safety Testing & Final Inspection",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Electrical Repairs?",
      items: [
        {
          title: "Certified Auto Electricians",
          description:
            "Our technicians specialize in advanced car electrical systems and diagnostics.",
          icon: MdElectricalServices,
        },
        {
          title: "Advanced Diagnostic Tools",
          description:
            "We use modern scanners and testing equipment for accurate fault detection.",
          icon: MdOutlineSettingsInputComponent,
        },
        {
          title: "Battery & Electrical Expertise",
          description:
            "As Battery Fix Pro Dubai, we are experts in battery and power-related issues.",
          icon: FaCarBattery,
        },
        {
          title: "Quality Repairs & Components",
          description:
            "We use reliable parts and professional repair methods for long-term solutions.",
          icon: LiaToolsSolid,
        },
        {
          title: "Safety-Focused Service",
          description:
            "Electrical repairs are performed with strict safety and reliability standards.",
          icon: AiOutlineSafety,
        },
        {
          title: "Trusted Service Across Dubai",
          description:
            "Customers trust us for transparent pricing and dependable auto electrical repairs.",
          icon: FaBolt,
        },
      ],
    },

    faq: [
      {
        title: "What causes car electrical system problems?",
        description:
          "Electrical issues are commonly caused by battery failure, wiring damage, faulty sensors, blown fuses, or alternator problems.",
      },
      {
        title: "How do I know if my car has an electrical fault?",
        description:
          "Warning lights, flickering lights, difficulty starting, malfunctioning electronics, or battery drain are common signs.",
      },
      {
        title: "Is electrical repair related to battery problems?",
        description:
          "Yes. Many electrical faults originate from weak batteries, charging issues, or poor electrical connections.",
      },
      {
        title: "Can you repair electrical systems for all car brands?",
        description:
          "Yes. We handle electrical repairs for Japanese, European, American, and luxury vehicles.",
      },
      {
        title: "Is it safe to drive with electrical issues?",
        description:
          "No. Electrical faults can affect safety systems, engine performance, and battery charging, so repairs should be done promptly.",
      },
      {
        title: "How long does electrical system repair take?",
        description:
          "Simple electrical fixes may take a few hours, while complex diagnostics can take longer depending on the issue.",
      },
    ],
  },
  {
    id: 13,
    slug: "car-inspection-computer-diagnostics-dubai",
    metadata: {
      title: "Car Inspection & Computer Diagnostics Dubai | Battery Fix Pro",
      description:
        "Professional car inspection and computer diagnostics service in Dubai. Advanced fault detection, battery checks & system analysis by Battery Fix Pro Dubai.",
      keywords: [
        "car inspection dubai",
        "computer diagnostics dubai",
        "car diagnostic scan dubai",
        "vehicle health check dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Car Inspection & Computer Diagnostics Dubai",
    sub_title: "advanced vehicle inspection & fault detection service",
    icon: MdOutlineComputer,

    main: {
      title: "Advanced Car Inspection & Computer Diagnostics Service in Dubai",
      description:
        "At Battery Fix Pro Dubai, our Car Inspection and Computer Diagnostics Service provides a complete health check of your vehicle using advanced diagnostic tools. We accurately detect hidden issues in the engine, battery, electrical systems, sensors, and safety components. Early diagnostics help prevent breakdowns, reduce repair costs, and ensure smooth and safe driving across Dubai.",
      includes: [
        "Full Computerized Diagnostic Scan",
        "Battery & Charging System Inspection",
        "Engine & Transmission Fault Detection",
        "Electrical & Sensor System Analysis",
        "Warning Light & Error Code Diagnosis",
        "Detailed Inspection Report & Expert Advice",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Car Diagnostics?",
      items: [
        {
          title: "Advanced Diagnostic Technology",
          description:
            "We use professional-grade scanners compatible with modern vehicles.",
          icon: MdOutlineComputer,
        },
        {
          title: "Battery & Electrical Specialists",
          description:
            "Our expertise ensures accurate diagnosis of battery-related issues.",
          icon: FaCarBattery,
        },
        {
          title: "Comprehensive Vehicle Inspection",
          description:
            "We check engine, electronics, safety systems, and performance components.",
          icon: MdCarRepair,
        },
        {
          title: "Transparent & Honest Reports",
          description:
            "You receive a clear explanation of issues with no unnecessary repairs.",
          icon: FaSearch,
        },
        {
          title: "Safety & Reliability Focus",
          description:
            "Early fault detection helps prevent accidents and unexpected breakdowns.",
          icon: AiOutlineSafety,
        },
        {
          title: "Trusted Dubai Auto Service",
          description:
            "Battery Fix Pro Dubai is trusted for reliable and accurate diagnostics.",
          icon: LiaToolsSolid,
        },
      ],
    },

    faq: [
      {
        title: "What is car computer diagnostics?",
        description:
          "Computer diagnostics use electronic scanners to read fault codes and identify issues in engine, battery, electrical, and safety systems.",
      },
      {
        title: "When should I get a car inspection done?",
        description:
          "You should get an inspection if warning lights appear, performance drops, before long trips, or as part of routine maintenance.",
      },
      {
        title: "Does diagnostics include battery testing?",
        description:
          "Yes. We check battery health, charging systems, and electrical performance during diagnostics.",
      },
      {
        title: "Can diagnostics detect hidden problems?",
        description:
          "Yes. Many issues that are not visible or noticeable can be detected early through computerized scans.",
      },
      {
        title: "How long does a computer diagnostic take?",
        description:
          "Most diagnostic inspections take 30–60 minutes depending on vehicle type and system complexity.",
      },
      {
        title: "Is diagnostics available for all car brands?",
        description:
          "Yes. We support Japanese, European, American, hybrid, and luxury vehicles.",
      },
    ],
  },
  {
    id: 14,
    slug: "car-auto-parts-dubai",
    metadata: {
      title:
        "Car Auto Parts Dubai | Genuine & Aftermarket Parts | Battery Fix Pro",
      description:
        "Buy genuine and premium aftermarket car auto parts in Dubai. Reliable batteries, electrical, engine & service parts from Battery Fix Pro Dubai.",
      keywords: [
        "car auto parts dubai",
        "car spare parts dubai",
        "genuine car parts dubai",
        "aftermarket auto parts dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Car Auto Parts Dubai",
    sub_title: "genuine & high-quality car spare parts supplier",
    icon: GiAutoRepair,

    main: {
      title: "Reliable Car Auto Parts Supplier in Dubai",
      description:
        "Battery Fix Pro Dubai supplies genuine and premium aftermarket car auto parts for all vehicle types. From car batteries and electrical components to engine and service parts, we ensure quality, compatibility, and long-lasting performance. Our experts help you choose the right parts to keep your vehicle safe, efficient, and road-ready in Dubai’s demanding conditions.",
      includes: [
        "Car Batteries & Electrical Parts",
        "Engine & Mechanical Components",
        "Brake Pads, Discs & Suspension Parts",
        "Filters, Belts & Service Items",
        "OEM & Premium Aftermarket Parts",
        "Expert Parts Matching & Support",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Car Auto Parts?",
      items: [
        {
          title: "Genuine & Certified Parts",
          description:
            "We supply verified OEM and trusted aftermarket auto parts only.",
          icon: MdVerified,
        },
        {
          title: "Battery & Electrical Specialists",
          description:
            "Our core expertise ensures correct battery and electrical part selection.",
          icon: GiCarBattery,
        },
        {
          title: "Wide Range for All Car Brands",
          description:
            "Japanese, European, American, luxury, and hybrid vehicles supported.",
          icon: MdCarRepair,
        },
        {
          title: "Quality & Safety Assured",
          description:
            "All parts meet safety and performance standards for Dubai roads.",
          icon: AiOutlineSafety,
        },
        {
          title: "Expert Technical Guidance",
          description:
            "Our technicians help you choose the right part the first time.",
          icon: LiaToolsSolid,
        },
        {
          title: "Fast Availability in Dubai",
          description:
            "Quick sourcing and availability to minimize vehicle downtime.",
          icon: FaWarehouse,
        },
      ],
    },

    faq: [
      {
        title: "Do you sell genuine car auto parts in Dubai?",
        description:
          "Yes. We offer genuine OEM parts as well as high-quality aftermarket alternatives depending on your budget and vehicle needs.",
      },
      {
        title: "Which car brands do you support?",
        description:
          "We support Japanese, European, American, luxury, and hybrid vehicles across most major brands.",
      },
      {
        title: "Do you sell car batteries?",
        description:
          "Yes. Battery Fix Pro Dubai specializes in car batteries and electrical components for all vehicle types.",
      },
      {
        title: "How do I know the part is compatible with my car?",
        description:
          "Our experts match parts using your vehicle details to ensure perfect compatibility.",
      },
      {
        title: "Are aftermarket parts reliable?",
        description:
          "Premium aftermarket parts from trusted brands offer excellent performance at lower cost compared to OEM parts.",
      },
      {
        title: "Do you provide installation support?",
        description:
          "Yes. We can arrange professional installation and technical assistance if needed.",
      },
    ],
  },
  {
    id: 15,
    slug: "car-steering-repair-service-dubai",
    metadata: {
      title: "Car Steering Repair & Service Dubai | Battery Fix Pro",
      description:
        "Professional car steering repair and service in Dubai. Power steering, alignment & steering system diagnostics by Battery Fix Pro Dubai.",
      keywords: [
        "car steering repair dubai",
        "power steering service dubai",
        "steering system repair dubai",
        "steering alignment dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Car Steering Repair & Service Dubai",
    sub_title: "safe, smooth & responsive steering solutions",
    icon: GiSteeringWheel,

    main: {
      title: "Expert Car Steering Repair & Service in Dubai",
      description:
        "At Battery Fix Pro Dubai, we provide complete car steering repair and service to ensure smooth handling and maximum safety. From power steering issues and alignment problems to worn steering components, our certified technicians diagnose and repair steering systems accurately. Proper steering performance is critical for safe driving, especially on Dubai roads and highways.",
      includes: [
        "Power Steering System Inspection",
        "Steering Rack & Column Repair",
        "Steering Fluid Leak Detection",
        "Wheel Alignment & Steering Calibration",
        "Steering Noise & Vibration Fix",
        "Complete Steering System Diagnostics",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Steering Repair?",
      items: [
        {
          title: "Certified Steering Specialists",
          description:
            "Our technicians are experienced in repairing all types of steering systems.",
          icon: MdCarRepair,
        },
        {
          title: "Advanced Diagnostic Equipment",
          description:
            "We use precise tools to identify steering and alignment issues accurately.",
          icon: MdOutlineSettings,
        },
        {
          title: "Safety-Focused Repairs",
          description:
            "Steering repairs are handled with strict safety and quality standards.",
          icon: AiOutlineSafety,
        },
        {
          title: "Smooth & Responsive Handling",
          description:
            "Our services restore proper steering control and driving comfort.",
          icon: FaCarSide,
        },
        {
          title: "Transparent Service Process",
          description:
            "We explain problems clearly and recommend only necessary repairs.",
          icon: LiaToolsSolid,
        },
        {
          title: "Trusted Auto Service in Dubai",
          description:
            "Battery Fix Pro Dubai is known for reliable and professional car care.",
          icon: GiSteeringWheel,
        },
      ],
    },

    faq: [
      {
        title: "What are signs of steering problems?",
        description:
          "Common signs include hard steering, unusual noises, vibrations, fluid leaks, or the vehicle pulling to one side.",
      },
      {
        title: "Is power steering repair expensive?",
        description:
          "Costs depend on the issue. Minor fluid leaks are affordable, while major component repairs may cost more.",
      },
      {
        title: "How often should steering be checked?",
        description:
          "Steering systems should be inspected during regular servicing or if handling feels unusual.",
      },
      {
        title: "Can I drive with a steering problem?",
        description:
          "Driving with steering issues is unsafe and can lead to accidents or further damage.",
      },
      {
        title: "Do you service all car brands?",
        description:
          "Yes. We repair steering systems for Japanese, European, American, luxury, and hybrid vehicles.",
      },
      {
        title: "How long does steering repair take?",
        description:
          "Most steering repairs take a few hours, depending on the complexity of the issue.",
      },
    ],
  },
  {
    id: 16,
    slug: "vehicle-modification-dubai",
    metadata: {
      title:
        "Vehicle Modification Dubai | Custom Car Upgrades | Battery Fix Pro",
      description:
        "Professional vehicle modification and custom car upgrade services in Dubai. Enhance performance, style, and functionality with Battery Fix Pro Dubai.",
      keywords: [
        "vehicle modification dubai",
        "custom car upgrades dubai",
        "car tuning dubai",
        "car performance upgrade dubai",
        "battery fix pro dubai",
      ],
    },

    title: "Vehicle Modification Dubai",
    sub_title: "custom upgrades for performance, style & comfort",
    icon: MdBuild,

    main: {
      title: "Expert Vehicle Modification & Customization Service in Dubai",
      description:
        "Battery Fix Pro Dubai provides professional vehicle modification services to enhance your car’s performance, style, and comfort. From engine tuning and suspension upgrades to aesthetic modifications and electrical enhancements, our certified technicians deliver reliable and safe customizations tailored to your vehicle and driving preferences.",
      includes: [
        "Engine Tuning & Performance Optimization",
        "Suspension & Handling Upgrades",
        "Custom Lighting & Electrical Modifications",
        "Body Kits & Exterior Enhancements",
        "Interior Upgrades & Comfort Features",
        "Wheel & Tire Customization",
      ],
    },

    whyChoose: {
      title: "Why Choose Battery Fix Pro for Vehicle Modification?",
      items: [
        {
          title: "Certified Modification Experts",
          description:
            "Our team specializes in safe and high-quality car modifications.",
          icon: MdOutlineCarRepair,
        },
        {
          title: "Performance & Safety Focused",
          description:
            "All modifications are designed to improve performance without compromising safety.",
          icon: AiOutlineSafety,
        },
        {
          title: "Custom Tailored Solutions",
          description:
            "We provide personalized modification plans for your car brand and model.",
          icon: GiCarWheel,
        },
        {
          title: "Quality Parts & Materials",
          description:
            "We use only trusted parts and materials to ensure durability and reliability.",
          icon: LiaToolsSolid,
        },
        {
          title: "Enhanced Driving Experience",
          description:
            "Modifications improve comfort, handling, and overall driving enjoyment.",
          icon: FaCarSide,
        },
        {
          title: "Trusted Service in Dubai",
          description:
            "Battery Fix Pro Dubai is known for professional, reliable, and transparent vehicle modifications.",
          icon: MdBuild,
        },
      ],
    },

    faq: [
      {
        title: "What types of vehicle modifications do you provide?",
        description:
          "We offer engine tuning, suspension upgrades, custom lighting, body kits, interior enhancements, and wheel modifications.",
      },
      {
        title: "Are vehicle modifications safe?",
        description:
          "Yes. All modifications are performed by certified technicians following strict safety standards.",
      },
      {
        title: "Can you modify all car brands?",
        description:
          "Yes. We provide vehicle modification services for Japanese, European, American, luxury, and hybrid vehicles.",
      },
      {
        title: "How long does a modification take?",
        description:
          "Timeline depends on modification type. Simple upgrades may take hours, major customizations may take days.",
      },
      {
        title: "Do you provide performance tuning?",
        description:
          "Yes. We optimize engine performance, suspension, and handling for better driving experience.",
      },
      {
        title: "Can I customize the car’s interior?",
        description:
          "Yes. We offer interior upgrades including seats, trims, lighting, and comfort features.",
      },
    ],
  },
];

export default servicesDetailsData;
