// Import defineType and defineField from sanity
import { defineType, defineField } from 'sanity';

// Define and export the product schema
export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),
    defineField({
      name: "category", // Add this field
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Desk Chair", value: "Desk Chair" },
          { title: "Wooden Chair", value: "Wooden Chair" },
          { title: "Wing Chair", value: "Wing Chair" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "text",
    }),
    defineField({
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    }),
  ],
});