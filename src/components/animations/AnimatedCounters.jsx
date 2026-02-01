import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const AnimatedCounters = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);
  const counterRef = useRef({ value: from });

  useEffect(() => {
    gsap.to(counterRef.current, {
      value: to,
      duration,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#counters",
        start: "top 85%",
      },

      onUpdate: () => setCount(Math.ceil(counterRef.current.value)),
    });
  }, [from, to, duration]);

  return <span>{count}</span>;
};

export default AnimatedCounters;
