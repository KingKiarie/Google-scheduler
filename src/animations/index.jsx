import gsap from "gsap";

const tl = gsap.timeline();

export const preloaderAnimation = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "90vh" },
    })
    .to(".text-container", {
      duration: 0.05,
      opacity: 1,
      ease: "power3.easeOut",
    })
    .from(".text-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "power3.easeOut",
    })
    .to(".text-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "power3.easeOut",
    })
    .to("landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};
