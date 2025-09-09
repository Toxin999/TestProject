// Types for Hasura GraphQL responses
export interface Book {
  book_cost: number
  admin_id: string
}

export interface BooksQueryResponse {
  books: Book[]
}

// GraphQL queries
export const GET_BOOKS = `
  query MyQuery {
    books {
      book_cost
      admin_id
    }
  }
`
