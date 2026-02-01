import PageBanner from "@/components/partials/PageBanner";
import Section from "@/components/partials/Section";
import Location from "../../components/Location";
import FAQ from "../../components/FAQ/FAQ";
import ContactUs from "../../components/ContactUs/ContactUs";
import servicesDetailsData from "@/data/serviceDetails";
import { FaRegCheckCircle } from "react-icons/fa";
import Icon from "@/components/ui/Icon";
import { FaCheck } from "react-icons/fa";
import Review from "../../components/Review/Review";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiCarBattery } from "react-icons/pi";
import { TiBatteryHigh } from "react-icons/ti";
import {
  TbBatteryAutomotive,
  TbBatteryCharging2,
  TbCircuitBattery,
  TbSteeringWheel,
} from "react-icons/tb";
import { BiSolidCarBattery } from "react-icons/bi";
import { MdAcUnit, MdOutlineElectricalServices } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsGear, BsTools } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";
import { IoCarSportOutline, IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { serviceAreas } from "@/data/areas";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;

  const serviceDetails = servicesDetailsData.find(
    (service) => service?.slug === slug,
  );

  return {
    title: serviceDetails?.metadata?.title,
    description: serviceDetails?.metadata?.description,
    keywords: serviceDetails?.metadata?.keywords,
  };
}

const ServiceDetails = async ({ params }) => {
  const { slug } = await params;

  const icons = [
    PiCarBattery,
    TiBatteryHigh,
    TbCircuitBattery,
    TbBatteryAutomotive,
    TbBatteryCharging2,
    MdAcUnit,
    BiSolidCarBattery,
    BsGear,
    MdOutlineElectricalServices,
    FaCar,
    BsTools,
    TbSteeringWheel,
    IoCarSportOutline,
  ];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/services/${slug}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  const service = data?.data;

  return (
    <section>
      <PageBanner
        title={service?.title}
        image={service?.image?.url}
        subTitle={service?.sub_title}
      />
      <Section className={"py-2 lg:py-4 mt-4 "}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 ">
          <div className="!space-y-2 col-span-1 lg:col-span-2 lg:!space-y-4   ">
            {/* section 1 */}
            <section className="rounded-2xl shadow-lg p-4 lg:p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="shrink-0 w-[45px] h-[45px] rounded-full bg-primary-50 flex items-center justify-center">
                  <Icon
                    size="1.9rem"
                    icon={icons[Math.round(Math.random(0) * 11 + 1)]}
                    className="text-primary-500"
                  />
                </div>
                <h2 className="text-lg md:text-2xl  font-bai-jamjuree  text-primary-500">
                  {service?.main?.title}
                </h2>
              </div>
              <p className="text-sm lg:text-base text-secondary-900 leading-6 text-justify">
                {service?.main?.description}
              </p>

              <div className="py-4 grid grid-cols-2 gap-4">
                {service?.main?.includes?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-secondary-50 py-3 px-4 rounded-lg text-sm lg:text-base"
                  >
                    <FaRegCheckCircle className="text-primary-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* section 2 */}
            <section className="mt-12! lg:mt-24!">
              <h2 className="text-2xl md:text-4xl  font-bai-jamjuree   !mb-4 lg:!mb-6">
                {service?.whyChoose?.title}
              </h2>

              <div className="space-y-4!">
                {service?.whyChoose?.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 border border-neutral-200 shadow hover:border-primary-500 duration-300 rounded-xl p-4"
                  >
                    <div className="shrink-0 w-[45px] h-[45px] rounded-full bg-primary-50 flex items-center justify-center">
                      <Icon
                        size="1.9rem"
                        icon={BsGear}
                        className="text-primary-500  "
                      />
                    </div>
                    <div>
                      <h2 className="text-xl lg:text-2xl  font-bai-jamjuree  text-primary-500">
                        {item?.title}
                      </h2>
                      <p className="!mt-4">{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>{service?.faq && <FAQ data={service?.faq} />}</section>
          </div>
          <div className="col-span-1  ">
            <div className="sticky lg:top-20 space-y-6">
              <div className="shadow rounded-xl bg-green-50 p-4 lg:p-6 ">
                <div className="flex items-center justify-center  gap-2 mb-2">
                  <div className="bg-green-100 text-green-500 rounded-full w-[35px] h-[35px] flex items-center justify-center">
                    <VscWorkspaceTrusted className="text-lg" />
                  </div>

                  <h2 className="text-center  text-lg  ">Our Advantages</h2>
                  <div className="bg-green-100 text-green-500 rounded-full w-[35px] h-[35px] flex items-center justify-center">
                    <VscWorkspaceTrusted className="text-lg" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 ">
                  <div className="flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-green-100">
                      <FaCheck className="text-green-500 text-base" />
                    </div>
                    <span>Free Pickup and Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-green-100">
                      <FaCheck className="text-green-500 text-base" />
                    </div>
                    <span>Dedicated Service Advisors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-green-100">
                      <FaCheck className="text-green-500 text-base" />
                    </div>
                    <span> 12 Months Parts & Labour Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-green-100">
                      <FaCheck className="text-green-500 text-base" />
                    </div>
                    <span> Free Car Wash</span>
                  </div>
                </div>
              </div>
              <div className="shadow rounded-xl bg-green-50 p-4 lg:p-6 ">
                <div className="flex items-center  gap-2 mb-2">
                  <div className="bg-green-100 text-green-500 rounded-full w-[35px] h-[35px] flex items-center justify-center">
                    <IoLocationSharp className="text-lg" />
                  </div>

                  <h2 className="text-center text-lg  ">
                    Our Coverage Areas in Dubai
                  </h2>
                </div>
                <div className="flex flex-col gap-2 ">
                  {serviceAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-green-100">
                        <GoDotFill className="text-green-500 text-base" />
                      </div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Review />

      <div className="pt-6 lg:pt-12">
        <ContactUs />
      </div>

      <Location />
    </section>
  );
};

export default ServiceDetails;
