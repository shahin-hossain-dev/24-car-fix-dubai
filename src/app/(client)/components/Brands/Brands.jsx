import Section from "@/components/partials/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { brands } from "@/constants";
import BrandTabs from "./BrandTabs";

const Brands = () => {
  const brandsData = brands.map((brand) => {
    const id = brand.id;
    const key = brand.origin;
    const label = brand.origin;
    const brandsItems = brand.brands.map((item) => {
      return {
        item: `
          <div class="group/card flex flex-col  items-center shadow-lg hover:shadow-xl p-4 border border-neutral-500/30  hover:border-primary-500/30 duration-200 rounded-2xl h-full">
            <div>
              <Image
                src=${item.image}
                alt=${item.name}
                height=70
                width=70
                className=" mb-1  duration-200"
              />
            </div>
            <h3 class="text-base md:text-xl text-neutral-500 duration-200 group-hover/card:text-primary-700  font-semibold mt-2 mb-1">
              ${item.name}
            </h3>
          </div>
        `,
      };
    });

    return { id, key, label, brands: brandsItems };
  });

  return (
    <Section className={"py-6"}>
      <SectionTitle>
        Our <span className="text-primary-500">Specialized</span> Car Brands
      </SectionTitle>
      <div className="brands">
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, idx) => (
            <div key={idx}>
              <div className=" group/card flex flex-col items-center shadow-lg p-4 hover:bg-primary-500 hover:duration-200 rounded-2xl h-full">
                <div>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    height={70}
                    width={70}
                    className=" mb-1"
                  />
                </div>
                <h3 className="text-base md:text-xl text-primary-700 group-hover/card:text-white font-semibold mt-2 mb-1">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div> */}

        <BrandTabs brandsData={brandsData} />
      </div>
    </Section>
  );
};

export default Brands;
