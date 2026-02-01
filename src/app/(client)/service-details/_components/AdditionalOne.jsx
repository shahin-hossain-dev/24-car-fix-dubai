import Section from "@/components/partials/Section";
import Image from "next/image";
import React from "react";

const AdditionalOne = ({ data }) => {
  return (
    <Section className={"py-6 lg:py-12"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="!space-y-2 lg:!space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl  font-bai-jamjuree  text-primary-500">
            {data?.title}
          </h2>
          <div className="lg:text-lg leading-8">
            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          </div>
        </div>
        <div>
          <Image
            src={data?.image}
            alt={data?.title}
            width={1440}
            height={1024}
            className="rounded-2xl"
          />
        </div>
      </div>
    </Section>
  );
};

export default AdditionalOne;
