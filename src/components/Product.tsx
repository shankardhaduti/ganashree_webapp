import { useState, useRef } from "react";
import config from "../config/index.json";
import QRCode from "react-qr-code";

type ProductType = {
  name: string;
  description: string;
  img: string;
  code?: string;
  price?: number;
  nutrition?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    testReport?: Record<string, string | number>;
  };
  details?: {
    process?: string;
    uses?: string[];
    benefits?: string[];
  };
  qr?: string;
  isByproduct?: boolean;
};

const Product = () => {
  const { product } = config;

  const [selected, setSelected] = useState<ProductType | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const normalProducts = product.items.filter((item: ProductType) => !item.isByproduct);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* PRODUCTS HEADER */}
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {normalProducts.map((item: ProductType, index: number) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="cursor-pointer rounded-lg shadow hover:scale-105 transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.name}
                className="h-64 w-full object-cover object-top transition-transform duration-500 hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="bg-black text-white p-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* POPUP */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center"
            onClick={() => setSelected(null)}
          >
            <div
              className="flex max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="w-1/2 flex justify-center items-center">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="h-[300px] object-contain rounded-lg"
                />
              </div>

              {/* DETAILS */}
              <div
                className="w-1/2 text-white p-6 overflow-y-auto h-[70vh]"
                ref={scrollRef}
              >
                <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                <p className="mb-3">{selected.description}</p>

                {/* QR CODE */}
                {selected.code && (
                  <div className="bg-white p-3 inline-block rounded mb-5">
                    <QRCode
                      value={`Name: ${selected.name}, Code: ${selected.code}, Price: ${selected.price || 0}`}
                      size={120}
                    />
                  </div>
                )}

                {/* DETAILS */}
                {selected.details && (
                  <div className="mb-4">
                    {selected.details.process && (
                      <p><b>Process:</b> {selected.details.process}</p>
                    )}
                    {selected.details.uses && (
                      <p><b>Uses:</b> {selected.details.uses.join(", ")}</p>
                    )}
                    {selected.details.benefits && (
                      <p><b>Benefits:</b> {selected.details.benefits.join(", ")}</p>
                    )}
                  </div>
                )}

                {/* NUTRITION */}
                {selected.nutrition && (
                  <p>
                    <b>Nutrition:</b> {selected.nutrition.calories} cal, {selected.nutrition.protein} protein, {selected.nutrition.carbs} carbs, {selected.nutrition.fat} fat
                  </p>
                )}

                {/* TEST REPORT */}
                {selected.nutrition?.testReport && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-lg mb-2">Test Report</h4>
                    <ul className="list-disc list-inside text-sm">
                      {Object.entries(selected.nutrition.testReport).map(([key, value], i) => (
                        <li key={i}>{key}: {value}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              >
                ✖
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Product;