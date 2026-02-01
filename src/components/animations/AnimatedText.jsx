"use client";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

const AnimatedText = ({ children, className, ...props }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const textSplit = new SplitText(textRef.current, {
        type: "chars, words",
      });

      gsap.from(textSplit.chars, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
        },
        opacity: 0,
        xPercent: 50,
        stagger: {
          each: 0.04,
        },
        duration: 1,
        ease: "elastic.out",
      });
    }
  }, [children]);

  return (
    <div ref={textRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedText;
