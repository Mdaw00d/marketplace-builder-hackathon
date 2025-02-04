export type Product = {
  [x: string]: unknown;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew?: boolean;
  salePrice?: number;
  quantity?: number; // Optional for cart functionality
};
