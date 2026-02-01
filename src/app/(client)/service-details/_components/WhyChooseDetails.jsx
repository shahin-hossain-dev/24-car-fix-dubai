import Section from "@/components/partials/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { Collapse } from "antd";
import React from "react";

const WhyChooseDetails = ({ data }) => {
  const items = data.map((item, idx) => {
    return {
      key: idx,
      label: item.title,
      children: (
        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
      ),
    };
  });

  return (
    <Section className={"pb-6 lg:pb-12"}>
      <SectionTitle>Why Choose Car Repairs Services Dubai</SectionTitle>
      <Collapse defaultActiveKey={["0"]} accordion items={items} />
    </Section>
  );
};

export default WhyChooseDetails;
