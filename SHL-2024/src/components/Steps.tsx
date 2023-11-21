import "../styles/Steps.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Steps() {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div className="StepsContainer">
      <img src="/body-banner-things.png" className="bodyIMG" />
      <div className="textOverlay">
        <h1 className="main" data-aos="fade-up">
          1. Register
        </h1>
        <p className="secondary" data-aos="fade-down">
          Discord, Star Hack League, Devpost
        </p>
      </div>
      <div className="textOverlay2">
        <h1 className="main" data-aos="fade-up">
          2. Hack
        </h1>
        <p className="secondary" data-aos="fade-down">
          Opening Ceremony: March 2nd, 2024
        </p>
      </div>
      <div className="textOverlay3">
        <h1 className="main" data-aos="fade-up" data-aos-offset="0">
          3. Submit
        </h1>
        <p className="secondary" data-aos="fade-down" data-aos-offset="-120">
          Submissions End: March 3rd 2024
        </p>
      </div>
    </div>
  );
}

export default Steps;
