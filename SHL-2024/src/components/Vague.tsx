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
                <h1 className="SHL">Star Hack Alliance</h1>
                <p className="text">
					is a strictly not-for-profit organization <br/>passionately committed to advancing education<br/> and fostering the competitive growth of students.<br /><br />

					Our efforts are concentrated on <br/>nurturing exceptional software development<br/> skills and orchestrating engaging events, <br/>all aimed at paving the way for a brighter future.<br /><br />

					At Star Hack Alliance, we firmly believe that<br/> students hold the key to shaping tomorrow's world. <br/>Equipping them with the necessary tools and <br/>opportunities is fundamental to their success.
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
