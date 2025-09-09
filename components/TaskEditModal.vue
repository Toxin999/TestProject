<script setup>
const { t } = useI18n()
const { updateTask, taskStatuses, taskLabels, teamMembers, deleteTask, addComment, getTaskComments, addLabelToTask, removeLabelFromTask } = useTaskStore()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  task: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'taskUpdated', 'taskDeleted'])

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// Form data
const formData = ref({
  title: '',
  description: '',
  assignedTo: null,
  labels: [],
  dueDate: null,
  status: 'todo',
  projectId: null,
  priority: 'normal'
})

// Comments and activity
const newComment = ref('')
const taskComments = ref([])
const showComments = ref(true)

// Priority options
const priorityOptions = [
  { value: 'low', label: 'Low', color: 'grey', icon: 'mdi-chevron-down' },
  { value: 'normal', label: 'Normal', color: 'blue', icon: 'mdi-minus' },
  { value: 'high', label: 'High', color: 'orange', icon: 'mdi-chevron-up' },
  { value: 'urgent', label: 'Urgent', color: 'red', icon: 'mdi-chevron-double-up' }
]

// Form validation
const formValid = ref(false)
const titleRules = [
  v => !!v || t('tasks.form.validation.titleRequired'),
  v => (v && v.length >= 3) || t('tasks.form.validation.titleMinLength')
]

// Delete confirmation
const showDeleteConfirm = ref(false)

// Initialize form with task data
const initializeForm = () => {
  if (props.task) {
    formData.value = {
      title: props.task.title || '',
      description: props.task.description || '',
      assignedTo: props.task.assignedTo || null,
      labels: [...(props.task.labels || [])],
      dueDate: props.task.dueDate || null,
      status: props.task.status || 'todo',
      projectId: props.task.projectId || null,
      priority: props.task.priority || 'normal'
    }
    // Load comments
    loadTaskComments()
  }
}

// Load task comments
const loadTaskComments = () => {
  if (props.task) {
    taskComments.value = getTaskComments(props.task.id)
  }
}

// Add comment
const handleAddComment = () => {
  if (newComment.value.trim() && props.task) {
    const comment = addComment(props.task.id, {
      text: newComment.value.trim(),
      author: 'current-user',
      type: 'comment'
    })
    if (comment) {
      taskComments.value.push(comment)
      newComment.value = ''
    }
  }
}

// Add label to task
const handleAddLabel = (labelId) => {
  if (props.task && !formData.value.labels.includes(labelId)) {
    formData.value.labels.push(labelId)
    addLabelToTask(props.task.id, labelId)
    loadTaskComments() // Refresh to show activity
  }
}

// Remove label from task
const handleRemoveLabel = (labelId) => {
  if (props.task) {
    const index = formData.value.labels.indexOf(labelId)
    if (index > -1) {
      formData.value.labels.splice(index, 1)
      removeLabelFromTask(props.task.id, labelId)
      loadTaskComments() // Refresh to show activity
    }
  }
}

// Get label details
const getLabel = (labelId) => {
  return taskLabels.find(label => label.value === labelId)
}

// Get available labels (not yet added)
const availableLabels = computed(() => {
  return taskLabels.filter(label => !formData.value.labels.includes(label.value))
})

// Format comment time
const formatCommentTime = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

// Update task
const handleUpdateTask = () => {
  if (formValid.value && props.task) {
    const updatedTask = updateTask(props.task.id, formData.value)
    if (updatedTask) {
      emit('taskUpdated', updatedTask)
      dialog.value = false
      
      // Show success message
      console.log('Task updated successfully:', updatedTask)
    }
  }
}

// Delete task with confirmation
const handleDeleteTask = () => {
  if (props.task) {
    const deletedTask = deleteTask(props.task.id)
    if (deletedTask) {
      emit('taskDeleted', deletedTask)
      dialog.value = false
      showDeleteConfirm.value = false
      
      // Show success message
      console.log('Task deleted successfully:', deletedTask)
    }
  }
}

// Watch for task changes
watch(() => props.task, () => {
  if (props.task) {
    initializeForm()
  }
}, { immediate: true, deep: true })

// Watch for dialog close to reset form
watch(dialog, (newValue) => {
  if (!newValue) {
    showDeleteConfirm.value = false
  }
})

// Handle project creation
const onProjectCreated = (project) => {
  console.log('New project created:', project)
}
</script>

<template>
  <v-dialog 
    v-model="dialog" 
    max-width="600px"
    persistent
    scrollable
  >
    <v-card v-if="task">
      <!-- Header -->
      <v-card-title class="d-flex align-center">
        <v-icon left color="primary">mdi-pencil</v-icon>
        {{ $t('tasks.form.editTask') }}
        <v-spacer />
        <v-btn
          icon
          variant="text"
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider />

      <!-- Form Content -->
      <v-card-text class="py-6">
        <v-form v-model="formValid" @submit.prevent="handleUpdateTask">
          <!-- Title -->
          <v-text-field
            v-model="formData.title"
            :label="$t('tasks.form.title')"
            :rules="titleRules"
            prepend-icon="mdi-format-title"
            variant="outlined"
            class="mb-4"
            required
            autofocus
          />

          <!-- Description -->
          <v-textarea
            v-model="formData.description"
            :label="$t('tasks.form.description')"
            prepend-icon="mdi-text"
            variant="outlined"
            rows="3"
            class="mb-4"
            :hint="$t('tasks.form.descriptionHint')"
          />

          <!-- Project Selection -->
          <ProjectSelector
            v-model="formData.projectId"
            label="project"
            variant="outlined"
            class="mb-4"
            allow-create
            @project-created="onProjectCreated"
          />

          <!-- Assigned To -->
          <v-select
            v-model="formData.assignedTo"
            :items="teamMembers"
            :label="$t('tasks.form.assignedTo')"
            prepend-icon="mdi-account"
            variant="outlined"
            class="mb-4"
            clearable
            :hint="$t('tasks.form.assignedToHint')"
          >
            <template #item="{ props, item }">
              <v-list-item v-bind="props">
                <template #prepend>
                  <v-avatar size="32" color="primary">
                    <span class="text-white">{{ item.raw.label.charAt(0) }}</span>
                  </v-avatar>
                </template>
              </v-list-item>
            </template>
            <template #selection="{ item }">
              <div class="d-flex align-center">
                <v-avatar size="24" color="primary" class="mr-2">
                  <span class="text-white text-caption">{{ item.raw.label.charAt(0) }}</span>
                </v-avatar>
                {{ item.raw.label }}
              </div>
            </template>
          </v-select>

          <!-- Labels/Tags - Enhanced Management -->
          <div class="mb-4">
            <label class="text-subtitle-2 font-weight-medium mb-2 d-block">
              <v-icon class="mr-2">mdi-tag-multiple</v-icon>
              {{ $t('tasks.labels.title') }}
            </label>
            
            <!-- Current Labels -->
            <div v-if="formData.labels.length > 0" class="mb-3">
              <v-chip
                v-for="labelId in formData.labels"
                :key="labelId"
                :color="getLabel(labelId)?.color"
                variant="tonal"
                size="small"
                closable
                class="mr-2 mb-2"
                @click:close="handleRemoveLabel(labelId)"
              >
                <v-icon start size="16">mdi-tag</v-icon>
                {{ getLabel(labelId)?.label }}
              </v-chip>
            </div>
            
            <!-- Add Labels -->
            <div v-if="availableLabels.length > 0">
              <v-menu offset-y>
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    variant="outlined"
                    size="small"
                    prepend-icon="mdi-plus"
                    class="mb-2"
                  >
                    {{ $t('tasks.labels.add') }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="label in availableLabels"
                    :key="label.value"
                    @click="handleAddLabel(label.value)"
                  >
                    <template #prepend>
                      <v-icon :color="label.color" size="16">mdi-circle</v-icon>
                    </template>
                    <v-list-item-title>{{ label.label }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            
            <p v-if="formData.labels.length === 0" class="text-body-2 text-grey-darken-1">
              {{ $t('tasks.labels.noLabels') }}
            </p>
          </div>

          <!-- Due Date -->
          <v-select
            v-model="formData.priority"
            :items="priorityOptions"
            :label="$t('tasks.form.priority')"
            prepend-icon="mdi-flag"
            variant="outlined"
            class="mb-4"
          >
            <template #item="{ props, item }">
              <v-list-item v-bind="props">
                <template #prepend>
                  <v-icon :color="item.raw.color">{{ item.raw.icon }}</v-icon>
                </template>
              </v-list-item>
            </template>
            <template #selection="{ item }">
              <div class="d-flex align-center">
                <v-icon :color="item.raw.color" size="small" class="mr-2">{{ item.raw.icon }}</v-icon>
                {{ $t(`tasks.priority.${item.raw.value}`) }}
              </div>
            </template>
          </v-select>
          <v-text-field
            v-model="formData.dueDate"
            :label="$t('tasks.form.dueDate')"
            prepend-icon="mdi-calendar"
            variant="outlined"
            type="date"
            class="mb-4"
            :hint="$t('tasks.form.dueDateHint')"
          />

          <!-- Status -->
          <v-select
            v-model="formData.status"
            :items="taskStatuses"
            :label="$t('tasks.form.status')"
            prepend-icon="mdi-format-list-bulleted"
            variant="outlined"
            class="mb-4"
            :hint="$t('tasks.form.statusHint')"
          >
            <template #item="{ props, item }">
              <v-list-item v-bind="props">
                <template #prepend>
                  <v-icon :color="item.raw.color">mdi-circle</v-icon>
                </template>
              </v-list-item>
            </template>
            <template #selection="{ item }">
              <div class="d-flex align-center">
                <v-icon :color="item.raw.color" size="small" class="mr-2">mdi-circle</v-icon>
                {{ item.raw.label }}
              </div>
            </template>
          </v-select>
        </v-form>
        
        <!-- Comments & Activity Section -->
        <v-divider class="my-6" />
        
        <div class="comments-section">
          <div class="d-flex align-center mb-4">
            <v-icon class="mr-2">mdi-comment-multiple</v-icon>
            <h3 class="text-h6">{{ $t('tasks.comments.title') }}</h3>
            <v-spacer />
            <v-btn
              icon
              variant="text"
              size="small"
              @click="showComments = !showComments"
            >
              <v-icon>{{ showComments ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </div>
          
          <v-expand-transition>
            <div v-show="showComments">
              <!-- Add Comment -->
              <div class="mb-4">
                <v-textarea
                  v-model="newComment"
                  :label="$t('tasks.comments.placeholder')"
                  variant="outlined"
                  rows="2"
                  class="mb-2"
                  @keydown.ctrl.enter="handleAddComment"
                  @keydown.meta.enter="handleAddComment"
                />
                <div class="d-flex justify-end">
                  <v-btn
                    color="primary"
                    variant="elevated"
                    size="small"
                    :disabled="!newComment.trim()"
                    @click="handleAddComment"
                    prepend-icon="mdi-send"
                  >
                    {{ $t('tasks.comments.postComment') }}
                  </v-btn>
                </div>
              </div>
              
              <!-- Comments List -->
              <div v-if="taskComments.length > 0" class="comments-list">
                <div
                  v-for="comment in taskComments.slice().reverse()"
                  :key="comment.id"
                  class="comment-item mb-3 pa-3"
                  :class="{
                    'activity-item': comment.type !== 'comment',
                    'comment-item': comment.type === 'comment'
                  }"
                >
                  <div class="d-flex align-start">
                    <v-avatar
                      size="32"
                      :color="comment.type === 'comment' ? 'primary' : 'grey'"
                      class="mr-3"
                    >
                      <v-icon v-if="comment.type !== 'comment'" size="16">
                        {{ comment.type === 'label_added' ? 'mdi-tag-plus' : 
                             comment.type === 'label_removed' ? 'mdi-tag-minus' : 
                             comment.type === 'status_change' ? 'mdi-swap-horizontal' :
                             'mdi-information' }}
                      </v-icon>
                      <span v-else class="text-white text-caption">U</span>
                    </v-avatar>
                    
                    <div class="flex-grow-1">
                      <div class="d-flex align-center mb-1">
                        <span class="text-subtitle-2 font-weight-medium mr-2">
                          {{ comment.author === 'current-user' ? 'You' : comment.author }}
                        </span>
                        <span class="text-caption text-grey-darken-1">
                          {{ formatCommentTime(comment.createdAt) }}
                        </span>
                      </div>
                      
                      <div 
                        class="comment-text"
                        :class="{
                          'text-body-2': comment.type === 'comment',
                          'text-caption text-grey-darken-1': comment.type !== 'comment'
                        }"
                      >
                        {{ comment.text }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-else class="text-center py-4">
                <v-icon size="48" color="grey-lighten-1" class="mb-2">
                  mdi-comment-outline
                </v-icon>
                <p class="text-body-2 text-grey-darken-1">
                  {{ $t('tasks.comments.noComments') }}
                </p>
              </div>
            </div>
          </v-expand-transition>
        </div>
      </v-card-text>

      <v-divider />

      <!-- Actions -->
      <v-card-actions class="px-6 py-4">
        <!-- Delete Button -->
        <v-btn
          color="error"
          variant="outlined"
          prepend-icon="mdi-delete"
          @click="showDeleteConfirm = true"
        >
          {{ $t('tasks.form.deleteButton') }}
        </v-btn>
        
        <v-spacer />
        
        <v-btn
          variant="text"
          @click="dialog = false"
        >
          {{ $t('common.cancel') }}
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          :disabled="!formValid"
          @click="handleUpdateTask"
          prepend-icon="mdi-check"
        >
          {{ $t('tasks.form.saveButton') }}
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Delete Confirmation Dialog -->
    <v-dialog 
      v-model="showDeleteConfirm" 
      max-width="400px"
      persistent
    >
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon left color="error">mdi-alert</v-icon>
          {{ $t('tasks.form.confirmDelete') }}
        </v-card-title>
        
        <v-card-text class="py-4">
          <p>{{ $t('tasks.form.deleteConfirmMessage') }}</p>
          <p class="text-body-2 text-grey-darken-1 mt-2">
            <strong>{{ task?.title }}</strong>
          </p>
        </v-card-text>
        
        <v-card-actions class="px-6 py-4">
          <v-spacer />
          <v-btn
            variant="text"
            @click="showDeleteConfirm = false"
          >
            {{ $t('common.cancel') }}
          </v-btn>
          <v-btn
            color="error"
            variant="elevated"
            @click="handleDeleteTask"
            prepend-icon="mdi-delete"
          >
            {{ $t('tasks.form.confirmDeleteButton') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<style scoped>
.comments-section {
  max-height: 400px;
  overflow-y: auto;
}

.comments-list {
  max-height: 300px;
  overflow-y: auto;
}

.comment-item {
  background: rgba(var(--v-theme-surface), 0.1);
  border-radius: 8px;
  border-left: 3px solid rgba(var(--v-theme-primary), 0.3);
  transition: all 0.2s ease;
}

.comment-item:hover {
  background: rgba(var(--v-theme-surface), 0.2);
  transform: translateX(2px);
}

.activity-item {
  background: rgba(var(--v-theme-secondary), 0.05);
  border-left-color: rgba(var(--v-theme-secondary), 0.3);
}

.comment-text {
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* Enhanced label management styles */
.label-management {
  border: 1px solid rgba(var(--v-theme-outline), 0.2);
  border-radius: 8px;
  padding: 16px;
  background: rgba(var(--v-theme-surface), 0.02);
}

.label-chip {
  transition: all 0.2s ease;
}

.label-chip:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>