import React, { useState, useRef } from "react";
import config from "../config/index.json";

const Product = () => {
  const { product } = config;

  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null); // Scroll inside popup

  const normalProducts = product.items.filter((item) => !item.isByproduct);
  const wasteProducts = product.items.filter((item) => item.isByproduct);

  return (
    <section className="relative bg-white" id="product">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* ======= NORMAL PRODUCTS (OILS) ======= */}
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {normalProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-64 w-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-4">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ======= WASTE PRODUCTS ======= */}
        <h2 className="text-3xl font-bold text-center mb-6">Byproducts (Waste)</h2>
        <p className="text-center text-gray-700 mb-8">
          Our factory waste is naturally reused for farming and animal feeding.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {wasteProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-64 w-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-green-800 bg-opacity-70 text-white p-4">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ======= PROFESSIONAL POPUP ======= */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="flex flex-col md:flex-row bg-transparent w-full max-w-6xl h-auto md:h-[70vh] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE LEFT */}
              <div className="md:w-1/2 flex justify-center items-center">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="object-contain h-full md:h-[90%] rounded-lg"
                />
              </div>

              {/* INFO RIGHT */}
              <div className="md:w-1/2 relative">
                {/* Scrollable content */}
                <div
                  ref={scrollRef}
                  className="text-white p-6 h-[70vh] overflow-y-auto pr-12"
                >
                  <h2 className="text-3xl font-bold mb-3">{selected.name}</h2>
                  <p className="mb-4">{selected.description}</p>

                  {selected.nutrition && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-lg mb-2">Nutrition</h4>
                      <ul className="list-disc list-inside">
                        <li>Calories: {selected.nutrition.calories}</li>
                        <li>Protein: {selected.nutrition.protein}</li>
                        <li>Carbs: {selected.nutrition.carbs}</li>
                        <li>Fat: {selected.nutrition.fat}</li>
                      </ul>
                    </div>
                  )}

                  {selected.details && (
                    <div>
                      {selected.details.process && (
                        <p className="mb-2">
                          <span className="font-semibold">Process:</span> {selected.details.process}
                        </p>
                      )}
                      {selected.details.uses && (
                        <p className="mb-2">
                          <span className="font-semibold">Uses:</span> {selected.details.uses.join(", ")}
                        </p>
                      )}
                      {selected.details.benefits && (
                        <p>
                          <span className="font-semibold">Benefits:</span> {selected.details.benefits.join(", ")}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-white text-3xl font-bold"
                >
                  ✖
                </button>
                
              </div>
            </div>
          </div>
        )}

        {/* ======= PAGE SCROLL-TO-TOP BUTTON ======= */}
        
      </div>
    </section>
  );
};

export default Product;