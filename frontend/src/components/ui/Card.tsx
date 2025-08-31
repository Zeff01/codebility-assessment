import { CardProps } from "@/types";
import Image from "next/image";
import { Star, Clock, User, CheckCircle } from "lucide-react";

const Card = ({ item, variant = "default" }: CardProps) => {
  if (variant === "minimal") {
    return (
      <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.badge && (
            <div className="absolute top-3 left-3 bg-moola-accent text-white text-xs font-bold px-2 py-1 rounded-md shadow">
              {item.badge}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 text-moola-text">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm">{item.category}</p>
        </div>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-moola-bg">
        <div className="relative h-56 w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.badge && (
            <div className="absolute top-3 left-3 bg-moola-accent text-white text-xs font-bold px-2 py-1 rounded-md shadow">
              {item.badge}
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button className="bg-moola-accent text-white font-semibold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow hover:bg-blue-500">
              View Details
            </button>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm text-moola-accent font-medium">
              {item.category}
            </span>
            {item.rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm ml-1">{item.rating}</span>
              </div>
            )}
          </div>
          <h3 className="font-bold text-xl mb-2 text-moola-text">
            {item.title}
          </h3>
          <p className="text-gray-600 mb-4">{item.description}</p>

          {item.instructor && (
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <User className="w-4 h-4 mr-1" />
              <span>{item.instructor}</span>
            </div>
          )}

          {item.duration && (
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>{item.duration}</span>
            </div>
          )}

          {item.benefits && (
            <ul className="mb-4">
              {item.benefits.slice(0, 2).map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-600 mb-1"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-between items-center">
            <div>
              {item.originalPrice && (
                <span className="text-sm text-gray-500 line-through mr-2">
                  ${item.originalPrice}
                </span>
              )}
              <span className="font-bold text-lg text-moola-text">
                ${item.price}
              </span>
            </div>
            <button className="bg-moola-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-40 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {item.badge && (
          <div className="absolute top-2 left-2 bg-moola-accent text-white text-xs font-bold px-2 py-1 rounded shadow">
            {item.badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-moola-text">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>

        {item.rating && (
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1">{item.rating}</span>
          </div>
        )}

        <div className="flex justify-between items-center mt-3">
          <div>
            {item.originalPrice && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${item.originalPrice}
              </span>
            )}
            <span className="font-bold text-moola-text">${item.price}</span>
          </div>
          <button className="bg-moola-accent text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors shadow">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
