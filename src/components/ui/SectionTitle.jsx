"use client";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const SectionTitle = ({ children, className, ...props }) => {
  const titleRef = useRef();

  useEffect(() => {
    if (typeof window !== undefined) {
      const textSplit = new SplitText(titleRef.current, {
        type: "chars, words",
      });

      gsap.from(textSplit.chars, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 95%",
        },
        opacity: 0,
        xPercent: 50,
        duration: 1,
        ease: "elastic.inOut",
        stagger: {
          each: 0.02,
        },
      });
    }
  }, [children]);

  return (
    <h3
      ref={titleRef}
      id="section-title"
      className={`${className}  py-5 md:py-6 text-2xl m:text-3xl lg:text-4xl text-neutral-500 font-bold! font-poppins! text-center mb-6 lg:mt-8 w-full lg:w-[70%] !mx-auto `}
      {...props}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
