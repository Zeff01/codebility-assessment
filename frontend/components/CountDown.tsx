"use client";

import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetDate: Date;
};

function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();

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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="mb-5 flex justify-center gap-1.5">
      {/* Days */}
      <div className="w-9 rounded-md bg-primary px-0 pb-1 pt-2 text-center text-white">
        <div className="font-mono text-base font-bold leading-none">
          {format(timeLeft.days)}
        </div>
        <div className="text-[8px] uppercase tracking-[0.1em] opacity-85">
          D
        </div>
      </div>

      <div className="flex items-center text-base font-bold text-accent">:</div>

      {/* Hours */}
      <div className="w-9 rounded-md bg-primary px-0 pb-1 pt-2 text-center text-white">
        <div className="font-mono text-base font-bold leading-none">
          {format(timeLeft.hours)}
        </div>
        <div className="text-[8px] uppercase tracking-[0.1em] opacity-85">
          H
        </div>
      </div>

      <div className="flex items-center text-base font-bold text-accent">:</div>

      {/* Minutes */}
      <div className="w-9 rounded-md bg-primary px-0 pb-1 pt-2 text-center text-white">
        <div className="font-mono text-base font-bold leading-none">
          {format(timeLeft.minutes)}
        </div>
        <div className="text-[8px] uppercase tracking-[0.1em] opacity-85">
          M
        </div>
      </div>

      <div className="flex items-center text-base font-bold text-accent">:</div>

      {/* Seconds */}
      <div className="w-9 rounded-md bg-primary px-0 pb-1 pt-2 text-center text-white">
        <div className="font-mono text-base font-bold leading-none">
          {format(timeLeft.seconds)}
        </div>
        <div className="text-[8px] uppercase tracking-[0.1em] opacity-85">
          S
        </div>
      </div>
    </div>
  );
}

export default Countdown;