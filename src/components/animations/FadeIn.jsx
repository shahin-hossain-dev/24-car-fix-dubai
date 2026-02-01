"use client";
import fadeInScroll from "@/lib/animations/fadeInScroll";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const FadeIn = ({ children }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".fade-item",
          start: "top 85%",
        },
      })
      .fromTo(
        ".fade-item",
        {
          y: 100,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.3,
        }
      );
  }, []);

  return (
    <>
      <div className="fade-item h-full">{children}</div>
    </>
  );
};

export default FadeIn;
