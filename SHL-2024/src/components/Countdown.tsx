import { useState, useEffect, useRef } from "react";
import "../styles/Countdown.css";
import ScrollToTop from "react-scroll-to-top";
import useScrollSnap from "react-use-scroll-snap";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20 });

  const calculateTimeLeft = (): TimeLeft => {
    const currentDate = new Date();
    const targetDate = new Date("March 2, 2024 00:00:00");
    const difference = targetDate.getTime() - currentDate.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      const oneDay = 1000 * 60 * 60 * 24;
      const oneHour = 1000 * 60 * 60;
      const oneMinute = 1000 * 60;

      timeLeft = {
        days: Math.floor(difference / oneDay),
        hours: Math.floor((difference % oneDay) / oneHour),
        minutes: Math.floor((difference % oneHour) / oneMinute),
        seconds: Math.floor((difference % oneMinute) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div ref={scrollRef}>
      <div className="countdown-container">
        <div className="content">
          <p className="date">March 2nd, 2024</p>
          {days >= 0 ? (
            <h1 className="countdown">
              {days}:{formatTime(hours)}:{formatTime(minutes)}:
              {formatTime(seconds)}
            </h1>
          ) : (
            <h1 className="countdown">Countdown ended!</h1>
          )}
          <p className="soon">More Details Soon</p>
          <ScrollToTop smooth />
        </div>
        <div className="copyright">
          Star Hack Alliance ©2023, all rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Countdown;
