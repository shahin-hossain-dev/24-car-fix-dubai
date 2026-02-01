"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const FadeRightIn = ({ children }) => {
  const itemRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 85%",
      },
    });

    tl.fromTo(
      itemRef.current,
      {
        opacity: 0,
        xPercent: 60,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "expo.inOut",
      }
    );
  }, [children]);

  return <div ref={itemRef}>{children}</div>;
};

export default FadeRightIn;
