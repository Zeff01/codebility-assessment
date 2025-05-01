import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FaStar } from 'react-icons/fa';

interface TestimonialProps {
  text: string;
  stars: number;
  source: 'google' | 'apple';
}

const Testimonial = ({ text, stars, source }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <p className="text-gray-700 mb-4 flex-1">{text}</p>
        <div className="flex flex-col space-y-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < stars ? 'text-yellow-400' : 'text-gray-300'}
                size={16}
              />
            ))}
          </div>
          <div className="flex items-center">
            {source === 'google' ? (
              <div className="flex items-center">
                <img
                  src="/images/google-logo.png"
                  alt="Google Play"
                  className="h-6"
                />
              </div>
            ) : (
              <div className="flex items-center">
                <img
                  src="/images/apple-logo.png"
                  alt="Apple Store"
                  className="h-6"
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
