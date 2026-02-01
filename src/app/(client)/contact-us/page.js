import PageBanner from "@/components/partials/PageBanner";
import ContactUs from "../components/ContactUs/ContactUs";
import Location from "../components/Location";

export const metadata = {
  title: "Car Repairs Services Dubai | Contact Us - 24/7 Auto Repair Support",
  description:
    "Get in touch with Car Repairs Services Dubai for car service bookings, quotes, and support. Call 0568587348. 24/7 assistance across Dubai.",
};

const ContactUsPage = () => {
  return (
    <div>
      <PageBanner title={"Contact Us"} image={"/images/image-1.webp"} />
      <ContactUs />
      <Location />
    </div>
  );
};

export default ContactUsPage;
