import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "J. UROOSA NOIR EAU DE PERFUME 50ML",
    price: 2599,
    imageUrl: "/img4.jpg",
    isNew: true,
    category: "Perfumes", // Added category field
  },
  {
    id: 2,
    name: "Enigma Bois Noir EDP for Men - 100 ML",
    price: 10000,
    imageUrl: "/img2.jpg",
    isNew: false,
    salePrice: 30,
    category: "Perfumes", // Added category field
  },
  {
    id: 3,
    name: "Junaid Jamshed J. Mika Noir Perfume For Men 50ml",
    price: 3100,
    imageUrl: "/img3.jpg",
    isNew: false,
    category: "Perfumes", // Added category field
  },
  {
    id: 4,
    name: "Riiffs Cafe Noir For Men Perfume 100ml",
    price: 4610,
    imageUrl: "/img5.jpg",
    isNew: false,
    category: "Perfumes", // Added category field
  },
  {
    id: 5,
    imageUrl: "/img1.jpg",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "PERFUME 100ML NOIR Seat",
    price: "4499",
    category: "Perfumes", // Added category field
  },
  {
    id: 6,
    imageUrl: "/pant.jpg",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Men's Pant",
    price: "1499",
    category: "Garments", // Added category field
  },
  {
    id: 7,
    imageUrl: "/tube.jpg",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Women's Tube Top",
    price: "999",
    category: "Accessories", // Added category field
  },
  {
    id: 8,
    imageUrl: "/shirt.jpg",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Men's Shirt",
    price: "1999",
    category: "Garments", // Added category field
  },
  {
    id: 9,
    imageUrl: "/necklace.jpg",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Gold Necklace",
    price: "4499",
    category: "Accessories", // Added category field
  },
];

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";

  // Filter products based on the query
  const filteredProducts = query
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    : products;

  return NextResponse.json(filteredProducts);
};