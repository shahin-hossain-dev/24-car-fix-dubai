import Section from "@/components/partials/Section";
import Accordion from "@/components/ui/Accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";

const FAQ = ({ data }) => {
  return (
    <div className={"py-6 lg:py-12"}>
      <h2 className="text-2xl md:text-4xl  font-bai-jamjuree   !mb-4 lg:!mb-6">
        Frequently Ask Questions
      </h2>
      <Accordion data={data} />
    </div>
  );
};

export default FAQ;
