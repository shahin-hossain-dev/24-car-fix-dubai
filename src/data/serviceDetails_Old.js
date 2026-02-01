import { GiAutoRepair } from "react-icons/gi";
import { MdCarRepair, MdOutlineTireRepair } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineSafety } from "react-icons/ai";

const servicesDetailsData = [
  {
    id: 1,
    slug: "general-car-repair-dubai",
    metadata: {
      title: "Best General Car Repair & Maintenance Packages Dubai",
      description:
        "Secure your vehicle's performance with guaranteed general repair and maintenance packages in Dubai. Precision service from certified mechanics.",
      keywords: [
        "car repair in dubai",
        "car repair service in dubai",
        "types of car repair services",
        "car maintenance service package in dubai",
        "best car garage in dubai",
      ],
    },
    title: "General Car Repair Dubai",
    sub_title: "professional general car repair service",
    icon: GiAutoRepair,
    main: {
      title: "Reliable General Car Repair Service in Dubai",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval.",
      includes: [
        "Alternator Fixing",
        "Starter Motor Repair",
        "Window Motor Repair",
        "Mobile Car Mechanic",
      ],
    },

    whyChoose: {
      title: "Why Choose One Title",
      items: [
        {
          title: "Why Choose One Title",
          description: "Why choose one description",
          icon: MdCarRepair,
        },
        {
          title: "Why Choose Two Title",
          description: "<p>Why choose one description</p>",
          icon: MdOutlineTireRepair,
        },
        {
          title: "Why Choose Two Title",
          description: "Why choose one description",
          icon: LiaToolsSolid,
        },
        {
          title: "Why Choose Two Title",
          description: "Why choose one description",
          icon: AiOutlineSafety,
        },
      ],
    },
    faq: [
      {
        title: "How often should I service my car in Dubai? ",
        description:
          "Service your vehicle every 10,000 kilometers or six months, whichever comes first. Dubai's extreme heat and dusty conditions accelerate wear requiring more frequent maintenance than moderate climates. Manufacturer recommendations provide baseline intervals. Severe driving conditions demand shorter intervals. Regular service prevents expensive repairs and maintains reliability. Neglecting maintenance voids warranties and causes premature failures.",
      },
      {
        title: "What's included in a full car service? ",
        description:
          "Full service includes oil change, filter replacements, fluid top-ups, brake inspection, tire rotation, and multi-point inspection covering all major systems. We check belts, hoses, lights, wipers, and battery condition. Major services add spark plugs, transmission fluid, coolant flush, and timing belt inspection. Service scope varies by vehicle age and mileage. We provide detailed checklists explaining exactly what's included.",
      },
      {
        title: "How do I know if a repair is necessary?",
        description:
          "Necessary repairs address safety concerns, prevent further damage, or restore proper function. We explain problems clearly, show damaged parts when possible, and prioritize repairs by urgency. Safety issues need immediate attention. Preventive maintenance avoids expensive failures. Cosmetic issues can wait. We never pressure unnecessary services. Second opinions are welcome for expensive repairs.",
      },
      {
        title: "Can you repair all car brands?",
        description:
          "Yes, our technicians repair all vehicle makes including Japanese, European, American, and Korean brands. We have brand-specific diagnostic tools, access to technical information, and experience across multiple manufacturers. Exotic or rare vehicles may require specialized parts or longer repair times. We're honest about limitations referring specialized work when appropriate.",
      },
      {
        title: "Do you use genuine or aftermarket parts?",
        description:
          "We offer both options depending on your preference and budget. Genuine OEM parts guarantee exact fit and quality but cost more. Premium aftermarket parts from reputable brands perform comparably at lower prices. We never use cheap, substandard parts compromising quality. We explain differences and recommend best options for your situation and budget constraints.",
      },
      {
        title: "How long do repairs typically take?",
        description:
          "Simple repairs like oil changes or brake pads take hours. Major repairs including engine or transmission work need days or weeks depending on complexity and parts availability. We provide accurate time estimates after diagnosis. Delays happen occasionally due to unexpected complications or parts shortages. We communicate promptly keeping you informed throughout repairs.",
      },
      {
        title: "What if repairs cost more than estimated?",
        description:
          "We contact you immediately if additional problems appear during repairs or costs exceed original estimates. You approve all additional work before we proceed. Estimates cover diagnosed problems only. Hidden damage sometimes appears after disassembly. We explain reasons for cost increases and provide options. Your approval is always required for scope or price changes.",
      },
    ],
  },
  

];

export default servicesDetailsData;

// const servicesDetailsData = [
//   {
//     id: 1,
//     slug: "general-car-repair-dubai",
//     title: "General Car Repair",
//     sub_title: "Reliable General Car Repair in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers comprehensive general car repair and maintenance services for all vehicle types across Dubai. Our certified technicians diagnose and repair automotive problems using quality parts and proven techniques. You get transparent pricing, honest assessments, and reliable solutions at every visit. We understand your vehicle needs regular care maintaining safety, performance, and dependability completely. Visit our workshop for professional repair services keeping your car running smoothly on every journey.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1760889421/general_car_reapir_v5rjtl.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     featureTitle: "General Car Repair and Maintenance Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-1.png",
//         title: "Engine Diagnostics and Inspection",
//         description:
//           "We scan engine computers, test sensors, and inspect components identifying problems causing performance issues or warning lights.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-1.png",
//         title: "Brake Repair and Replacement",
//         description:
//           "Our technicians repair or replace brake pads, rotors, calipers, and hydraulic components restoring safe, reliable stopping power.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-1.png",
//         title: "Suspension and Steering Service",
//         description:
//           "We repair shocks, struts, control arms, and steering components eliminating noise, improving handling, and restoring smooth rides.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-1.png",
//         title: "Transmission Repair and Fluid Change",
//         description:
//           "We diagnose transmission problems, replace fluids, repair leaks, and service components maintaining smooth shifting and reliable delivery.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-1.png",
//         title: "Electrical System Diagnostics",
//         description:
//           "We test electrical circuits, identify shorts, repair wiring, and replace faulty components solving electrical problems across systems.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-1.png",
//         title: "Battery Testing and Replacement",
//         description:
//           "Our team tests battery health, charging systems, and electrical loads, then replaces weak batteries with quality units.",
//       },
//       {
//         id: 7,
//         image: "/images/icons/icon-1.png",
//         title: "Air Conditioning Service and Repair",
//         description:
//           "We repair AC compressors, fix refrigerant leaks, recharge systems, and restore ice-cold air maintaining cabin comfort always.",
//       },
//       {
//         id: 8,
//         image: "/images/icons/icon-1.png",
//         title: "Oil and Filter Change",
//         description:
//           "Our car maintenance service package includes draining old oil completely, installing new filters, and refilling with correct types.",
//       },
//       {
//         id: 9,
//         image: "/images/icons/icon-1.png",
//         title: "Exhaust and Muffler Repair",
//         description:
//           "We repair exhaust leaks, replace damaged mufflers, and fix catalytic converters eliminating noise, emissions problems, and losses.",
//       },
//       {
//         id: 10,
//         image: "/images/icons/icon-1.png",
//         title: "Tire Balancing and Wheel Alignment",
//         description:
//           "We balance wheels precisely and align suspension geometry to manufacturer specifications eliminating vibrations preventing uneven wear.",
//       },
//       {
//         id: 11,
//         image: "/images/icons/icon-1.png",
//         title: "Radiator and Cooling System Service",
//         description:
//           "We repair radiators, replace thermostats, service water pumps, and flush coolant maintaining proper engine temperatures preventing damage.",
//       },
//       {
//         id: 12,
//         image: "/images/icons/icon-1.png",
//         title: "Vehicle Safety and Performance Check",
//         description:
//           "Best car garage in Dubai inspects critical systems including brakes, steering, and suspension identifying various types of car repair services needed.",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     metadata: {
//       title: "Best General Car Repair & Maintenance Packages Dubai",
//       description:
//         "Secure your vehicle's performance with guaranteed general repair and maintenance packages in Dubai. Precision service from certified mechanics.",
//       keywords: [
//         "car repair in dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package in dubai",
//         "best car garage in dubai",
//       ],
//     },

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],

//     appointment: {
//       title: "Book Your General Car Repair in Dubai Today",
//       description:
//         "Your vehicle needs regular maintenance and prompt repairs maintaining reliability, safety, and performance on Dubai roads. Caroto Repair Dubai specializes in comprehensive automotive services delivering quality workmanship and honest service. Contact us now to schedule your repair appointment and drive confidently knowing your vehicle receives expert care.",
//       guarantee:
//         "Schedule Your General Car Repair Service Now (Full Warranty Protection Included)",
//     },
//     guaranteed: {
//       title: "What to Expect During a General Car Repair Service",
//       description:
//         "Our repair service examines your vehicle completely through systematic inspection and testing. You get honest findings, clear explanations, and prioritized recommendations. We never recommend unnecessary repairs or replace parts without proper diagnostic confirmation.",
//       contents: [
//         "Comprehensive vehicle inspection examining all major systems including engine, transmission, brakes, suspension, and electrical components thoroughly",
//         "Computer diagnostics scanning all control modules reading fault codes and analyzing sensor data identifying electronic system problems",
//         "Road test evaluation assessing vehicle performance, handling, braking, and unusual symptoms under actual driving conditions accurately",
//         "Fluid inspection checking oil, coolant, brake fluid, transmission fluid, and power steering fluid for contamination or low levels",
//       ],
//     },
//     additionalOne: {
//       title: "Common Signs You Need General Car Repair in Dubai",
//       description: `<p>Your vehicle communicates problems through warning lights, sounds, and performance changes. Recognizing these symptoms prevents breakdowns and expensive damage. Never ignore these critical indicators:</p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Warning lights illuminate on dashboard constantly</li>
//         <li>Strange noises or vibrations occur during driving</li>
//         <li>Engine loses power or burns excessive fuel</li>
//         <li>Fluid puddles appear under parked vehicle</li>
//         <li>Steering feels heavy or brakes respond slowly</li>
//         <li>Tires wear unevenly or vehicle pulls sideways</li>
//     </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125054/1021_gyhapk.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "Complete Car Repair and Maintenance at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-4.png",
//           title: "Certified Master Technicians",
//           description:
//             "Our mechanics hold professional certifications and complete ongoing training maintaining expertise across all vehicle systems and modern technologies.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-4.png",
//           title: "Advanced Diagnostic Equipment",
//           description:
//             "You get professional scanners, testing tools, and specialized equipment identifying problems accurately without guesswork or unnecessary part replacement.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-4.png",
//           title: "Quality OEM Parts",
//           description:
//             "We install genuine manufacturer parts or premium aftermarket components meeting original specifications delivering reliable performance and proper fitment.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-4.png",
//           title: "Transparent Pricing Always",
//           description:
//             "Every estimate includes detailed breakdowns showing parts costs, labor charges, and fees with no surprise expenses appearing later.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-4.png",
//           title: "Comprehensive Service Warranty",
//           description:
//             "All repairs include warranty coverage protecting parts and workmanship giving you peace of mind and investment protection completely. *Warranty terms vary based on repair type and parts used.",
//         },
//       ],
//     },

//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable General Car Repair Service",
//       deliverServices: [
//         {
//           id: 1,
//           title: "Step 1: Vehicle Inspection",
//           description:
//             "We inspect your vehicle thoroughly, scan computer systems, test components, and identify all problems accurately before recommending any repairs.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: "Step 2: Service Estimate and Approval",
//           description:
//             "Our technicians explain findings clearly, recommend necessary repairs, prioritize urgent issues, and provide detailed quotes before starting any work.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: "Step 3: Repair and Replacement Work",
//           description:
//             "We perform repairs using quality parts, proper procedures, and correct torque specifications maintaining vehicle safety, reliability, and performance standards.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: "Step 4: Final Testing and Quality Review",
//           description:
//             "We test drive vehicles, verify all repairs function correctly, inspect workmanship quality, and ensure your complete satisfaction before delivery.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Dubai Trust Caroto for General Car Repair",
//       whyTrustItems: [
//         {
//           id: 1,
//           image: "/images/icons/icon-10.png",
//           title: "Experienced Repair Team",
//           description:
//             "Our certified mechanics repair all vehicle systems across multiple brands with years of hands-on experience solving complex automotive problems.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-10.png",
//           title: "Complete Diagnostic Service",
//           description:
//             "We use advanced scanners and testing equipment identifying root causes accurately preventing misdiagnosis and unnecessary part replacement completely.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-10.png",
//           title: "Honest Repair Advice",
//           description:
//             "You receive truthful assessments prioritizing safety-critical repairs without pressure selling unnecessary services or inflating repair recommendations for profit.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-10.png",
//           title: "Fast Service Delivery",
//           description:
//             "Most repairs complete same-day or next-day. We stock common parts for popular vehicles and prioritize urgent repairs minimizing downtime.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-10.png",
//           title: "Detailed Service Records",
//           description:
//             "We maintain comprehensive service history tracking all repairs, parts replaced, and maintenance performed for warranty claims and reference purposes.",
//         },
//       ],
//     },
//     additionalTwo: {
//       title: "Precision, Safety, and Performance: The Caroto Standard",
//       description: `<p>Caroto Repair Dubai maintains strict quality standards for all automotive repairs we perform. Our technicians understand mechanical systems, electronic controls, and modern vehicle technologies completely. We handle routine maintenance, complex diagnostics, and major repairs with precision. Your vehicle receives proper parts, correct procedures, and thorough testing. We work on economy cars, luxury sedans, SUVs, and commercial vehicles daily. Our repair expertise delivers reliable solutions, lasting fixes, and maintained vehicle value through professional service excellence.</p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125258/1022_ukp8ob.webp",
//     },
//     faq: [
//       {
//         title: "How often should I service my car in Dubai? ",
//         description:
//           "Service your vehicle every 10,000 kilometers or six months, whichever comes first. Dubai's extreme heat and dusty conditions accelerate wear requiring more frequent maintenance than moderate climates. Manufacturer recommendations provide baseline intervals. Severe driving conditions demand shorter intervals. Regular service prevents expensive repairs and maintains reliability. Neglecting maintenance voids warranties and causes premature failures.",
//       },
//       {
//         title: "What's included in a full car service? ",
//         description:
//           "Full service includes oil change, filter replacements, fluid top-ups, brake inspection, tire rotation, and multi-point inspection covering all major systems. We check belts, hoses, lights, wipers, and battery condition. Major services add spark plugs, transmission fluid, coolant flush, and timing belt inspection. Service scope varies by vehicle age and mileage. We provide detailed checklists explaining exactly what's included.",
//       },
//       {
//         title: "How do I know if a repair is necessary?",
//         description:
//           "Necessary repairs address safety concerns, prevent further damage, or restore proper function. We explain problems clearly, show damaged parts when possible, and prioritize repairs by urgency. Safety issues need immediate attention. Preventive maintenance avoids expensive failures. Cosmetic issues can wait. We never pressure unnecessary services. Second opinions are welcome for expensive repairs.",
//       },
//       {
//         title: "Can you repair all car brands?",
//         description:
//           "Yes, our technicians repair all vehicle makes including Japanese, European, American, and Korean brands. We have brand-specific diagnostic tools, access to technical information, and experience across multiple manufacturers. Exotic or rare vehicles may require specialized parts or longer repair times. We're honest about limitations referring specialized work when appropriate.",
//       },
//       {
//         title: "Do you use genuine or aftermarket parts?",
//         description:
//           "We offer both options depending on your preference and budget. Genuine OEM parts guarantee exact fit and quality but cost more. Premium aftermarket parts from reputable brands perform comparably at lower prices. We never use cheap, substandard parts compromising quality. We explain differences and recommend best options for your situation and budget constraints.",
//       },
//       {
//         title: "How long do repairs typically take?",
//         description:
//           "Simple repairs like oil changes or brake pads take hours. Major repairs including engine or transmission work need days or weeks depending on complexity and parts availability. We provide accurate time estimates after diagnosis. Delays happen occasionally due to unexpected complications or parts shortages. We communicate promptly keeping you informed throughout repairs.",
//       },
//       {
//         title: "What if repairs cost more than estimated?",
//         description:
//           "We contact you immediately if additional problems appear during repairs or costs exceed original estimates. You approve all additional work before we proceed. Estimates cover diagnosed problems only. Hidden damage sometimes appears after disassembly. We explain reasons for cost increases and provide options. Your approval is always required for scope or price changes.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About General Car Repair in Dubai?",
//       description:
//         "Our repair specialists answer all your concerns and provide expert guidance for every automotive service need. Contact Caroto Repair Dubai now to discuss your vehicle problems and schedule your service appointment today.",
//     },

//     location: {
//       title: "General Car Repair Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your general car repair needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 2,
//     slug: "car-brake-repair-dubai",
//     title: "Professional Brake Repair Dubai",
//     sub_title: "Best Brakes Repair Service In Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers expert brake repair solutions across all vehicle makes and models. Our certified mechanics use advanced diagnostic equipment to identify brake issues quickly. You get transparent pricing, genuine parts, and precision workmanship at every visit. We handle brake pad replacements, rotor resurfacing, fluid changes, and complete system overhauls. Your safety drives our commitment to quality. Visit our Dubai workshop for reliable brake services that keep your vehicle stopping smoothly on every journey.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763125861/1023_s7sgnn.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     featureTitle: "Our Comprehensive Brake Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Fluid Exchange",
//         description:
//           "We drain old brake fluid and refill it with fresh fluid to maintain optimal braking power and response.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Inspection",
//         description:
//           "Our technicians examine your entire brake system to detect wear, damage, or performance issues before they escalate.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Pad Replacement",
//         description:
//           "Our brake pad replacement service uses quality components to restore your vehicle's stopping capability with precision and care.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Rotor or Drum Machining",
//         description:
//           "We resurface rotors and drums to eliminate grooves, warping, and uneven surfaces for smoother, quieter braking performance.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-2.png",
//         title: "ABS System Diagnosis & Repair",
//         description:
//           "Our diagnostic tools identify ABS faults quickly. We repair sensors, modules, and components to restore anti-lock functionality.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Line & Hose Replacement",
//         description:
//           "We replace damaged or deteriorating brake lines and hoses to prevent leaks and maintain consistent hydraulic pressure throughout.",
//       },
//       {
//         id: 7,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Caliper Repair or Replacement",
//         description:
//           "We fix or replace faulty calipers that cause uneven braking, pulling, or reduced stopping power on your vehicle.",
//       },
//       {
//         id: 8,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Master Cylinder Service",
//         description:
//           "We repair or replace master cylinders to restore proper brake pedal feel and maintain hydraulic pressure distribution effectively.",
//       },
//       {
//         id: 9,
//         image: "/images/icons/icon-2.png",
//         title: "Electronic Parking Brake Calibration",
//         description:
//           "We calibrate electronic parking brake systems using specialized equipment to guarantee proper engagement and release every time.",
//       },
//       {
//         id: 10,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Pad Replacement Dubai",
//         description:
//           "Get professional brake pad replacement dubai services with transparent pricing and same-day completion at Caroto Repair workshops.",
//       },
//       {
//         id: 11,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Pad Replacement Cost Dubai",
//         description:
//           "Our brake pad replacement cost Dubai stays competitive without compromising quality. Request your free quote before any work begins.",
//       },
//       {
//         id: 12,
//         image: "/images/icons/icon-2.png",
//         title: "Brake Pads and Discs Replacement",
//         description:
//           "Complete brake pads and discs replacement service restores full braking power using genuine parts backed by comprehensive warranty coverage.",
//       },
//       {
//         id: 13,
//         image: "/images/icons/icon-2.png",
//         title: "Car Brake Pad Replacement",
//         description:
//           "Expert car brake pad replacement for all vehicle makes and models with certified technicians and advanced diagnostic equipment available.",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     metadata: {
//       title: "Car Brake Repair and replacement in Dubai ",
//       description:
//         "Expert brake repair Dubai, disc resurfacing & brake pad replacement services.Solve noisy brakes, improve safety and drive smooth with trusted repair in Dubai.",
//       keywords: [
//         "Professional Brake Repair in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Signs Your Car Needs Immediate Brake Attention",
//       description: `<p>Your brakes communicate problems before they become dangerous failures. Recognizing these warning signs protects you from costly repairs and serious accidents. Never ignore these critical symptoms:</p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Loud squealing or metal grinding</li>
//         <li>Dangerously soft or spongy pedal</li>
//         <li>Car pulls violently to one side</li>
//         <li>Brake warning light flashes constantly</li>
//         <li>Burning smell from your wheels</li>
//         <li>Severe vibrations during braking</li>
//         <li>Stopping takes much longer now</li>
//     </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125862/1024_zizzaf.webp",
//     },
//     includeServices: {
//       includeServicesTitle: "All-Inclusive Brake Care at Caroto Repair Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "Complete Multi-Point Brake Inspection",
//           description:
//             "We examine every brake component to detect wear, leaks, and potential failures before they compromise your safety.",
//           image: "/images/icons/icon-4.png",
//         },
//         {
//           id: 2,
//           title: "Genuine OEM and Premium Aftermarket Parts",
//           description:
//             "You get authentic manufacturer parts or high-grade alternatives that match original specifications for reliable performance.",
//           image: "/images/icons/icon-4.png",
//         },
//         {
//           id: 3,
//           title: "Expert Diagnostics by Trained Specialists",
//           description:
//             "Our certified technicians use advanced tools to pinpoint exact brake issues and deliver accurate repair solutions quickly.",
//           image: "/images/icons/icon-4.png",
//         },
//         {
//           id: 4,
//           title: "Warranty Coverage on All Brake Components",
//           description:
//             "We back our brake repairs with comprehensive warranty protection that covers parts and labor for your peace of mind.",
//           image: "/images/icons/icon-4.png",
//         },
//         {
//           id: 5,
//           title: "24/7 Emergency Brake Repair Availability",
//           description:
//             "Call us anytime for urgent brake problems. We respond immediately to keep you safe on Dubai roads day or night.",
//           image: "/images/icons/icon-4.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Professional Brake Service Appointment Today",
//       description:
//         "Your brakes need expert attention to maintain peak stopping power. Caroto Repair Dubai delivers fast, affordable brake repairs that save you money on costly replacements. Book your brake service now and drive safely without breaking your budget.",
//       guarantee:
//         "Schedule Your Expert Brake Repair Service Now (Full Warranty Protection on All Repairs)",
//     },
//     deliverServices: {
//       deliverTitle: "The Caroto Approach to Reliable Brake Service in Dubai",
//       deliverServices: [
//         {
//           id: 1,
//           title: "Step 1: Inspection & Diagnosis",
//           description:
//             "Our technicians examine your brake system thoroughly, identify all issues, and provide clear repair recommendations with upfront pricing.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: "Step 2: Expert Servicing",
//           description:
//             "We use genuine parts and precision tools to repair or replace brake components quickly and restore optimal performance.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: "Step 3: Real-Time Updates",
//           description:
//             "You receive direct communication about your repair progress, parts used, and completion time throughout the entire service process.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: "Step 4: Final Check & After-Service Care",
//           description:
//             "We test your brakes rigorously before delivery and provide maintenance guidance to maximize your brake system's lifespan ahead.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle:
//         "Where Our Brake Repair Service Excellence Meets Reliability",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Certified Brake Specialists",
//           description:
//             "Our certified mechanics diagnose brake problems accurately and deliver precision repairs backed by years of experience across all brands.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 2,
//           title: "Advanced Diagnostic Equipment",
//           description:
//             "We use cutting-edge diagnostic scanners to identify ABS faults, sensor issues, and hydraulic failures that other workshops often miss completely.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 3,
//           title: "Transparent Upfront Pricing",
//           description:
//             "You receive detailed quotes showing parts costs and labor charges before work begins. No hidden fees ever appear on bills.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 4,
//           title: "Same-Day Service Available",
//           description:
//             "Most brake repairs finish within hours. We stock common brake parts for popular Dubai vehicle models and prioritize emergencies immediately.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 5,
//           title: "Genuine Parts & Warranty",
//           description:
//             "We install OEM or premium aftermarket components meeting original standards. Every part includes manufacturer backing and our comprehensive service guarantee.",
//           image: "/images/icons/icon-10.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What To Expect From a Caroto Brake Inspection",
//       description:
//         "Our brake inspection reveals the true condition of your entire braking system. You get honest assessments, detailed findings, and clear repair options. We never push unnecessary services or hide problems.",
//       contents: [
//         "Complete visual examination of pads, rotors, calipers, and brake lines for wear or damage",
//         "Brake fluid quality testing to check contamination levels and moisture content accurately",
//         "Electronic diagnostics scanning for ABS sensors, modules, and system error codes",
//         "Test drive evaluation to assess brake response, pedal feel, and stopping performance",
//         "Written report with photos showing actual brake component condition and recommended repairs",
//       ],
//     },

//     additionalTwo: {
//       title: "We Master Brakes So You Can Drive with Confidence",
//       description: `<p>Caroto Repair Dubai specializes exclusively in brake system excellence across all vehicle types. Our technicians understand hydraulic pressure dynamics, caliper piston mechanics, and ABS modulator functions completely. We diagnose brake fade, rotor warping, and master cylinder failures with precision. Your vehicle receives expert attention whether it needs pad replacement, brake line bleeding, or complete system overhauls. We work on disc brakes, drum brakes, and electronic parking brake systems daily. Our brake expertise translates directly into safer stops and longer-lasting repairs for your Dubai journeys.</p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125861/1025_wgq9m0.webp",
//     },

//     commitment: {
//       title: "The Caroto Commitment – Excellence in Every Stop",
//       description:
//         "Your safety matters most to us. Caroto Repair Dubai commits to delivering precise brake repairs using quality parts and proven techniques. We stand behind every service with comprehensive warranties and honest communication. Book your brake inspection today at our Dubai workshop. Call 0568 587 348 now or schedule online instantly. Experience brake service that protects your journeys and earns your trust completely.",
//       contents: [],
//     },

//     faq: [
//       {
//         id: 1,
//         title:
//           "How long do brake pads typically last in Dubai's driving conditions?",
//         description:
//           "Brake pad lifespan varies between 30,000 to 70,000 kilometers depending on your driving habits and vehicle type. Dubai's stop-and-go traffic and extreme heat accelerate brake wear significantly. Heavy vehicles and aggressive braking reduce pad life further. We recommend inspections every 10,000 kilometers to monitor wear patterns and prevent rotor damage.",
//       },
//       {
//         id: 2,
//         title: "Can I drive my car if the brake warning light comes on?",
//         description:
//           "Never ignore a brake warning light. It indicates low brake fluid, worn pads, or ABS system malfunctions. Continuing to drive risks complete brake failure and serious accidents. Pull over safely and contact us immediately. We offer emergency brake services 24/7 to diagnose and repair the issue before you drive again.",
//       },
//       {
//         id: 3,
//         title: "What causes my steering wheel to shake when braking?",
//         description:
//           "Steering wheel vibrations during braking usually mean warped brake rotors. Heat from repeated hard braking causes rotors to develop uneven surfaces. Worn suspension components or unbalanced wheels also create similar symptoms. Our technicians measure rotor thickness and runout precisely. We either resurface or replace rotors based on manufacturer specifications and actual condition.",
//       },
//       {
//         id: 4,
//         title: "How much does a complete brake service cost in Dubai?",
//         description:
//           "Brake service costs depend on your vehicle make, required repairs, and parts quality. Basic pad replacement starts affordably. Complete system overhauls with rotors, calipers, and fluid cost more. We provide free inspections and detailed quotes before any work begins. Our transparent pricing shows exact parts costs and labor charges with no hidden fees added later.",
//       },
//       {
//         id: 5,
//         title: "Do you service brakes for luxury and European vehicles?",
//         description:
//           "Yes, we specialize in brake repairs for German, British, French, and luxury brands. Our technicians receive training on premium vehicle brake systems including Mercedes, BMW, Audi, and Range Rover. We stock or quickly source OEM brake components for high-end vehicles. Your luxury car receives the same expert care and precision it deserves at competitive prices.",
//       },
//       {
//         id: 6,
//         title: "What's the difference between brake pads and brake shoes?",
//         description:
//           "Brake pads work with disc brake systems found on most modern vehicles. They press against spinning rotors to create friction. Brake shoes operate inside drum brake systems, typically on rear wheels of older vehicles. Shoes push outward against drums to generate stopping power. Most cars today use disc brakes on all four wheels for better performance.",
//       },
//       {
//         id: 7,
//         title: "How often should I replace my brake fluid?",
//         description:
//           "Replace brake fluid every two years or 40,000 kilometers, whichever comes first. Brake fluid absorbs moisture over time, reducing its boiling point and causing corrosion. Contaminated fluid leads to spongy pedals, brake fade, and component damage. We test fluid condition during inspections and recommend replacement when moisture content exceeds safe levels for your braking system.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Your Brake Repair Needs?",
//       description:
//         "Our brake specialists answer all your concerns and provide expert guidance for every repair. Contact Caroto Repair Dubai now to discuss your vehicle's brake problems and schedule your service appointment today.",
//     },

//     location: {
//       title: "Our Service Locations",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your brake repair needs quickly.",
//     },
//   },
//   {
//     id: 3,
//     slug: "car-oil-change-dubai",
//     title: "Professional Car Oil Change Dubai",
//     sub_title: "Dubai’s Fast, Reliable Car Oil Change in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers quick and professional oil change services for all vehicle types across Dubai. Our certified technicians use premium oils and genuine filters to keep your engine running smoothly. You get transparent pricing, fast turnaround times, and expert care at every visit. We understand Dubai's extreme heat demands regular oil maintenance. Visit our workshop for efficient oil changes that protect your engine and extend its lifespan significantly.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763126590/1026_ippifr.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     featureTitle: "Our Full-Range Oil Change & Maintenance Services in Dubai",
//     features: [
//       {
//         id: 1,
//         title: "Engine Oil Change",
//         description:
//           "We drain old engine oil completely and refill with fresh oil matching your vehicle's exact specifications and requirements.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 2,
//         title: "Oil Filter Replacement",
//         description:
//           "Our technicians install new oil filters to trap contaminants and keep your engine oil clean throughout its service life.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 3,
//         title: "Air Filter Replacement",
//         description:
//           "We replace clogged air filters to improve engine breathing, fuel efficiency, and overall performance in Dubai's dusty conditions.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 4,
//         title: "Cabin Filter Replacement",
//         description:
//           "Fresh cabin filters keep your AC system clean and air quality high by blocking dust, pollen, and pollutants effectively.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 5,
//         title: "Synthetic Oil Change",
//         description:
//           "We drain conventional oil and fill your engine with premium synthetic oil for superior heat protection and performance.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 6,
//         title: "Mineral Oil Change",
//         description:
//           "Our technicians replace old oil with quality mineral oil that provides reliable lubrication for older vehicles at competitive prices.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 7,
//         title: "High-Mileage Oil Service",
//         description:
//           "We use specialized high-mileage oil formulas to reduce leaks, condition seals, and protect engines with over 75,000 kilometers.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 8,
//         title: "Oil Leak Inspection & Repair",
//         description:
//           "We locate oil leaks using thorough inspections, then repair gaskets, seals, or pans to stop fluid loss completely.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 9,
//         title: "Oil Pressure & Level Check",
//         description:
//           "Our technicians measure oil pressure accurately and verify proper oil levels to detect potential engine problems before damage occurs.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 10,
//         title: "Fluids Top-Up (Coolant, Brake, Power Steering)",
//         description:
//           "We inspect and refill essential fluids including coolant, brake fluid, and power steering fluid to maintain optimal vehicle performance.",
//         image: "/images/icons/icon-3.png",
//       },
//       {
//         id: 11,
//         title: "Oil Flush & Cleaning Service",
//         description:
//           "We circulate a cleaning solution through your engine to remove sludge and deposits before filling with fresh clean oil.",
//         image: "/images/icons/icon-3.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     metadata: {
//       title: "Rapid & Certified Oil Change Service in Dubai",
//       description:
//         "Quick car oil change in Dubai with premium oils and filters. Protect your engine with expert service, fair prices, and same-day appointments. Book now.",
//       keywords: [
//         "Professional Car Oil Change in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "How to Know Your Car Needs an Oil Change",
//       description: `<p>Your engine sends clear warning signs when oil breaks down and loses effectiveness. Ignoring these symptoms leads to severe engine damage and expensive repairs. Watch for these critical indicators:</p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Black, contaminated oil clogs engine parts</li>
//         <li>Loud knocking sounds signal engine failure</li>
//         <li>Warning light flashes urgent oil problem</li>
//         <li>Strong burning smell means oil leaking</li>
//         <li>Thick smoke pours from your exhaust</li>
//         <li>Overheating engine risks complete seizure</li>
//         <li>Critically low oil starves engine components</li>
//     </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125862/1024_zizzaf.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "All-Inclusive Oil Change Care at Caroto Repair Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "FREE Multi-Point Vehicle Inspection",
//           description:
//             "We check tires, fluids, belts, and battery during every oil change at no cost.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 2,
//           title: "Premium Quality Oil & Filters",
//           description:
//             "You get top-grade oils and genuine filters matching your vehicle's exact manufacturer specifications.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 3,
//           title: "Expert Service by Certified Technicians",
//           description:
//             "Our trained mechanics perform oil changes correctly using proper procedures for your specific vehicle.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 4,
//           title: "Warranty Protection on Parts & Labor",
//           description:
//             "Every oil change includes comprehensive warranty coverage protecting you against defects and workmanship issues.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 5,
//           title: "Quick 30-Minute Express Service",
//           description:
//             "Most oil changes finish within 30 minutes so you get back on roads fast.",
//           image: "/images/icons/icon-5.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Schedule Your Car Oil Change in Dubai Now",
//       description:
//         "Don't risk engine damage from old, degraded oil. Caroto Repair Dubai provides fast oil changes that protect your vehicle's performance. Contact us today to book your oil service and keep your engine running at peak efficiency.",
//       guarantee:
//         "Book Your Professional Oil Change Service Today (Full Warranty Coverage Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Oil Change Service in Dubai",
//       deliverServices: [
//         {
//           id: 1,
//           title: " Step 1: Inspection & Oil Analysis",
//           description:
//             "We check your current oil condition, inspect for leaks, and verify the correct oil type for your vehicle.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: " Step 2: Drain & Replace",
//           description:
//             "Our technicians drain old oil completely from your engine and refill with fresh oil matching manufacturer specifications exactly.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: " Step 3:  Filter Replacement & Top-Ups",
//           description:
//             "We install a new oil filter and top up essential fluids including coolant, brake fluid, and windshield washer.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: " Step 4: Final Check & Performance Review",
//           description:
//             "We test oil pressure, check for leaks, reset service indicators, and provide maintenance recommendations for your next visit.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "What Makes Our Oil Change Service Stand Out",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Premium Oil & Filters",
//           description:
//             "We use Castrol, Mobil, Shell, and Total oils with genuine OEM filters for superior engine protection.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 2,
//           title: "Express 30-Minute Service",
//           description:
//             "Most oil changes complete within 30 minutes. You drive away quickly without sacrificing quality or thoroughness.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 3,
//           title: "Transparent Upfront Pricing",
//           description:
//             "Our quotes include oil, filters, labor, and disposal fees upfront. No surprise charges appear on bills.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 4,
//           title: "Free Vehicle Health Check",
//           description:
//             "Every oil change includes complimentary tire, brake, fluid, and battery inspection to catch problems early.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 5,
//           title: "Service Tracking & Reminders",
//           description:
//             "We track your service history and send reminders when your next oil change becomes due.",
//           image: "/images/icons/icon-10.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What To Expect From a Caroto Oil Change",
//       description:
//         "Our oil change service goes beyond simply draining and refilling. You receive thorough vehicle care, honest assessments, and professional attention. We complete work efficiently without rushing or cutting corners.",
//       contents: [
//         "Complete oil drainage using proper equipment to remove all contaminated oil from your engine",
//         "Fresh oil filled to exact specifications matching your vehicle manufacturer's requirements and grade recommendations",
//         "New oil filter installation using genuine or premium aftermarket parts for optimal filtration performance",
//         "Fluid level checks for coolant, brake fluid, power steering, and windshield washer with free top-ups",
//       ],
//     },

//     additionalTwo: {
//       title: "Engineering Precision Behind Every Oil Change",
//       description: `<p>Caroto Repair Dubai specializes in complete oil service excellence for all engine types. Our technicians understand viscosity grades, oil pressure requirements, and thermal breakdown characteristics completely. We handle conventional oil changes, synthetic blends, and full synthetic applications with precision. Your engine receives proper oil capacity, correct filter micron ratings, and optimal drain plug torque specifications. We work on gasoline engines, diesel powertrains, and turbocharged systems daily. Our oil change expertise translates directly into better engine protection and maximized performance for your Dubai driving.</p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125861/1025_wgq9m0.webp",
//     },

//     commitment: {
//       title: "The Caroto Promise – Quality Oil Service You Can Trust",
//       description:
//         "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//       contents: [],
//     },

//     faq: [
//       {
//         id: 1,
//         title: "How often should I change my car's engine oil in Dubai?",
//         description:
//           "Change your oil every 5,000 to 10,000 kilometers depending on your vehicle type and oil grade. Dubai's extreme heat and dusty conditions accelerate oil degradation significantly. Synthetic oils last longer than conventional mineral oils in hot climates. Check your owner's manual for manufacturer recommendations and adjust based on your driving patterns and conditions.",
//       },
//       {
//         id: 2,
//         title: "What's the difference between synthetic and mineral oil?",
//         description:
//           "Synthetic oil undergoes advanced refining processes creating uniform molecules that resist heat breakdown better. Mineral oil comes from crude petroleum with natural molecular variations. Synthetic oils provide superior protection in extreme temperatures, last longer, and keep engines cleaner. Mineral oils cost less and work well for older vehicles with simpler engine designs and lower performance demands.",
//       },
//       {
//         id: 3,
//         title: "Can I switch from mineral oil to synthetic oil?",
//         description:
//           "Yes, you can switch from mineral to synthetic oil at any oil change interval safely. Modern engines handle both oil types without problems. Synthetic oil actually cleans accumulated deposits better than mineral oil. Some older engines with worn seals might develop minor leaks after switching because synthetic oil flows differently. Our technicians assess your engine condition before recommending the best oil type for your situation.",
//       },
//       {
//         id: 4,
//         title: "Why does my car consume oil between changes?",
//         description:
//           "Oil consumption happens due to evaporation, leaks, or burning in the combustion chamber. High-mileage engines with worn piston rings or valve seals burn oil during operation. Small leaks from gaskets or seals cause gradual oil loss. Turbocharged engines naturally consume more oil than naturally aspirated engines. Check your oil level monthly and add oil when needed to prevent engine damage.",
//       },
//       {
//         id: 5,
//         title: "What happens if I drive too long without an oil change?",
//         description:
//           "Old oil loses its lubricating properties and turns into sludge that clogs engine passages. Metal components grind together without proper lubrication, causing accelerated wear and damage. Your engine runs hotter, consumes more fuel, and produces more emissions. Continued neglect leads to complete engine seizure requiring expensive rebuilds or replacement. Regular oil changes prevent these catastrophic failures completely.",
//       },
//       {
//         id: 6,
//         title: "Do you dispose of old oil properly?",
//         description:
//           "We collect all used engine oil and filters for proper recycling and disposal. Old oil never goes into drains or landfills from our facility. Licensed waste management companies collect and recycle our used oil into new products. Proper disposal protects Dubai's environment and meets all local regulations. Our disposal fees cover these environmentally responsible practices completely.",
//       },
//       {
//         id: 7,
//         title: "Can I bring my own oil and filter?",
//         description:
//           "We recommend using our supplied oils and filters to maintain quality standards and warranty coverage. Customer-supplied parts void our service warranty because we cannot verify their authenticity or quality. Our pricing includes premium oils and genuine filters at competitive rates. If you insist on your own parts, we charge labor only but cannot guarantee the work performed with unverified components.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Our Oil Change Services?",
//       description:
//         "Our oil change specialists answer all your concerns and provide expert guidance for every service need. Contact Caroto Repair Dubai now to discuss your vehicle's oil maintenance and schedule your appointment today.",
//     },

//     location: {
//       title: "Our Service Locations",
//       description: "",
//     },
//   },
//   {
//     id: 4,
//     slug: "car-suspension-repair-dubai",
//     title: "Expert Suspension Service in Dubai",
//     sub_title: "Safe, and Stable Car Suspension Service in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers expert suspension repair and maintenance services for all vehicle types across Dubai. Our certified technicians diagnose suspension problems accurately and restore your ride quality completely. You get transparent pricing, quality parts, and precision workmanship at every visit. We understand Dubai's rough roads and speed bumps demand reliable suspension systems. Visit our workshop for professional suspension services that keep your vehicle stable, comfortable, and safe on every journey.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763127492/1028_vr3ykz.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     featureTitle: "Our Full Suspension Repair & Maintenance Solutions",
//     features: [
//       {
//         id: 1,
//         title: "Suspension Inspection & Diagnosis",
//         description:
//           "We examine your complete suspension system using visual checks and diagnostic tools to identify worn or damaged components.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 2,
//         title: "Shock Absorber & Strut Replacement",
//         description:
//           "Our technicians replace worn shocks and struts with quality parts that restore your vehicle's ride comfort and handling precision.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 3,
//         title: "Ball Joint & Control Arm Service",
//         description:
//           "We inspect ball joints and control arms for wear, then replace damaged components to maintain proper wheel alignment and steering.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 4,
//         title: "Air Suspension Repair & Calibration",
//         description:
//           "We diagnose air suspension leaks, replace air springs and compressors, then calibrate systems to restore proper ride height electronically.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 5,
//         title: "Coil Spring & Bush Replacement",
//         description:
//           "We replace broken coil springs and worn bushings that cause sagging, noise, and poor handling on your vehicle immediately.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 6,
//         title: "Suspension Noise Troubleshooting",
//         description:
//           "Our mechanics identify clunking, squeaking, or rattling sounds by testing components and pinpointing exact failure points causing the noise.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 7,
//         title: "Alignment & Balancing Adjustment",
//         description:
//           "We align your wheels to manufacturer specifications and balance tires to eliminate vibrations and prevent uneven tire wear patterns.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 8,
//         title: "Suspension Fluid & Mount Check",
//         description:
//           "We inspect shock absorber fluid levels and rubber mounts for leaks or deterioration that compromise suspension performance and comfort.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 9,
//         title: "Lower Arm & Linkage Replacement",
//         description:
//           "We replace damaged lower control arms and suspension linkages to restore proper geometry and eliminate dangerous play in steering.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 10,
//         title: "Stabilizer Bar & Bushing Service",
//         description:
//           "We repair or replace worn stabilizer bars and bushings that cause body roll during cornering and reduce vehicle stability significantly.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 11,
//         title: "Steering & Suspension Coordination Check",
//         description:
//           "We test how your steering and suspension systems work together to identify issues affecting handling, alignment, and overall vehicle control.",
//         image: "/images/icons/icon-4.png",
//       },
//       {
//         id: 12,
//         title: "Performance Suspension Upgrade",
//         description:
//           "We install performance shocks, springs, and components to improve handling characteristics for drivers seeking enhanced driving dynamics and responsiveness.",
//         image: "/images/icons/icon-4.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     metadata: {
//       title: "Guaranteed Car Suspension Repair Service in Dubai",
//       description:
//         "Restore your smooth ride. Our certified experts deliver reliable car suspension repair, shock absorber replacement, and precision tuning in Dubai.",
//       keywords: [
//         "Expert Suspension Service in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Warning Signs Your Car's Suspension Needs Attention",
//       description: `<p>Your suspension system protects you from road impacts and maintains vehicle control. Recognizing these warning signs prevents accidents and expensive damage. Never ignore these critical symptoms:</p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Rough, bouncing ride on smooth roads</li>
//         <li>Steering wanders or pulls to sides</li>
//         <li>Car leans or sags noticeably lower</li>
//         <li>Loud clunking sounds over bumps or turns</li>
//         <li>Vehicle bounces excessively after hitting bumps</li>
//         <li>Tires wear unevenly or handling feels unstable</li>

//     </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1760889421/general_car_reapir_v5rjtl.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "Comprehensive Suspension Care at Caroto Repair Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "Complete Suspension System Inspection",
//           description:
//             "We examine all suspension components including shocks, springs, bushings, and mounts to detect wear and damage early.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 2,
//           title: "OEM and Premium Replacement Parts",
//           description:
//             "You get genuine manufacturer parts or high-quality aftermarket components that meet original specifications for lasting performance and reliability.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 3,
//           title: "Advanced Diagnostic Technology",
//           description:
//             "Our certified technicians use precision alignment equipment and diagnostic tools to identify exact suspension problems and deliver accurate solutions.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 4,
//           title: "Full Warranty on Parts & Labor",
//           description:
//             "We back our suspension repairs with comprehensive warranty protection covering parts and workmanship for your complete peace of mind.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 5,
//           title: "Professional Alignment After Repairs",
//           description:
//             "Every suspension repair includes proper wheel alignment to prevent tire wear and maintain straight, stable tracking on roads.",
//           image: "/images/icons/icon-5.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Car Suspension Service in Dubai Today",
//       description:
//         "Your suspension affects safety, comfort, and tire life on every Dubai drive. Caroto Repair Dubai specializes in precision suspension repairs that restore smooth handling and stability. Contact us now to schedule your suspension inspection and experience the difference quality service makes.",
//       guarantee:
//         "Schedule Your Expert Suspension Repair Now (Complete Warranty Protection Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Suspension Repairs",
//       deliverServices: [
//         {
//           id: 1,
//           title: " Step 1: Inspection & Damage Assessment",
//           description:
//             "We lift your vehicle and inspect all suspension components visually and physically to identify worn, damaged, or failing parts.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: " Step 2: Diagnosis & Estimate ",
//           description:
//             "Our technicians test drive your car, analyze findings, and provide detailed repair estimates with clear explanations and transparent pricing.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: " Step 3:  Diagnosis & Estimate ",
//           description:
//             "We replace faulty suspension parts using proper tools and torque specifications, then reassemble everything to manufacturer standards precisely.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: " Step 4: Final Alignment & Road Test",
//           description:
//             "We align your wheels accurately, verify all repairs, then test drive your vehicle to confirm smooth operation and proper handling.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Choose Caroto for Your Suspension Service",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Suspension System Specialists",
//           description:
//             "Our certified mechanics specialize in suspension repairs across all vehicle makes and models with years of hands-on experience daily.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 2,
//           title: "State-of-the-Art Alignment Equipment",
//           description:
//             "We use computerized wheel alignment machines that measure angles precisely and adjust to exact manufacturer specifications for optimal performance.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 3,
//           title: "Honest Diagnostics & Pricing",
//           description:
//             "You receive truthful assessments of your suspension condition without pressure or unnecessary upselling. Our quotes include all costs upfront clearly.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 4,
//           title: "Fast Turnaround Times",
//           description:
//             "Most suspension repairs complete within one day. We stock common parts for popular Dubai vehicles and prioritize urgent repairs immediately.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 5,
//           title: "Complete Service Records",
//           description:
//             "We track all your suspension work, alignment settings, and part replacements to maintain comprehensive maintenance history for future reference.",
//           image: "/images/icons/icon-10.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What To Expect During a Caroto Suspension Inspection",
//       description:
//         "Our suspension inspection reveals every component's true condition through thorough examination and testing. You get honest findings, clear explanations, and repair priorities. We never recommend unnecessary work or hide actual problems from you.",
//       contents: [
//         "Visual inspection of shocks, struts, springs, bushings, and mounts for leaks, cracks, or visible damage",
//         "Physical testing by pushing down on each corner to check damping response and rebound characteristics",
//         "Underneath examination on lift to inspect control arms, ball joints, and steering linkages for wear",
//         "Road test evaluation to assess ride quality, handling stability, noise levels, and steering response under actual conditions",
//         "Detailed written report with photos documenting suspension component condition and prioritized repair recommendations with estimated costs",
//       ],
//     },

//     additionalTwo: {
//       title: "Engineering Precision in Every Suspension Repair: The Caroto Way",
//       description: `<p>Caroto Repair Dubai masters suspension system dynamics across all vehicle architectures and designs. Our technicians understand spring rates, damping coefficients, and geometry specifications completely. We handle MacPherson struts, double wishbone systems, multi-link suspensions, and air suspension setups with precision. Your vehicle receives correct torque values, proper alignment angles, and quality component installation. We work on economy cars, luxury sedans, SUVs, and performance vehicles daily. Our suspension expertise delivers smoother rides, better handling, and maximized tire life for your Dubai driving conditions.</p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125054/1021_gyhapk.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         id: 1,
//         title: "How often should I get my suspension checked?",
//         description:
//           "Inspect your suspension every 20,000 kilometers or annually, whichever comes first. Dubai's speed bumps and road conditions accelerate wear significantly. Regular inspections catch problems before they cause tire damage or safety issues. Unusual noises, rough rides, or handling changes require immediate inspection regardless of mileage or time intervals.",
//       },
//       {
//         id: 2,
//         title: "What causes suspension problems in Dubai?",
//         description:
//           "Speed bumps, potholes, and aggressive driving over rough roads damage suspension components rapidly. Extreme heat deteriorates rubber bushings and seals faster than moderate climates. Heavy loads and towing strain springs and shocks beyond normal limits. Age naturally weakens all suspension parts regardless of mileage driven or conditions experienced.",
//       },
//       {
//         id: 3,
//         title: "Can I drive with worn suspension components?",
//         description:
//           "Driving with bad suspension components risks losing vehicle control, especially during emergency maneuvers or sudden stops. Worn parts cause uneven tire wear costing you money on premature replacements. Your ride becomes uncomfortable and unsafe for passengers. Failed suspension damages other components creating more expensive repairs. Get suspension problems fixed immediately before they escalate dangerously.",
//       },
//       {
//         id: 4,
//         title: "How long do shock absorbers last?",
//         description:
//           "Shock absorbers typically last 50,000 to 100,000 kilometers depending on driving conditions and vehicle type. Dubai's harsh roads and climate reduce shock lifespan considerably. Heavy vehicles and aggressive driving wear shocks faster than normal use. Replace shocks when you notice bouncing, poor handling, or fluid leaks. Quality shocks improve safety and comfort dramatically.",
//       },
//       {
//         id: 5,
//         title: "What's the difference between shocks and struts?",
//         description:
//           "Shocks are standalone damping components that control spring movement and absorb road impacts. Struts combine shock absorbers with structural components that bear vehicle weight. Struts affect alignment angles directly and cost more to replace. Both control bounce and maintain tire contact. Your vehicle has either shocks or struts, not both on the same axle.",
//       },
//       {
//         id: 6,
//         title: "Will suspension repairs fix my alignment issues?",
//         description:
//           "Suspension repairs often affect wheel alignment significantly. Worn suspension parts cause alignment to drift out of specification constantly. We always recommend alignment after replacing suspension components to prevent premature tire wear. New parts restore proper geometry but alignment adjusts angles to exact specifications. Alignment and suspension work together for optimal handling.",
//       },
//       {
//         id: 7,
//         title: "Do you offer performance suspension upgrades?",
//         description:
//           "Yes, we install performance shocks, lowering springs, and upgraded bushings for improved handling characteristics. Performance suspension reduces body roll during cornering and provides firmer, more controlled ride quality. We recommend upgrades based on your driving style and intended use. Performance parts may sacrifice some comfort for better handling. Our technicians explain trade-offs clearly before any modifications.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Your Suspension Repair?",
//       description:
//         "Our suspension specialists answer all your concerns and provide expert guidance for every repair need. Contact Caroto Repair Dubai now to discuss your vehicle's suspension problems and schedule your inspection today.",
//     },

//     location: {
//       title: "Our Service Locations",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your suspension repair needs quickly.",
//     },
//   },
//   {
//     id: 5,
//     slug: "car-gearbox-transmission-repair-dubai",
//     title: "Gearbox and Transmission Service in Dubai",
//     sub_title: "Professional Gearbox and Transmission Service in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers expert gearbox and transmission repair services for all vehicle types across Dubai. Our certified technicians diagnose and repair transmission problems using quality parts and precision techniques. You get transparent pricing, smooth shifting, and reliable performance at every visit. We understand transmission issues cause expensive damage when ignored or improperly repaired. Visit our workshop for comprehensive transmission solutions restoring perfect gear changes and dependable operation.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763127832/1029_b0lh6c.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     featureTitle: "Gearbox and Transmission Repair Services in Dubai",
//     features: [
//       {
//         id: 1,
//         title: "Automatic Transmission Repair",
//         description:
//           "We diagnose automatic transmission problems, repair internal components, or perform complete rebuilds restoring smooth shifting and reliable power delivery.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 2,
//         title: "Manual Gearbox Repair",
//         description:
//           "Our technicians repair manual transmission issues including gear grinding, difficult shifting, and synchronizer wear restoring precise gear engagement completely.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 3,
//         title: "Transmission Fluid Change",
//         description:
//           "We drain old transmission fluid, flush contamination, and refill with correct fluid type maintaining proper lubrication and hydraulic operation throughout.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 4,
//         title: "Clutch Replacement and Adjustment",
//         description:
//           "We replace worn clutch discs, pressure plates, and release bearings restoring proper engagement and smooth power transfer in manual transmissions.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 5,
//         title: "Torque Converter Repair",
//         description:
//           "We diagnose torque converter problems including slipping, shuddering, or overheating, then repair or replace converters restoring proper automatic transmission operation.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 6,
//         title: "Gear Synchronizer and Bearing Replacement",
//         description:
//           "We replace worn synchronizers and bearings eliminating gear grinding, difficult shifts, and noise in manual gearboxes restoring smooth operation.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 7,
//         title: "Transmission Cooling System Service",
//         description:
//           "We repair transmission coolers, lines, and radiator connections preventing overheating damage and maintaining optimal transmission operating temperatures under load.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 8,
//         title: "Valve Body and Solenoid Testing",
//         description:
//           "We test valve bodies and solenoids controlling automatic transmission shifting, then repair or replace faulty components restoring proper shift timing.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 9,
//         title: "Gearbox Mount and Seal Replacement",
//         description:
//           "We replace broken transmission mounts and leaking seals eliminating vibration, movement, and fluid leaks affecting your driving comfort and reliability.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 10,
//         title: "Transmission Leak Detection and Fix",
//         description:
//           "We identify transmission fluid leak sources using pressure tests and inspection, then replace gaskets, seals, or pans stopping fluid loss.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 11,
//         title: "Differential and Drivetrain Inspection",
//         description:
//           "We inspect differentials, CV joints, and driveshafts identifying wear or damage affecting power delivery and drivetrain operation under acceleration.",
//         image: "/images/icons/icon-5.png",
//       },
//       {
//         id: 12,
//         title: "Transmission Software Update and Calibration",
//         description:
//           "We reprogram transmission control modules with latest software updates and perform adaptations optimizing shift quality and performance characteristics electronically.",
//         image: "/images/icons/icon-5.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     metadata: {
//       title: "Car Transmission Repair in Dubai - Gearbox Service",
//       description:
//         "Get precision automatic and manual gearbox repair and transmission fluid service. Trust the Dubai specialists for guaranteed shifting performance.",
//       keywords: [
//         "Gearbox and Transmission Service in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Signs You Need Gearbox or Transmission Repair in Dubai",
//       description: `<p>Your transmission communicates problems through shifting behavior, sounds, and warning indicators. Recognizing these symptoms prevents catastrophic failures and expensive damage. Never ignore these critical signs:</p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Gears shift late or roughly constantly</li>
//         <li>Grinding or whining noises when shifting gears</li>
//         <li>Red fluid puddles appear underneath vehicle</li>
//         <li>Burning odor comes from transmission area</li>
//         <li>Vehicle jerks, slips, or shudders during acceleration</li>
//         <li>Dashboard transmission warning light illuminates continuously</li>

//     </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763127492/1028_vr3ykz.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "Complete Gearbox and Transmission Repair at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "Transmission Repair Specialists",
//           description:
//             "Our certified mechanics specialize in automatic and manual transmission repairs across all vehicle brands with extensive diagnostic and rebuild experience.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 2,
//           title: "Advanced Diagnostic Equipment",
//           description:
//             "You get professional transmission scanners and testing tools identifying internal problems accurately without unnecessary disassembly or guesswork required.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 3,
//           title: "Quality Transmission Parts",
//           description:
//             "We install OEM or premium remanufactured components meeting original specifications delivering reliable performance and proper transmission operation always guaranteed.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 4,
//           title: "Comprehensive Service Warranty",
//           description:
//             "Every transmission repair includes warranty protection covering parts and workmanship for your peace of mind and investment protection completely.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 5,
//           title: "Transmission Fluid Service",
//           description:
//             "We use correct transmission fluid types and specifications maintaining proper lubrication, hydraulic function, and component protection under all conditions.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 6,
//           title: "Warranty Terms",
//           description:
//             "*Warranty terms vary based on repair type and components used.",
//           image: "/images/icons/icon-5.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Transmission Service in Dubai Today",
//       description:
//         "Your transmission transfers engine power to wheels enabling acceleration and efficient cruising. Caroto Repair Dubai specializes in accurate transmission diagnostics and quality repairs restoring smooth shifting and reliable operation. Contact us now to schedule your transmission inspection and avoid expensive failures.",
//       guarantee:
//         "Schedule Your Professional Transmission Repair Now (Full Warranty Coverage Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Gearbox and Transmission Repair",
//       deliverServices: [
//         {
//           id: 1,
//           title: " Step 1: Transmission Inspection",
//           description:
//             "We scan transmission computers reading fault codes, test fluid condition, inspect for leaks, and assess shift quality identifying problems accurately.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: " Step 2: Fault Detection and Estimate ",
//           description:
//             "Our technicians explain findings clearly, recommend necessary repairs, discuss options available, and provide detailed quotes before starting any work.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: " Step 3:  Gearbox Repair, Replacement ",
//           description:
//             "We perform repairs using quality parts and proper procedures, rebuild transmissions when needed, or service fluids maintaining manufacturer specifications precisely.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: " Step 4: Final Road Test and Quality Verification",
//           description:
//             "We test drive vehicles under various conditions, verify smooth shifting, check for leaks, and confirm all repairs function correctly.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Choose Caroto for Transmission Repair in Dubai ",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Transmission Experts",
//           description:
//             "Our trained mechanics diagnose and repair automatic and manual transmissions across all vehicle brands with years of specialized transmission experience.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 2,
//           title: "Professional Diagnostic Tools",
//           description:
//             "We use advanced scanners and pressure testing equipment identifying transmission problems accurately without unnecessary teardowns or trial-and-error approaches.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 3,
//           title: "Honest Repair Assessment",
//           description:
//             "You receive truthful evaluations determining if repairs, rebuilds, or replacement prove most cost-effective for your specific situation and budget.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 4,
//           title: "Rebuild Capabilities",
//           description:
//             "We perform complete transmission rebuilds in-house using quality parts and proper procedures delivering reliable results backed by comprehensive warranties.",
//           image: "/images/icons/icon-5.png",
//         },
//         {
//           id: 5,
//           title: "Complete Service Records",
//           description:
//             "We document all transmission work performed, parts replaced, and fluid services maintaining comprehensive records for warranty claims and reference.",
//           image: "/images/icons/icon-5.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What to Expect During a Gearbox or Transmission Service",
//       description:
//         "Our transmission service examines your gearbox thoroughly through systematic testing and inspection. You get honest findings, clear explanations, and repair options. We never recommend unnecessary rebuilds or replacements when simple repairs solve problems effectively and reliably.",
//       contents: [
//         "Computer diagnostics scanning transmission control modules reading fault codes and analyzing sensor data identifying electronic problems",
//         "Fluid analysis checking transmission fluid condition, contamination levels, and presence of metal particles indicating internal wear",
//         "Road test evaluation assessing shift quality, timing, smoothness, and responsiveness under various driving conditions and loads",
//         "Leak inspection examining transmission housing, seals, cooler lines, and pan gasket identifying fluid loss sources requiring repair",
//       ],
//     },

//     additionalTwo: {
//       title: "Power, Precision, and Smooth Performance: The Caroto Standard",
//       description: `<p>Caroto Repair Dubai masters transmission systems across all types and vehicle architectures completely. Our technicians understand hydraulic principles, electronic controls, and mechanical components thoroughly. We handle automatic transmissions, manual gearboxes, CVT systems, and dual-clutch transmissions with precision. Your vehicle receives correct fluid specifications, proper torque values, and quality component installation. We work on economy cars, luxury vehicles, performance cars, and commercial trucks daily. </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125258/1022_ukp8ob.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         title: "How often should I change transmission fluid?",
//         description:
//           "Change automatic transmission fluid every 60,000 to 80,000 kilometers or as manufacturer recommends. Manual gearboxes need fluid changes every 50,000 to 100,000 kilometers. Dubai's heat and traffic accelerate fluid degradation requiring more frequent changes than ideal conditions. Fresh fluid prevents expensive internal damage. Neglecting fluid changes causes transmission failures costing thousands in repairs or replacement.",
//       },
//       {
//         title: "What causes transmission problems?",
//         description:
//           "Low fluid levels, contaminated fluid, worn clutches, and failed solenoids cause most transmission problems. Overheating damages internal components rapidly. Poor maintenance accelerates wear significantly. Aggressive driving stresses transmissions beyond normal limits. Manufacturing defects affect some models. We diagnose root causes accurately rather than guessing or replacing transmissions unnecessarily without proper investigation.",
//       },
//       {
//         title: "Should I repair or replace my transmission?",
//         description:
//           "Repair makes sense when damage is localized and costs stay under 60% of replacement costs. Replace transmissions with catastrophic internal damage or multiple failing components. Consider vehicle age, mileage, and overall condition when deciding. We provide honest recommendations based on your situation and budget. Sometimes replacement proves more cost-effective long-term than expensive repairs.",
//       },
//       {
//         title: "Can I drive with transmission problems?",
//         description:
//           "Minor issues like delayed shifts may allow limited driving to repair shops. Slipping, no movement, or burning smells require immediate towing. Continued driving with transmission problems causes catastrophic damage exponentially increasing repair costs. Strange noises indicate internal component failure requiring immediate attention. Stop driving immediately when transmission malfunctions occur preventing total failure.",
//       },
//       {
//         title: "Why does my transmission slip?",
//         description:
//           "Slipping indicates worn clutches, low fluid levels, or failed solenoids preventing proper gear engagement. Contaminated fluid reduces friction necessary for clutch operation. Internal leaks reduce hydraulic pressure. Torque converter problems cause slipping in automatic transmissions. We diagnose slipping causes accurately through pressure tests and inspections. Ignoring slipping destroys transmissions rapidly requiring expensive replacements.",
//       },
//       {
//         title: "How long do transmission repairs take?",
//         description:
//           "Simple services like fluid changes take hours. Component replacement requires 1-2 days. Complete transmission rebuilds need 3-5 days depending on parts availability and complexity. Remanufactured transmission installation takes 1-2 days. We provide accurate timelines after diagnosis. Rush service available for urgent situations when feasible and safe without compromising quality.",
//       },
//       {
//         title: "Do transmission additives work?",
//         description:
//           "Quality transmission additives temporarily improve shifting in high-mileage transmissions but don't fix mechanical problems. Stop-leak products sometimes seal minor leaks. Friction modifiers reduce shudder. Additives never replace proper repairs or fluid changes. We recommend additives only as temporary measures. Proper maintenance and timely repairs prove more effective than chemical treatments for transmission longevity.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Gearbox or Transmission Repair in Dubai?",
//       description:
//         "Our transmission specialists answer all your concerns and provide expert guidance for every repair need. Contact Caroto Repair Dubai now to discuss your vehicle's transmission problems and schedule your service appointment today.",
//     },

//     location: {
//       title: "Transmission Repair and Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your gearbox and transmission repair needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 6,
//     slug: "car-tire-services-dubai",
//     title: "Tire Service Dubai",
//     sub_title: "Expert Tire Service in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers professional tire services for all vehicle types across Dubai. Our certified technicians inspect, repair, and replace tires using quality products and precision equipment. You get transparent pricing, fast service, and expert care at every visit. We understand Dubai's hot roads and driving conditions demand reliable tires for your safety. Visit our workshop for comprehensive tire solutions that keep your vehicle gripping the road securely on every journey.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763129844/1031_q9k5la.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Tire Repair and Replacement Services in Dubai - 24/7",
//       description:
//         "Secure your grip with guaranteed tire replacement, wheel balancing, and immediate puncture repair service in Dubai. Drive safe, always.",
//       keywords: [
//         "Tire Service in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },
//     featureTitle: "Our Range of Professional Tire Care Solutions",
//     features: [
//       {
//         id: 1,
//         title: "Tire Inspection and Condition Check",
//         description:
//           "We examine your tires thoroughly for tread depth, damage, aging, and wear patterns to identify problems before they become dangerous.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 2,
//         title: "Tire Replacement and Installation",
//         description:
//           "Our technicians remove old tires and install new ones properly, matching size specifications and load ratings for your specific vehicle.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 3,
//         title: "Puncture and Air Leak Repair",
//         description:
//           "We locate punctures or slow leaks, remove objects safely, then seal holes using industry-approved patches that restore tire integrity completely.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 4,
//         title: "Wheel Balancing and Alignment",
//         description:
//           "We balance your wheels precisely and align them to manufacturer specifications to eliminate vibrations and prevent uneven tire wear patterns.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 5,
//         title: "Tire Rotation and Maintenance",
//         description:
//           "We rotate tires between positions to distribute wear evenly, extending tire lifespan and maintaining consistent traction across all four wheels.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 6,
//         title: "Tire Pressure Monitoring (TPMS) Check",
//         description:
//           "We test your TPMS sensors for accuracy, replace faulty sensors, and reset systems to maintain proper tire pressure alerts electronically.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 7,
//         title: "Run-Flat Tire Replacement",
//         description:
//           "We replace damaged run-flat tires with proper specifications and install them correctly to maintain your vehicle's emergency mobility capabilities safely.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 8,
//         title: "Nitrogen Inflation Service",
//         description:
//           "We purge regular air and fill tires with pure nitrogen for better pressure retention, cooler operation, and extended tire life.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 9,
//         title: "Tire Damage and Sidewall Repair",
//         description:
//           "We assess sidewall cuts, bulges, or impact damage to determine if repairs are safe or if replacement becomes necessary immediately.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 10,
//         title: "Seasonal Tire Change and Fitting",
//         description:
//           "We swap between tire types based on your driving needs and seasonal requirements, mounting and balancing each set properly every time.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 11,
//         title: "Mounting and Dismounting Service",
//         description:
//           "We use professional tire machines to mount and dismount tires without damaging wheels or tire beads during installation or removal.",
//         image: "/images/icons/icon-6.png",
//       },
//       {
//         id: 12,
//         title: "Tire Safety and Performance Test",
//         description:
//           "We test tire pressure, inspect for hidden damage, and verify proper installation to confirm your tires perform safely under all conditions.",
//         image: "/images/icons/icon-6.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Common Signs Your Tires Need Attention",
//       description: `<p>Your tires communicate problems before they cause accidents or breakdowns. Recognizing these warning signs protects you from dangerous blowouts and expensive damage. Never ignore these critical symptoms:</p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Steering wheel shakes or vibrates at speed</li>
//         <li>Car pulls strongly to one side constantly</li>
//         <li>Tread depth worn below safe levels</li>
//         <li>Visible cracks or bulges on tire sidewalls</li>
//         <li>Unusual thumping or humming noise continuously</li>
//         <li>Low pressure warning light stays illuminated</li>

//     </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125861/1023_s7sgnn.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "Complete Tire Care and Maintenance at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "FREE Tire Inspection and Tread Check",
//           description:
//             "We measure tread depth, examine tire condition, and check pressure at no cost during every service visit you make.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 2,
//           title: "Premium Brand Tires Available",
//           description:
//             "You get access to top tire brands including Michelin, Bridgestone, Goodyear, and Continental matching your vehicle's specifications and budget perfectly.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 3,
//           title: "Professional Installation Equipment",
//           description:
//             "Our certified technicians use computerized balancing machines and alignment systems that deliver precise, factory-standard results every single time.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 4,
//           title: "Warranty Protection on New Tires",
//           description:
//             "Every tire purchase includes manufacturer warranty coverage protecting you against defects and premature wear for complete peace of mind.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 5,
//           title: "Quick Service and Competitive Pricing",
//           description:
//             "Most tire services complete within one hour. We offer transparent pricing with no hidden fees for parts, labor, or disposal.",
//           image: "/images/icons/icon-6.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Schedule Your Tire Service Appointment in Dubai",
//       description:
//         "Your tires determine your safety, fuel efficiency, and ride comfort on every Dubai road. Caroto Repair Dubai specializes in complete tire solutions that restore grip, performance, and reliability. Contact us now to schedule your tire inspection and drive with confidence knowing your tires perform perfectly.",
//       guarantee:
//         "Book Your Professional Tire Service Today (Full Warranty Coverage Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Tire Service You Can Rely On",
//       deliverServices: [
//         {
//           id: 1,
//           title: " Step 1: Tire Inspection and Tread Check",
//           description:
//             "We measure tread depth using precision gauges, inspect sidewalls for damage, and check air pressure to assess overall tire condit",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: " Step 2: Diagnosis and Service Estimate",
//           description:
//             "Our technicians explain findings clearly, recommend necessary repairs or replacements, and provide detailed quotes with transparent pricing before starting work.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: " Step 3: Tire Repair or Replacement",
//           description:
//             "We repair punctures properly or install new tires matching your vehicle specifications, then inflate to correct pressures using calibrated equipment.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: " Step 4: Balancing, Alignment, and Final Test",
//           description:
//             "We balance wheels precisely, align them to manufacturer specs, then test drive your vehicle to confirm smooth, vibration-free operation.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Drivers Across Dubai Choose Caroto for Tire Care",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Certified Tire Specialists",
//           description:
//             "Our trained technicians handle tire repairs, replacements, and alignments for all vehicle brands with years of specialized tire experience.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 2,
//           title: "Advanced Balancing Technology",
//           description:
//             "We use computerized wheel balancers that detect imbalances accurately and correct them precisely for smooth, vibration-free driving at all speeds.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 3,
//           title: "Transparent Pricing Always",
//           description:
//             "You receive detailed quotes showing tire costs, installation fees, and disposal charges upfront. No surprise expenses appear on your final bill.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 4,
//           title: "Same-Day Service Available",
//           description:
//             "Most tire repairs and replacements finish within one hour. We stock popular tire sizes for common Dubai vehicles and prioritize urgent services.",
//           image: "/images/icons/icon-6.png",
//         },
//         {
//           id: 5,
//           title: "Complete Tire Records",
//           description:
//             "We track your tire purchases, rotations, and services to remind you when maintenance becomes due and maintain comprehensive service history.",
//           image: "/images/icons/icon-6.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What Happens During a Caroto Tire Service",
//       description:
//         "Our tire service examines every aspect of your tires' condition, performance, and safety. You get honest assessments, clear recommendations, and repair priorities. We never sell unnecessary tires or services you don't actually need right now.",
//       contents: [
//         "Visual inspection of all four tires for cuts, bulges, embedded objects, and sidewall damage or cracking",
//         "Tread depth measurement at multiple points to check wear patterns and remaining tire life accurately",
//         "Air pressure verification and adjustment to manufacturer specifications for optimal fuel economy and tire longevity",
//         "TPMS sensor testing to confirm pressure monitoring system functions correctly and alerts you to pressure changes",
//         "Wheel balance check on computerized equipment to detect vibration-causing imbalances that accelerate tire wear significantly",
//       ],
//     },

//     additionalTwo: {
//       title: "Precision, Safety, and Grip: The Caroto Standard",
//       description: `<p>Caroto Repair Dubai specializes in complete tire service excellence across all vehicle types and tire brands. Our technicians understand load ratings, speed ratings, and tread pattern characteristics completely. We handle standard tires, run-flats, low-profile performance tires, and SUV applications with precision. Your vehicle receives proper tire sizing, correct inflation pressures, and accurate wheel balancing. We work on passenger cars, luxury vehicles, commercial vans, and performance sports cars daily. Our tire expertise translates directly into better fuel economy, smoother rides, and maximized tire lifespan for your Dubai driving.</p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125258/1022_ukp8ob.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         id: 1,
//         title: "How often should I replace my tires in Dubai?",
//         description:
//           "Most tires last 40,000 to 80,000 kilometers depending on driving habits, tire quality, and maintenance practices. Dubai's extreme heat accelerates tire aging and wear significantly compared to moderate climates. Check tread depth every 10,000 kilometers and replace tires when tread reaches 3mm or shows uneven wear. Age also matters. So replace tires over six years old regardless of tread depth remaining.",
//       },
//       {
//         id: 2,
//         title: "Can all tire punctures be repaired safely?",
//         description:
//           "Only punctures in the tread area smaller than 6mm diameter can be repaired safely and reliably. Sidewall damage, large holes, or multiple punctures require tire replacement for your safety. Repairs near the shoulder or on run-flat tires often fail dangerously. Our technicians inspect damage carefully and recommend replacement when repairs compromise structural integrity or safety standards.",
//       },
//       {
//         id: 3,
//         title: "What causes uneven tire wear?",
//         description:
//           "Incorrect tire pressure causes center or edge wear patterns depending on overinflation or underinflation. Misalignment wears one edge faster than the other side across the tread. Worn suspension components create cupping or scalloped wear patterns. Aggressive driving and hard cornering accelerate shoulder wear significantly. Regular rotation, proper inflation, and alignment prevent uneven wear and extend tire life.",
//       },
//       {
//         id: 4,
//         title: "Do I need wheel alignment after replacing tires?",
//         description:
//           "New tires don't automatically require alignment, but we strongly recommend checking alignment during tire replacement. Misalignment causes new tires to wear unevenly and prematurely, wasting your investment quickly. If your old tires showed uneven wear, alignment is necessary before installing new ones. Alignment after tire replacement maximizes tire life and maintains straight, stable tracking.",
//       },
//       {
//         id: 5,
//         title: "What's the difference between tire balancing and alignment?",
//         description:
//           "Tire balancing corrects weight distribution around the wheel and tire assembly to eliminate vibrations at speed. Alignment adjusts suspension angles to make wheels point correctly and track straight. Balancing affects ride smoothness and tire wear. Alignment affects steering, handling, and tire wear patterns. Both services work together but address completely different mechanical issues.",
//       },
//       {
//         id: 6,
//         title: "Should I use nitrogen instead of regular air?",
//         description:
//           "Nitrogen maintains pressure more consistently because larger molecules escape through rubber slower than oxygen. Nitrogen reduces moisture inside tires, minimizing corrosion and pressure fluctuations from temperature changes. Regular air works fine with proper pressure maintenance. Nitrogen offers marginal benefits at additional cost. We recommend nitrogen for performance vehicles or drivers who check pressure infrequently.",
//       },
//       {
//         id: 7,
//         title: "How do I know when tire tread is too low?",
//         description:
//           "Legal minimum tread depth is 1.6mm, but we recommend replacement at 3mm for safety. Use a tread depth gauge or the coin test to check wear. Tread wear indicators molded into tire grooves become visible when replacement is necessary. Worn tires lose grip dramatically on wet roads, increasing stopping distances and hydroplaning risks dangerously. Replace tires before reaching legal minimums.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Tire Replacement or Repair?",
//       description:
//         "Our tire specialists answer all your concerns and provide expert guidance for every tire need. Contact Caroto Repair Dubai now to discuss your vehicle's tire condition and schedule your service appointment today.",
//     },

//     location: {
//       title: "Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your tire service needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 7,
//     slug: "car-battery-replacement-dubai",
//     title: "Car Battery Replacement in Dubai",
//     sub_title: "Reliable Car Battery Replacement in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers fast and professional car battery replacement services for all vehicle types across Dubai. Our certified technicians test, diagnose, and replace batteries using quality products and precision equipment. You get transparent pricing, quick service, and expert care at every visit. We understand Dubai's extreme heat drains batteries faster than any other climate. Visit our workshop for reliable battery solutions that keep your vehicle starting strong on every journey.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763131013/1032_w2udsh.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "24/7 Car Battery Replacement Service in Dubai, UAE",
//       description:
//         "Fast battery testing and replacement services in Dubai. Get the best battery price and guaranteed charging system diagnostics 24/7.",
//       keywords: [
//         "Car Battery Replacement in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },
//     featureTitle: "Our Range of Battery Replacement and Electrical Services",
//     features: [
//       {
//         id: 1,
//         title: "Battery Testing and Diagnostics",
//         description:
//           "We test your battery's voltage, cold cranking amps, and overall health using advanced diagnostic equipment to determine actual condition accurately.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 2,
//         title: "Car Battery Replacement for All Brands",
//         description:
//           "Our technicians replace dead or weak batteries with quality units matching your vehicle's specifications across all makes and models. We also handle car key battery replacement Dubai services with precision and care.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 3,
//         title: "Emergency Battery Jumpstart",
//         description:
//           "We provide rapid jumpstart services at our location or your breakdown site to get your vehicle running when battery dies unexpectedly. If you ever need to jump start car Dubai, our experts are ready to assist promptly.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 4,
//         title: "Alternator and Charging System Check",
//         description:
//           "We test your alternator output and charging system to verify proper voltage generation and identify problems causing battery drain issues.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 5,
//         title: "Battery Terminal Cleaning and Replacement",
//         description:
//           "We clean corroded terminals and cables thoroughly, then replace damaged connectors to restore proper electrical flow and starting power.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 6,
//         title: "Hybrid and AGM Battery Service",
//         description:
//           "We service advanced battery technologies including hybrid systems and absorbed glass mat batteries requiring specialized handling and installation procedures.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 7,
//         title: "Battery Health and Voltage Testing",
//         description:
//           "We measure battery voltage under load conditions and analyze performance data to predict remaining battery life and replacement timing accurately.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 8,
//         title: "Battery Cable and Connection Repair",
//         description:
//           "We repair or replace damaged battery cables, ground straps, and connections that cause starting problems or electrical system failures.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 9,
//         title: "On-Site Battery Replacement in Dubai",
//         description:
//           "Our mobile service brings battery replacement directly to your location anywhere in Dubai for maximum convenience when you cannot reach us. Our mobile car battery replacement service ensures quick and professional assistance wherever you are.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 10,
//         title: "Battery Recycling and Disposal",
//         description:
//           "We collect your old battery and recycle it properly through licensed facilities, protecting Dubai's environment from hazardous lead and acid.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 11,
//         title: "Battery Warranty Registration",
//         description:
//           "We register your new battery warranty immediately and provide documentation for future claims, protecting your investment completely with manufacturer backing.",
//         image: "/images/icons/icon-7.png",
//       },
//       {
//         id: 12,
//         title: "Electrical System Safety Check",
//         description:
//           "We inspect your entire electrical system for parasitic drains, faulty components, and charging issues that shorten battery life or cause failures.",
//         image: "/images/icons/icon-7.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Warning Signs You Need a Car Battery Replacement",
//       description: `<p>Your battery sends clear signals when it approaches failure. Recognizing these warning signs prevents getting stranded in Dubai's heat. Never ignore these critical symptoms:</p>
//       <ul style="list-style-type: disc; padding-left: 20px">
//           <li>Engine cranks slowly or makes clicking noises</li>
//           <li>Dashboard battery warning light glows constantly</li>
//           <li>Headlights dim or interior lights flicker noticeably</li>
//           <li>Vehicle requires jumpstarts frequently to start</li>
//           <li>Battery case appears swollen or leaking fluid</li>
//           <li>Electrical accessories work erratically or fail randomly</li>
//       </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763129652/1030_kpu86p.webp",
//     },
//     includeServices: {
//       includeServicesTitle: "Complete Battery Care at Caroto Repair Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "FREE Battery Testing and Inspection",
//           description:
//             "We test your battery voltage, cranking power, and charging system at no cost during every service visit you make.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 2,
//           title: "Premium Quality Battery Brands",
//           description:
//             "You get top battery brands including Bosch, Varta, Amaron, and ACDelco with warranties covering defects and premature failures completely.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 3,
//           title: "Professional Installation Service",
//           description:
//             "Our certified technicians install batteries correctly using proper terminal connections and secure mounting to prevent vibration damage or electrical issues.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 4,
//           title: "Warranty Coverage and Registration",
//           description:
//             "Every battery purchase includes manufacturer warranty protection. We register warranties immediately and keep records for easy future claims processing.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 5,
//           title: "Fast 30-Minute Replacement",
//           description:
//             "Most battery replacements complete within 30 minutes. We stock popular battery sizes for common Dubai vehicles and prioritize emergency services.",
//           image: "/images/icons/icon-7.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Car Battery Replacement in Dubai Today",
//       description:
//         "Your battery powers everything electrical in your vehicle from starting to entertainment systems. Caroto Repair Dubai specializes in quick battery replacements that restore reliable starting power and electrical performance. Contact us now to schedule your battery test and avoid getting stranded unexpectedly in Dubai's extreme heat.",
//       guarantee:
//         "Schedule Your Fast Battery Replacement Service Now (Full Warranty Protection Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Battery Replacement Service",
//       deliverServices: [
//         {
//           id: 1,
//           title: " Step 1:  Battery Test and Diagnosis",
//           description:
//             "We connect diagnostic equipment to measure voltage, cranking amps, and charge capacity, then test your alternator output and charging performance.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: " Step 2: Service Estimate",
//           description:
//             "Our technicians explain test results clearly, recommend appropriate battery options for your vehicle, and provide transparent pricing before any work.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: " Step 3: Battery Replacement and Setup ",
//           description:
//             "We remove the old battery safely, install your new battery with proper terminal connections, and secure mounting to prevent movement damage.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: " Step 4: Final Electrical System Check",
//           description:
//             "We verify charging system operation, test electrical accessories, reset vehicle computer if needed, and confirm everything functions correctly before delivery.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle:
//         "Why Drivers in Dubai Choose Caroto for Battery Replacement",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Battery Specialists on Staff",
//           description:
//             "Our trained technicians diagnose battery and charging problems accurately across all vehicle brands with years of electrical system experience daily.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 2,
//           title: "Advanced Testing Equipment",
//           description:
//             "We use computerized battery testers that analyze cold cranking amps, voltage, and internal resistance to predict battery failure before it happens.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 3,
//           title: "Competitive Pricing Always",
//           description:
//             "You receive detailed quotes showing battery costs and installation fees upfront with no hidden charges appearing on your final bill ever.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 4,
//           title: "Mobile Service Available",
//           description:
//             "We bring battery replacement directly to your home, office, or breakdown location anywhere in Dubai for maximum convenience when needed.",
//           image: "/images/icons/icon-7.png",
//         },
//         {
//           id: 5,
//           title: "Complete Service History",
//           description:
//             "We track your battery purchases, tests, and warranty information to remind you when replacement becomes necessary and maintain comprehensive records.",
//           image: "/images/icons/icon-7.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What To Expect During a Caroto Battery Inspection",
//       description:
//         "Our battery inspection reveals your battery's true condition and remaining lifespan through comprehensive testing. You get honest assessments, clear explanations, and replacement recommendations. We never sell batteries prematurely or recommend services you don't actually need today.",
//       contents: [
//         "Visual inspection of battery case, terminals, and cables for cracks, leaks, corrosion, or physical damage",
//         "Voltage testing under no-load and load conditions to measure actual battery strength and cranking capability",
//         "Charging system analysis measuring alternator output voltage and amperage to verify proper battery recharging occurs",
//         "Parasitic drain testing to identify electrical components drawing power when vehicle sits off and draining batteries",
//         "Battery age verification using manufacture date codes to determine if replacement timing approaches based on lifespan",
//         "Written report with test results, remaining battery life estimate, and clear replacement recommendations with pricing options",
//       ],
//     },

//     additionalTwo: {
//       title: "Technical Precision in Every Battery Replacement",
//       description: `
//       <p>
//       Caroto Repair Dubai masters automotive electrical systems and battery technologies across all vehicle types. Our technicians understand cold cranking amps, reserve capacity ratings, and charging system requirements completely. We handle conventional flooded batteries, AGM batteries, gel cells, and hybrid system batteries with precision. Your vehicle receives correct battery sizing, proper terminal torque, and secure mounting installations. We work on economy cars, luxury vehicles, diesel trucks, and hybrid systems daily. Our battery expertise delivers reliable starting power, longer battery life, and optimal electrical system performance for Dubai's demanding climate.
//       </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763127832/1029_b0lh6c.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         id: 1,
//         title: "How long do car batteries last in Dubai?",
//         description:
//           "Car batteries typically last 2 to 4 years in Dubai's extreme heat compared to 5 to 7 years in moderate climates. High temperatures accelerate chemical reactions inside batteries causing faster degradation and failure. Quality batteries with higher specifications last longer than economy options. Regular testing after two years predicts replacement timing and prevents unexpected breakdowns in inconvenient locations.",
//       },
//       {
//         id: 2,
//         title: "Can I replace my car battery myself?",
//         description:
//           "Replacing batteries yourself is possible but risks electrical damage without proper procedures. Modern vehicles require specific steps to prevent computer memory loss and system errors. Incorrect terminal connections can damage expensive electrical components or cause dangerous sparks. Professional installation includes proper disposal, warranty registration, and electrical system verification. We recommend professional service for complex vehicles with advanced electronics.",
//       },
//       {
//         id: 3,
//         title: "Why does my new battery keep dying?",
//         description:
//           "A dying new battery indicates charging system problems, not battery defects. Faulty alternators fail to recharge batteries properly during driving. Parasitic electrical drains pull power when vehicles sit off, depleting batteries overnight. Loose or corroded connections prevent proper charging. We test charging systems thoroughly and identify drains before replacing batteries to prevent recurring failures and wasted money.",
//       },
//       {
//         id: 4,
//         title: "What's the difference between regular and AGM batteries?",
//         description:
//           "AGM batteries use absorbed glass mat technology that holds electrolyte in fiberglass mats instead of liquid form. AGM batteries charge faster, resist vibration better, and last longer than conventional flooded batteries. They cost more but perform better in vehicles with start-stop systems or high electrical demands. Regular batteries work fine for older vehicles with basic electrical systems and lower power requirements.",
//       },
//       {
//         id: 5,
//         title: "Do I need to reprogram my car after battery replacement?",
//         description:
//           "Many modern vehicles lose radio presets, clock settings, and minor memory items after battery disconnection. Some vehicles require steering angle sensor calibration or idle relearn procedures after battery replacement. Luxury vehicles with complex electronics sometimes need professional reprogramming to restore full functionality. We perform necessary resets during installation and inform you about any additional procedures required.",
//       },
//       {
//         id: 6,
//         title: "How do I know if my alternator is failing?",
//         description:
//           "Dimming lights, dead batteries, dashboard warning lights, and unusual noises indicate alternator problems. Battery repeatedly dies after jumpstarts despite being new. Electrical accessories work inconsistently or fail randomly. Strange burning smells come from engine bay. We test alternator output voltage and amperage to diagnose charging problems accurately before replacing expensive components unnecessarily.",
//       },
//       {
//         id: 7,
//         title: "What should I do if my battery dies suddenly?",
//         description:
//           "Call us immediately for emergency jumpstart or mobile battery replacement service anywhere in Dubai. Don't attempt multiple jumpstart attempts as this can damage electrical systems. Avoid leaving electrical accessories on during failed start attempts. We respond quickly to emergency calls and bring replacement batteries to your location. Our mobile service gets you back on roads fast without towing expenses.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Your Car Battery Replacement?",
//       description:
//         "Our battery specialists answer all your concerns and provide expert guidance for every electrical system need. Contact Caroto Repair Dubai now to discuss your vehicle's battery condition and schedule your service appointment today.",
//     },

//     location: {
//       title: "Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your battery replacement needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 8,
//     slug: "car-ac-repair-dubai",
//     title: "Car AC Repair in Dubai",
//     sub_title: "Trusted Car AC Repair in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers expert car AC repair and maintenance services for all vehicle types across Dubai. Our certified technicians diagnose, repair, and recharge AC systems using quality parts and precision equipment. You get transparent pricing, fast service, and cool comfort at every visit. We understand Dubai's scorching heat makes functioning AC absolutely essential for safe, comfortable driving. Visit our workshop for reliable AC solutions that keep your cabin cool on every journey.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763131500/1033_n0ihri.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Ac Gas Refilling Services in Dubai & Abu Dhabi",
//       description:
//         "We offer Premium Car AC Gas Refilling Services in Dubai. Professional service, genuine parts, and lasting cooling performance. We are available 24/7",
//       keywords: [
//         "Car AC Repair in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },
//     featureTitle: "Our Range of Car AC Repair Services in Dubai",
//     features: [
//       {
//         id: 1,
//         title: "AC System Inspection and Diagnosis",
//         description:
//           "We examine your complete AC system including compressor, condenser, evaporator, and refrigerant lines to identify problems.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 2,
//         title: "AC Gas Refill Dubai and Recharge",
//         description:
//           "We evacuate old refrigerant and refill with correct gas type at competitive car AC gas refill Dubai price.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 3,
//         title: "Compressor Repair and Replacement",
//         description:
//           "We diagnose compressor failures, repair issues, or replace damaged compressors with quality matching units for your vehicle.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 4,
//         title: "Condenser and Evaporator Service",
//         description:
//           "We clean, repair, or replace condensers and evaporators damaged by debris, corrosion, or leaks reducing cooling efficiency.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 5,
//         title: "AC Filter and Cabin Filter Replacement",
//         description:
//           "We provide car AC filter change and auto cabin filter replacement to improve airflow, cooling, and air quality.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 6,
//         title: "AC Leak Detection and Seal Repair",
//         description:
//           "Our equipment detects refrigerant leaks in hoses and components, then repairs seals preventing gas loss during car AC gas refill.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 7,
//         title: "Electrical and Cooling Control Check",
//         description:
//           "We test AC electrical components including relays, switches, and sensors to verify proper system operation and functionality.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 8,
//         title: "AC Performance and Airflow Testing",
//         description:
//           "We measure vent temperatures and airflow volumes to verify your AC system delivers factory-specification cooling performance consistently.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 9,
//         title: "Vent Cleaning and Odor Removal",
//         description:
//           "We clean AC vents, evaporator cores, and drain lines to eliminate bad smells, bacteria, and mold completely.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 10,
//         title: "AC Line and Hose Replacement",
//         description:
//           "We replace damaged or leaking AC lines and hoses with OEM-quality parts maintaining proper refrigerant pressure always.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 11,
//         title: "Climate Control System Calibration",
//         description:
//           "We calibrate automatic climate control systems using diagnostic tools to restore accurate temperature regulation and sensor function.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 12,
//         title: "Complete AC Overhaul and Tune-Up",
//         description:
//           "We perform comprehensive AC servicing including cleaning, leak testing, component replacement, and AC gas refill Dubai services.",
//         image: "/images/icons/icon-8.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Common Signs Your Car AC Needs Repair",
//       description: `<p>Your AC system shows clear symptoms when components fail or refrigerant leaks occur. Recognizing these warning signs prevents complete system failure in Dubai's extreme heat. Never ignore these critical symptoms:</p>
//       <ul style="list-style-type: disc; padding-left: 20px">
//           <li>Weak airflow or warm air blowing</li>
//           <li>AC cools very slowly or inconsistently</li>
//           <li>Strange grinding or squealing sounds occur</li>
//           <li>Musty or moldy smell from vents</li>
//           <li>Water drips inside cabin under dashboard</li>
//           <li>AC button flashes or system won't engage</li>
//       </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1760889421/general_car_reapir_v5rjtl.webp",
//     },
//     includeServices: {
//       includeServicesTitle: "Complete Car AC Care at Caroto Repair Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "FREE AC System Inspection",
//           description:
//             "We test your AC cooling performance, check refrigerant levels, and inspect components at no cost during every service visit.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 2,
//           title: "Quality Refrigerant and Parts",
//           description:
//             "You get genuine refrigerants meeting environmental standards and OEM-quality components that deliver reliable, long-lasting cooling performance and efficiency.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 3,
//           title: "Advanced Leak Detection Equipment",
//           description:
//             "Our certified technicians use UV dye and electronic leak detectors that pinpoint even the smallest refrigerant leaks other shops miss.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 4,
//           title: "Warranty on Repairs and Parts",
//           description:
//             "Every AC repair includes comprehensive warranty protection covering parts and workmanship for your complete peace of mind and protection.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 5,
//           title: "Same-Day AC Service Available",
//           description:
//             "Most AC repairs complete within hours. We stock common AC components for popular Dubai vehicles and prioritize emergency cooling services.",
//           image: "/images/icons/icon-8.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Car AC Repair in Dubai Today",
//       description:
//         "Your AC system provides essential comfort and safety in Dubai's extreme temperatures. Caroto Repair Dubai specializes in complete AC repairs that restore ice-cold air and reliable cooling performance. Contact us now to schedule your AC inspection and drive comfortably regardless of outside temperatures.",
//       guarantee:
//         "Schedule Your Professional AC Repair Service Now (Full Warranty Coverage Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Car AC Repair Service",
//       deliverServices: [
//         {
//           id: 1,
//           title: " Step 1: AC Inspection and Pressure Test ",
//           description:
//             "We connect diagnostic equipment to measure voltage, cranking amps, and charge capacity, then test your alternator output and charging performance.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: " Step 2: Leak Detection and System Evaluation",
//           description:
//             "Our technicians explain test results clearly, recommend appropriate battery options for your vehicle, and provide transparent pricing before any work.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: " Step 3: Repair, Gas Refilling, and Component Service",
//           description:
//             "We remove the old battery safely, install your new battery with proper terminal connections, and secure mounting to prevent movement damage.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: " Step 4: Cooling Performance Check and Final Test",
//           description:
//             "We verify charging system operation, test electrical accessories, reset vehicle computer if needed, and confirm everything functions correctly before delivery.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Choose Caroto for AC Repair?",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "AC System Specialists",
//           description:
//             "Our trained technicians diagnose and repair automotive AC systems across all vehicle brands with years of specialized cooling system experience.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 2,
//           title: "Professional Diagnostic Tools",
//           description:
//             "We use refrigerant recovery machines, vacuum pumps, and pressure gauges that service AC systems correctly meeting environmental and safety standards.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 3,
//           title: "Honest Repair Estimates",
//           description:
//             "You receive truthful assessments of your AC problems without unnecessary upselling or inflated repair recommendations. Our quotes include all costs.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 4,
//           title: "Fast Turnaround Service",
//           description:
//             "Most AC repairs finish the same day. We stock common compressors, condensers, and parts for popular vehicles and prioritize urgent cases.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 5,
//           title: "Complete Service Records",
//           description:
//             "We track your AC repairs, gas refills, and component replacements to maintain comprehensive service history for warranty claims and reference.",
//           image: "/images/icons/icon-8.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What To Expect During a Caroto AC Service",
//       description:
//         "Our AC service examines every component affecting your cooling system's performance and efficiency. You get honest findings, clear explanations, and repair priorities. We never recommend unnecessary repairs or push expensive services you don't actually need right now.",
//       contents: [
//         "Visual inspection of AC components including compressor, condenser, hoses, and connections for damage or leaks",
//         "Vent temperature measurement using precision thermometers to verify actual cooling performance against factory specifications accurately",
//         "Refrigerant pressure testing on both high and low sides to diagnose system problems and gas levels",
//         "Leak detection using UV dye and electronic sniffers to locate even tiny refrigerant leaks in system",
//         "Compressor operation testing to verify clutch engagement, proper cycling, and adequate refrigerant compression under load conditions",
//         "Written diagnostic report with photos documenting AC system condition, test results, and prioritized repair recommendations with cost estimates",
//       ],
//     },

//     additionalTwo: {
//       title: "Precision Cooling and Comfort: The Caroto Way",
//       description: `
//       <p>
//       Caroto Repair Dubai masters automotive AC systems across all vehicle types and refrigerant technologies. Our technicians understand refrigerant pressures, thermodynamic principles, and electrical control systems completely. We handle R134a systems, newer R1234yf refrigerants, and hybrid vehicle AC setups with precision. Your vehicle receives correct refrigerant amounts, proper system pressures, and quality component installations. We work on economy cars, luxury vehicles, commercial vans, and exotic sports cars daily. Our AC expertise delivers ice-cold air, efficient operation, and maximized system lifespan for Dubai's brutal summer temperatures.
//       </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763129652/1030_kpu86p.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         id: 1,
//         title: "How often should I service my car AC in Dubai?",
//         description:
//           "Service your AC annually before summer or every 20,000 kilometers to maintain optimal cooling performance. Dubai's extreme heat and constant AC usage stress systems more than moderate climates. Annual service includes gas top-ups, leak checks, and component inspections. Regular maintenance prevents expensive breakdowns during peak summer months when you need AC most desperately.",
//       },
//       {
//         id: 2,
//         title: "Why is my AC blowing warm air?",
//         description:
//           "Warm air indicates low refrigerant from leaks, failed compressor, clogged expansion valve, or electrical problems. Refrigerant leaks are most common causes requiring leak detection and repair before recharging. Compressor failure prevents refrigerant circulation and cooling. Blocked components restrict refrigerant flow reducing cooling capacity. We diagnose root causes accurately rather than just adding gas temporarily.",
//       },
//       {
//         id: 3,
//         title: "How much does AC gas refilling cost in Dubai?",
//         description:
//           "AC gas refilling costs vary based on refrigerant type, system capacity, and additional repairs needed. R134a costs less than newer R1234yf refrigerant. Simple recharges cost less than services requiring leak repairs or component replacement. We provide detailed quotes after diagnosing your system. Proper evacuation and refilling prevent problems and last longer than quick top-ups.",
//       },
//       {
//         id: 4,
//         title: "Can AC leaks be repaired permanently?",
//         description:
//           "Small leaks in hoses, connections, or seals can be repaired permanently using proper techniques and quality parts. Large leaks in condensers or evaporators often require component replacement for lasting solutions. Multiple leaks indicate system deterioration requiring more extensive repairs. We assess leak severity honestly and recommend cost-effective solutions. Temporary leak sealers damage AC systems and create bigger problems later.",
//       },
//       {
//         id: 5,
//         title: "Why does my AC smell bad?",
//         description:
//           "Bad smells come from bacteria, mold, or mildew growing on evaporator cores in damp, dark conditions. Clogged AC drain lines trap water creating breeding grounds for odor-causing organisms. Dirty cabin filters concentrate smells instead of filtering them. Dead rodents or debris in ventilation systems create terrible odors. We clean evaporators, clear drains, replace filters, and eliminate odor sources completely.",
//       },
//       {
//         id: 6,
//         title: "How long does AC repair take?",
//         description:
//           "Simple gas refills take 30 to 60 minutes. Component replacements require 2 to 4 hours depending on complexity and location. Major repairs like evaporator replacement need full-day service because of dashboard removal requirements. We provide accurate time estimates after diagnosis. Most repairs complete same-day so you don't suffer without AC in Dubai's heat.",
//       },
//       {
//         id: 7,
//         title: "Is it normal for AC to lose gas over time?",
//         description:
//           "AC systems should not lose refrigerant during normal operation in properly sealed systems. Small amounts might escape over many years through microscopic permeability. Rapid gas loss always indicates leaks requiring immediate repair. Repeated recharging without fixing leaks wastes money and harms the environment. We always check for leaks before refilling systems to prevent recurring problems and ensure lasting repairs.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Your Car AC Repair?",
//       description:
//         "Our AC specialists answer all your concerns and provide expert guidance for every cooling system need. Contact Caroto Repair Dubai now to discuss your vehicle's AC problems and schedule your service appointment today.",
//     },

//     location: {
//       title: "Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your car AC repair needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 9,
//     slug: "car-body-repair-painting-dubai",
//     title: "Car Body Repair in Dubai",
//     sub_title: "Professional Car Body Repair in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers expert car body repair and paint services for all vehicle types across Dubai. Our certified technicians restore damaged vehicles using quality materials and precision techniques. You get transparent pricing, factory-finish quality, and meticulous attention at every visit. We understand accidents and wear damage your vehicle's appearance and value significantly. Visit our workshop for professional body repair solutions that restore your car's original beauty perfectly.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763131796/1034_mn2pf3.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Body Repair, Denting and Painting Service in Dubai",
//       description:
//         "Accident repair, dent removal, scratch fix, and premium car painting in Dubai. OEM-grade finishes and color matching for a showroom look.",
//       keywords: [
//         "Car Body Repair in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },
//     featureTitle: "Our Range of Car Body Repair and Restoration Services",
//     features: [
//       {
//         id: 1,
//         title: "Dent and Scratch Removal",
//         description:
//           "We remove dents using specialized tools and repair scratches through filling, sanding, and refinishing to restore smooth surfaces.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 2,
//         title: "Full Body Accident Repair",
//         description:
//           "Our technicians repair collision damage including structural issues, panel replacement, and complete car accident repair Dubai refinishing to pre-accident condition.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 3,
//         title: "Bumper and Panel Replacement",
//         description:
//           "We replace damaged bumpers, fenders, doors, and body panels with OEM or quality aftermarket parts matching specifications exactly.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 4,
//         title: "Car Paint Refinishing and Touch-Up",
//         description:
//           "We apply professional automotive paint using spray booths and color-matching technology to achieve factory-quality finishes blending perfectly seamlessly.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 5,
//         title: "Frame Straightening and Alignment",
//         description:
//           "We use hydraulic frame machines to straighten bent chassis and restore proper structural alignment after major collision damage.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 6,
//         title: "Paintless Dent Removal (PDR)",
//         description:
//           "Our specialists provide paintless dent removal in Dubai, massaging metal from behind panels to preserve original factory paint affordably.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 7,
//         title: "Car Polishing and Detailing",
//         description:
//           "We polish paint to remove swirls and oxidation, then detail your vehicle completely to restore showroom shine and protection.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 8,
//         title: "Headlight Restoration",
//         description:
//           "We restore cloudy, yellowed headlight lenses through sanding and polishing to improve appearance, light output, and nighttime visibility dramatically.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 9,
//         title: "Rust Treatment and Prevention",
//         description:
//           "We remove rust completely, treat affected metal, apply rust converters, and refinish areas to prevent further corrosion and damage.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 10,
//         title: "Alloy Wheel Repair and Painting",
//         description:
//           "We repair curb damage, straighten bent wheels, and repaint alloys to restore perfect appearance matching your vehicle's original finish.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 11,
//         title: "Custom Body Painting and Color Matching",
//         description:
//           "We perform complete repaints, color changes, and custom finishes using computerized color-matching systems delivering precise, consistent results throughout.",
//         image: "/images/icons/icon-8.png",
//       },
//       {
//         id: 12,
//         title: "Insurance Claim Assistance for Body Repairs",
//         description:
//           "We prepare detailed estimates, document damage thoroughly, and coordinate directly with insurance companies to streamline your claim process.",
//         image: "/images/icons/icon-8.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Signs Your Car Needs Body Repair or Paintwork",
//       description: `<p>Your vehicle's body shows clear signs when damage requires professional attention. Recognizing these indicators protects your investment and maintains vehicle value. Never ignore these visible problems:</p>
//       <ul style="list-style-type: disc; padding-left: 20px">
//           <li>Obvious dents, deep scratches, or paint chips</li>
//           <li>Misaligned bumpers or doors that won't close</li>
//           <li>Rust forming or paint bubbling and peeling</li>
//           <li>Paint looks faded, oxidized, or dull</li>
//           <li>Strange rattling sounds after minor accidents</li>
//           <li>Uneven gaps or poor panel alignment visible</li>
//       </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125861/1025_wgq9m0.webp",
//     },
//     includeServices: {
//       includeServicesTitle: "Complete Body Repair and Paint at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "FREE Damage Assessment",
//           description:
//             "We inspect your vehicle thoroughly, document all damage, and provide detailed repair estimates at no cost before any work.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 2,
//           title: "OEM and Quality Aftermarket Parts",
//           description:
//             "You get genuine manufacturer parts or premium alternatives that fit perfectly and match original specifications for lasting quality and appearance.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 3,
//           title: "Professional Paint Booth Facilities",
//           description:
//             "Our certified technicians use climate-controlled spray booths with advanced ventilation that deliver flawless, dust-free paint finishes matching factory standards.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 4,
//           title: "Warranty on Body Work and Paint",
//           description:
//             "Every body repair includes comprehensive warranty protection covering workmanship and paint quality for your complete peace of mind and investment.",
//           image: "/images/icons/icon-8.png",
//         },
//         {
//           id: 5,
//           title: "Insurance Claims Processing",
//           description:
//             "We handle insurance paperwork, coordinate with adjusters, and accept direct payment from most insurance companies for your convenience throughout.",
//           image: "/images/icons/icon-8.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Schedule Your Car Body Repair in Dubai Today",
//       description:
//         "Your vehicle's appearance affects pride of ownership, resale value, and protection from elements. Caroto Repair Dubai specializes in precision body repairs that restore original beauty and structural integrity completely. Contact us now to schedule your damage assessment and see your car looking perfect again.",
//       guarantee:
//         "Book Your Professional Body Repair Service Now (Full Warranty Coverage Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Expert Car Body Repair Service",
//       deliverServices: [
//         {
//           id: 1,
//           title: "Step 1: Vehicle Assessment",
//           description:
//             "We inspect all visible and hidden damage, photograph everything thoroughly, measure panels, and prepare detailed repair estimates with itemized costs.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: "Step 2: Repair Planning and Cost Approval",
//           description:
//             "Our technicians explain necessary repairs clearly, discuss part options and timelines, then obtain your approval before ordering materials or starting work.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: "Step 3: Panel Work, Painting, and Finishing",
//           description:
//             "We remove damaged parts, straighten panels, apply body filler, sand surfaces smooth, spray primer and paint, then apply clear coat.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: "Step 4: Final Quality Check and Detailing",
//           description:
//             "We inspect paint finish under proper lighting, verify panel alignment and gaps, polish painted surfaces, then detail your vehicle completely.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Dubai Trust Caroto for Body Repair?",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Collision Repair Specialists",
//           description:
//             "Our trained body technicians repair accident damage, perform paintwork, and restore vehicles for all brands with years of specialized experience.",
//           image: "/images/icons/icon-9.png",
//         },
//         {
//           id: 2,
//           title: "Computerized Color Matching",
//           description:
//             "We use spectrophotometer technology that analyzes your paint color precisely and creates exact formulas matching your vehicle's original finish.",
//           image: "/images/icons/icon-9.png",
//         },
//         {
//           id: 3,
//           title: "Transparent Pricing Always",
//           description:
//             "You receive detailed estimates showing parts costs, labor hours, paint materials, and all fees upfront with no surprise charges appearing.",
//           image: "/images/icons/icon-9.png",
//         },
//         {
//           id: 4,
//           title: "Quick Turnaround Available",
//           description:
//             "Most minor repairs complete within 2-3 days. Major collision repairs take longer based on damage extent and parts availability timelines.",
//           image: "/images/icons/icon-9.png",
//         },
//         {
//           id: 5,
//           title: "Complete Photo Documentation",
//           description:
//             "We photograph damage before, during, and after repairs to document our work quality and maintain records for insurance and warranty.",
//           image: "/images/icons/icon-9.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What To Expect During a Caroto Body Repair Service?",
//       description:
//         "Our body repair service examines all damage thoroughly and restores your vehicle to original condition. You get honest assessments, quality workmanship, and attention to detail. We never cut corners or use inferior materials regardless of repair size or complexity.",
//       contents: [
//         "Comprehensive damage inspection checking body panels, frame, paint, lights, and structural components for visible and hidden damage",
//         "Digital photography documenting all damage angles and severity for insurance claims and repair reference throughout the process",
//         "Paint thickness measurement using gauges to verify original paint and detect previous repairs affecting color matching requirements",
//         "Panel gap verification measuring spacing between doors, fenders, and body parts to identify alignment issues needing correction",
//       ],
//     },

//     additionalTwo: {
//       title: "Precision Craftsmanship and Detailing: The Caroto Way",
//       description: `
//       <p>
//       Caroto Repair Dubai masters automotive body repair and refinishing across all vehicle types and damage severities. Our technicians understand metal shaping, plastic repair techniques, and modern paint chemistry completely. We handle minor scratches, major collision damage, rust restoration, and custom paint jobs with precision. Your vehicle receives proper surface preparation, correct paint application, and careful color matching. We work on economy cars, luxury vehicles, exotic sports cars, and classic automobiles daily.
//       </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763129652/1030_kpu86p.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         id: 1,
//         title: "How long does body repair and painting take?",
//         description:
//           "Minor repairs like scratch removal or small dent repair take 1-2 days. Bumper replacement and painting needs 2-3 days for proper curing. Major collision repairs require 1-2 weeks depending on damage extent and parts availability. Custom paint jobs take longer because of multiple coats and curing time. We provide accurate timelines after assessing your specific damage completely.",
//       },
//       {
//         id: 2,
//         title: "Will repaired areas match the original paint color?",
//         description:
//           "Our computerized color-matching system analyzes your exact paint formula and accounts for fading over time. We blend paint into adjacent panels for seamless transitions. New paint appears slightly different initially but weathers to match perfectly within months. Metallic and pearl colors require extra care for proper matching. We guarantee color matches or redo work at no charge.",
//       },
//       {
//         id: 3,
//         title: "Does insurance cover body repair costs?",
//         description:
//           "Comprehensive and collision insurance coverage pays for accident damage minus your deductible amount. Review your policy to understand coverage limits and requirements. We prepare detailed estimates for insurance companies and coordinate directly with adjusters. Most insurers approve our estimates quickly. You pay only your deductible amount when insurance covers repairs completely.",
//       },
//       {
//         id: 4,
//         title: "Can you repair aluminum body panels?",
//         description:
//           "Yes, we repair aluminum panels using specialized techniques and equipment different from steel repair. Aluminum requires specific welding procedures, pulling methods, and adhesives. Many modern vehicles use aluminum extensively requiring trained technicians. Our shop has proper aluminum repair certification and equipment. Aluminum repairs cost more than steel because of specialized requirements and materials needed.",
//       },
//       {
//         id: 5,
//         title: "What's the difference between PDR and traditional dent repair?",
//         description:
//           "Paintless dent removal massages dents out from behind panels without disturbing original paint. PDR works only for minor dents without paint damage. Traditional repair involves filling, sanding, and repainting damaged areas. PDR costs less and completes faster than conventional methods. Large dents, creased metal, or paint damage require traditional repair techniques for proper restoration results.",
//       },
//       {
//         id: 6,
//         title: "How do I prevent rust after body repairs?",
//         description:
//           "We apply rust inhibitors, sealers, and proper primer before painting to prevent future corrosion. Wash your car regularly removing salt and contaminants. Wax painted surfaces every few months for protection. Fix paint chips immediately before rust starts. Inspect repair areas annually for early rust signs. Our rust treatment and paint process prevents corrosion for years when maintained properly.",
//       },
//       {
//         id: 7,
//         title: "Can you match custom or aftermarket paint colors?",
//         description:
//           "Yes, our color-matching technology analyzes any paint color including custom mixes and aftermarket finishes. We create formulas matching non-standard colors accurately. Custom colors may require additional test sprays for perfect matching. Provide paint codes or samples if available for faster matching. We guarantee satisfaction with color results or adjust formulas until you approve completely.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Your Car Body Repair?",
//       description:
//         "Our body repair specialists answer all your concerns and provide expert guidance for every restoration need. Contact Caroto Repair Dubai now to discuss your vehicle's body damage and schedule your service appointment today.",
//     },

//     location: {
//       title: "Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your car body repair needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 10,
//     slug: "car-engine-repair-dubai",
//     title: "Engine Repair in Dubai",
//     sub_title: "Expert Engine Repair in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers professional engine repair and rebuild services for all vehicle types across Dubai. Our certified technicians diagnose and repair engine problems using quality parts and precision techniques. You get transparent pricing, expert workmanship, and reliable performance at every visit. We understand your engine's health determines your vehicle's lifespan and dependability completely. Visit our workshop for comprehensive engine solutions that restore power, efficiency, and smooth operation perfectly.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763131500/1033_n0ihri.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Engine Repair & Rebuild Services in Dubai, UAE",
//       description:
//         "Visit Caroto Repair for expert Car Engine Repair & Rebuild Service in Dubai. Check Engine Light Diagnostics, Engine Oil Change, and more.",
//       keywords: [
//         "Engine Repair in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },
//     featureTitle: "Our Range of Engine Repair Services in Dubai",
//     features: [
//       {
//         id: 1,
//         title: "Engine Diagnostics and Inspection",
//         description:
//           "We use advanced diagnostic scanners to read error codes, analyze sensor data, and identify engine problems accurately before recommending repairs.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 2,
//         title: "Minor and Major Engine Overhaul",
//         description:
//           "Our technicians perform comprehensive engine servicing from valve adjustments to complete teardowns, replacing worn components to restore optimal performance.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 3,
//         title: "Engine Rebuild and Replacement",
//         description:
//           "We rebuild damaged engines with new pistons, bearings, and gaskets or install quality replacement engines matching your vehicle's specifications exactly.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 4,
//         title: "Timing Belt and Chain Replacement",
//         description:
//           "We replace worn timing belts and chains before they break, preventing catastrophic engine damage from valve and piston collisions.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 5,
//         title: "Cylinder Head and Gasket Repair",
//         description:
//           "We remove cylinder heads, resurface warped surfaces, replace gaskets, and repair valve components to stop leaks and restore compression properly.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 6,
//         title: "Fuel Injector Cleaning and Calibration",
//         description:
//           "We clean clogged injectors ultrasonically, test spray patterns, and calibrate fuel delivery to restore proper combustion and fuel efficiency completely.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 7,
//         title: "Turbocharger and Supercharger Service",
//         description:
//           "We diagnose boost problems, replace damaged turbos or superchargers, and repair oil feed lines to restore forced induction performance safely.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 8,
//         title: "Engine Mount Replacement",
//         description:
//           "We replace worn or broken engine mounts that cause excessive vibration, movement, and noise affecting your driving comfort and component longevity.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 9,
//         title: "Cooling and Lubrication System Repair",
//         description:
//           "We repair water pumps, radiators, oil pumps, and related components to maintain proper engine temperatures and lubrication under all conditions.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 10,
//         title: "Valve and Piston Replacement",
//         description:
//           "We replace bent valves, worn valve seals, damaged pistons, and piston rings to restore compression, reduce oil consumption, and eliminate smoke.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 11,
//         title: "Engine Oil Leak Detection and Repair",
//         description:
//           "We identify oil leak sources using pressure tests and UV dye, then replace gaskets, seals, or damaged components causing fluid loss.",
//         image: "/images/icons/icon-10.png",
//       },
//       {
//         id: 12,
//         title: "ECU and Engine Performance Tuning",
//         description:
//           "We reprogram engine computers, optimize fuel maps, and tune performance parameters to improve power delivery, efficiency, and drivability characteristics.",
//         image: "/images/icons/icon-10.png",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Warning Signs You Need Engine Repair",
//       description: `<p>Your engine communicates problems through sounds, performance changes, and warning indicators. Recognizing these symptoms prevents catastrophic failures and expensive damage. Never ignore these critical signs:</p>
//       <ul style="list-style-type: disc; padding-left: 20px">
//           <li>Loud knocking, ticking, or grinding sounds</li>
//           <li>Significant power loss or sluggish acceleration</li>
//           <li>Overheating engine or thick exhaust smoke</li>
//           <li>Oil puddles or coolant leaks underneath</li>
//           <li>Rough running or engine stalls frequently</li>
//           <li>Check engine light illuminates constantly</li>
//       </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125861/1025_wgq9m0.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "Complete Engine Repair and Rebuild at Caroto Repair Dubai",
//       includeServices: [
//         {
//           id: 1,
//           title: "FREE Engine Diagnostics Scan",
//           description:
//             "We read error codes, analyze live data, and perform basic engine inspections at no cost to identify problems accurately.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 2,
//           title: "Quality OEM and Aftermarket Parts",
//           description:
//             "You get genuine manufacturer components or premium alternatives that meet original specifications for reliable performance and proper fitment always.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 3,
//           title: "Experienced Engine Technicians",
//           description:
//             "Our certified mechanics specialize in engine repairs across all vehicle brands with years of hands-on experience diagnosing and fixing complex problems.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 4,
//           title: "Comprehensive Warranty Coverage",
//           description:
//             "Every engine repair includes warranty protection covering parts and labor for your peace of mind and investment protection completely.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 5,
//           title: "Detailed Repair Documentation",
//           description:
//             "We photograph engine condition, document work performed, and provide maintenance records for future reference and warranty claims if needed.",
//           image: "/images/icons/icon-10.png",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Engine Repair Service in Dubai Today",
//       description:
//         "Your engine powers everything your vehicle does from daily commutes to long journeys. Caroto Repair Dubai specializes in precision engine repairs that restore reliable performance, fuel efficiency, and smooth operation. Contact us now to schedule your engine diagnostics and get back to confident driving immediately.",
//       guarantee:
//         "Schedule Your Expert Engine Repair Service Now (Full Warranty Protection Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Engine Repair Service",
//       deliverServices: [
//         {
//           id: 1,
//           title: "Step 1: Engine Assessment",
//           description:
//             "We connect diagnostic equipment to read fault codes, test sensors, measure compression, and inspect visible components to identify problems accurately.",
//           image: "/images/icons/icon-22.png",
//         },
//         {
//           id: 2,
//           title: "Step 2: Damage Identification",
//           description:
//             "Our technicians explain findings clearly using photos and videos, recommend necessary repairs, and provide detailed quotes before starting any work.",
//           image: "/images/icons/icon-23.png",
//         },
//         {
//           id: 3,
//           title: "Step 3: Engine Repair, or Replacement",
//           description:
//             "We disassemble engines carefully, replace damaged components with quality parts, reassemble using proper torque specifications, and install new fluids throughout.",
//           image: "/images/icons/icon-24.png",
//         },
//         {
//           id: 4,
//           title: "Step 4: Final Testing and Performance Tuning",
//           description:
//             "We test drive vehicles, verify all repairs function correctly, scan for remaining codes, and tune performance parameters for optimal operation.",
//           image: "/images/icons/icon-25.png",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Dubai Drivers Choose Caroto for Engine Repair",
//       whyTrustItems: [
//         {
//           id: 1,
//           title: "Engine Repair Specialists",
//           description:
//             "Our trained mechanics diagnose and repair gasoline, diesel, and turbocharged engines across all vehicle brands with extensive specialized experience daily.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 2,
//           title: "Advanced Diagnostic Technology",
//           description:
//             "We use professional-grade scanners, compression testers, and borescopes that identify internal engine problems others miss without disassembly required.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 3,
//           title: "Honest Assessment Always",
//           description:
//             "You receive truthful evaluations of engine condition without pressure to approve unnecessary repairs or inflated recommendations for profit only.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 4,
//           title: "Competitive Repair Pricing",
//           description:
//             "Our quotes include detailed breakdowns of parts costs, labor hours, and materials needed with transparent pricing and no hidden fees.",
//           image: "/images/icons/icon-10.png",
//         },
//         {
//           id: 5,
//           title: "Complete Service History",
//           description:
//             "We track all engine work performed, parts replaced, and maintenance completed to maintain comprehensive records for warranty and resale value.",
//           image: "/images/icons/icon-10.png",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What To Expect During a Caroto Engine Inspection",
//       description:
//         "Our engine inspection reveals actual mechanical condition through thorough testing and analysis. You get honest findings, clear explanations, and prioritized recommendations. We never recommend unnecessary teardowns or push expensive repairs prematurely without solid evidence of problems.",
//       contents: [
//         "Computer diagnostics scanning all engine control modules for stored fault codes and live sensor data analysis",
//         "Compression testing measuring cylinder pressures to evaluate valve sealing, piston ring condition, and head gasket integrity accurately",
//         "Visual inspection examining belts, hoses, gaskets, and external components for leaks, cracks, wear, or visible damage",
//         "Oil analysis checking oil condition, contamination levels, and presence of metal particles indicating internal wear patterns",
//       ],
//     },

//     additionalTwo: {
//       title: "Precision, Power, and Performance: The Caroto Way",
//       description: `
//       <p>
//       Caroto Repair Dubai masters engine repair across all powerplant types and vehicle architectures completely. Our technicians understand combustion principles, valve timing, fuel delivery systems, and electronic engine management thoroughly. We handle four-cylinder engines, V6 and V8 powerplants, diesel engines, and turbocharged applications with precision. Your vehicle receives correct torque specifications, proper timing alignment, and quality component installation. We work on economy cars, luxury sedans, performance vehicles, and commercial trucks daily.
//       </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125054/1021_gyhapk.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         title: "How much does engine repair cost in Dubai?",
//         description:
//           "Engine repair costs range from minor fixes costing hundreds to complete rebuilds costing thousands of dirhams. Simple repairs like gasket replacement cost less than major overhauls requiring extensive disassembly. We provide accurate estimates after diagnosing problems completely. Repair costs depend on damage severity, parts needed, and labor hours required. Getting quotes before approving work prevents budget surprises.",
//       },
//       {
//         title: "Should I repair or replace my engine?",
//         description:
//           "Repair makes sense when damage is localized and repair costs stay under 60% of replacement costs. Replace engines with catastrophic damage, cracked blocks, or extensive wear throughout. Consider vehicle age, mileage, and overall condition when deciding. We provide honest recommendations based on your situation and budget. Sometimes replacement proves more cost-effective long-term than expensive repairs.",
//       },
//       {
//         title: "How long does engine repair take?",
//         description:
//           "Minor repairs like sensor replacement take hours. Major repairs including head gasket replacement need 2-3 days. Complete engine rebuilds require 1-2 weeks depending on parts availability and damage extent. We provide accurate timelines after assessment. Rush service available for urgent situations. We update you regularly throughout repairs so you know progress.",
//       },
//       {
//         title: "What causes engine overheating?",
//         description:
//           "Low coolant levels, failed thermostats, broken water pumps, or clogged radiators cause overheating. Head gasket failures let combustion gases into cooling systems. Faulty radiator fans fail to cool properly. Blocked radiators restrict airflow. We diagnose overheating causes accurately before repairs. Continued overheating warps cylinder heads and damages engines severely. Address overheating immediately before catastrophic damage occurs.",
//       },
//       {
//         title: "Can you repair engines with check engine lights?",
//         description:
//           "Yes, we diagnose check engine light causes using professional scanners reading fault codes. Lights indicate emissions problems, sensor failures, or mechanical issues. We test components, verify repairs fix root causes, and clear codes permanently. Some problems need simple fixes. Others require major repairs. We never just clear codes without fixing actual problems causing warnings to appear.",
//       },
//       {
//         title: "What is engine knocking and is it serious?",
//         description:
//           "Engine knocking indicates abnormal combustion timing, worn bearings, or piston slap from excessive clearances. Rod bearing knock sounds metallic and worsens under load. Piston slap sounds hollow when cold. Pre-ignition causes pinging under acceleration. All knocking requires immediate diagnosis. Continued operation damages engines catastrophically. We identify knock sources and recommend appropriate repairs before failures occur.",
//       },
//       {
//         title: "Do you offer engine performance upgrades?",
//         description:
//           "Yes, we perform ECU tuning, install performance air intakes, upgrade exhaust systems, and modify engines for increased power. Performance modifications require careful planning matching components properly. We discuss realistic expectations, costs, and reliability implications before modifications. Some upgrades void warranties. We tune engines safely maximizing performance without sacrificing reliability or engine longevity when done correctly.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Your Engine Repair?",
//       description:
//         "Our engine specialists answer all your concerns and provide expert guidance for every repair need. Contact Caroto Repair Dubai now to discuss your vehicle's engine problems and schedule your service appointment today",
//     },

//     location: {
//       title: "Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your engine repair needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 11,
//     slug: "car-electrical-repair-dubai",
//     title: "Car Electrical Repair in Dubai",
//     sub_title: "Professional Car Electrical Repair in Dubai",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai delivers expert car electrical repair and diagnostic services for all vehicle types across Dubai. Our certified technicians diagnose and repair electrical problems using advanced equipment and quality components. You get transparent pricing, accurate diagnostics, and reliable solutions at every visit. We understand electrical issues cause frustrating breakdowns and safety concerns for drivers. Visit our workshop for comprehensive electrical solutions that restore power, functionality, and dependability to your vehicle completely.
// `,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763132192/1035_vm6yck.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Electrical Repair Services in Dubai - Wiring & Sensors",
//       description:
//         "Get immediate troubleshooting and expert repair for all car wiring, lighting, and electronic component issues. Your trusted auto electrician in Dubai.",
//       keywords: [
//         "Car Electrical Repair in Dubai",
//         "car repair service in dubai",
//         "types of car repair services",
//         "car maintenance service package",
//         "best car garage in dubai",
//       ],
//     },
//     featureTitle: "Car Electrical Repair and Diagnostic Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-11.png",
//         title: "Alternator and Starter Motor Repair",
//         description:
//           "We test alternator output and starter operation, then repair or replace faulty components for reliability.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-11.png",
//         title: "Battery Testing and Replacement",
//         description:
//           "Our technicians test battery voltage and cranking amps, then replace weak batteries with quality matching units.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-11.png",
//         title: "ECU and Sensor Diagnosis",
//         description:
//           "We scan engine control units and sensors using diagnostic tools to identify electrical faults causing problems.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-11.png",
//         title: "Wiring and Circuit Restoration",
//         description:
//           "We trace damaged wiring, repair short circuits, and restore connections. Car electrical wiring repair cost stays competitive.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-11.png",
//         title: "Fuse and Relay Replacement",
//         description:
//           "We identify blown fuses and failed relays causing component failures, then replace with correct amperage ratings.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-11.png",
//         title: "Dashboard Warning Light Repair",
//         description:
//           "We diagnose warning light causes using scanners, repair electrical problems, and clear codes after fixing issues.",
//       },
//       {
//         id: 7,
//         image: "/images/icons/icon-11.png",
//         title: "Power Window and Mirror Service",
//         description:
//           "We repair power window motors, regulators, switches, and mirror motors to restore electrical accessory operation completely.",
//       },
//       {
//         id: 8,
//         image: "/images/icons/icon-11.png",
//         title: "Central Locking System Repair",
//         description:
//           "We diagnose and repair central locking actuators, modules, and wiring to restore keyless entry features properly.",
//       },
//       {
//         id: 9,
//         image: "/images/icons/icon-11.png",
//         title: "Lighting and Headlight Upgrade",
//         description:
//           "We repair lighting circuits, replace bulbs, and upgrade to LED or HID systems for improved visibility.",
//       },
//       {
//         id: 10,
//         image: "/images/icons/icon-11.png",
//         title: "Battery Drain and Short Circuit Testing",
//         description:
//           "We perform parasitic draw tests identifying components draining batteries overnight. Car wiring repair cost remains transparent and fair.",
//       },
//       {
//         id: 11,
//         image: "/images/icons/icon-11.png",
//         title: "Electrical Accessory Installation",
//         description:
//           "We install dashcams, audio systems, alarms, and accessories using correct wiring techniques preserving vehicle electrical integrity.",
//       },
//       {
//         id: 12,
//         image: "/images/icons/icon-11.png",
//         title: "Full Electrical System Maintenance",
//         description:
//           "We inspect complete vehicle electrical system repair including alternator, battery, wiring, and components preventing future breakdowns.",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Common Signs You Need Car Electrical Repair in Dubai",
//       description: `<p>Your vehicle's electrical system shows clear symptoms when components fail or circuits malfunction. Recognizing these warning signs prevents complete breakdowns and expensive damage. Never ignore these critical indicators:</p>
//       <ul style="list-style-type: disc; padding-left: 20px">
//           <li>Engine won't start or cranks very slowly</li>
//           <li>Headlights flicker or appear unusually dim</li>
//           <li>Multiple warning lights flash on dashboard constantly</li>
//           <li>Burning smell or electrical odor from cabin</li>
//           <li>Power locks or windows stop working suddenly</li>
//           <li>Battery loses charge much faster than normal</li>
//       </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125258/1022_ukp8ob.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "Complete Electrical Repair and Maintenance at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-11.png",
//           title: "FREE Electrical System Diagnostics",
//           description:
//             "We scan your vehicle's electrical systems, read fault codes, and perform basic inspections at no cost to identify problems.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-11.png",
//           title: "Advanced Diagnostic Equipment",
//           description:
//             "You get professional-grade scanners, multimeters, and oscilloscopes that pinpoint electrical faults other shops miss without proper testing equipment.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-11.png",
//           title: "Certified Electrical Technicians",
//           description:
//             "Our trained mechanics specialize in automotive electrical systems across all vehicle brands with years of diagnostic and repair experience daily.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-11.png",
//           title: "Quality Replacement Components",
//           description:
//             "We install OEM or premium aftermarket electrical parts that meet original specifications for reliable performance and proper system integration always.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-11.png",
//           title: "Complete Repair Warranty",
//           description:
//             "Every electrical repair includes comprehensive warranty protection covering parts and workmanship for your peace of mind and investment protection completely.",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Car Electrical Repair in Dubai Today",
//       description:
//         "Your vehicle's electrical system controls everything from starting to safety features and entertainment. Caroto Repair Dubai specializes in accurate electrical diagnostics that identify problems quickly and repairs that restore complete functionality. Contact us now to schedule your electrical system inspection and eliminate frustrating electrical issues permanently.",
//       guarantee:
//         "Schedule Your Professional Electrical Repair Service Now (Full Warranty Coverage Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Car Electrical Repair Service",
//       deliverServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-22.png",
//           title: "Step 1: Electrical System Scan and Diagnosis",
//           description:
//             "We connect diagnostic scanners to read fault codes, test voltage at key points, and inspect visible wiring for damage or corrosion.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-23.png",
//           title: "Step 2: Fault Detection and Cost Estimate",
//           description:
//             "Our technicians trace circuits systematically, identify failed components or damaged wiring, and provide detailed repair quotes before starting work.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-24.png",
//           title: "Step 3: Component Repair & Replacement",
//           description:
//             "We replace faulty electrical parts, repair damaged wiring properly, solder connections correctly, and restore circuits to factory specifications precisely.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-25.png",
//           title: "Step 4: Final Voltage and Performance Test",
//           description:
//             "We verify all repairs function correctly, measure system voltages, clear fault codes, and test drive vehicles confirming problems are solved.",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle:
//         "Why Drivers in Dubai Choose Caroto for Electrical Repairs",
//       whyTrustItems: [
//         {
//           id: 1,
//           image: "/images/icons/icon-11.png",
//           title: "Electrical System Specialists",
//           description:
//             "Our certified technicians diagnose and repair automotive electrical problems across all vehicle brands with extensive specialized training and experience.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-11.png",
//           title: "Professional Diagnostic Tools",
//           description:
//             "We use advanced scanners, wiring diagrams, and testing equipment that identify complex electrical faults accurately without guesswork or trial-and-error.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-11.png",
//           title: "Accurate Problem Identification",
//           description:
//             "You receive precise diagnostics identifying actual problems rather than replacing parts unnecessarily hoping something fixes intermittent electrical issues randomly.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-11.png",
//           title: "Fast Repair Turnaround",
//           description:
//             "Most electrical repairs complete within one day. We stock common electrical components for popular vehicles and prioritize urgent breakdown repairs.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-11.png",
//           title: "Detailed Service Records",
//           description:
//             "We document all electrical work performed, components replaced, and diagnostic findings to maintain comprehensive records for warranty and reference.",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What to Expect During a Car Electrical Inspection",
//       description:
//         "Our electrical inspection examines your vehicle's complete electrical system through systematic testing and analysis. You get honest findings, clear explanations, and prioritized recommendations. We never guess at electrical problems or recommend unnecessary component replacements without proper diagnostic evidence.",
//       contents: [
//         "Computer diagnostics scanning all vehicle control modules for stored fault codes and electrical system errors",
//         "Voltage testing measuring battery, alternator output, and circuit voltages to verify proper electrical system operation throughout",
//         "Visual wiring inspection examining connections, harnesses, and grounds for corrosion, damage, or loose connections causing problems",
//         "Parasitic draw testing identifying components draining battery power when vehicle sits off causing dead battery conditions",
//       ],
//     },

//     additionalTwo: {
//       title: "Precision and Expertise in Every Electrical Repair",
//       description: `
//       <p>
//       Caroto Repair Dubai masters automotive electrical systems across all vehicle types and electronic architectures completely. Our technicians understand circuit theory, voltage requirements, and computer network protocols thoroughly. We handle basic lighting circuits, complex computer networks, hybrid electrical systems, and advanced driver assistance features with precision. Your vehicle receives proper wire gauge sizing, correct fuse ratings, and quality solder connections. We work on economy cars, luxury vehicles, electric cars, and commercial vehicles daily.
//       </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1760889421/general_car_reapir_v5rjtl.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         title:
//           "Why does my car have electrical problems after battery replacement?",
//         description:
//           "Modern vehicles store settings and calibrations requiring specific procedures during battery disconnection. Improper battery replacement causes computer memory loss, radio lockouts, or sensor calibration issues. Some vehicles need computer resets or relearning procedures after battery service. Voltage spikes during replacement damage sensitive electronics occasionally. We perform battery replacements correctly using memory savers and proper procedures preventing electrical problems afterward.",
//       },
//       {
//         title: "How do you diagnose intermittent electrical problems?",
//         description:
//           "Intermittent problems require systematic testing reproducing conditions causing failures. We wiggle wire harnesses, heat components, and monitor circuits over time identifying patterns. Diagnostic scanners record fault occurrences providing clues. Sometimes problems need extended monitoring periods. We never guess or replace parts randomly hoping to fix intermittent issues. Proper diagnosis takes time but saves money avoiding unnecessary part replacement.",
//       },
//       {
//         title: "Can you repair water damaged electrical systems?",
//         description:
//           "Yes, we repair water damaged wiring and components if addressed quickly before corrosion spreads extensively. We dry affected areas, clean connections thoroughly, apply corrosion inhibitors, and test circuits completely. Severely corroded wiring or modules need replacement for reliable operation. Water damage requires thorough inspection because problems appear gradually over time. Quick action after water exposure prevents extensive damage and expensive repairs.",
//       },
//       {
//         title: "Why does my battery keep dying overnight?",
//         description:
//           "Parasitic electrical drains pull power continuously when vehicles sit off. Faulty components, stuck relays, or wiring shorts cause excessive current draw. Aftermarket accessories installed incorrectly often drain batteries. Aging batteries lose capacity gradually needing replacement. We perform draw tests measuring current consumption identifying components causing drains. Eliminating parasitic drains solves recurring dead battery problems permanently.",
//       },
//       {
//         title: "How much do electrical repairs cost in Dubai?",
//         description:
//           "Electrical repair costs vary widely based on problem complexity and components needed. Simple repairs like fuse replacement cost minimally. Complex wiring repairs or computer module replacement cost considerably more. Diagnostic fees apply separately from repair costs. We provide accurate estimates after diagnosing problems completely. Electrical repairs often prove more cost-effective than replacing vehicles with electrical issues.",
//       },
//       {
//         title: "Can aftermarket accessories cause electrical problems?",
//         description:
//           "Yes, improperly installed accessories overload circuits, drain batteries, or interfere with vehicle computers. Incorrect wiring causes short circuits and fires. Poorly designed accessories create electrical noise disrupting sensitive electronics. We install accessories correctly using proper wiring techniques, fuses, and relays. Professional installation prevents problems and maintains vehicle electrical system integrity. Always use qualified installers for electrical accessory additions.",
//       },
//       {
//         title: "Do you work on hybrid and electric vehicle electrical systems?",
//         description:
//           "Yes, our technicians receive specialized training for hybrid and electric vehicle high-voltage systems safely. We diagnose battery management systems, charging problems, and inverter issues. High-voltage work requires proper safety equipment and procedures. Not all shops handle EV systems safely. We invest in training and equipment servicing modern electric and hybrid vehicles properly meeting manufacturer standards completely.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Car Electrical Repair in Dubai?",
//       description:
//         "Our electrical system specialists answer all your concerns and provide expert guidance for every repair need. Contact Caroto Repair Dubai now to discuss your vehicle's electrical problems and schedule your service appointment today.",
//     },

//     location: {
//       title: "Electrical Repair Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your car electrical repair needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 12,
//     slug: "car-computer-diagnostics-dubai",
//     title: "Car Inspection and Diagnostics in Dubai",
//     sub_title: "Professional Vehicle Inspection & Diagnostics in Dubai",
//     shortDescription:
//       "Comprehensive car inspections and computer diagnostics for all vehicle types across Dubai.",
//     longDescription: `Caroto Repair Dubai offers expert car inspection and computer diagnostics services in Dubai. Our certified technicians perform complete vehicle inspections, including engine, AC, brakes, suspension, and electrical systems. Using advanced diagnostic tools, we identify hidden issues accurately, providing detailed reports and cost-effective repair recommendations. Ensure your vehicle is safe, reliable, and performing optimally with our professional inspection and diagnostics services.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763132586/1036_c5nuqg.webp",
//     bannerImage: "/images/banners/car-inspection-banner.jpg",
//     metadata: {
//       title: "Best Car Computer Diagnosis & Testing Service in Dubai",
//       description:
//         "High Range Garage offers car computer diagnosis, car computer testing, car computer scanning & Check in Dubai. We are the best auto repair in Dubai.",
//       keywords: [
//         "Car Inspection in dubai",
//         "Car Diagnostic Services in dubai",
//         "Vehicle Checkup Dubai",
//         "Computer Diagnostics Dubai",
//         "Car Health Check Dubai",
//       ],
//     },
//     featureTitle: "Car Inspection and Computer Diagnostic Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-12.png",
//         title: "Comprehensive Vehicle Inspection",
//         description:
//           "Visual inspection of all critical components including engine, AC, brakes, suspension, and electrical systems to identify visible and hidden problems.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-12.png",
//         title: "Computer Diagnostics",
//         description:
//           "Advanced scanners connect to your car's control modules to read fault codes, live sensor data, and detect electronic system issues accurately.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-12.png",
//         title: "Engine Health Check",
//         description:
//           "Compression testing, oil analysis, coolant inspection, and sensor verification to assess engine performance and detect potential failures.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-12.png",
//         title: "Electrical and AC System Check",
//         description:
//           "Full scan of electrical systems, AC system inspection, voltage testing, and parasitic draw analysis to prevent future electrical failures.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-12.png",
//         title: "Brake and Suspension Inspection",
//         description:
//           "Inspection of brake pads, rotors, suspension components, and steering systems for wear and performance issues.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-12.png",
//         title: "Detailed Diagnostic Report",
//         description:
//           "We provide a written report with photos documenting findings, recommended repairs, and estimated costs for full transparency.",
//       },
//     ],
//     priceRange: "AED 250 - AED 900",
//     duration: "1 day (depending on vehicle and inspection type)",
//     location: "Dubai, UAE",
//     whyChooseUs: [
//       {
//         title: "Certified Inspection Specialists",
//         description:
//           "<p>Our trained technicians perform thorough vehicle inspections and diagnostics with years of hands-on experience.</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Advanced Diagnostic Equipment",
//         description:
//           "<p>We use professional-grade scanners, thermometers, gauges, and sensors that detect even hidden vehicle problems accurately.</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Transparent Reporting",
//         description:
//           "<p>Receive detailed inspection reports including photos, test results, and cost estimates for informed decisions.</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Prevent Costly Repairs",
//         description:
//           "<p>Early detection of issues saves money and prevents breakdowns, ensuring safety and vehicle reliability.</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Why Car Inspection and Computer Diagnostics Are Important",
//       description: `<p>Regular vehicle inspections and diagnostics ensure safety, performance, and reliability. Key benefits include:</p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//       <li>Early detection of engine, AC, electrical, or suspension problems</li>
//       <li>Prevent costly breakdowns and repairs</li>
//       <li>Ensure vehicle safety for driver and passengers</li>
//       <li>Maintain vehicle resale value</li>
//       <li>Optimize fuel efficiency and performance</li>
//     </ul>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763129652/1030_kpu86p.webp",
//     },
//     includeServices: {
//       includeServicesTitle:
//         "Complete Car Inspection and Computer Diagnostics at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-12.png",
//           title: "FREE Vehicle Inspection",
//           description:
//             "We perform a basic visual inspection of your car's critical components at no cost to identify visible and potential issues before any repairs.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-12.png",
//           title: "Advanced Computer Diagnostics",
//           description:
//             "Using professional-grade diagnostic scanners, we read fault codes, monitor live sensor data, and detect hidden problems in engine, transmission, ABS, AC, and electronic systems.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-12.png",
//           title: "Certified Inspection Technicians",
//           description:
//             "Our trained mechanics specialize in vehicle inspections and diagnostics across all car brands with years of experience ensuring accurate results.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-12.png",
//           title: "Comprehensive Reporting",
//           description:
//             "We provide detailed inspection reports with photos, test results, and recommended repairs, giving you full transparency and confidence in your vehicle’s condition.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-12.png",
//           title: "Expert Recommendations & Safety Checks",
//           description:
//             "Every inspection includes prioritized repair recommendations, safety checks, and advice to prevent future breakdowns, ensuring your car remains reliable and safe.",
//         },
//       ],
//     },
//     appointment: {
//       title: "Book Your Car Inspection & Computer Diagnostics in Dubai Today",
//       description:
//         "Ensure your vehicle is performing at its best with Caroto Repair Dubai's comprehensive car inspection and computer diagnostics services. Our certified technicians quickly identify hidden issues using advanced diagnostic tools and provide detailed reports for informed decisions. Schedule your inspection now to maintain your car's safety, reliability, and efficiency.",
//       guarantee:
//         "Schedule Your Professional Car Inspection & Diagnostics Today (Accurate Results Guaranteed)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Conduct Car Inspections and Diagnostics",
//       deliverServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-22.png",
//           title: "Step 1: Visual and Physical Inspection",
//           description:
//             "Examine all visible components including engine, AC, brakes, suspension, and electrical systems for wear, damage, or leaks.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-23.png",
//           title: "Step 2: Computer Diagnostics",
//           description:
//             "Connect advanced diagnostic scanners to read fault codes, monitor live data, and identify electronic system problems.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-24.png",
//           title: "Step 3: Testing and Measurements",
//           description:
//             "Perform tests such as compression, coolant, voltage, brake efficiency, and airflow measurements to detect issues precisely.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-25.png",
//           title: "Step 4: Report & Recommendations",
//           description:
//             "Provide a comprehensive report detailing findings, recommended repairs, priority levels, and cost estimates.",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle:
//         "Why Drivers in Dubai Choose Caroto for Car Inspection & Computer Diagnostics",
//       whyTrustItems: [
//         {
//           id: 1,
//           image: "/images/icons/icon-11.png",
//           title: "Certified Inspection Specialists",
//           description:
//             "Our trained technicians perform thorough car inspections and computer diagnostics across all vehicle brands using years of specialized experience.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-11.png",
//           title: "Advanced Diagnostic Technology",
//           description:
//             "We use professional-grade scanners and diagnostic tools that detect hidden issues and performance problems accurately without guesswork.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-11.png",
//           title: "Accurate Issue Identification",
//           description:
//             "You receive detailed reports identifying actual problems rather than unnecessary replacements, helping you make informed maintenance decisions.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-11.png",
//           title: "Fast Inspection and Reporting",
//           description:
//             "Most inspections and computer diagnostics are completed efficiently, providing you with results and recommendations promptly.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-11.png",
//           title: "Comprehensive Service Records",
//           description:
//             "We document all inspection findings and diagnostic results to maintain complete records for future maintenance and warranty purposes.",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What to Expect During a Car Inspection & Computer Diagnostics",
//       description:
//         "Our comprehensive car inspection and computer diagnostics examine your vehicle’s systems thoroughly using advanced tools and systematic testing. You receive accurate findings, clear explanations, and prioritized recommendations. We never guess issues or suggest unnecessary repairs without proper diagnostic evidence.",
//       contents: [
//         "Complete vehicle inspection covering engine, transmission, brakes, suspension, and other critical systems",
//         "Computer diagnostics scanning all control modules for stored fault codes and live sensor data analysis",
//         "Fluid and filter checks including engine oil, coolant, brake fluid, and transmission fluid",
//         "Visual inspections of belts, hoses, tires, lights, and electrical connections for wear or damage",
//         "Battery health and charging system assessment to ensure reliable starting and power supply",
//         "Emission system and performance checks to identify hidden engine or exhaust issues",
//       ],
//     },
//     additionalTwo: {
//       title:
//         "Precision and Expertise in Every Car Inspection & Computer Diagnostics",
//       description: `
//   <p>
//   Caroto Repair Dubai provides thorough car inspections and advanced computer diagnostics across all vehicle types in Dubai. Our technicians understand engine systems, transmissions, brake and suspension systems, and electronic control networks in depth. We use professional diagnostic tools, accurate testing procedures, and systematic inspections to detect hidden issues early. Your vehicle receives complete assessments, from mechanical components to computer-controlled systems, ensuring safety, reliability, and optimal performance. We service economy cars, luxury vehicles, electric cars, and commercial fleets with precision every day.
//   </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1760889421/general_car_reapir_v5rjtl.webp",
//     },
//     faq: [
//       {
//         title: "How often should I get a car inspection in Dubai?",
//         description:
//           "We recommend an annual inspection or every 20,000 kilometers to ensure optimal performance and prevent unexpected failures.",
//       },
//       {
//         title: "What does a computer diagnostic check include?",
//         description:
//           "It includes scanning engine control modules, transmission, ABS, airbag systems, AC, battery, and other electronic control systems.",
//       },
//       {
//         title: "How long does the inspection take?",
//         description:
//           "Standard inspections take 1 day. Complex diagnostics may take longer depending on vehicle systems.",
//       },
//       {
//         title: "Will I get a detailed report after inspection?",
//         description:
//           "Yes, you will receive a full report including photos, test results, recommended repairs, and cost estimates.",
//       },
//       {
//         title: "Can this inspection detect hidden problems?",
//         description:
//           "Yes, our inspection and diagnostic tools identify hidden engine, electrical, AC, and suspension issues before they escalate.",
//       },
//     ],

//     contact: {
//       title: "Book Your Car Inspection and Diagnostics in Dubai",
//       description:
//         "Ensure your vehicle is safe, reliable, and performing optimally. Contact Caroto Repair Dubai to schedule a professional car inspection and computer diagnostics service today.",
//     },
//     location: {
//       title: "Car Inspection & Computer Diagnostics Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to provide professional car inspection and advanced computer diagnostics services quickly and efficiently for all vehicle types.",
//     },
//   },
//   {
//     id: 13,
//     slug: "car-auto-parts-dubai",
//     title: "Auto Parts in Dubai",
//     sub_title: "Genuine Auto Parts in Dubai for Every Make and Model",
//     shortDescription:
//       "Minor & major services including underbody, mechanical, and electrical repair for cars in Dubai.",
//     longDescription: `Caroto Repair Dubai supplies and installs genuine auto parts for all vehicle types across Dubai. Our technicians source quality OEM and aftermarket components matching your vehicle's exact specifications. You get transparent pricing, proper fitment, and professional installation at every visit. We understand genuine parts protect your investment and maintain vehicle performance reliably. Visit our workshop for authentic auto parts that deliver lasting quality and peace of mind.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763132795/1037_iwiyva.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Auto Parts Dubai - Genuine Spare Parts & Warranty",
//       description:
//         "Buy genuine car spare parts in Dubai with warranty. OEM and aftermarket auto parts for all makes and models. Quality, fitment, and fast delivery.",
//       keywords: [
//         "Auto Parts in Dubai",
//         "car spare parts in Dubai",
//         "genuine car parts in Dubai",
//         "aftermarket auto parts in Dubai",
//         "vehicle replacement parts in Dubai",
//         "OEM car parts in Dubai",
//         "car accessories in Dubai",
//         "automotive parts supplier in Dubai",
//       ],
//     },
//     featureTitle: "Auto Parts Supply and Replacement Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-13.png",
//         title: "Genuine OEM Auto Parts",
//         description:
//           "We supply original equipment manufacturer parts matching factory specifications exactly for perfect fit and reliable performance.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-13.png",
//         title: "Engine and Transmission Components",
//         description:
//           "Our auto parts store Dubai inventory includes pistons, gaskets, clutches, and transmission parts for complete powertrain repairs.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-13.png",
//         title: "Brake Pads and Rotors",
//         description:
//           "We stock quality brake pads, rotors, calipers, and hydraulic components from trusted manufacturers for safe stopping power.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-13.png",
//         title: "Suspension and Steering Parts",
//         description:
//           "We provide shocks, struts, control arms, and steering components that restore smooth handling and proper alignment.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-13.png",
//         title: "AC Compressors and Condensers",
//         description:
//           "Our AC parts include compressors, condensers, evaporators, and refrigerant components for complete cooling system repairs and restoration.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-13.png",
//         title: "Alternators and Starter Motors",
//         description:
//           "We supply new and remanufactured alternators and starters that deliver reliable starting power and proper charging operation.",
//       },
//       {
//         id: 7,
//         image: "/images/icons/icon-13.png",
//         title: "Filters and Belts",
//         description:
//           "Our inventory includes oil filters, air filters, cabin filters, and drive belts maintaining proper engine operation daily.",
//       },
//       {
//         id: 8,
//         image: "/images/icons/icon-13.png",
//         title: "Batteries and Electrical Parts",
//         description:
//           "We stock batteries, sensors, switches, and electrical components from premium brands for reliable vehicle electrical performance.",
//       },
//       {
//         id: 9,
//         image: "/images/icons/icon-13.png",
//         title: "Body Panels and Bumpers",
//         description:
//           "We source fenders, doors, bumpers, and body panels matching your vehicle's color and specifications for collision repairs.",
//       },
//       {
//         id: 10,
//         image: "/images/icons/icon-13.png",
//         title: "Headlights, Taillights, and Mirrors",
//         description:
//           "Our lighting inventory includes headlamps, taillights, mirrors, and bulbs maintaining visibility and safety on Dubai roads always.",
//       },
//       {
//         id: 11,
//         image: "/images/icons/icon-13.png",
//         title: "Tires and Alloy Wheels",
//         description:
//           "Best auto parts Dubai selection features tires from major brands and alloy wheels matching your vehicle specifications perfectly.",
//       },
//       {
//         id: 12,
//         image: "/images/icons/icon-13.png",
//         title: "Performance and Upgrade Parts",
//         description:
//           "We source performance exhaust, air intakes, suspension upgrades, and tuning components for enthusiasts seeking enhanced capabilities.",
//       },
//       {
//         id: 13,
//         image: "/images/icons/icon-13.png",
//         title: "Ford Auto Parts Dubai",
//         description:
//           "We stock comprehensive Ford auto parts Dubai range including engine components, filters, and electrical parts for all models.",
//       },
//       {
//         id: 14,
//         image: "/images/icons/icon-13.png",
//         title: "Toyota Auto Spare Parts in Dubai",
//         description:
//           "Complete Toyota auto spare parts in Dubai inventory covering Camry, Corolla, Land Cruiser, and all models stocked.",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Why Use Genuine Auto Parts in Dubai",
//       description: `
//     <p>
//     Genuine parts offer significant advantages over cheaper alternatives. Quality components protect your investment and maintain vehicle reliability. Consider these important benefits:
//     </p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Longer component life</li>
//         <li>Better vehicle performance</li>
//         <li>Manufacturer warranty protection</li>
//         <li>Exact fit and compatibility</li>
//         <li>Improved resale value</li>
//     </ul>
//   `,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1760889421/general_car_reapir_v5rjtl.webp",
//     },

//     includeServices: {
//       includeServicesTitle: "Complete Auto Parts Replacement at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-13.png",
//           title: "Extensive Parts Network",
//           description:
//             "We source parts quickly from authorized distributors and reliable suppliers across UAE and internationally for all vehicle makes.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-13.png",
//           title: "Quality Guaranteed Components",
//           description:
//             "You get genuine OEM parts or premium aftermarket alternatives that meet original specifications with manufacturer warranties included.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-13.png",
//           title: "Professional Installation Service",
//           description:
//             "Our certified technicians install parts correctly using proper procedures and torque specifications maintaining vehicle integrity and safety.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-13.png",
//           title: "Competitive Pricing Always",
//           description:
//             "We offer transparent pricing on parts and installation with no hidden markups or surprise fees appearing on bills.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-13.png",
//           title: "Fast Parts Delivery",
//           description:
//             "Most common parts are in stock. Special order items arrive within days through our efficient supply network.",
//         },
//       ],
//     },

//     appointment: {
//       title: "Order or Replace Auto Parts in Dubai Today",
//       description:
//         "Quality auto parts determine your vehicle's reliability, safety, and performance on every journey. Caroto Repair Dubai specializes in sourcing genuine components and professional installation services. Contact us now to order parts or schedule installation service today.",
//       guarantee:
//         "Get Your Genuine Auto Parts with Professional Installation (Warranty Protection Included)",
//     },
//     deliverServices: {
//       deliverTitle: "How We Provide Reliable Auto Parts Service",
//       deliverServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-22.png",
//           title: "Step 1: Part Inspection",
//           description:
//             "We verify your vehicle's exact specifications, inspect damaged components, and confirm correct part numbers for proper fitment guaranteed.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-23.png",
//           title: "Step 2: Genuine Part Sourcing",
//           description:
//             "Our team sources authentic parts from authorized suppliers, compare options available, and provide detailed quotes with delivery timelines.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-24.png",
//           title: "Step 3: Professional Installation",
//           description:
//             "We install parts using correct procedures, proper torque specifications, and quality tools, then test operation confirming everything functions correctly.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-25.png",
//           title: "Step 4: Quality Verification",
//           description:
//             "We verify parts fit perfectly, test vehicle performance thoroughly, clean work areas completely, and deliver vehicles ready for driving.",
//         },
//       ],
//     },
//     whyTrust: {
//       whyTrustTitle: "Why Drivers Across Dubai Choose Caroto for Auto Parts",
//       whyTrustItems: [
//         {
//           id: 1,
//           image: "/images/icons/icon-13.png",
//           title: "Authorized Parts Supplier",
//           description:
//             "We source genuine OEM parts from authorized distributors guaranteeing authenticity and quality for all vehicle brands.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-13.png",
//           title: "Wide Parts Inventory",
//           description:
//             "Our extensive network provides quick access to common and rare parts for economy cars through luxury vehicles.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-13.png",
//           title: "Expert Installation Team",
//           description:
//             "Certified technicians install parts correctly using proper procedures preventing damage and ensuring optimal performance and longevity.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-13.png",
//           title: "Warranty Protection Included",
//           description:
//             "Every part comes with manufacturer warranty coverage protecting your investment against defects and premature failures completely.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-13.png",
//           title: "Fast Parts Availability",
//           description:
//             "We stock common parts and expedite special orders minimizing your vehicle's downtime significantly compared to other suppliers.",
//         },
//       ],
//     },
//     guaranteed: {
//       title: "What to Expect When Buying Auto Parts from Caroto",
//       description:
//         "Our parts service ensures you receive authentic components and proper installation. You get honest advice, quality guarantees, and professional service. We never compromise quality selling inferior parts for higher profits.",
//       contents: [
//         "Part number verification confirming exact compatibility with your vehicle's year, make, model, and trim level",
//         "Genuine parts sourcing from authorized distributors with manufacturer warranties and authenticity guarantees included",
//         "Professional installation by certified technicians using correct torque specifications and proper procedures throughout",
//         "Quality inspection verifying parts fit correctly, function properly, and meet all specifications before vehicle delivery",
//       ],
//     },

//     additionalTwo: {
//       title: "Quality, Fit, and Reliability: The Caroto Standard in Auto Parts",
//       description: `
//       <p>
//       Caroto Repair Dubai maintains strict quality standards for all auto parts we supply and install. We source components from authorized distributors maintaining authenticity and warranty protection. Our technicians verify part numbers match vehicle specifications exactly preventing fitment problems. We stock quality brands including Bosch, Brembo, Monroe, and OEM suppliers. Your vehicle receives parts meeting or exceeding original equipment standards. We refuse inferior aftermarket alternatives that compromise safety or reliability.
//       </p>`,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763131796/1034_mn2pf3.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         title: "What's the difference between OEM and aftermarket parts?",
//         description:
//           "OEM parts come from original vehicle manufacturers matching factory specifications exactly. Aftermarket parts come from independent manufacturers offering alternatives at various quality and price levels. Quality aftermarket parts perform comparably to OEM at lower costs. Cheap aftermarket parts compromise quality, fit, and longevity significantly. We recommend premium aftermarket or OEM parts for reliability and proper fitment always.",
//       },
//       {
//         title: "How long do auto parts take to arrive?",
//         description:
//           "Common parts for popular vehicles ship from our suppliers within 1-2 days. Specialized parts for luxury or rare vehicles take 3-7 days depending on availability and location. International orders require 1-2 weeks for delivery and customs clearance. We provide accurate delivery estimates when ordering. Emergency situations get priority handling expediting delivery whenever possible through express shipping options.",
//       },
//       {
//         title: "Do auto parts come with warranties?",
//         description:
//           "Genuine OEM parts include manufacturer warranties typically covering 12-24 months. Quality aftermarket parts offer similar warranty protection from manufacturers. Warranty terms vary by part type and manufacturer policies. We provide warranty documentation with every part purchased. Our installation warranty covers workmanship separately from parts warranties protecting you completely against installation-related problems.",
//       },
//       {
//         title: "Can I install parts myself?",
//         description:
//           "Simple parts like wiper blades or air filters allow DIY installation safely. Complex components requiring special tools, calibration, or safety procedures need professional installation. Improper installation voids warranties and risks vehicle damage or safety hazards. Modern vehicles have sensitive electronics easily damaged by incorrect procedures. We recommend professional installation for reliability, warranty protection, and peace of mind.",
//       },
//       {
//         title: "Do you price match on auto parts?",
//         description:
//           "We offer competitive pricing on genuine parts but don't match prices on unknown suppliers or questionable sources. Price differences often reflect part quality, authenticity, and warranty coverage variations significantly. Extremely low prices indicate counterfeit or substandard parts. We prioritize quality and authenticity over lowest prices. Our pricing includes genuine parts, proper installation, and comprehensive warranty protection.",
//       },
//       {
//         title: "How do I know if parts are genuine?",
//         description:
//           "Genuine parts have manufacturer packaging, holograms, and part numbers matching official databases. We source from authorized distributors with documentation proving authenticity. Counterfeit parts lack proper packaging and quality control. Price significantly below market indicates potential counterfeits. We guarantee authenticity on all parts we supply with documentation available for verification anytime.",
//       },
//       {
//         title: "Can you source parts for older vehicles?",
//         description:
//           "Yes, we source parts for older and discontinued models through specialized suppliers and remanufacturers. Classic car parts require longer sourcing times and cost more due to limited availability. Some parts need custom fabrication when originals are unavailable. We maintain extensive supplier networks accessing hard-to-find components. Contact us with your requirements and we'll locate parts or suggest alternatives available.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Auto Parts in Dubai?",
//       description:
//         "Our parts specialists answer all your concerns and provide expert guidance for every component need. Contact Caroto Repair Dubai now to discuss your auto parts requirements and schedule your service appointment today.",
//     },

//     location: {
//       title: "Auto Parts Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your auto parts needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 14,
//     slug: "car-steering-repair-dubai",
//     title: "Steering Repair and Service in Dubai",
//     sub_title: "Expert Car Steering Repair and Power Steering Service in Dubai",
//     shortDescription:
//       "Caroto Repair Dubai specializes in professional car steering repair and power steering service for all vehicle makes and models, ensuring safe handling and smooth driving experience.",
//     longDescription: `Caroto Repair Dubai offers reliable and affordable steering repair and maintenance services in Dubai.
// Our experienced technicians diagnose and repair all types of steering system problems — including power steering leaks,
// steering rack replacement, tie rod issues, and alignment problems. We use advanced diagnostic tools and genuine OEM or premium
// aftermarket parts to restore your vehicle’s steering precision and comfort. Whether you drive a sedan, SUV, or luxury car,
// our Dubai workshop ensures your steering system performs perfectly on every road. Visit us today for trusted
// car steering repair in Dubai with transparent pricing and full warranty coverage.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763131796/1034_mn2pf3.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Steering Repair Services Dubai - Rack & Power Steering",
//       description:
//         "We specialize in Power Steering Repairs & Rebuilds in Dubai. Largest Car Steering Repair & Replacement Workshop for All Luxury and Exotic Brands.",
//       keywords: [
//         "car steering repair in Dubai",
//         "power steering service in Dubai",
//         "steering rack replacement in Dubai",
//         "steering maintenance workshop in Dubai",
//         "car workshop in Dubai",
//         "OEM car parts Dubai",
//         "car accessories Dubai",
//         "automotive parts supplier Dubai",
//       ],
//     },
//     featureTitle: "Steering Repair and Maintenance Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-14.png",
//         title: "Power Steering Repair",
//         description:
//           "We diagnose and repair power steering system issues including leaks, fluid replacement, and pump repairs to restore smooth steering operation.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-14.png",
//         title: "Steering Rack Replacement",
//         description:
//           "Our experienced technicians replace worn or damaged steering racks accurately, ensuring precise handling and proper alignment for your vehicle.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-14.png",
//         title: "Tie Rod and Ball Joint Service",
//         description:
//           "We inspect, repair, and replace tie rods and ball joints to maintain safe steering control and prevent uneven tire wear.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-14.png",
//         title: "Steering Column Repairs",
//         description:
//           "We service steering columns, including bearings, bushings, and tilt mechanisms, ensuring reliable operation and smooth steering feel.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-14.png",
//         title: "Wheel Alignment and Steering Adjustment",
//         description:
//           "Precise wheel alignment and steering adjustments improve handling, reduce tire wear, and ensure your vehicle tracks straight on all roads.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-14.png",
//         title: "Hydraulic Steering System Maintenance",
//         description:
//           "We maintain and service hydraulic steering systems, checking hoses, pumps, and fluid to prevent leaks and maintain responsive steering.",
//       },
//       {
//         id: 7,
//         image: "/images/icons/icon-14.png",
//         title: "Electronic Steering Diagnostics",
//         description:
//           "We use advanced diagnostic tools to detect faults in electronic steering systems and resolve sensor or module issues accurately.",
//       },
//       {
//         id: 8,
//         image: "/images/icons/icon-14.png",
//         title: "Steering Gearbox Repairs",
//         description:
//           "We repair and replace steering gearboxes, restoring proper steering ratio, responsiveness, and safety for all vehicle types.",
//       },
//       {
//         id: 9,
//         image: "/images/icons/icon-14.png",
//         title: "Power Steering Fluid Flush & Replacement",
//         description:
//           "Regular power steering fluid flush and replacement prolong system life, prevent damage, and ensure smooth steering performance.",
//       },
//       {
//         id: 10,
//         image: "/images/icons/icon-14.png",
//         title: "Luxury & High-Performance Vehicle Steering Service",
//         description:
//           "Specialized steering repair and calibration for luxury and high-performance vehicles maintaining precise handling and safety.",
//       },
//       {
//         id: 11,
//         image: "/images/icons/icon-14.png",
//         title: "Emergency Steering Repairs",
//         description:
//           "We provide urgent steering system repairs in Dubai for breakdowns or critical issues affecting vehicle control and safety.",
//       },
//       {
//         id: 12,
//         image: "/images/icons/icon-14.png",
//         title: "Comprehensive Steering System Inspection",
//         description:
//           "Complete inspection of all steering components to identify wear, leaks, or faults before they affect vehicle safety or handling.",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Why Choose Professional Steering Repair & Service in Dubai",
//       description: `
//     <p>
//     Proper steering repair and maintenance are essential for vehicle safety, handling, and longevity. Choosing professional services in Dubai ensures your steering system performs reliably. Key benefits include:
//     </p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Enhanced vehicle control and safety on all roads</li>
//         <li>Accurate alignment and smooth steering performance</li>
//         <li>Prevention of premature wear on tires and suspension components</li>
//         <li>Expert diagnosis and repair of power steering, steering racks, and columns</li>
//         <li>Long-lasting repairs using high-quality parts and professional installation</li>
//     </ul>
//   `,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763129652/1030_kpu86p.webp",
//     },

//     includeServices: {
//       includeServicesTitle:
//         "Complete Steering Repair & Service at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-14.png",
//           title: "Comprehensive Steering Inspection",
//           description:
//             "We perform complete steering system inspections in Dubai, checking steering racks, columns, joints, and power steering components for safe and precise handling.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-14.png",
//           title: "High-Quality Steering Components",
//           description:
//             "We use genuine OEM or premium aftermarket steering parts to ensure reliability, durability, and proper alignment for all vehicle makes and models.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-14.png",
//           title: "Expert Steering Repair Service",
//           description:
//             "Our certified technicians repair or replace faulty steering racks, power steering pumps, tie rods, and linkages using proper procedures and torque specifications.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-14.png",
//           title: "Transparent Pricing",
//           description:
//             "We provide clear estimates for steering repair and maintenance in Dubai with no hidden charges, ensuring you know the exact cost upfront.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-14.png",
//           title: "Quick and Reliable Service",
//           description:
//             "Most steering repairs and part replacements are completed promptly, minimizing downtime while restoring safe steering performance efficiently.",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Steering Repair & Service in Dubai Today",
//       description:
//         "Ensure safe and precise vehicle handling with expert steering repair and service in Dubai. Caroto Repair Dubai specializes in inspecting, diagnosing, and repairing all steering system components, including racks, columns, tie rods, and power steering pumps. Contact us now to schedule your steering inspection or repair service for reliable and smooth driving.",
//       guarantee:
//         "Schedule Your Professional Steering Repair Service Now (Full Warranty Coverage Included)",
//     },

//     deliverServices: {
//       deliverTitle:
//         "How We Deliver Reliable Steering Repair & Service in Dubai",
//       deliverServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-22.png",
//           title: "Step 1: Steering System Inspection",
//           description:
//             "We inspect your vehicle's steering components, including racks, tie rods, columns, and power steering systems, to identify wear, damage, or misalignment issues accurately.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-23.png",
//           title: "Step 2: Precise Diagnosis",
//           description:
//             "Our expert technicians diagnose steering problems using professional tools and computer diagnostics to determine the exact cause of steering issues for safe handling.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-24.png",
//           title: "Step 3: Professional Steering Repair",
//           description:
//             "We repair or replace faulty steering components using certified parts and proper procedures, ensuring your vehicle’s steering operates smoothly and safely.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-25.png",
//           title: "Step 4: Final Testing and Alignment",
//           description:
//             "After repairs, we perform thorough road tests, check alignment, and verify steering performance to ensure precise handling and a safe driving experience.",
//         },
//       ],
//     },

//     whyTrust: {
//       whyTrustTitle:
//         "Why Drivers Across Dubai Choose Caroto for Steering Repair & Service",
//       whyTrustItems: [
//         {
//           id: 1,
//           image: "/images/icons/icon-14.png",
//           title: "Certified Steering Specialists",
//           description:
//             "Our technicians are trained and certified to repair and maintain all types of steering systems, ensuring safe and reliable vehicle handling.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-14.png",
//           title: "Advanced Diagnostic Equipment",
//           description:
//             "We use professional steering diagnostics and alignment tools to accurately identify issues, from worn tie rods to power steering malfunctions.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-14.png",
//           title: "Precision Steering Repairs",
//           description:
//             "We repair or replace faulty steering components using OEM or high-quality aftermarket parts, restoring smooth and precise control.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-14.png",
//           title: "Warranty on Repairs",
//           description:
//             "All steering repairs come with warranty coverage, giving you peace of mind and protection against defective components or workmanship.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-14.png",
//           title: "Fast and Efficient Service",
//           description:
//             "We provide quick turnaround times and stock common steering parts to minimize your vehicle’s downtime while maintaining high-quality repairs.",
//         },
//       ],
//     },

//     guaranteed: {
//       title: "What to Expect During Steering Repair & Service in Dubai",
//       description:
//         "Our steering repair service ensures your vehicle's steering system is restored to optimal condition. You get accurate diagnostics, professional repairs, and quality guarantees for safe and smooth driving. We never compromise on safety or performance.",
//       contents: [
//         "Comprehensive steering system inspection identifying worn, damaged, or misaligned components",
//         "Accurate diagnosis of power steering issues, rack and pinion problems, or tie rod wear using advanced tools",
//         "Professional repair or replacement by certified technicians following manufacturer specifications and proper procedures",
//         "Final quality check ensuring proper steering alignment, smooth operation, and safety compliance before vehicle handover",
//       ],
//     },

//     additionalTwo: {
//       title:
//         "Precision and Reliability in Every Steering Repair at Caroto Dubai",
//       description: `
//     <p>
//     Caroto Repair Dubai delivers expert steering repair and service across all vehicle types in Dubai. Our certified technicians diagnose and fix steering issues precisely, including power steering systems, tie rods, rack and pinion units, and alignment problems. We use high-quality parts and follow manufacturer-recommended procedures to ensure smooth handling, safety, and reliability. Every repair meets or exceeds OEM standards, providing long-lasting performance and peace of mind on the road.
//     </p>
//   `,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763125862/1024_zizzaf.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         title:
//           "What is the difference between OEM and aftermarket steering parts?",
//         description:
//           "OEM steering parts come directly from vehicle manufacturers and match factory specifications exactly. Aftermarket steering components are produced by independent manufacturers, offering various quality and price options. Premium aftermarket or OEM parts ensure proper fitment, safety, and longevity, while cheap aftermarket parts may compromise steering performance and durability.",
//       },
//       {
//         title: "How long does steering repair or parts replacement take?",
//         description:
//           "Minor steering repairs like tie rod or ball joint replacement can take a few hours, while major repairs such as rack and pinion or power steering system overhaul may take 1-2 days depending on the vehicle. We provide accurate timelines after inspection and prioritize urgent repairs when needed.",
//       },
//       {
//         title: "Do steering parts come with warranties?",
//         description:
//           "Genuine OEM steering components include manufacturer warranties, typically covering 12-24 months. Quality aftermarket parts also provide warranty coverage depending on the manufacturer. Our installation services come with workmanship guarantees, ensuring complete protection and peace of mind.",
//       },
//       {
//         title: "Can I perform steering repairs myself?",
//         description:
//           "Basic maintenance like checking fluid levels or tightening bolts may be done safely. Complex steering repairs, including rack and pinion replacement, power steering pump service, or alignment adjustments, require professional installation. Incorrect procedures can cause safety risks or damage your vehicle. We recommend certified technicians for reliability and safety.",
//       },
//       {
//         title:
//           "Do you offer competitive pricing on steering parts and services?",
//         description:
//           "We offer transparent and competitive pricing for all steering parts and repair services. Pricing reflects part quality, authenticity, and warranty coverage. We prioritize safety and reliability over the lowest cost, ensuring every repair meets OEM or high-quality standards.",
//       },
//       {
//         title: "How can I be sure the steering parts are genuine?",
//         description:
//           "Genuine steering parts have manufacturer markings, packaging, and verified part numbers. We source all components from authorized distributors with documentation proving authenticity. Counterfeit or substandard parts are avoided to ensure safety and proper steering function.",
//       },
//       {
//         title:
//           "Can you service older or discontinued vehicle steering systems?",
//         description:
//           "Yes, we source steering parts for older and discontinued vehicles through specialized suppliers. Some components may require custom fabrication when originals are unavailable. Our extensive network ensures we can locate reliable alternatives and maintain safe and smooth steering for older cars.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Steering Repair & Service in Dubai?",
//       description:
//         "Our certified technicians provide expert guidance for all steering system concerns, including repairs, replacements, and maintenance. Contact Caroto Repair Dubai today to discuss your steering service needs and schedule a professional appointment for reliable and safe steering performance.",
//     },

//     location: {
//       title: "Steering Repair & Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates at multiple convenient locations across Dubai to provide fast and professional steering repair and maintenance services for all vehicle types.",
//     },
//   },
//   {
//     id: 15,
//     slug: "car-windscreen-repair-dubai",
//     title: "Windscreen Repair in Dubai",
//     sub_title: "Professional Windscreen Repair in Dubai",
//     shortDescription:
//       "Caroto Repair Dubai specializes in professional car steering repair and power steering service for all vehicle makes and models, ensuring safe handling and smooth driving experience.",
//     longDescription: `Caroto Repair Dubai delivers expert windscreen repair and replacement services for all vehicle types across Dubai. Our certified technicians repair chips and replace damaged glass using quality materials and precision techniques. You get transparent pricing, same-day service, and crystal-clear visibility at every visit. We understand windscreen damage compromises safety and visibility on Dubai roads. Visit our workshop for professional glass solutions that restore perfect clarity and structural integrity.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763133187/1038_r5jide.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Car Windscreen Repair Service Dubai - Glass Replacement",
//       description:
//         "Windscreen chip repair and full glass replacement in Dubai. OEM-spec glass, clean installs, and fast service for a clear, safe view.",
//       keywords: [
//         "windscreen repair in Dubai",
//         "car windshield replacement in Dubai",
//         "auto glass repair in Dubai",
//         "windscreen chip repair in Dubai",
//         "windscreen crack repair in Dubai",
//         "vehicle glass service in Dubai",
//         "OEM windscreen in Dubai",
//         "car glass workshop in Dubai",
//       ],
//     },
//     featureTitle: "Windscreen Repair and Replacement Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-15.png",
//         title: "Front Windscreen Crack Repair",
//         description:
//           "We repair small cracks and chips using resin injection techniques preventing further spreading and restoring strength.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-15.png",
//         title: "Full Windscreen Replacement",
//         description:
//           "Our windscreen replacement Dubai technicians remove damaged glass and install new OEM quality windscreens with proper sealing.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-15.png",
//         title: "Stone Chip and Scratch Removal",
//         description:
//           "We repair stone chips before they spread into cracks and polish minor scratches improving clarity preventing replacement.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-15.png",
//         title: "Rear and Side Glass Replacement",
//         description:
//           "We replace damaged rear windows and side glass with correct specifications maintaining vehicle security and weather sealing.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-15.png",
//         title: "Sunroof and Moonroof Glass Repair",
//         description:
//           "We repair or replace damaged sunroof glass and fix leaking seals restoring proper operation preventing water damage.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-15.png",
//         title: "Windshield Seal and Leak Fixing",
//         description:
//           "We remove old seals, clean surfaces thoroughly, and install new weather stripping preventing water leaks and noise.",
//       },
//       {
//         id: 7,
//         image: "/images/icons/icon-15.png",
//         title: "Glass Polishing and Defogging",
//         description:
//           "We polish windscreens removing minor scratches, haze, and wiper marks restoring optical clarity improving visibility under conditions.",
//       },
//       {
//         id: 8,
//         image: "/images/icons/icon-15.png",
//         title: "Wiper Blade Replacement",
//         description:
//           "We install quality wiper blades matching your vehicle specifications providing streak-free cleaning and clear visibility during rain.",
//       },
//       {
//         id: 9,
//         image: "/images/icons/icon-15.png",
//         title: "ADAS Camera Calibration",
//         description:
//           "We calibrate advanced driver assistance cameras and sensors after windscreen replacement maintaining safety system functionality and accuracy.",
//       },
//       {
//         id: 10,
//         image: "/images/icons/icon-15.png",
//         title: "Glass Tinting and UV Protection",
//         description:
//           "Our car glass tinting Dubai service applies professional films blocking UV rays, reducing heat, and improving privacy legally.",
//       },
//       {
//         id: 11,
//         image: "/images/icons/icon-15.png",
//         title: "Insurance Claim Assistance",
//         description:
//           "We prepare detailed estimates, coordinate directly with insurance companies, and handle claim paperwork simplifying your replacement process.",
//       },
//       {
//         id: 12,
//         image: "/images/icons/icon-15.png",
//         title: "Emergency Mobile Windscreen Service",
//         description:
//           "Our cracked windscreen repair Dubai mobile units provide on-site auto glass repair Dubai anywhere for maximum convenience.",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Signs You Need Windscreen Repair in Dubai",
//       description: `
//     <p>
//     Your windscreen shows clear signs when damage requires immediate attention. Recognizing these symptoms prevents complete failure and maintains safe visibility. Never ignore these critical indicators:
//     </p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Cracks spreading or chips appearing clearly</li>
//         <li>Glare or visual distortion affects driving</li>
//         <li>Water leaks through windscreen edges visibly</li>
//         <li>Wind whistles or noise enters cabin</li>
//         <li>Glass appears cloudy or foggy constantly</li>
//         <li>Wipers scratch or damage glass surface</li>
//     </ul>
//   `,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763131500/1033_n0ihri.webp",
//     },

//     includeServices: {
//       includeServicesTitle:
//         "Complete Windscreen Replacement and Repair at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-15.png",
//           title: "Same-Day Service Available",
//           description:
//             "Most windscreen repairs complete within one hour. Replacements finish same-day with proper adhesive curing time included.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-15.png",
//           title: "OEM Quality Glass",
//           description:
//             "You get original equipment or premium aftermarket glass meeting safety standards with proper thickness and optical clarity.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-15.png",
//           title: "Mobile Service Available",
//           description:
//             "Our mobile units bring windscreen repair and replacement directly to your home or office anywhere in Dubai.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-15.png",
//           title: "Lifetime Warranty Coverage",
//           description:
//             "Every windscreen installation includes lifetime warranty against leaks and defects protecting your investment completely with documentation provided.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-15.png",
//           title: "Insurance Direct Billing",
//           description:
//             "We handle insurance claims directly accepting payment from most insurance companies simplifying the entire replacement process for you.",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Windscreen Repair in Dubai Today",
//       description:
//         "Your windscreen protects you from elements and maintains vehicle structural integrity during accidents. Caroto Repair Dubai specializes in quick windscreen repairs and quality replacements restoring perfect visibility and safety. Contact us now to schedule service and drive safely with crystal-clear vision.",
//       guarantee:
//         "Schedule Your Windscreen Repair or Replacement Now (Lifetime Warranty Included)",
//     },

//     deliverServices: {
//       deliverTitle: "How We Deliver Reliable Windscreen Repair Service",
//       deliverServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-22.png",
//           title: "Step 1: Glass Damage Inspection",
//           description:
//             "We examine windscreen damage carefully, measuring crack length, chip depth, and location to determine if repair or replacement is necessary.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-23.png",
//           title: "Step 2: Crack or Chip Assessment",
//           description:
//             "Our technicians explain damage severity, recommend appropriate solutions, and provide transparent quotes with warranty terms clearly explained before starting.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-24.png",
//           title: "Step 3: Repair or Replacement Process",
//           description:
//             "We inject resin for chips, or remove old glass and install new windscreens using proper adhesives and curing procedures.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-25.png",
//           title: "Step 4: Final Safety and Visibility Check",
//           description:
//             "We verify perfect seal integrity, test for leaks, calibrate ADAS cameras if equipped, and ensure optimal clarity before delivery.",
//         },
//       ],
//     },

//     whyTrust: {
//       whyTrustTitle: "Why Drivers in Dubai Trust Caroto for Windscreen Repair",
//       whyTrustItems: [
//         {
//           id: 1,
//           image: "/images/icons/icon-15.png",
//           title: "Windscreen Specialists",
//           description:
//             "Our trained technicians specialize in automotive glass repair and replacement across all vehicle brands with years of experience.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-15.png",
//           title: "Advanced Repair Equipment",
//           description:
//             "We use professional resin injection systems and proper installation tools delivering factory-quality results meeting safety standards completely.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-15.png",
//           title: "Mobile Service Available",
//           description:
//             "Our mobile units bring complete windscreen services to your location equipped with all tools and materials needed.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-15.png",
//           title: "Insurance Approved",
//           description:
//             "We work directly with major insurance companies handling claims and paperwork simplifying the entire replacement process for you.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-15.png",
//           title: "Lifetime Installation Warranty",
//           description:
//             "Every windscreen we install includes lifetime warranty against installation defects and leaks protecting your investment permanently with documentation.",
//         },
//       ],
//     },

//     guaranteed: {
//       title: "What to Expect During a Caroto Windscreen Service",
//       description:
//         "Our windscreen service examines damage thoroughly and provides appropriate solutions. You get honest assessments, quality materials, and proper installation. We never recommend unnecessary replacement when repairs work effectively and safely.",
//       contents: [
//         "Damage assessment examining crack size, location, and severity determining if repair or replacement is appropriate",
//         "Repair option evaluation considering safety regulations and insurance coverage requirements for proper decision making",
//         "Quality glass verification confirming correct specifications, proper thickness, and optical quality meeting safety standards exactly",
//         "Professional installation using OEM adhesives, proper curing times, and correct placement techniques maintaining structural integrity",
//       ],
//     },

//     additionalTwo: {
//       title: "Clarity, Safety, and Precision: The Caroto Way",
//       description: `
//     <p>
//     Caroto Repair Dubai masters automotive glass repair and replacement across all vehicle types. Our technicians understand windscreen structural importance, optical requirements, and proper installation procedures completely. We handle laminated windscreens, tempered side glass, heated rear windows, and acoustic glass with precision. Your vehicle receives correct glass specifications, proper adhesive application, and accurate ADAS calibration when equipped. We work on economy cars, luxury vehicles, commercial vans, and exotic sports cars daily.
//     </p>
//   `,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763129652/1030_kpu86p.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         title: "Can all windscreen cracks be repaired?",
//         description:
//           "Small chips under 2cm and cracks under 7cm away from edges can often be repaired successfully. Damage in driver's vision area, near edges, or through multiple glass layers requires replacement for safety. Repairs restore strength but leave slight visual marks. We assess damage honestly recommending replacement when repairs compromise safety or visibility standards significantly.",
//       },
//       {
//         title: "How long does windscreen replacement take?",
//         description:
//           "Windscreen removal and installation takes 1-2 hours. Adhesive curing requires 2-4 hours before safe driving. We use fast-cure adhesives when necessary meeting minimum drive-away times safely. ADAS calibration adds 1-2 hours when equipped. Total service time depends on vehicle complexity and whether calibration is needed for proper operation.",
//       },
//       {
//         title: "Will insurance cover my windscreen replacement?",
//         description:
//           "Comprehensive insurance typically covers windscreen damage with or without deductible depending on your policy terms. Check your coverage details. We coordinate directly with insurance companies handling claims and approvals. Many policies cover windscreen repairs completely without affecting your no-claims bonus. Provide your insurance details and we'll verify coverage before starting work.",
//       },
//       {
//         title: "Do I need ADAS calibration after windscreen replacement?",
//         description:
//           "Yes, vehicles with cameras or sensors mounted on windscreens require calibration after replacement. ADAS systems include lane departure, collision warning, and automatic emergency braking features. Improper calibration causes system malfunctions and false warnings. We perform static and dynamic calibration procedures using manufacturer-specified equipment maintaining safety system accuracy completely.",
//       },
//       {
//         title: "Why does my windscreen fog up inside?",
//         description:
//           "Interior fogging indicates moisture inside vehicle or damaged windscreen seal. Clogged AC drains trap moisture. Failed heater core leaks coolant creating persistent fog. Damaged seals let humid air inside. We identify fog causes and repair seals, fix climate control issues, or recommend windscreen replacement when seal damage is severe.",
//       },
//       {
//         title: "Can windscreen chips spread into cracks?",
//         description:
//           "Yes, temperature changes, vibrations, and stress cause chips to spread rapidly into long cracks. Dubai's extreme heat accelerates spreading significantly. Repair chips immediately before they grow beyond repair limits. Delayed repairs often require expensive replacement instead. Most insurance covers chip repairs encouraging early intervention preventing bigger problems later.",
//       },
//       {
//         title: "Is mobile windscreen service as good as workshop service?",
//         description:
//           "Our mobile service uses identical materials, tools, and procedures as workshop installations. Mobile units carry complete equipment meeting quality standards. Installation environment is controlled using tents when needed. Results are identical with same warranties applying. Mobile service offers convenience without compromising quality or safety standards whatsoever.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Windscreen Repair in Dubai?",
//       description:
//         "Our windscreen specialists answer all your concerns and provide expert guidance for every glass service need. Contact Caroto Repair Dubai now to discuss your windscreen damage and schedule your service appointment today.",
//     },

//     location: {
//       title: "Windscreen Repair Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your windscreen repair needs quickly and efficiently.",
//     },
//   },
//   {
//     id: 17,
//     slug: "car-modification-dubai",
//     title: "Car Modification in Dubai",
//     sub_title: "Custom Car Modification in Dubai",
//     shortDescription:
//       "Caroto Repair Dubai specializes in professional car steering repair and power steering service for all vehicle makes and models, ensuring safe handling and smooth driving experience.",
//     longDescription: `Caroto Repair Dubai delivers professional car modification and customization services for all vehicle types across Dubai. Our skilled technicians transform vehicles using quality parts and expert installation techniques. You get personalized designs, performance enhancements, and meticulous craftsmanship at every project. We understand modifications reflect your personality and driving preferences uniquely. Visit our workshop for custom solutions that elevate your vehicle's performance, appearance, and individuality completely.`,
//     image:
//       "https://res.cloudinary.com/dzn99hije/image/upload/v1763135309/1040_kzarns.webp",
//     bannerImage: "/images/banners/general-repair-banner.jpg",
//     metadata: {
//       title: "Best Car Modification in Dubai - First Choice Cars",
//       description:
//         "Transform your car with expert vehicle modification and performance upgrades. Get guaranteed customization from the best car modification center in Dubai.",
//       keywords: [
//         "car modification in Dubai",
//         "vehicle tuning Dubai",
//         "performance upgrades Dubai",
//         "custom car accessories Dubai",
//         "automotive styling Dubai",
//         "car body kits Dubai",
//         "engine tuning Dubai",
//         "custom wheels and rims Dubai",
//       ],
//     },
//     featureTitle: "Car Modification and Customization Services in Dubai",
//     features: [
//       {
//         id: 1,
//         image: "/images/icons/icon-17.png",
//         title: "Exterior Styling and Body Kits",
//         description:
//           "We install custom body kits, side skirts, front splitters, and rear diffusers transforming your vehicle's appearance dramatically.",
//       },
//       {
//         id: 2,
//         image: "/images/icons/icon-17.png",
//         title: "Performance Exhaust System Installation",
//         description:
//           "Our car performance modifications include sport exhausts, cat-back systems, and headers improving engine breathing and delivering deeper notes.",
//       },
//       {
//         id: 3,
//         image: "/images/icons/icon-17.png",
//         title: "ECU Remapping and Engine Tuning",
//         description:
//           "We reprogram engine computers optimizing fuel maps, boost pressure, and timing parameters increasing horsepower and torque significantly.",
//       },
//       {
//         id: 4,
//         image: "/images/icons/icon-17.png",
//         title: "Alloy Wheel Upgrade and Custom Painting",
//         description:
//           "We install larger alloy wheels in custom finishes, powder coating, or custom painting matching your design preferences.",
//       },
//       {
//         id: 5,
//         image: "/images/icons/icon-17.png",
//         title: "LED and HID Lighting Enhancement",
//         description:
//           "We upgrade headlights, taillights, and accent lighting to LED or HID technology improving visibility, appearance, and aesthetic.",
//       },
//       {
//         id: 6,
//         image: "/images/icons/icon-17.png",
//         title: "Suspension Lowering and Lift Kits",
//         description:
//           "Our vehicle modification Dubai service installs coilovers, lowering springs, or lift kits adjusting ride height for improved handling.",
//       },
//       {
//         id: 7,
//         image: "/images/icons/icon-17.png",
//         title: "Brake Upgrade and Performance Tuning",
//         description:
//           "We install larger rotors, performance calipers, and upgraded brake pads improving stopping power and fade resistance significantly.",
//       },
//       {
//         id: 8,
//         image: "/images/icons/icon-17.png",
//         title: "Interior Upholstery Customization",
//         description:
//           "We reupholster seats, install custom trim, upgrade materials, and modify dashboards creating premium, personalized interior environments throughout.",
//       },
//       {
//         id: 9,
//         image: "/images/icons/icon-17.png",
//         title: "Car Wrapping and Paint Protection Film",
//         description:
//           "Best car modification in Dubai features vinyl wraps in any color and PPF protecting original paint completely.",
//       },
//       {
//         id: 10,
//         image: "/images/icons/icon-17.png",
//         title: "Audio and Entertainment System Installation",
//         description:
//           "We install premium speakers, amplifiers, subwoofers, and head units delivering concert-quality sound and advanced entertainment features.",
//       },
//       {
//         id: 11,
//         image: "/images/icons/icon-17.png",
//         title: "Spoiler and Aerodynamic Enhancement",
//         description:
//           "We install rear spoilers, front lips, and aerodynamic components improving downforce, stability, and aggressive performance-oriented appearance.",
//       },
//       {
//         id: 12,
//         image: "/images/icons/icon-17.png",
//         title: "Custom Steering, Pedals, and Trim Upgrades",
//         description:
//           "Our car customization Dubai service installs aftermarket steering wheels, performance pedals, and interior trim enhancing driver connection.",
//       },
//     ],
//     priceRange: "AED 370 - AED 1850",
//     duration: "1 - 3 days (depending on repair type)",
//     location: "Dubai, UAE",

//     sections: [
//       {
//         id: 1,
//         title: "Tips",
//         description: "Some description",
//         image: "",
//       },
//     ],

//     whyChooseUs: [
//       {
//         title: "Why Choose One Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-18.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//       {
//         title: "Why Choose Two Title",
//         description: "<p>Why choose one description</p>",
//         image: "/images/icons/icon-19.png",
//       },
//     ],
//     additionalOne: {
//       title: "Signs You Need Car Modification",
//       description: `
//     <p>
//     Certain indicators suggest your vehicle could benefit from professional customization and performance upgrades. Recognizing these signs helps you enhance driving experience, appearance, and functionality. Consider these important signals:

//     </p>
//     <ul style="list-style-type: disc; padding-left: 20px">
//         <li>Stock performance feels inadequate for your driving style</li>
//         <li>Vehicle appearance lacks personal character and uniqueness</li>
//         <li>Interior comfort and features need premium upgrades</li>
//         <li>Handling and suspension require improved responsiveness</li>
//         <li>Desire for enhanced audio, lighting, or technology features</li>

//     </ul>
//   `,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763133187/1038_r5jide.webp",
//     },

//     includeServices: {
//       includeServicesTitle:
//         "Complete Car Modification and Upgrade Service at Caroto Dubai",
//       includeServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-17.png",
//           title: "Expert Modification Specialists",
//           description:
//             "Our technicians specialize in automotive customization across all vehicle types with extensive experience in performance and aesthetic modifications.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-17.png",
//           title: "Quality Aftermarket Parts",
//           description:
//             "You get premium parts from trusted brands including Akrapovic, KW, Brembo, and more delivering reliability and proven performance enhancements.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-17.png",
//           title: "Custom Design Consultation",
//           description:
//             "We discuss your vision, recommend appropriate modifications, and create personalized plans matching your budget and performance goals exactly.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-17.png",
//           title: "Professional Installation Standards",
//           description:
//             "Every modification installs properly using correct procedures maintaining vehicle safety, reliability, and warranty protection when applicable throughout.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-17.png",
//           title: "Modification Warranty Coverage",
//           description:
//             "We warranty our installation workmanship and back quality parts with manufacturer coverage protecting your investment against defects completely.",
//         },
//       ],
//     },

//     appointment: {
//       title: "Book Your Car Modification in Dubai Today",
//       description:
//         "Your vehicle deserves personalization reflecting your style and performance preferences uniquely. Caroto Repair Dubai specializes in custom modifications delivering professional results exceeding expectations. Contact us now to discuss your modification project and transform your vehicle into something extraordinary.",
//       guarantee:
//         "Schedule Your Custom Modification Consultation Now (Professional Installation Guaranteed)",
//     },

//     deliverServices: {
//       deliverTitle: "How We Deliver Professional Car Modification Service",
//       deliverServices: [
//         {
//           id: 1,
//           image: "/images/icons/icon-22.png",
//           title: "Step 1: Consultation and Vehicle Assessment",
//           description:
//             "We discuss your modification goals, assess vehicle condition, explain possibilities and limitations, and recommend appropriate upgrades matching your vision.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-23.png",
//           title: "Step 2: Design Planning and Customization Options",
//           description:
//             "Our team presents part options, creates visual mockups when needed, provides detailed quotes, and finalizes modification plans with timelines.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-24.png",
//           title: "Step 3: Modification and Installation Process",
//           description:
//             "We order quality parts, perform installations using proper techniques, maintain vehicle safety standards, and keep you updated throughout.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-25.png",
//           title: "Step 4: Final Testing and Quality Inspection",
//           description:
//             "We test drive modified vehicles, verify all systems function correctly, inspect workmanship quality, and ensure your complete satisfaction before delivery.",
//         },
//       ],
//     },

//     whyTrust: {
//       whyTrustTitle: "Why Choose Caroto for Car Modification",
//       whyTrustItems: [
//         {
//           id: 1,
//           image: "/images/icons/icon-17.png",
//           title: "Modification Experts",
//           description:
//             "Our technicians specialize in automotive customization with years of experience transforming vehicles for performance enthusiasts and style-conscious owners.",
//         },
//         {
//           id: 2,
//           image: "/images/icons/icon-17.png",
//           title: "Premium Parts Access",
//           description:
//             "We source quality aftermarket parts from reputable manufacturers worldwide providing access to latest performance and aesthetic upgrade options.",
//         },
//         {
//           id: 3,
//           image: "/images/icons/icon-17.png",
//           title: "Custom Design Service",
//           description:
//             "You receive personalized consultation creating modification plans matching your vision, budget, and vehicle capabilities perfectly without compromise.",
//         },
//         {
//           id: 4,
//           image: "/images/icons/icon-17.png",
//           title: "Safe Performance Tuning",
//           description:
//             "We tune engines conservatively maintaining reliability, staying within safe limits, and protecting engine longevity through proper calibration methods.",
//         },
//         {
//           id: 5,
//           image: "/images/icons/icon-17.png",
//           title: "Complete Project Management",
//           description:
//             "We handle everything from design consultation through final testing providing seamless modification experiences with regular progress updates throughout.",
//         },
//       ],
//     },

//     guaranteed: {
//       title: "What to Expect During a Caroto Modification Project",
//       description:
//         "Our modification service transforms your vehicle through careful planning and expert execution. You get creative input, quality workmanship, and attention to detail. We never compromise safety or reliability chasing extreme modifications regardless of requests.",
//       contents: [
//         "Initial consultation discussing your modification goals, budget constraints, intended use, and vision for vehicle transformation",
//         "Vehicle assessment evaluating current condition, identifying limitations, and determining feasible modifications maintaining safety and reliability",
//         "Design presentation showing part options, visual mockups, performance expectations, and detailed cost breakdowns before commitment",
//         "Professional installation using proper techniques, manufacturer specifications, and quality control throughout modification process ensuring excellence",
//       ],
//     },

//     additionalTwo: {
//       title: "Design, Performance, and Perfection: The Caroto Way",
//       description: `
//     <p>
//     Caroto Repair Dubai masters automotive customization balancing aesthetics, performance, and reliability perfectly. Our technicians understand aerodynamics, engine management systems, and suspension geometry thoroughly. We handle subtle refinements, aggressive transformations, track-focused builds, and show car preparations with precision. Your vehicle receives quality parts, proper installation, and safe tuning parameters. We work on economy cars, luxury sedans, sports cars, and SUVs daily.
//     </p>
//   `,
//       image:
//         "https://res.cloudinary.com/dzn99hije/image/upload/v1763132586/1036_c5nuqg.webp",
//     },

//     // commitment: {
//     //   title: "The Caroto Promise – Quality Oil Service You Can Trust",
//     //   description:
//     //     "Your engine's longevity depends on regular oil maintenance. Caroto Repair Dubai commits to delivering precise oil changes using quality products and proven techniques. We stand behind every service with solid warranties and transparent communication. Book your oil change today. Experience oil service that protects your investment completely.",
//     //   contents: [],
//     // },

//     faq: [
//       {
//         title: "Are car modifications legal in Dubai?",
//         description:
//           "UAE regulations permit certain modifications but restrict others. Exhaust systems, window tinting, and lighting modifications must meet legal requirements. Major structural changes, extreme lowering, and loud exhausts may fail inspections. We stay current on regulations advising modifications passing inspections legally. Always verify modifications comply before proceeding avoiding fines or registration problems later.",
//       },
//       {
//         title: "Will modifications void my car warranty?",
//         description:
//           "Manufacturer warranties typically exclude modified components and related failures. Unrelated systems remain covered unless modifications caused damage. Dealerships scrutinize modified vehicles during warranty claims. We recommend waiting until warranty expires for major modifications. Some manufacturers offer performance parts maintaining warranty coverage. Discuss warranty implications before modifying newer vehicles under coverage.",
//       },
//       {
//         title: "How much do car modifications cost?",
//         description:
//           "Modification costs vary dramatically based on scope and quality. Simple cosmetic changes cost hundreds. Comprehensive builds cost thousands or tens of thousands. Quality parts cost more but deliver better results and longevity. We provide detailed quotes after consultation. Budget affects possibilities but we work within constraints delivering maximum value always.",
//       },
//       {
//         title: "Can you modify leased vehicles?",
//         description:
//           "Lease agreements typically prohibit permanent modifications requiring vehicle return in original condition. Reversible modifications like wheels or exhaust may be acceptable if original parts are retained. Lease companies charge for modifications during return inspections. We recommend checking lease terms before any modifications. Consider purchasing vehicles outright for extensive customization freedom.",
//       },
//       {
//         title: "Do modifications improve resale value?",
//         description:
//           "Quality modifications appeal to enthusiast buyers potentially increasing value. Extreme modifications limit buyer pool reducing marketability significantly. Tasteful upgrades like wheels or exhaust maintain broader appeal. Documentation and professional installation preserve value better than DIY work. Original parts retention helps resale. Conservative modifications generally safer for value retention than radical changes.",
//       },
//       {
//         title: "How long do modification projects take?",
//         description:
//           "Simple modifications like exhaust or wheels complete within days. Interior customization requires weeks for upholstery work. Comprehensive builds spanning multiple systems take months depending on complexity and parts availability. We provide realistic timelines during consultation. Rush service available for urgent projects at premium rates when feasible.",
//       },
//       {
//         title: "Can modified cars pass RTA inspection?",
//         description:
//           "Modified vehicles must meet RTA safety and emissions standards for registration renewal. Legal modifications with proper documentation pass inspections. Illegal modifications cause failures requiring reversal. We understand inspection requirements advising compliant modifications avoiding registration problems. Some modifications need official approval before installation. Consult us ensuring modifications remain legal and inspection-ready always.",
//       },
//     ],
//     contact: {
//       title: "Have Questions About Car Modification in Dubai?",
//       description:
//         "Our modification specialists answer all your concerns and provide expert guidance for every customization need. Contact Caroto Repair Dubai now to discuss your modification vision and schedule your consultation appointment today.",
//     },

//     location: {
//       title: "Car Modification Service Locations Across Dubai",
//       description:
//         "Caroto Repair Dubai operates conveniently across multiple locations to serve your car modification needs quickly and efficiently.",
//     },
//   },
// ];

// export default servicesDetailsData;
