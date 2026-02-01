import Section from "@/components/partials/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteInfo } from "@/constants";
import React from "react";

const Location = ({
  title = (
    <span>
      <span className="text-primary-500">Car Repairs Services</span> Location
    </span>
  ),
  description = "Fast mobile mechanic service available anywhere in Dubai",
}) => {
  return (
    <section className="mt-12">
      <SectionTitle>{title}</SectionTitle>
      <p className="text-sm text-center px-4 text-neutral-300">{description}</p>
      <div className="mt-6 ">
        <iframe
          src={siteInfo?.mapUrl}
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
