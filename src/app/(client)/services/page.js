import PageBanner from "@/components/partials/PageBanner";
import AboutUs from "../components/AboutUs/AboutUs";
import OurService from "../components/OurServices/OurService";
import Brands from "../components/Brands/Brands";
import ContactUs from "../components/ContactUs/ContactUs";
import Location from "../components/Location";

export const metadata = {
  title: "Best Car Battery Repair Services in Dubai - Car Maintenance Services",
  description:
    "We offer a wide range of services, including car engine repair, brake repair, Vehicle Modification, AC Repair, Tire Services, Oil Change & more. Book now!",
};

const Service = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const services = data?.data;

  return (
    <section>
      <PageBanner title={"Our Expertise"} image={"/images/image-1.webp"} />
      <OurService services={services} />
      <AboutUs />
      <Brands />
      <ContactUs />
      <Location />
    </section>
  );
};

export default Service;
