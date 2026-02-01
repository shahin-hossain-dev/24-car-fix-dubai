import gsap from "gsap";

const fadeInScroll = (targets) => {
  return gsap.timeline({
    scrollTrigger: {
      tar,
    },
  });

  gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      stagger: 0.2,
      y: 0,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: targets[0],
        start: "top 85%",
      },
    }
  );
};

export default fadeInScroll;
