import React from 'react'

const ProductCard = ({item, index, hovered, setHovered}) => {
    return (
        <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`flex flex-col items-center justify-center transition-all duration-750 ease-out overflow-hidden ${
                hovered === index ? 'flex-[3]' : 'flex-[1]'
            }`}
        >
            <a href={item.link}>
            <img
                src={item.image}
                alt={item.title}
                className={`w-48 h-48 object-contain transition-all ${
                    hovered === index ? 'scale-120' : 'scale-100'
                }`}
            />
            {hovered === index && (
                <div className="text-center mt-4 px-2">
                    <h2 className="text-lg font-semibold text-primaryTextColor">{item.title}</h2>
                    <p className="text-sm text-primaryTextColor">{item.description}</p>
                </div>
            )}
            </a>
        </div>
    )
}

export default ProductCard