'use client'
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        {timeLeft.days > 0 ||
        timeLeft.hours > 0 ||
        timeLeft.minutes > 0 ||
        timeLeft.seconds > 0 ? (
          <>
            {timeLeft.days > 0 && <span>{timeLeft.days} days </span>}
            {timeLeft.hours > 0 && <span>{timeLeft.hours} hours </span>}
            {timeLeft.minutes > 0 && <span>{timeLeft.minutes} minutes </span>}
            {timeLeft.seconds >= 0 && <span>{timeLeft.seconds} seconds </span>}
          </>
        ) : (
          <span>Time's up!</span>
        )}
      </div>
    </div>
  );
};

export default Countdown;
