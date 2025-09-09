<script setup>
const { t } = useI18n()
const { projects, projectCategories, createProject } = useTaskStore()

const props = defineProps({
  modelValue: {
    type: [String, Number, null],
    default: null
  },
  label: {
    type: String,
    default: 'Project'
  },
  multiple: {
    type: Boolean,
    default: false
  },
  allowCreate: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  density: {
    type: String,
    default: 'default'
  }
})

const emit = defineEmits(['update:modelValue', 'projectCreated'])

const selectedProject = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// Project creation dialog
const showCreateDialog = ref(false)
const newProjectForm = ref({
  name: '',
  description: '',
  category: 'other',
  color: 'primary',
  manager: null
})

const formValid = ref(false)
const nameRules = [
  v => !!v || t('projects.form.validation.nameRequired'),
  v => (v && v.length >= 3) || t('projects.form.validation.nameMinLength')
]

// Get project options for select
const projectOptions = computed(() => {
  return projects.value.map(project => ({
    value: project.id,
    title: project.name,
    subtitle: project.description,
    props: {
      subtitle: project.description,
      appendIcon: 'mdi-circle',
      color: project.color
    }
  }))
})

// Get project by ID
const getProject = (projectId) => {
  return projects.value.find(p => p.id === projectId)
}

// Get category info
const getCategory = (categoryValue) => {
  return projectCategories.find(cat => cat.value === categoryValue)
}

// Create new project
const handleCreateProject = () => {
  if (formValid.value) {
    const newProject = createProject(newProjectForm.value)
    emit('projectCreated', newProject)
    selectedProject.value = newProject.id
    showCreateDialog.value = false
    resetForm()
  }
}

// Reset form
const resetForm = () => {
  newProjectForm.value = {
    name: '',
    description: '',
    category: 'other',
    color: 'primary',
    manager: null
  }
}

// Handle menu actions
const openCreateDialog = () => {
  resetForm()
  showCreateDialog.value = true
}
</script>

<template>
  <div>
    <!-- Project Selector -->
    <v-select
      v-model="selectedProject"
      :items="projectOptions"
      :label="$t(`projects.form.${label.toLowerCase()}`)"
      :variant="variant"
      :density="density"
      :multiple="multiple"
      clearable
      :hint="$t('projects.form.projectHint')"
      item-title="title"
      item-value="value"
    >
      <!-- Custom item template -->
      <template #item="{ props, item }">
        <v-list-item v-bind="props">
          <template #prepend>
            <v-icon :color="getProject(item.raw.value)?.color" size="small">
              mdi-circle
            </v-icon>
          </template>
          <template #append v-if="getProject(item.raw.value)?.category">
            <v-chip
              size="x-small"
              :color="getCategory(getProject(item.raw.value)?.category)?.color"
              variant="tonal"
            >
              {{ getCategory(getProject(item.raw.value)?.category)?.label }}
            </v-chip>
          </template>
        </v-list-item>
      </template>

      <!-- Custom selection template -->
      <template #selection="{ item }">
        <div class="d-flex align-center">
          <v-icon 
            :color="getProject(item.raw.value)?.color" 
            size="small" 
            class="mr-2"
          >
            mdi-circle
          </v-icon>
          {{ item.raw.title }}
        </div>
      </template>

      <!-- Append slot for create button -->
      <template #append-item v-if="allowCreate">
        <v-divider />
        <v-list-item @click="openCreateDialog">
          <template #prepend>
            <v-icon color="primary">mdi-plus</v-icon>
          </template>
          <v-list-item-title>{{ $t('projects.form.createNew') }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-select>

    <!-- Create Project Dialog -->
    <v-dialog 
      v-model="showCreateDialog" 
      max-width="500px"
      persistent
    >
      <v-card>
        <!-- Header -->
        <v-card-title class="d-flex align-center">
          <v-icon left color="primary">mdi-folder-plus</v-icon>
          {{ $t('projects.form.createProject') }}
          <v-spacer />
          <v-btn
            icon
            variant="text"
            @click="showCreateDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider />

        <!-- Form Content -->
        <v-card-text class="py-6">
          <v-form v-model="formValid" @submit.prevent="handleCreateProject">
            <!-- Project Name -->
            <v-text-field
              v-model="newProjectForm.name"
              :label="$t('projects.form.name')"
              :rules="nameRules"
              prepend-icon="mdi-folder"
              variant="outlined"
              class="mb-4"
              required
              autofocus
            />

            <!-- Description -->
            <v-textarea
              v-model="newProjectForm.description"
              :label="$t('projects.form.description')"
              prepend-icon="mdi-text"
              variant="outlined"
              rows="3"
              class="mb-4"
              :hint="$t('projects.form.descriptionHint')"
            />

            <!-- Category -->
            <v-select
              v-model="newProjectForm.category"
              :items="projectCategories"
              :label="$t('projects.form.category')"
              prepend-icon="mdi-tag"
              variant="outlined"
              class="mb-4"
              item-title="label"
              item-value="value"
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

            <!-- Color -->
            <v-select
              v-model="newProjectForm.color"
              :items="[
                { value: 'primary', label: 'Primary', color: 'primary' },
                { value: 'secondary', label: 'Secondary', color: 'secondary' },
                { value: 'success', label: 'Success', color: 'success' },
                { value: 'info', label: 'Info', color: 'info' },
                { value: 'warning', label: 'Warning', color: 'warning' },
                { value: 'error', label: 'Error', color: 'error' }
              ]"
              :label="$t('projects.form.color')"
              prepend-icon="mdi-palette"
              variant="outlined"
              class="mb-4"
              item-title="label"
              item-value="value"
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
            @click="showCreateDialog = false"
          >
            {{ $t('common.cancel') }}
          </v-btn>
          <v-btn
            color="primary"
            variant="elevated"
            :disabled="!formValid"
            @click="handleCreateProject"
            prepend-icon="mdi-check"
          >
            {{ $t('projects.form.createButton') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>