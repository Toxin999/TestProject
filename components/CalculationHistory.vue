<script setup>

const _props = defineProps({
  history: {
    type: Array,
    default: () => []
  },
  onDelete: {
    type: Function,
    required: true
  },
  onRecall: {
    type: Function,
    required: true
  }
})

function getMethodLabel(method) {
  switch (method) {
    case 'add': return { label: 'Add', icon: 'mdi-plus', color: 'success' }
    case 'sub': return { label: 'Subtract', icon: 'mdi-minus', color: 'warning' }
    case 'mul': return { label: 'Multiply', icon: 'mdi-close', color: 'info' }
    case 'div': return { label: 'Divide', icon: 'mdi-division', color: 'purple' }
    default: return { label: '-', icon: 'mdi-help', color: 'grey' }
  }
}

function getMethodIcon(method) {
  switch (method) {
    case 'add': return 'mdi-plus'
    case 'sub': return 'mdi-minus'
    case 'mul': return 'mdi-close'
    case 'div': return 'mdi-division'
    default: return 'mdi-help'
  }
}

function formatTime(timeString) {
  try {
    const date = new Date(timeString)
    return date.toLocaleTimeString('th-TH', { 
      hour: '2-digit', 
      minute: '2-digit'
    })
  } catch {
    return timeString
  }
}
</script>

<template>
  <v-card class="mx-auto mt-6" max-width="900" elevation="3">
    <v-card-title class="text-h5 text-center text-primary">
      <v-icon left color="primary">mdi-history</v-icon>
      Calculation History
    </v-card-title>
    
    <v-card-text>
      <div v-if="history.length">
        <v-table density="comfortable" class="elevation-1">
          <thead>
            <tr>
              <th class="text-center">A</th>
              <th class="text-center">Method</th>
              <th class="text-center">B</th>
              <th class="text-center">Result</th>
              <th class="text-center">Time</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in history" :key="item.id">
              <td class="text-center">
                <v-chip color="primary" variant="tonal" size="small">
                  {{ item.a.toLocaleString() }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip 
                  :color="getMethodLabel(item.method).color" 
                  variant="tonal" 
                  size="small"
                >
                  <v-icon left size="small">{{ getMethodIcon(item.method) }}</v-icon>
                  {{ getMethodLabel(item.method).label }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip color="primary" variant="tonal" size="small">
                  {{ item.b.toLocaleString() }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip 
                  :color="typeof item.result === 'number' ? 'success' : 'error'" 
                  variant="elevated" 
                  size="small"
                >
                  <strong>{{ item.result.toLocaleString() }}</strong>
                </v-chip>
              </td>
              <td class="text-center">
                <v-chip color="grey" variant="text" size="small">
                  <v-icon left size="small">mdi-clock-outline</v-icon>
                  {{ formatTime(item.time) }}
                </v-chip>
              </td>
              <td class="text-center">
                <v-btn
                  color="primary"
                  size="small"
                  variant="tonal"
                  density="comfortable"
                  class="mr-2"
                  @click="onRecall(item)"
                >
                  <v-icon left size="small">mdi-restore</v-icon>
                  Recall
                </v-btn>
                <v-btn
                  color="error"
                  size="small"
                  variant="tonal"
                  density="comfortable"
                  @click="onDelete(item.id)"
                >
                  <v-icon left size="small">mdi-delete</v-icon>
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      
      <v-empty-state
        v-else
        headline="No calculation history yet"
        title="Start calculating numbers"
        text="Use the form above to perform calculations. History will be displayed here"
        icon="mdi-calculator-variant"
        color="grey"
      />
    </v-card-text>
  </v-card>
</template>