import Section from "@/components/partials/Section";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const GuaranteedCommitment = ({ data }) => {
  return (
    <div className="bg-primary-500 mt-6 lg:mt-12">
      <Section className={"py-6 lg:py-12 "}>
        <div className="!space-y-4 lg:!space-y-6">
          <h2 className="text-2xl md:text-xl lg:text-3xl  font-bai-jamjuree text-white">
            {data?.title}
          </h2>

          {data?.description && (
            <div className="py-2 text-white  lg:text-lg ">
              <p>{data?.description}</p>
            </div>
          )}

          <div className="!space-y-3">
            {data?.contents?.length > 0 &&
              data?.contents?.map((item, idx) => (
                <p
                  key={idx}
                  className="flex items-start gap-2  lg:text-lg text-white  "
                >
                  <FaAngleDoubleRight className=" shrink-0 mt-2" />
                  <span>{item}</span>
                </p>
              ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GuaranteedCommitment;
