import { client } from "./sanityClient";

export interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  image: { asset: { url: string } };
  category: string;
  description?: string;
  inventory?: number;
  tags?: string[];
  badge?: string;
}

// ✅ Function to fetch ALL products
export async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "products"] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    image {
      asset -> {
        url
      }
    },
    category,
    description,
    inventory,
    tags,
    badge
  }`;
  return await client.fetch(query);
}

// ✅ Function to fetch a SINGLE product by ID
export async function getProductById(id: string): Promise<Product | null> {
  const query = `*[_type == "products" && _id == $id][0] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    image {
      asset -> {
        url
      }
    },
    category,
    description,
    inventory,
    tags,
    badge
  }`;
  return await client.fetch(query, { id });
}
