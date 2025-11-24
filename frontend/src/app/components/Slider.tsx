"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import "./components.css";

type Slide = {
  id: number;
  content: ReactNode;
};

const originalSlides: Slide[] = [
  { id: 1, content: <><h2>Get Cash When You Need It Most</h2><h1>Apply online and receive approval <span> in minutes—no paperwork,</span> no long lines.</h1> <a href="">Apply Now</a></> },
  { id: 2, content: <><h2 className="slide2">Loans Designed to Fit Your Budget</h2><h1  className="slide2">Choose flexible repayment terms <span> that match your income</span>and lifestyle.</h1> <a href="" className="slide2_btn">Start Application</a></> },
];

const slides = [
  { ...originalSlides[originalSlides.length - 1], id: 99 },
  ...originalSlides,
  { ...originalSlides[0], id: 100 },
];

export default function Slider() {
  const [current, setCurrent] = useState(1); // start at first real slide
  const [transition, setTransition] = useState(true);

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fix loop jump
  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 300);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length - 2);
      }, 300);
    }

    const timer = setTimeout(() => setTransition(true), 350);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="slider">
      <div className="slider_dots">
        <button className="prev" onClick={prevSlide}></button>
        <button className="next" onClick={nextSlide}></button>
      </div>

      <div
        className="slideContainer"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition ? "0.4s ease" : "none",
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slideContent">
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
}
