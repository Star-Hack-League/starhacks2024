import "../styles/Integration.css";
import { useEffect, useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import ScrollReveal from "scrollreveal";
import Countdown from "./Countdown";

function Integration() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20 });

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    scrollReveal.reveal(".color-container-integration", {
      origin: "top",
      distance: "20px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <>
      <div ref={scrollRef}>
        <div className="integration-container">
          <div className="color-container-integration">
            <img src="/image.png" alt="Centered Image" />
          </div>
        </div>
        <Countdown />
      </div>
    </>
  );
}

export default Integration;
