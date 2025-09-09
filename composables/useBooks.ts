import type { BooksQueryResponse } from '~/types/hasura'
import { GET_BOOKS } from '~/types/hasura'

export const useBooks = () => {
  const { query } = useGraphQL()
  
  const books = ref<BooksQueryResponse['books']>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchBooks = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await query<BooksQueryResponse>(GET_BOOKS)
      books.value = response.books
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch books'
      console.error('Error fetching books:', err)
    } finally {
      loading.value = false
    }
  }

  const refreshBooks = () => {
    return fetchBooks()
  }

  return {
    books: readonly(books),
    loading: readonly(loading),
    error: readonly(error),
    fetchBooks,
    refreshBooks,
  }
}
