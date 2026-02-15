import Section from "@/components/partials/Section";
import Icon from "@/components/ui/Icon";
import SectionTitle from "@/components/ui/SectionTitle";
import { whyChooseUs } from "@/constants";
import Image from "next/image";
import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LuBadgeCheck } from "react-icons/lu";
import { HiLightBulb } from "react-icons/hi";

const WhyChooseUs = ({ data = whyChooseUs }) => {
  return (
    <Section className={"py-12 lg:py-16 "}>
      <SectionTitle>
        Why Choose <br />{" "}
        <span className="text-primary-500">24 Car Fix Dubai</span>
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
        <div className="relative ">
          <div className="flex justify-center lg:justify-start absolute top-4 left-4">
            <span className="px-4 py-1 inline-block mb-2 rounded-full  border backdrop-blur-sm border-gray-50/50 text-white text-sm font-thin">
              <HiLightBulb className="inline text-amber-300 text-lg" /> 24/7 Car
              Repair Service
            </span>
          </div>
          <Image
            src={
              "https://res.cloudinary.com/ddno9kmjf/image/upload/v1764252751/1041_ry5lbo.webp"
            }
            height={500}
            width={500}
            alt="Why choose 24 Car Fix Dubai"
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute flex items-end h-full top-0 left-0 rounded-2xl w-full bg-gradient-to-t from-[#000000B3] to-[#00000000]">
            <div className="p-4 flex items-center gap-4">
              <div className=" gap-4 p-1 rounded-lg">
                <Icon
                  icon={VscWorkspaceTrusted}
                  className="w-[40px] h-[40px] text-green-500"
                />
              </div>
              <h3 className="text-base lg:text-xl text-white font-semibold mt-2 mb-2">
                {
                  "24 Car Fix Dubai – Trusted by 5,000+ vehicle owners across Dubai."
                }
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="group/card w-full hover:shadow-xl duration-300 bg-gray-50 border border-primary-500/50 rounded-2xl p-2 lg:p-4 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-start"
            >
              {/* <Image src={item.image} height={70} width={70} alt={item.title} /> */}
              {item?.image}
              <h4 className="text-lg group-hover/card:text-primary-500 duration-300 ">
                {item.title}
              </h4>
              <p className="text-sm text-secondary-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
