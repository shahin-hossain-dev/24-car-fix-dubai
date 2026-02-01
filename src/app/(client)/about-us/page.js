import PageBanner from "@/components/partials/PageBanner";
import AboutUs from "../components/AboutUs/AboutUs";
import OurService from "../components/OurServices/OurService";
import Brands from "../components/Brands/Brands";
import ContactUs from "../components/ContactUs/ContactUs";
import Location from "../components/Location";

export const metadata = {
  title: "Car Repairs Services Dubai | About Us - Car Experts in Dubai",
  description:
    "Car Repairs Services Dubai: We are your qualified and experienced car repair partner. Delivering precise, transparent, and dependable service across Dubai for all makes.",
};

const About = () => {
  return (
    <section>
      <PageBanner title={"About Us"} image={"/images/image-1.webp"} />
      <AboutUs />
      <OurService />
      <Brands />
      <ContactUs />
      <Location />
    </section>
  );
};

export default About;
