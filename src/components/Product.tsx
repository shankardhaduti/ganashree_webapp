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

  const [selected, setSelected] = useState<ProductType | null>(null);
  // const scrollRef = useRef(null);

  const normalProducts = product.items.filter((item) => !item.isByproduct);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

        {/* PRODUCT GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {normalProducts.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="cursor-pointer rounded-lg shadow hover:scale-105 transition"
            >
              <img src={item.img} className="h-64 w-full object-cover" />
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
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Product;