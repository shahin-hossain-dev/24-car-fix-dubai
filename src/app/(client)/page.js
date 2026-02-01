// import UnderConstruction from "@/components/partials/UnderConstruction";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conversation from "./components/Conversation";
import OurService from "./components/OurServices/OurService";
import Brands from "./components/Brands/Brands";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer";
import Location from "./components/Location";
import ContactUs from "./components/ContactUs/ContactUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Counters from "./components/Counters/Counters";
import Engine from "./components/Engine";
import MajorMinor from "./components/MajorMinor";
import Review from "./components/Review/Review";

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const services = data?.data;

  return (
    <div>
      {/* <UnderConstruction /> */}
      {/* <Navbar /> */}
      <Hero />
      <OurService services={services} />
      <Counters />
      <Brands />
      <Engine />
      <MajorMinor />
      <AboutUs />
      <WhyChooseUs />
      <Review />
      <div className="pt-6 lg:pt-12">
        <ContactUs />
      </div>
      <Location />
    </div>
  );
}
