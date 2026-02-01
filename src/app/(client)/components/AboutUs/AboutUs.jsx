import AnimatedText from "@/components/animations/AnimatedText";
import Section from "@/components/partials/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FiClock } from "react-icons/fi";

const AboutUs = () => {
  return (
    <Section id="about-us" className={"py-6 md:py-8"}>
      <SectionTitle>
        About <span className="text-primary-500">24 Car Fix Dubai</span>
      </SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10  mt-4 lg:mt-8">
        <div className="relative ">
          <div
            style={{
              width: "90%",
              height: "90%",
              position: "relative",
              float: "right",
            }}
            className="!h-[300px] lg:!h-[400px]"
          >
            <Image
              src={
                "https://res.cloudinary.com/djlgl2sgz/image/upload/v1769027985/about_qgn02p.jpg"
              }
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="about-us"
              className="rounded-xl object-top object-cover h-[400px]"
            />
          </div>
          <div className="w-[50%] h-[50%] box-border rounded-xl bg-primary-100 absolute bottom-0 left-0">
            <Image
              src={"/images/others/tools.webp"}
              fill
              alt="parts"
              className="rounded-2xl w-full p-2 lg:p-3 object-center object-cover "
            />
          </div>
        </div>
        <div className="space-y-4">
          <AnimatedText>
            <h2 className="text-xl lg:text-3xl font-semibold text-primary-700 !mb-3">
              We are qualified & experienced
            </h2>
          </AnimatedText>
          <div className="text-neutral-500 lg:text-lg font-light leading-5 lg:leading-8 !space-y-2">
            <p>
              At 24 Car Fix Dubai, we deliver fast, reliable, and professional
              car repair solutions across Dubai, ensuring your vehicle stays
              safe and road-ready.
            </p>
            <p>
              Our certified technicians handle everything from diagnostics and
              mechanical repairs to routine servicing and roadside assistance
              using advanced tools and transparent pricing.
            </p>
            <p>
              Trusted for quality, speed, and value, we provide expert car
              repair services you can depend on—anytime, anywhere in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 bg-gray-50 p-4 ">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="group/card w-full hover:shadow-xl duration-300 bg-gray-50 border border-primary-500/20 shadow-lg rounded-2xl p-2 lg:p-4 space-y-4 flex flex-col items-center text-center lg:text-start"
              >
                {/* <Image src={item.image} height={70} width={70} alt={item.title} /> */}
                {item?.image}
                <h4 className="text-lg group-hover/card:text-primary-500 duration-300 ">
                  {item.title}
                </h4>
                {/* <p className="text-sm text-secondary-700">{item.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;

export const data = [
  {
    id: 1,
    title: "24/7 Availability",
    description:
      "Our certified and experienced mechanics ensure every repair is done with precision and care.",
    image: (
      <div className="bg-green-500/10 w-[50px] h-[50px] rounded-full flex items-center justify-center">
        <FiClock className="text-green-500 group-hover/card:scale-110 duration-300 text-2xl" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Wide Coverage",
    description:
      "We use advanced tools and genuine parts to deliver reliable repairs you can trust.",
    image: (
      <div className="bg-primary-500/10 w-[50px] h-[50px] rounded-full flex items-center justify-center">
        <IoLocationOutline className="text-primary-500 group-hover/card:scale-110 duration-300 text-2xl" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Trusted Experts",
    description:
      "Get back on the road quickly with our streamlined repair process and timely service.",
    image: (
      <div className="bg-primary-500/10 w-[50px] h-[50px] rounded-full flex items-center justify-center">
        <VscWorkspaceTrusted className="text-primary-500 group-hover/card:scale-110 duration-300 text-2xl" />
      </div>
    ),
  },
];
