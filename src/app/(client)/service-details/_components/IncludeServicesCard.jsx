import Image from "next/image";
import React from "react";

const IncludeServicesCard = ({ item }) => {
  return (
    <div className="group/card !space-y-1 flex flex-col items-center shadow-lg p-4 hover:bg-primary-500 hover:duration-200 rounded-2xl h-full">
      <div>
        <Image
          src={item?.image}
          alt={item?.title}
          height={70}
          width={70}
          className=" mb-1"
        />
      </div>
      <h3 className="text-base lg:text-lg text-primary-700 group-hover/card:text-white font-medium  mt-2 mb-1 ">
        {item?.title}
      </h3>
      <p className="text-sm group-hover/card:text-white">{item?.description}</p>
    </div>
  );
};

export default IncludeServicesCard;
