import React, { useState } from 'react';
import ProductCard from './ProductCard';

const items = [
    { title: 'LA Espresso', link: "/", description: 'Smooth and classic.', image: 'https://www.coffeebean.com/cdn/shop/files/LA-Line_PackVisuals_Front_a190a075-dd8d-425a-a699-42e2497213c1.png?v=1741166408&width=360' },
    { title: 'Bali Blue Moon', link: "/", description: 'Rich and refreshing.', image: 'https://www.coffeebean.com/cdn/shop/files/E-Comm_CoffeeBagVisuals_16oz_131124-07.png?v=1731976738&width=696' },
    { title: 'Ethiopia', link: "/", description: 'Tropical flavors.', image: 'https://www.coffeebean.com/cdn/shop/files/E-Comm_CoffeeBagVisuals_16oz_131124-05.png?v=1731994063&width=696' },
    { title: 'Costa Rica', link: "/", description: 'Bright and fruity.', image: 'https://www.coffeebean.com/cdn/shop/files/E-Comm_CoffeeBagVisuals_16oz_131124-03.png?v=1731977624&width=696' },
    { title: 'Sumatra', link: "/", description: 'Smooth and Smoky.', image: 'https://www.coffeebean.com/cdn/shop/files/OrganicSumatra-11.png?v=1731998902&width=696' },
];

const ProductContainer = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="flex w-full h-80 overflow-hidden rounded-lg">
        {items.map((item, index) => (
            <ProductCard item={item} index={index} hovered={hovered} setHovered={setHovered} />
        ))}
        </div>
    );
}

export default ProductContainer;
