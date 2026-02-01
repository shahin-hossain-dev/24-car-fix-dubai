import React from "react";
import IncludeServicesCard from "./IncludeServicesCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Section from "@/components/partials/Section";

const IncludesServices = ({ services, title }) => {
  return (
    <Section>
      <div>{title && <SectionTitle> {title}</SectionTitle>}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 mt-4">
        {services?.map((item, idx) => (
          <IncludeServicesCard item={item} key={idx} />
        ))}
      </div>
    </Section>
  );
};

export default IncludesServices;
