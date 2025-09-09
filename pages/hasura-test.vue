<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <v-icon start>mdi-view-list</v-icon>
            List for View
            <v-spacer />
            <v-btn 
              variant="outlined"
              color="success" 
              class="mr-2"
              @click="openAddDialog"
            >
              <v-icon start>mdi-plus</v-icon>
              Add User
            </v-btn>
            <v-btn 
              variant="outlined"
              color="primary" 
              :loading="loading"
              @click="refreshUsers"
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
            
            <!-- Users List -->
            <div v-if="!loading && !error && users.length > 0" class="mt-4">
              <v-card
                v-for="(user, index) in users"
                :key="index"
                class="mb-3"
                elevation="2"
              >
                <v-card-text>
                  <div class="d-flex justify-space-between align-center">
                    <div>
                      <h3>{{ user.user_name }} (ID: {{ user.user_id }})</h3>
                      <p class="text-medium-emphasis">Email: {{ user.user_email }}</p>
                      <p class="text-medium-emphasis">Phone: {{ user.user_tel }}</p>
                      <p class="text-medium-emphasis">Position: {{ user.user_position }} - {{ user.user_department }}</p>
                    </div>
                    <div class="d-flex align-center">
                      <v-chip :color="user.user_status === 1 ? 'success' : 'warning'" class="mr-2">
                        {{ user.user_status === 1 ? 'Active' : 'Inactive' }}
                      </v-chip>
                      <v-btn
                        icon="mdi-pencil"
                        size="small"
                        color="warning"
                        variant="outlined"
                        @click="openEditDialog(user, index)"
                      />
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </div>
            
            <!-- No Data -->
            <v-alert 
              v-if="!loading && !error && users.length === 0"
              type="info" 
              class="mt-4"
            >
              No users found. Make sure your Hasura endpoint is configured correctly.
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
    
    <!-- Add/Edit Dialog -->
    <v-dialog v-model="showDialog" max-width="500">
      <v-card>
        <v-card-title>
          <v-icon start>{{ isEditing ? 'mdi-pencil' : 'mdi-plus' }}</v-icon>
          {{ isEditing ? 'Edit User' : 'Add New User' }}
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="formValid">
            <v-text-field
              v-model="formData.user_name"
              label="User Name"
              required
              :rules="[v => !!v || 'User name is required']"
              prepend-icon="mdi-account"
            />
            <v-text-field
              v-model="formData.user_email"
              label="Email"
              type="email"
              required
              :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Email must be valid']"
              prepend-icon="mdi-email"
            />
            <v-text-field
              v-model="formData.user_tel"
              label="Phone Number"
              required
              :rules="[v => !!v || 'Phone number is required']"
              prepend-icon="mdi-phone"
            />
            <v-text-field
              v-model="formData.user_password"
              label="Password"
              type="password"
              required
              :rules="[v => !!v || 'Password is required', v => v.length >= 6 || 'Password must be at least 6 characters']"
              prepend-icon="mdi-lock"
            />
            <v-text-field
              v-model="formData.user_position"
              label="Position"
              required
              :rules="[v => !!v || 'Position is required']"
              prepend-icon="mdi-briefcase"
            />
            <v-text-field
              v-model="formData.user_department"
              label="Department"
              required
              :rules="[v => !!v || 'Department is required']"
              prepend-icon="mdi-office-building"
            />
            <v-select
              v-model="formData.user_status"
              label="Status"
              :items="statusOptions"
              item-title="title"
              item-value="value"
              required
              :rules="[v => v !== null && v !== undefined || 'Status is required']"
              prepend-icon="mdi-toggle-switch"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="grey" variant="outlined" @click="closeDialog">
            Cancel
          </v-btn>
          <v-btn 
            color="primary" 
            variant="elevated"
            :loading="submitting"
            :disabled="!formValid"
            @click="submitForm"
          >
            {{ isEditing ? 'Update' : 'Add' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
// GraphQL Queries and Mutations
const queryString = `
query MyQuery {
  users {
    user_id
    user_tel
    user_name
    user_email
    user_status
    user_password
    user_position
    user_department
  }
}
`

const insertUserMutation = `
mutation InsertUser($user_name: String!, $user_email: String!, $user_tel: String!, $user_password: String!, $user_position: String!, $user_department: String!, $user_status: Int!) {
  insert_users_one(object: {
    user_name: $user_name,
    user_email: $user_email,
    user_tel: $user_tel,
    user_password: $user_password,
    user_position: $user_position,
    user_department: $user_department,
    user_status: $user_status
  }) {
    user_id
    user_tel
    user_name
    user_email
    user_status
    user_password
    user_position
    user_department
  }
}
`

const updateUserMutation = `
mutation UpdateUser($user_id: uuid!, $user_name: String!, $user_email: String!, $user_tel: String!, $user_password: String!, $user_position: String!, $user_department: String!, $user_status: Int!) {
  update_users_by_pk(
    pk_columns: {user_id: $user_id},
    _set: {
      user_name: $user_name,
      user_email: $user_email,
      user_tel: $user_tel,
      user_password: $user_password,
      user_position: $user_position,
      user_department: $user_department,
      user_status: $user_status
    }
  ) {
    user_id
    user_tel
    user_name
    user_email
    user_status
    user_password
    user_position
    user_department
  }
}
`

// Runtime config
const config = useRuntimeConfig()

// Reactive data
const users = ref([])
const loading = ref(false)
const error = ref(null)
const showDialog = ref(false)
const submitting = ref(false)
const formValid = ref(false)
const isEditing = ref(false)
const editingIndex = ref(-1)
const originalUserData = ref({})

// Form data
const formData = ref({
  user_name: '',
  user_email: '',
  user_tel: '',
  user_password: '',
  user_position: '',
  user_department: '',
  user_status: 1
})

// Status options for the form
const statusOptions = [
  { title: 'Active', value: 1 },
  { title: 'Inactive', value: 0 }
]

// Computed
const hasAdminSecret = computed(() => !!config.public.hasuraAdminSecret)

// Functions
const clearError = () => {
  error.value = null
}

const resetForm = () => {
  formData.value = {
    user_name: '',
    user_email: '',
    user_tel: '',
    user_password: '',
    user_position: '',
    user_department: '',
    user_status: 1
  }
  isEditing.value = false
  editingIndex.value = -1
  originalUserData.value = {}
}

const openAddDialog = () => {
  resetForm()
  showDialog.value = true
}

const openEditDialog = (user, index) => {
  isEditing.value = true
  editingIndex.value = index
  originalUserData.value = { ...user }
  formData.value = {
    user_name: user.user_name,
    user_email: user.user_email,
    user_tel: user.user_tel,
    user_password: user.user_password,
    user_position: user.user_position,
    user_department: user.user_department,
    user_status: user.user_status
  }
  showDialog.value = true
}

const closeDialog = () => {
  showDialog.value = false
  resetForm()
}

const submitForm = async () => {
  if (!formValid.value) return
  
  submitting.value = true
  error.value = null
  
  try {
    const { mutation } = useGraphQL()
    
    const variables = {
      user_name: formData.value.user_name,
      user_email: formData.value.user_email,
      user_tel: formData.value.user_tel,
      user_password: formData.value.user_password,
      user_position: formData.value.user_position,
      user_department: formData.value.user_department,
      user_status: parseInt(formData.value.user_status)
    }
    
    if (isEditing.value) {
      // Update existing user
      const updateVariables = {
        ...variables,
        user_id: originalUserData.value.user_id
      }
      
      const response = await mutation(updateUserMutation, updateVariables)
      
      if (response.update_users_by_pk) {
        // Update local data
        users.value[editingIndex.value] = response.update_users_by_pk
      }
    } else {
      // Insert new user
      const response = await mutation(insertUserMutation, variables)
      
      if (response.insert_users_one) {
        // Add to local data
        users.value.push(response.insert_users_one)
      }
    }
    
    closeDialog()
  } catch (err) {
    error.value = err instanceof Error ? err.message : `Failed to ${isEditing.value ? 'update' : 'add'} user`
    console.error(`Error ${isEditing.value ? 'updating' : 'adding'} user:`, err)
  } finally {
    submitting.value = false
  }
}

const fetchUsers = async () => {
  loading.value = true
  error.value = null
  
  try {
    // Use the GraphQL composable
    const { query } = useGraphQL()
    const response = await query(queryString)
    users.value = response.users || []
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to fetch users'
    console.error('Error fetching users:', err)
  } finally {
    loading.value = false
  }
}

const refreshUsers = () => {
  return fetchUsers()
}

// Fetch data on mount
onMounted(() => {
  fetchUsers()
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
