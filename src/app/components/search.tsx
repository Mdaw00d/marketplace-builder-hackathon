"use client"

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number;
  label?: string;
  labelColor?: string;
  category: string;
};

const Search = () => {
  const [query, setQuery] = useState(""); // User's search input
  const [results, setResults] = useState<Product[]>([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]); // Clear results when query is empty
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/products");
        const data: Product[] = await response.json();
        console.log("Fetched products:", data);

        // Filter products based on the query
        const filteredResults = data.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchResults();
    }, 300); // Debounce API calls by 300ms

    return () => clearTimeout(delayDebounce); // Cleanup debounce
  }, [query]);

  return (
    <div className="relative hidden md:flex items-center p-2 px-4 gap-x-5 text-gray-700 text-sm focus:outline-none border-none">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="border rounded-full focus:outline-none md:w-72 p-3 bg-gray-100"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <img src="/search.jpg" className="w-7 h-7" alt="Search icon" />
      {loading && <div className="absolute top-full mt-2">Loading...</div>}
      {results.length > 0 && (
        <ul className="absolute top-full mt-2 bg-white border shadow-lg z-50 p-2 px-2 w-52">
          {results.map((product) => (
            <Link key={product.id} href={`/productlisting/${product.id}`} passHref>
              <li className="p-3 hover:bg-gray-100 cursor-pointer z-10 text-[14px]">
                {product.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;