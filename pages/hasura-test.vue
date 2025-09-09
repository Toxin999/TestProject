<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon start>mdi-book</v-icon>
            Books from Hasura
            <v-spacer />
            <v-btn 
              variant="outlined"
              color="primary" 
              :loading="loading"
              @click="refreshBooks"
            >
              <v-icon start>mdi-refresh</v-icon>
              Refresh
            </v-btn>
          </v-card-title>
          
          <v-card-text>
            <!-- Loading State -->
            <v-progress-linear 
              v-if="loading" 
              indeterminate 
              color="primary"
            />
            
            <!-- Error State -->
            <v-alert 
              v-if="error" 
              type="error" 
              dismissible
              @click:close="clearError"
            >
              {{ error }}
            </v-alert>
            
            <!-- Books List -->
            <div v-if="!loading && !error && books.length > 0" class="mt-4">
              <v-card
                v-for="(book, index) in books"
                :key="index"
                class="mb-3"
                elevation="2"
              >
                <v-card-text>
                  <div class="d-flex justify-space-between align-center">
                    <div>
                      <h3>Book Cost: ${{ book.book_cost }}</h3>
                      <p class="text-medium-emphasis">Admin ID: {{ book.admin_id }}</p>
                    </div>
                    <v-chip color="primary">
                      Cost: ${{ book.book_cost }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </div>
            
            <!-- No Data -->
            <v-alert 
              v-if="!loading && !error && books.length === 0"
              type="info" 
              class="mt-4"
            >
              No books found. Make sure your Hasura endpoint is configured correctly.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <!-- Configuration Info -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-icon start>mdi-cog</v-icon>
            Hasura Configuration
          </v-card-title>
          <v-card-text>
            <v-alert type="info" class="mb-4">
              <strong>Endpoint:</strong> {{ config.public.hasuraUrl }}<br>
              <strong>Admin Secret:</strong> {{ hasAdminSecret ? '***configured***' : 'Not configured' }}
            </v-alert>
            
            <h4>GraphQL Query:</h4>
            <pre class="query-code mt-2">{{ queryString }}</pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// GraphQL Query
const queryString = `
query MyQuery {
  books {
    book_cost
    admin_id
  }
}
`

// Runtime config
const config = useRuntimeConfig()

// Reactive data
const books = ref([])
const loading = ref(false)
const error = ref(null)

// Computed
const hasAdminSecret = computed(() => !!config.public.hasuraAdminSecret)

// Functions
const clearError = () => {
  error.value = null
}

const fetchBooks = async () => {
  loading.value = true
  error.value = null
  
  try {
    // Use the GraphQL composable
    const { query } = useGraphQL()
    const response = await query(queryString)
    books.value = response.books || []
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

// Fetch data on mount
onMounted(() => {
  fetchBooks()
})
</script>

<style scoped>
.query-code {
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
}
</style>
