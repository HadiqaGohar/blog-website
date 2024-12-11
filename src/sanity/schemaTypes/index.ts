import { type SchemaTypeDefinition } from 'sanity'

import authorSchema from './author';
import blogPostSchema from './blogPost';
// import comment from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPostSchema, authorSchema , ],
}
