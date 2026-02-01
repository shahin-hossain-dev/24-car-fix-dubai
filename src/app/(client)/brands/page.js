import PageBanner from "@/components/partials/PageBanner";
import React from "react";
import Brands from "../components/Brands/Brands";
import Location from "../components/Location";
import ContactUs from "../components/ContactUs/ContactUs";

export const metadata = {
  title:
    "American Car Battery Repair & Maintenance Services in Dubai - Book Now",
  description:
    "Battery Fix Pro Dubai specializes in car battery repair, replacement, and maintenance for all vehicle brands, including American, British, Japanese, German, French, and more. Fast, reliable service with guaranteed results – book your battery service today!",
};

const BrandsPage = () => {
  return (
    <div>
      <PageBanner title={"Brands"} />
      <Brands />
      <ContactUs />
      <Location />
    </div>
  );
};

export default BrandsPage;
