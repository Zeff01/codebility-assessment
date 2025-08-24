import React from 'react';
import SlideVisuals from './SlideVisuals';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  subtitle2: string;
  buttonText: string;
  bgColor: string;
  image: string;
}

interface SlideContentProps {
  slide: Slide;
}

export default function SlideContent({ slide }: SlideContentProps) {
  return (
    <div className={`w-full h-full flex-shrink-0 ${slide.bgColor}`}>
      <div className="flex items-center justify-between h-full px-8 lg:px-16">
        {/* Text Content */}
        <div className="flex-1 text-left">
          <p className="text-white/90 text-sm lg:text-base font-medium mb-2 tracking-wide">
            {slide.title}
          </p>
          <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight mb-2">
            {slide.subtitle}
          </h2>
          <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight mb-8">
            {slide.subtitle2}
          </h2>
          <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 shadow-lg backdrop-blur-sm">
            {slide.buttonText}
          </button>
        </div>

        <SlideVisuals image={slide.image} />
      </div>
    </div>
  );
}