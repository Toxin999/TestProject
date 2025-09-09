<script setup>
const { t } = useI18n()
const { createTask, taskStatuses, taskLabels, teamMembers } = useTaskStore()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  defaultStatus: {
    type: String,
    default: 'todo'
  }
})

const emit = defineEmits(['update:modelValue', 'taskCreated'])

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
  status: props.defaultStatus,
  projectId: null
})

// Form validation
const formValid = ref(false)
const titleRules = [
  v => !!v || t('tasks.form.validation.titleRequired'),
  v => (v && v.length >= 3) || t('tasks.form.validation.titleMinLength')
]

// Reset form
const resetForm = () => {
  formData.value = {
    title: '',
    description: '',
    assignedTo: null,
    labels: [],
    dueDate: null,
    status: props.defaultStatus,
    projectId: null
  }
}

// Create task
const handleCreateTask = () => {
  if (formValid.value) {
    const newTask = createTask(formData.value)
    emit('taskCreated', newTask)
    dialog.value = false
    resetForm()
    
    // Show success message
    // You can implement a toast/snackbar here
    console.log('Task created successfully:', newTask)
  }
}

// Watch for dialog close to reset form
watch(dialog, (newValue) => {
  if (!newValue) {
    resetForm()
  }
})

// Initialize default status when prop changes
watch(() => props.defaultStatus, (newStatus) => {
  formData.value.status = newStatus
}, { immediate: true })

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
    <v-card>
      <!-- Header -->
      <v-card-title class="d-flex align-center">
        <v-icon left color="primary">mdi-plus-circle</v-icon>
        {{ $t('tasks.form.createTask') }}
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
        <v-form v-model="formValid" @submit.prevent="handleCreateTask">
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

          <!-- Labels/Tags -->
          <v-select
            v-model="formData.labels"
            :items="taskLabels"
            :label="$t('tasks.form.labels')"
            prepend-icon="mdi-tag-multiple"
            variant="outlined"
            class="mb-4"
            multiple
            chips
            closable-chips
            :hint="$t('tasks.form.labelsHint')"
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

          <!-- Due Date -->
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
      </v-card-text>

      <v-divider />

      <!-- Actions -->
      <v-card-actions class="px-6 py-4">
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
          @click="handleCreateTask"
          prepend-icon="mdi-check"
        >
          {{ $t('tasks.form.createButton') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>