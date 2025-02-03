import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export default function CategoryComponent() {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        
        // Log the API response for debugging
        console.log("API Response:", data);

        setProducts(data);
        setFilteredProducts(data);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((product) => product.category))
        ).sort() as string[];

        // Log the extracted categories for debugging
        console.log("Extracted Categories:", uniqueCategories);

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);

    // Log the selected category and filtered products for debugging
    console.log("Selected Category:", category);

    const filtered = category
      ? products.filter((product) => product.category === category)
      : products;

    console.log("Filtered Products:", filtered);

    setFilteredProducts(filtered);
  };

  const formatPrice = (price: number) => {
    return `Rs${price.toFixed(2)}`;
  };

  return (
    <div className="p-6">
      <div className="category-filter mb-8 flex flex-col sm:flex-row items-center gap-4">
        <h3 className="font-bold text-lg">Filter by Category</h3>
        <select
          className="border border-gray-300 rounded-md p-2"
          onChange={(e) => handleCategoryChange(e.target.value || null)}
          value={selectedCategory || ""}
          aria-label="Select category"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-600">Loading products...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-red-600">{error}</p>
        </div>
      ) : (
        <div className="products-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                  <p className="text-gray-700">
                    {formatPrice(Number(product.price))}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No products found in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}