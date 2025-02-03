
import { type SchemaTypeDefinition } from 'sanity'
import { categorySchema } from './category'
import { productSchema } from './product'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ productSchema, categorySchema],
}
