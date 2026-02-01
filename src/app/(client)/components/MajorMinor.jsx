"use client";
import { Tabs } from "antd";
import Section from "@/components/partials/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { majorMinor } from "@/constants";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import FadeRightIn from "@/components/animations/FadeRightIn";

const MajorMinor = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div
      id="major-minor"
      className="major-minor overflow-x-hidden mt-8 lg:mt-12"
    >
      <Section>
        <SectionTitle>Major and Minor Services</SectionTitle>
        <Tabs
          onChange={onChange}
          type="card"
          centered
          items={majorMinor.map((service) => {
            const id = String(service.id);
            return {
              label: service.title,
              key: service.title,
              children: (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                  <div className="gap-6 mt-4 space-y-3">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FaRegCheckCircle className="text-primary-500 text-lg lg:text-xl" />
                        <h4 className="text-lg lg:text-xl">{item}</h4>
                      </div>
                    ))}
                  </div>
                  <div>
                    <FadeRightIn>
                      <Image
                        src={service.image}
                        alt={service.title}
                        height={500}
                        width={600}
                        className="rounded-2xl"
                      />
                    </FadeRightIn>
                  </div>
                </div>
              ),
            };
          })}
        />
      </Section>
    </div>
  );
};

export default MajorMinor;
