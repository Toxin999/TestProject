<script setup>
const { taskStatuses, taskLabels, teamMembers, getProjectById, updateTaskStatus, initializeSampleData, searchTasks } = useTaskStore()

// Initialize sample data on mounted for client-side hydration
onMounted(() => {
  initializeSampleData()
  updateFilteredTasks()
})

// Create task modal
const showCreateModal = ref(false)
const defaultStatus = ref('todo')

// Edit task modal
const showEditModal = ref(false)
const selectedTask = ref(null)

// Project filtering (existing)
const selectedProject = ref(null)
const showProjectFilter = ref(false)

// Watch for project filter changes
watch(selectedProject, () => {
  updateFilteredTasks()
})

// Search and filter state
const searchQuery = ref('')
const filterOptions = ref({
  status: [],
  labels: [],
  assignedTo: [],
  priority: []
})
const filteredTasks = ref([])

const openCreateModal = (status = 'todo') => {
  defaultStatus.value = status
  showCreateModal.value = true
}

// Update filtered tasks based on search and filters
const updateFilteredTasks = () => {
  const allFilters = { ...filterOptions.value }
  
  // Add project filter if selected
  if (selectedProject.value) {
    allFilters.projectId = selectedProject.value
  }
  
  filteredTasks.value = searchTasks(searchQuery.value, allFilters)
}

const onTaskCreated = (task) => {
  // Task is automatically added to the store
  console.log('New task created:', task)
  updateFilteredTasks()
}

// Edit task handlers
const openEditModal = (task) => {
  selectedTask.value = task
  showEditModal.value = true
}

const onTaskUpdated = (task) => {
  console.log('Task updated:', task)
  selectedTask.value = null
  updateFilteredTasks()
}

const onTaskDeleted = (task) => {
  console.log('Task deleted:', task)
  selectedTask.value = null
  updateFilteredTasks()
}

// Search and filter handlers
const handleSearch = (query) => {
  searchQuery.value = query
  updateFilteredTasks()
}

const handleFilter = (filters) => {
  filterOptions.value = { ...filters }
  updateFilteredTasks()
}

// Get tasks for each column from filtered results
const getColumnTasks = (status) => {
  return filteredTasks.value?.filter(task => task.status === status) || []
}

// Get project info
const getProject = (projectId) => {
  return getProjectById(projectId)
}

// Get team member info
const getTeamMember = (memberId) => {
  return teamMembers.find(member => member.value === memberId)
}

// Get label info
const getLabel = (labelId) => {
  return taskLabels.find(label => label.value === labelId)
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

// Check if task is overdue
const isOverdue = (dueDate) => {
  if (!dueDate) return false
  const today = new Date()
  const due = new Date(dueDate)
  return due < today
}

// Clear project filter
const clearProjectFilter = () => {
  selectedProject.value = null
}

// Toggle project filter
const toggleProjectFilter = () => {
  showProjectFilter.value = !showProjectFilter.value
}

// Native drag and drop handlers
let draggedTask = null

const onDragStart = (event, task) => {
  draggedTask = task
  event.dataTransfer.effectAllowed = 'move'
  event.target.style.opacity = '0.5'
}

const onDragEnd = (event) => {
  event.target.style.opacity = '1'
  draggedTask = null
}

const onDragOver = (event) => {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
}

const onDragEnter = (event) => {
  event.preventDefault()
  event.currentTarget.classList.add('drag-over')
}

const onDragLeave = (event) => {
  // Only remove the class if we're leaving the actual drop zone
  if (!event.currentTarget.contains(event.relatedTarget)) {
    event.currentTarget.classList.remove('drag-over')
  }
}

const onDrop = (event, targetStatus) => {
  event.preventDefault()
  event.currentTarget.classList.remove('drag-over')
  
  if (draggedTask && draggedTask.status !== targetStatus) {
    console.log(`Moving task ${draggedTask.id} from ${draggedTask.status} to ${targetStatus}`)
    
    const updatedTask = updateTaskStatus(draggedTask.id, targetStatus)
    if (updatedTask) {
      console.log('Task moved successfully:', updatedTask)
      updateFilteredTasks() // Refresh filtered results
    }
  }
}


</script>

<template>
  <div class="kanban-board">
    <!-- Board Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h2 class="text-h4 font-weight-bold text-primary">{{ $t('tasks.board.title') }}</h2>
        <p class="text-body-1 text-grey-darken-1 mt-1">{{ $t('tasks.board.subtitle') }}</p>
      </div>
      <div class="d-flex align-center gap-2">
        <!-- Project Filter Toggle -->
        <v-btn
          :color="showProjectFilter ? 'primary' : 'default'"
          :variant="showProjectFilter ? 'elevated' : 'outlined'"
          prepend-icon="mdi-filter"
          @click="toggleProjectFilter"
        >
          {{ $t('tasks.board.filterProjects') }}
        </v-btn>
        
        <!-- New Task Button -->
        <v-btn
          color="primary"
          variant="elevated"
          prepend-icon="mdi-plus"
          @click="openCreateModal()"
        >
          {{ $t('tasks.board.newTask') }}
        </v-btn>
      </div>
    </div>

    <!-- Project Filter Section -->
    <v-expand-transition>
      <div v-if="showProjectFilter" class="mb-6">
        <v-card variant="outlined">
          <v-card-text class="py-4">
            <div class="d-flex align-center gap-4">
              <ProjectSelector
                v-model="selectedProject"
                label="project"
                variant="outlined"
                density="compact"
                style="min-width: 250px;"
                :hint="$t('tasks.board.projectFilterHint')"
              />
              
              <v-btn
                v-if="selectedProject"
                variant="text"
                color="error"
                prepend-icon="mdi-close"
                @click="clearProjectFilter"
              >
                {{ $t('common.clear') }}
              </v-btn>
              
              <v-spacer />
              
              <!-- Project Stats -->
              <div v-if="selectedProject" class="d-flex align-center gap-4">
                <v-chip
                  :color="getProject(selectedProject)?.color"
                  variant="tonal"
                  size="small"
                >
                  <v-icon left size="small">mdi-circle</v-icon>
                  {{ getProject(selectedProject)?.name }}
                </v-chip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-expand-transition>

    <!-- Search and Filter Section -->
    <SearchFilter
      :filtered-tasks-count="filteredTasks.length"
      @search="handleSearch"
      @filter="handleFilter"
    />

    <!-- Kanban Columns -->
    <div class="kanban-columns">
      <v-row>
        <v-col
          v-for="status in taskStatuses"
          :key="status.value"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card
            class="kanban-column h-100"
            elevation="2"
            :color="`${status.color}-lighten-5`"
          >
            <!-- Column Header -->
            <v-card-title class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-icon :color="status.color" class="mr-2">mdi-circle</v-icon>
                <span>{{ status.label }}</span>
                <v-chip
                  size="small"
                  :color="status.color"
                  variant="tonal"
                  class="ml-2"
                >
                  {{ getColumnTasks(status.value).length }}
                </v-chip>
              </div>
              <v-btn
                icon
                size="small"
                variant="text"
                @click="openCreateModal(status.value)"
              >
                <v-icon size="18">mdi-plus</v-icon>
              </v-btn>
            </v-card-title>

            <v-divider />

            <!-- Task Cards -->
            <v-card-text class="pa-2" style="min-height: 400px;">
              <!-- Task Container with Native Drag & Drop -->
              <div
                class="drag-area"
                @drop="onDrop($event, status.value)"
                @dragover="onDragOver"
                @dragenter="onDragEnter"
                @dragleave="onDragLeave"
              >
                <div
                  v-for="task in getColumnTasks(status.value)"
                  :key="task.id"
                  class="mb-3 task-item"
                  :data-task-id="task.id"
                  draggable="true"
                  @dragstart="onDragStart($event, task)"
                  @dragend="onDragEnd"
                >
                  <v-card
                      elevation="1"
                      hover
                      class="task-card"
                      :class="{ 'border-error': isOverdue(task.dueDate) }"
                      @click="openEditModal(task)"
                      style="cursor: pointer;"
                    >
                  <v-card-text class="pa-3">
                    <!-- Project Badge -->
                    <div v-if="task.projectId" class="mb-2">
                      <v-chip
                        :color="getProject(task.projectId)?.color"
                        variant="tonal"
                        size="x-small"
                        prepend-icon="mdi-folder"
                      >
                        {{ getProject(task.projectId)?.name }}
                      </v-chip>
                    </div>

                    <!-- Task Title -->
                    <h4 class="text-subtitle-1 font-weight-medium mb-2">
                      {{ task.title }}
                    </h4>

                    <!-- Task Description -->
                    <p
                      v-if="task.description"
                      class="text-body-2 text-grey-darken-1 mb-3"
                    >
                      {{ task.description.length > 100 ? task.description.substring(0, 100) + '...' : task.description }}
                    </p>

                    <!-- Labels -->
                    <div v-if="task.labels && task.labels.length" class="mb-3">
                      <v-chip
                        v-for="labelId in task.labels"
                        :key="labelId"
                        :color="getLabel(labelId)?.color"
                        variant="tonal"
                        size="x-small"
                        class="mr-1 mb-1"
                      >
                        {{ getLabel(labelId)?.label }}
                      </v-chip>
                    </div>

                    <!-- Task Footer -->
                    <div class="d-flex align-center justify-space-between">
                      <!-- Assigned User -->
                      <div class="d-flex align-center">
                        <v-avatar
                          v-if="task.assignedTo"
                          size="24"
                          color="primary"
                        >
                          <span class="text-white text-caption">
                            {{ getTeamMember(task.assignedTo)?.label.charAt(0) }}
                          </span>
                        </v-avatar>
                        <span
                          v-if="task.assignedTo"
                          class="text-caption ml-2"
                        >
                          {{ getTeamMember(task.assignedTo)?.label }}
                        </span>
                      </div>

                      <!-- Due Date -->
                      <div v-if="task.dueDate" class="d-flex align-center">
                        <v-icon
                          size="14"
                          :color="isOverdue(task.dueDate) ? 'error' : 'grey'"
                          class="mr-1"
                        >
                          mdi-calendar
                        </v-icon>
                        <span
                          class="text-caption"
                          :class="{ 'text-error': isOverdue(task.dueDate) }"
                        >
                          {{ formatDate(task.dueDate) }}
                        </span>
                      </div>
                    </div>
                  </v-card-text>
                  </v-card>
                </div>
              </div>

              <!-- Empty State -->
              <div
                v-if="getColumnTasks(status.value).length === 0"
                class="text-center py-8"
              >
                <v-icon
                  size="48"
                  color="grey-lighten-1"
                  class="mb-2"
                >
                  mdi-clipboard-text-outline
                </v-icon>
                <p class="text-body-2 text-grey-darken-1">
                  {{ $t('tasks.board.emptyColumn') }}
                </p>
                <v-btn
                  variant="text"
                  color="primary"
                  size="small"
                  @click="openCreateModal(status.value)"
                >
                  {{ $t('tasks.board.addFirstTask') }}
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Create Task Modal -->
    <TaskCreateModal
      v-model="showCreateModal"
      :default-status="defaultStatus"
      @task-created="onTaskCreated"
    />

    <!-- Edit Task Modal -->
    <TaskEditModal
      v-model="showEditModal"
      :task="selectedTask"
      @task-updated="onTaskUpdated"
      @task-deleted="onTaskDeleted"
    />
  </div>
</template>

<style scoped>
.kanban-board {
  padding: 1rem;
}

.kanban-columns {
  overflow-x: auto;
}

.kanban-column {
  min-height: 500px;
}

.task-card {
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.task-card.border-error {
  border-color: rgb(var(--v-theme-error));
}

/* Drag and Drop Styles */
.drag-area {
  min-height: 300px;
  transition: background-color 0.3s ease;
}

.drag-area:hover {
  background: rgba(var(--v-theme-surface), 0.02);
}

.task-item {
  transition: transform 0.2s ease, opacity 0.2s ease;
  cursor: move;
}

.task-item:hover {
  transform: translateY(-1px);
}

.task-item[draggable="true"]:active {
  opacity: 0.5;
  transform: rotate(2deg);
}

/* Visual feedback for drag zones */
.drag-area.drag-over {
  background: rgba(var(--v-theme-primary), 0.1);
  border: 2px dashed rgba(var(--v-theme-primary), 0.3);
  border-radius: 8px;
}

/* Ghost styles for better compatibility */
.ghost-card {
  opacity: 0.5;
  background: rgba(var(--v-theme-primary), 0.1);
  border: 2px dashed rgba(var(--v-theme-primary), 0.3);
  transform: rotate(3deg);
}

.chosen-card {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.drag-card {
  transform: rotate(-3deg);
  opacity: 0.8;
}

.task-item {
  transition: transform 0.2s ease;
}

.sortable-drag {
  opacity: 0.8;
  transform: scale(1.02);
}

.sortable-ghost {
  opacity: 0.4;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 8px;
}

/* Drop zone visual feedback */
.drag-area:not(:empty):hover {
  background: rgba(var(--v-theme-surface), 0.02);
}

@media (max-width: 768px) {
  .kanban-columns .v-col {
    min-width: 280px;
  }
  
  .task-card:hover {
    transform: none;
  }
  
  .chosen-card {
    transform: scale(1.02);
  }
}
</style>