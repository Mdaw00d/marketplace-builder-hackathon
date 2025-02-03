"use client";

import { getProducts, Product } from "@/sanity/lib/getProducts";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image component
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        if (!Array.isArray(productsData))
          throw new Error("Invalid data format");
        setProducts(productsData);
      } catch (err) {
        console.warn("⚠️ Failed to fetch products. Check Sanity settings.", err);
        setProducts([]); // Prevents crashing
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="p-6">
      {products.length === 0 ? (
        <p className="text-center text-lg font-semibold text-gray-500">
          No products available.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-y-6 md:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around">
          {products.map((product) => (
            <Link key={product._id} href={`/hproducts/${product._id}`}>
              <div className="border-2 rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out cursor-pointer">
                
                {/* ✅ Use Next.js Image properly */}
                {product.image?.asset?.url ? (
                  <Image
                    className="w-full h-48 object-cover"
                    src={product.image.asset.url}
                    alt={product.title}
                    width={400} // Set appropriate width
                    height={300} // Set appropriate height
                    unoptimized // ✅ Use this if you don't want to configure next.config.js
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}

                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{product.title}</h4>
                  <p className="font-bold text-gray-800">
                    Rs. {product.price}{" "}
                    <span className="line-through font-light text-gray-500">
                      Rs. {product.priceWithoutDiscount}
                    </span>
                  </p>
                  <hr className="my-2 border-gray-200" />
                  <p className="text-green-600 font-semibold">
                    Save Rs. {product.priceWithoutDiscount - product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
