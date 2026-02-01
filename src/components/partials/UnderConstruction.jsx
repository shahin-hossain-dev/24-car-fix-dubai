import React from "react";

const UnderConstruction = () => {
  return (
    <div
      className={`bg-[url(/images/image_012.jpg)] h-screen  bg-center bg-cover`}
    >
      <div className="h-screen bg-[#000000CC] flex justify-center items-center">
        <div>
          <h2 className="text-white text-center  font-semibold text-3xl md:text-4xl lg:text-5xl">
            Car <span className="text-red-500">Auto</span> Repair{" "}
            <span className="text-red-500">Dubai</span> <br /> is under
            construction
          </h2>
          <p className="text-center tracking-[0.3rem] lg:tracking-[0.6rem]">
            Soon the website will visible
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
