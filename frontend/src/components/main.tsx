"use client"

import Card from "./Card";
import Preview from "./Preview";
import { useState, useEffect } from 'react';

export default function Main() {

  var [productData, setProductData ] = useState([]);
  var [filteredData, setFilteredProductData] = useState([]);
  var [previewProductData, setPreviewProductData] = useState(null);

  var searchItems = function(value){
    if(productData.length == 0) return;

    if(value.trim() == ""){
      setFilteredProductData(productData);
      return;
    }

    const results = productData.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProductData(results);
  }

  useEffect(() => {

    (async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        if(data){
          setProductData(data);
          setFilteredProductData(data);
        }
    })()

  }, []);

  return (
    <div className="bg-white">
      <input onChange={ (e) => searchItems(e.target.value) } type="text" placeholder="Search Product" className="z-[90] max-w-[90%] fixed top-[20px] left-[20px] rounded-[20px] p-[10px] w-[300px] bg-gray-800 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        { previewProductData && 
          (
            <Preview 
              productName = { previewProductData.title }
              description = { previewProductData.description }
              price = { previewProductData.price }
              imageURL = { previewProductData.image }
              ratings = { previewProductData.rating }
              onClick = {() => { setPreviewProductData(null) }}
            />
          ) 
        }

        { filteredData.length == 0 && <div className="text-[black] text-[30px]">No Product Avaible</div> }

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

          {
            filteredData.map( data => 
              (<Card 
                key={data.id}
                productName = {data.title}
                price = {data.price}
                imageURL = {data.image}
                onClick = {() => { setPreviewProductData(data) }}
              />)
            )
          }

        </div>
      </div>
    </div>

  );
}