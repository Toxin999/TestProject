<template>
  <v-card elevation="1" class="mb-6">
    <v-card-text class="py-4">
      <!-- Search Bar -->
      <div class="d-flex align-center mb-4">
        <v-text-field
          v-model="searchQuery"
          :label="$t('tasks.search.placeholder')"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          class="flex-grow-1 mr-4"
          clearable
          hide-details
          @input="onSearchChange"
        />
        
        <v-btn
          variant="outlined"
          prepend-icon="mdi-filter-variant"
          @click="showFilters = !showFilters"
        >
          {{ $t('tasks.search.filters') }}
          <v-badge
            v-if="activeFiltersCount > 0"
            :content="activeFiltersCount"
            color="primary"
            offset-x="10"
            offset-y="10"
          />
        </v-btn>
      </div>

      <!-- Filters Section -->
      <v-expand-transition>
        <div v-show="showFilters" class="filters-section">
          <v-divider class="mb-4" />
          
          <v-row>
            <!-- Status Filter -->
            <v-col cols="12" md="3">
              <v-select
                v-model="filters.status"
                :items="taskStatuses"
                :label="$t('tasks.search.filterByStatus')"
                variant="outlined"
                density="compact"
                multiple
                chips
                closable-chips
                clearable
                hide-details
              >
                <template #chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    :color="item.raw.color"
                    variant="tonal"
                    size="small"
                  >
                    {{ item.raw.label }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>

            <!-- Labels Filter -->
            <v-col cols="12" md="3">
              <v-select
                v-model="filters.labels"
                :items="taskLabels"
                :label="$t('tasks.search.filterByLabels')"
                variant="outlined"
                density="compact"
                multiple
                chips
                closable-chips
                clearable
                hide-details
              >
                <template #chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    :color="item.raw.color"
                    variant="tonal"
                    size="small"
                  >
                    {{ item.raw.label }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>

            <!-- Assignee Filter -->
            <v-col cols="12" md="3">
              <v-select
                v-model="filters.assignedTo"
                :items="teamMembers"
                :label="$t('tasks.search.filterByAssignee')"
                variant="outlined"
                density="compact"
                multiple
                chips
                closable-chips
                clearable
                hide-details
              >
                <template #chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    color="primary"
                    variant="tonal"
                    size="small"
                  >
                    {{ item.raw.label }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>

            <!-- Priority Filter -->
            <v-col cols="12" md="3">
              <v-select
                v-model="filters.priority"
                :items="priorityOptions"
                :label="$t('tasks.search.filterByPriority')"
                variant="outlined"
                density="compact"
                multiple
                chips
                closable-chips
                clearable
                hide-details
              >
                <template #chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    :color="item.raw.color"
                    variant="tonal"
                    size="small"
                  >
                    <v-icon start size="16">{{ item.raw.icon }}</v-icon>
                    {{ $t(`tasks.priority.${item.raw.value}`) }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>
          </v-row>

          <!-- Clear Filters Button -->
          <div class="d-flex justify-end mt-4">
            <v-btn
              v-if="activeFiltersCount > 0"
              variant="text"
              color="grey"
              prepend-icon="mdi-filter-remove"
              @click="clearAllFilters"
            >
              {{ $t('tasks.search.clearFilters') }}
            </v-btn>
          </div>
        </div>
      </v-expand-transition>

      <!-- Results Summary -->
      <div v-if="searchQuery || activeFiltersCount > 0" class="mt-4">
        <v-divider class="mb-2" />
        <div class="d-flex align-center">
          <v-icon class="mr-2" color="primary">mdi-information</v-icon>
          <span class="text-body-2">
            {{ $t('tasks.search.showingResults', { count: filteredTasksCount }) }}
          </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
const { taskStatuses, taskLabels, teamMembers } = useTaskStore()

const _props = defineProps({
  filteredTasksCount: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['search', 'filter'])

// Search and filter state
const searchQuery = ref('')
const showFilters = ref(false)
const filters = ref({
  status: [],
  labels: [],
  assignedTo: [],
  priority: []
})

// Priority options
const priorityOptions = [
  { value: 'low', label: 'Low', color: 'grey', icon: 'mdi-chevron-down' },
  { value: 'normal', label: 'Normal', color: 'blue', icon: 'mdi-minus' },
  { value: 'high', label: 'High', color: 'orange', icon: 'mdi-chevron-up' },
  { value: 'urgent', label: 'Urgent', color: 'red', icon: 'mdi-chevron-double-up' }
]

// Computed properties
const activeFiltersCount = computed(() => {
  return Object.values(filters.value).reduce((count, filterArray) => {
    return count + (Array.isArray(filterArray) ? filterArray.length : 0)
  }, 0)
})

// Methods
const onSearchChange = debounce(() => {
  emitSearchFilter()
}, 300)

const emitSearchFilter = () => {
  emit('search', searchQuery.value)
  emit('filter', { ...filters.value })
}

const clearAllFilters = () => {
  searchQuery.value = ''
  filters.value = {
    status: [],
    labels: [],
    assignedTo: [],
    priority: []
  }
  emitSearchFilter()
}

// Debounce utility function
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Watch for filter changes
watch(filters, () => {
  emitSearchFilter()
}, { deep: true })
</script>

<style scoped>
.filters-section {
  background: rgba(var(--v-theme-surface), 0.02);
  border-radius: 8px;
  padding: 16px;
}

.v-chip {
  margin: 2px;
}
</style>