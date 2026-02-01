import AnimatedText from "@/components/animations/AnimatedText";
import FadeIn from "@/components/animations/FadeIn";
import FadeRightIn from "@/components/animations/FadeRightIn";
import Section from "@/components/partials/Section";
import Image from "next/image";
import React from "react";
import { ButtonGroup, FeaturesSection } from "./Hero";

const Engine = () => {
  return (
    <div className={"py-12 lg:py-16 bg-primary-50 overflow-x-hidden"}>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4">
          <div className="!space-y-4 lg:!space-y-8">
            <h2 className="text-2xl lg:text-4xl font-bai-jamjuree text-neutral-500">
              Trusted On-Site Car Service and Repair Specialists in Dubai
            </h2>

            <p className="leading-8 text-lg text-neutral-300 ">
              Our on-site car servicing and repair in Dubai offers expert
              automotive care wherever you need it. From routine maintenance to
              urgent repairs, our mobile mechanics provide reliable, transparent
              service at your home, office, or roadside — saving you time,
              effort, and unnecessary costs.
            </p>
            <div className="mb-4 lg:mb-0">
              <ButtonGroup />
            </div>
            <div>
              <FeaturesSection />
            </div>
          </div>
          <div>
            <FadeRightIn>
              <Image
                src={"/images/others/engine.webp"}
                height={500}
                width={500}
                alt="Car battery replacement dubai"
                className="rounded-2xl w-full! object-cover"
              />
            </FadeRightIn>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Engine;
