import React, { useState, useRef } from "react";
import config from "../config/index.json";

const Product = () => {
  const { product } = config;

  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);

  const normalProducts = product.items.filter((item) => !item.isByproduct);

  return (
    <section className="relative bg-white" id="product">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* ======= NORMAL PRODUCTS (OILS) ======= */}
        <h2 className="text-3xl font-bold text-center mb-6">Our Oils</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {normalProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-xl">

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <p className="text-white text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-gray-200 text-sm">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ======= POPUP ======= */}
        {selected && (
          <div
           className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <div
             className="flex flex-col md:flex-row bg-transparent w-full max-w-6xl min-h-screen md:h-[70vh] relative"
              onClick={(e) => e.stopPropagation()}
            >

              {/* LEFT IMAGE */}
              <div className="md:w-1/2 flex justify-center items-center">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="object-contain h-full md:h-[90%] rounded-lg"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="md:w-1/2 w-full">

                <div
                  ref={scrollRef}
              className="text-white p-6 max-h-[60vh] md:max-h-[70vh] overflow-y-auto"
                >
                  <h2 className="text-3xl font-bold mb-3">{selected.name}</h2>
                  <p className="mb-4">{selected.description}</p>

                  {/* ✅ QR CODE (ADDED HERE) */}
                  {selected.qr && (
                    <div className="flex justify-center mb-6">
                      <img
                        src={selected.qr}
                        alt="QR Code"
                        className="w-28 h-28"
                      />
                    </div>
                  )}

                  {/* NUTRITION */}
                 {/* TEST REPORT */}
{selected.nutrition?.testReport && (
  <div className="mb-4">
    <h4 className="font-semibold text-lg mb-2">Test Report</h4>
    <ul className="list-disc list-inside text-sm">
      {Object.entries(selected.nutrition.testReport).map(([key, value], i) => (
        <li key={i}>
          {key}: {value}
        </li>
      ))}
    </ul>
  </div>
)}

                  {/* DETAILS */}
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

                {/* CLOSE BUTTON */}
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

      </div>
    </section>
  );
};

export default Product;