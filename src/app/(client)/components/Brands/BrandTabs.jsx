"use client";
import { Tabs } from "antd";
import React from "react";

const BrandTabs = ({ brandsData }) => {
  // animation will be here
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Tabs
      onChange={onChange}
      type="card"
      centered
      items={brandsData.map((brand) => {
        const id = String(brand.id);
        return {
          label: brand.key,
          key: brand.key,
          children: (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
              {brand.brands.map((item, idx) => (
                <div
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: item.item }}
                ></div>
              ))}
            </div>
          ),
        };
      })}
    />
  );
};

export default BrandTabs;
