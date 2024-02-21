import "../styles/Register.css";
import { useEffect, useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import ScrollReveal from "scrollreveal";

function Register() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20 });

  useEffect(() => {
    const scrollReveal = ScrollReveal();

    scrollReveal.reveal(".registerIMG", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div ref={scrollRef}>
      <div className="register-container">
        <img src="/register.png" className="registerIMG" />
        <div className="buttonContainer">
          <a href="https://star-hacks-2024.devpost.com/" target="_blank">
            <button className="registerButton">Register</button>
          </a>
          <a href="https://discord.gg/h62XvBxBq7" target="_blank">
            <button className="discordButton">Discord</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
