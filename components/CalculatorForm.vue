<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  onCalculate: {
    type: Function,
    required: true
  },
  recallCalculation: {
    type: Object,
    default: null
  }
})

const a = ref(0)
const b = ref(0)
const method = ref('add')
const result = ref(null)

const methodOptions = [
  { title: 'Add (+)', value: 'add' },
  { title: 'Subtract (-)', value: 'sub' },
  { title: 'Multiply (×)', value: 'mul' },
  { title: 'Divide (÷)', value: 'div' }
]

const canCalculate = computed(() => {
  return a.value !== null && b.value !== null && !isNaN(a.value) && !isNaN(b.value)
})

// Watch for changes in recallCalculation prop
watch(() => props.recallCalculation, (newRecall) => {
  if (newRecall) {
    console.log('Recalling calculation:', newRecall)
    a.value = newRecall.a
    b.value = newRecall.b
    method.value = newRecall.method
    // Also set the result to show the previous calculation result
    result.value = newRecall.result
  }
}, { immediate: true })

function calculate() {
  let res
  switch (method.value) {
    case 'add':
      res = a.value + b.value
      break
    case 'sub':
      res = a.value - b.value
      break
    case 'mul':
      res = a.value * b.value
      break
    case 'div':
      res = b.value !== 0 ? a.value / b.value : 'Cannot divide by zero'
      break
  }
  result.value = res

  // Send data to parent component
  props.onCalculate({
    a: a.value,
    b: b.value,
    method: method.value,
    result: res,
    time: new Date().toLocaleString(),
    id: Date.now()
  })
}
</script>

<template>
  <v-card class="mx-auto pa-6" max-width="600" elevation="3">
    <v-card-title class="text-h5 text-center text-primary">
      <v-icon left color="primary">mdi-calculator</v-icon>
      Calculation Form
    </v-card-title>
    
    <v-card-text>
      <v-row align="center" justify="center" class="mt-4">
        <v-col cols="12" sm="3">
          <v-text-field
            v-model.number="a"
            type="number"
            label="Input A"
            variant="outlined"
            density="comfortable"
            color="primary"
          />
        </v-col>
        
        <v-col cols="12" sm="3">
          <v-select
            v-model="method"
            :items="methodOptions"
            label="Select Method"
            variant="outlined"
            density="comfortable"
            color="primary"
          />
        </v-col>
        
        <v-col cols="12" sm="3">
          <v-text-field
            v-model.number="b"
            type="number"
            label="Input B"
            variant="outlined"
            density="comfortable"
            color="primary"
          />
        </v-col>
        
        <v-col cols="12" sm="3">
          <v-btn
            :disabled="!canCalculate"
            color="primary"
            size="large"
            variant="elevated"
            block
            @click="calculate"
          >
            <v-icon left>mdi-equal</v-icon>
            Calculate
          </v-btn>
        </v-col>
      </v-row>
      
      <v-divider class="my-6" />
      
      <v-fade-transition>
        <v-alert
          v-if="result !== null"
          type="success"
          variant="tonal"
          prominent
          class="text-center"
        >
          <template #title>
            <v-icon left>mdi-check-circle</v-icon>
            Result
          </template>
          <div class="text-h4 mt-2">{{ result }}</div>
        </v-alert>
      </v-fade-transition>
    </v-card-text>
  </v-card>
</template>