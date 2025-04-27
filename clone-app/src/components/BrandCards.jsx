import React from 'react';

import esso from '../assets/esso.jpg';
import petsmart from '../assets/petsmart.jpg';
import doordash from '../assets/doordash.jpg';
import walmart from '../assets/walmart.png';
import starbucks from '../assets/starbucks.png';
import amazon from '../assets/amazon.jpg';  

const BrandCards = () => {
  const brands = [
    {
      name: "Esso* and Mobil",
      logo: esso, 
      offer: "Buy Now And Get 1% More",
    },
    {
      name: "Petsmart",
      logo: petsmart, 
      offer: "Buy Now And Get 6% More",
    },
    {
      name: "DoorDash",
      logo: doordash, 
      offer: "Buy Now And Get 1.5% More",
    },
    {
      name: "Walmart Canada",
      logo: walmart, 
      offer: "Buy Now And Get 2% More",
    },
    {
      name: "Starbucks",
      logo: starbucks, 
      offer: "Buy Now And Get 5% More",
    },
    {
      name: "Amazon.ca",
      logo: amazon, 
      offer: "Buy Now And Get 1% More",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {brands.map((brand, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center h-100 shadow-sm rounded-3">
              <div className="card-body d-flex flex-column align-items-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="card-img-top mb-3" 
                  style={{ height: '100px', width: '100px', objectFit: 'contain' }} 
                />
                <h5 className="card-title">{brand.name}</h5>
                <p className="card-text">{brand.offer}</p>
                <a href="#" className="btn btn-success mt-auto">Buy Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
