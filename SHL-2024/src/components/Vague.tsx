import "../styles/Vague.css";
import { useEffect, useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import ScrollReveal from "scrollreveal";
import Steps from "./Steps";

function Vague() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20 });

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    scrollReveal.reveal(".color-container", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div ref={scrollRef}>
      <div className="vague-container" ref={scrollRef}>
        <div className="color-container">
          <div className="text-overlay">
            <div className="container">
              <div className="text-container">
                <h1 className="SHL">Star Hack League</h1>
                <p className="text">
                  is dedicated to advancing <br />
                  education and fostering <br />
                  competitive growth among <br />
                  students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Steps />
    </div>
  );
}

export default Vague;
