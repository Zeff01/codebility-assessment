import React, { useState, useEffect } from 'react';

const images = [
  'https://www.coffeebean.com/cdn/shop/files/E-Comm_CoffeeBagVisuals_110z_Non-Organic_131124-26.png?v=1742426765&width=696',
  'https://www.coffeebean.com/cdn/shop/products/French-Vanilla-coffee-12oz-front.jpg?v=1619611643&width=696',
  'https://www.coffeebean.com/cdn/shop/files/OrganicGuatemala-01.png?v=1731997642&width=696',
  'https://www.coffeebean.com/cdn/shop/files/E-Comm_CoffeeBagVisuals_110z_Non-Organic_131124-24.png?v=1742426839&width=696'
];

const ProductCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
  
    const handleDotClick = (index) => {
        setCurrent(index);
    };
  
    return (
        <div className="relative w-1/2 h-full overflow-hidden">
            <div className="w-full h-full">
            {images.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={`absolute border w-full h-full object-contain transition-opacity duration-1000 ${current === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            </div>
    
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
            {images.map((_, index) => (
                <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${current === index ? 'bg-blue-900' : 'bg-gray-300'}`}
                />
            ))}
            </div>
        </div>
    )  
}

export default ProductCarousel