export type Product = {
    [x: string]: any;
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    isNew?: boolean;
    salePrice?: number;
    quantity?: number; // Optional for cart functionality
  };