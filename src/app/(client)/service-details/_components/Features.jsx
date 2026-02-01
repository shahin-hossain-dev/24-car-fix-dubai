import SectionTitle from "@/components/ui/SectionTitle";
import OurServiceCard from "../../components/OurServices/OurServiceCard";

const ServiceFeatures = ({ title, features, description }) => {
  return (
    <div id="our-service" className={"py-6 lg:py-8"}>
      <div className=" mx-auto">
        <div>{title && <SectionTitle> {title}</SectionTitle>}</div>
        {description && (
          <div className="py-2">
            <p>{description}</p>
          </div>
        )}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
            {Array.isArray(features) &&
              features.map((service, idx) => (
                <div key={idx}>
                  <span className="block h-full cursor-pointer">
                    <OurServiceCard service={service} />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
