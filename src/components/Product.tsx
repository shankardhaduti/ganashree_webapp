import  { useState} from "react";
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
  };
  details?: {
    process?: string;
    uses?: string[];
    benefits?: string[];
  };
  isByproduct?: boolean;
};

const Product = () => {
  const { product } = config;

<<<<<<< HEAD
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
=======
  const [selected, setSelected] = useState<ProductType | null>(null);
  // const scrollRef = useRef(null);
>>>>>>> 3093ab84801430d7c483c22dd007efa3c0756ded

  const normalProducts = product.items.filter((item) => !item.isByproduct);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

<<<<<<< HEAD
        {/* ======= NORMAL PRODUCTS (OILS) ======= */}
        <h2 className="text-3xl font-bold text-center mb-6">Our Oils</h2>

        <div className="grid md:grid-cols-3 gap-8">
=======
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-3 gap-6">
>>>>>>> 3093ab84801430d7c483c22dd007efa3c0756ded
          {normalProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
<<<<<<< HEAD
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

=======
              className="cursor-pointer rounded-lg shadow hover:scale-105 transition"
            >
              <img src={item.img} className="h-64 w-full object-cover" />
              <div className="bg-black text-white p-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">{item.description}</p>
>>>>>>> 3093ab84801430d7c483c22dd007efa3c0756ded
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
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

=======
        {/* POPUP */}
        {selected && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center"
            onClick={() => setSelected(null)}
          >
            <div
              className="flex max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="w-1/2 flex justify-center items-center">
                <img src={selected.img} className="h-[300px]" />
              </div>

              {/* DETAILS */}
              <div className="w-1/2 text-white p-6 overflow-y-auto h-[70vh]">

                <h2 className="text-2xl font-bold mb-2">
                  {selected.name}
                </h2>

                <p className="mb-3">{selected.description}</p>

                {/* MRP */}
                {/* <p className="text-lg font-semibold mb-4">
                  MRP: ₹{selected.price}
                </p> */}

                {/* QR CODE */}
                <div className="bg-white p-3 inline-block rounded mb-5">
                  <QRCode
                    value={`"Name": "${selected.code}", "Price": ${selected.price}, "Description": "${selected.description}"`}
                    size={120}
                  />
                </div>

                {/* DETAILS */}
                {selected.details && (
                  <div>
                    <p><b>Process:</b> {selected.details.process}</p>
                    <p><b>Uses:</b> {selected.details.uses?.join(", ")}</p>
                    <p><b>Benefits:</b> {selected.details.benefits?.join(", ")}</p>
                    <p><b>Nutrition:</b> {selected.nutrition?.calories} calories, {selected.nutrition?.protein} protein, {selected.nutrition?.carbs} carbs, {selected.nutrition?.fat} fat</p>

                  </div>
                )}
<button
  onClick={() => setSelected(null)}
  className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
>
  ✖
</button>
>>>>>>> 3093ab84801430d7c483c22dd007efa3c0756ded
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Product;