import "../styles/Sponsors.css";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";

function Sponsors() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20 });
  return (
    <div ref={scrollRef}>
      <div className="sponsors-container">
        <img src="/sponsors.png" className="sponsors"></img>
      </div>
    </div>
  );
}

export default Sponsors;
