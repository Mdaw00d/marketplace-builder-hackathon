"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../header";
import Footer from "../footer";

type Product = {
  id: number;
  _id?: string; // Some APIs use _id instead of id
  name: string;
  price: number | string;
  imageUrl: string;
  description?: string;
  isNew?: boolean;
  salePrice?: number;
  label?: string;
  labelColor?: string;
  category?: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (response.ok) {
          const data: Product[] = await response.json();
          console.log("Fetched products:", data); // Debugging

          setProducts(data);
          setFilteredProducts(data);

          const uniqueCategories = Array.from(
            new Set(data.map((product) => product.category || "Uncategorized"))
          ).sort() as string[];
          setCategories(uniqueCategories);
        } else {
          setError(`Failed to fetch: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category
        ? products.filter((product) => product.category === category)
        : products
    );
  };

  const addToCart = (product: Product) => {
    const cartProduct = {
      ...product,
      imageUrl: product.imageUrl || "/placeholder.jpg",
      description: product.description || "No description available",
      _id: product._id || product.id.toString(), // Convert id to string if _id is missing
    };
    console.log("Adding to cart:", cartProduct);
    // Your cart handling logic here
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <main>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-[32px] font-semibold text-center mb-8">
          All Products
        </h2>

        <div className="mb-8 flex justify-end">
          <select
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) =>
              handleCategoryChange(e.target.value === "" ? null : e.target.value)
            }
            value={selectedCategory || ""}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/productlisting/${product.id}`} passHref>
              <div className="card group w-full h-full relative cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="img relative">
                  <Image
                    src={product.imageUrl || "/placeholder.jpg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.isNew && (
                      <button className="w-[54px] h-[26px] text-[13px] rounded-md bg-green-500 text-white">
                        New
                      </button>
                    )}
                    {product.label && (
                      <button
                        className={`w-[54px] h-[26px] text-[13px] rounded-md ${product.labelColor} text-white`}
                      >
                        {product.label}
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    {product.name}
                  </h4>
                  <h5 className="mt-2 font-bold">
                    Rs. {product.salePrice || product.price}
                  </h5>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full text-white hover:text-black h-[50px] mt-5 rounded-md relative group overflow-hidden hover:bg-gray-400 flex justify-center items-center bg-[#007580] transition-colors duration-300 cursor-pointer"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
