"use client";
import { Icon } from "@iconify/react";
import { Button } from "antd";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Icon icon={"icomoon-free:facebook"} className="text-3xl" />
      <h1 className="text-5xl" ref={counterRef}>
        Counter: {count}
      </h1>
      <br />
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <br />
      <br />
      <Button type="primary" onClick={() => setCount(count - 1)}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
