# Hasura GraphQL Setup

## Quick Setup

### 1. Install Dependencies
```bash
npm install graphql-request graphql
```

### 2. Environment Configuration
Create a `.env` file in your project root:
```bash
cp .env.example .env
```

Update the `.env` file with your Hasura credentials:
```env
HASURA_GRAPHQL_ENDPOINT=https://your-hasura-app.hasura.app/v1/graphql
HASURA_ADMIN_SECRET=your-admin-secret-here
```

### 3. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to `/hasura-test` in your browser
3. The page will attempt to query your Hasura database for books data

## Files Created

- `composables/useGraphQL.ts` - GraphQL client composable
- `composables/useBooks.ts` - Books-specific composable (with lint issues, use the page directly)
- `types/hasura.ts` - TypeScript types and GraphQL queries
- `pages/hasura-test.vue` - Test page to verify Hasura connection
- `.env.example` - Environment variables template

## GraphQL Query
The test page executes this query:
```graphql
query MyQuery {
  books {
    book_cost
    admin_id
  }
}
```

## Usage in Other Components

```vue
<script setup>
import { GET_BOOKS, type BooksQueryResponse } from '~/types/hasura'

const { query } = useGraphQL()
const books = ref([])

const fetchBooks = async () => {
  try {
    const response = await query<BooksQueryResponse>(GET_BOOKS)
    books.value = response.books
  } catch (error) {
    console.error('Error:', error)
  }
}

onMounted(fetchBooks)
</script>
```

## Troubleshooting

1. **Connection Errors**: Check your `HASURA_GRAPHQL_ENDPOINT` in `.env`
2. **Authentication Errors**: Verify your `HASURA_ADMIN_SECRET` is correct
3. **Query Errors**: Ensure the `books` table exists in your Hasura database with `book_cost` and `admin_id` fields

## Next Steps

1. Set up your Hasura Cloud instance or local Hasura server
2. Create the `books` table with the required fields
3. Update the `.env` file with your actual Hasura credentials
4. Test the connection using the `/hasura-test` page
