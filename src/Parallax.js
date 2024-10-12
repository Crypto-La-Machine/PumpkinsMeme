import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Parallax() {
  const container = useRef();

  useGSAP(() => {
    gsap.from("#leftside", {
      scrollTrigger: {
        scrub: true,
      },
      x: -100,
    });

    gsap.from("#rightside", {
      scrollTrigger: {
        scrub: true,
      },
      x: 100,
    });

    gsap.from("#leftpumpkin", {
      scrollTrigger: {
        scrub: true,
      },
      x: -150,
    });

    gsap.from("#rightpumpkin", {
      scrollTrigger: {
        scrub: true,
      },
      x: 150,
    });
  }, { scope: container });

  return (
    <section className="parallax" ref={container}>
      <h2 id="title">Happy Halloween</h2>
      <h4 id="sub-title">You Freaks</h4>
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9648a7a2-03fe-4b48-b7ab-195ec34ac6a6"
        id="leftside"
        alt="halloween"
      />
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5c125b01-3bda-46ed-87bf-f64a9cc39d9b"
        id="rightside"
        alt="halloween"
      />
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/8102d1ed-0b60-40b6-a38a-75600c1c9c75"
        id="moon"
        alt="halloween"
      />
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5c7a5d00-501e-4f2b-b31a-0d0e2dac47e5"
        id="bottom"
        alt="halloween"
      />
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8c09600-d3c2-4eab-a3e1-4f9a75d14331"
        id="leftpumpkin"
        alt="halloween"
      />
      <img
        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/dc895daa-7d0c-4b65-946c-36faecc1d78e"
        id="rightpumpkin"
        alt="halloween"
      />
    </section>
  );
}

export default Parallax;
