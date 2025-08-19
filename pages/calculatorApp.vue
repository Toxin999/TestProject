<!-- <template>
  <div>
    <h1>About Us</h1>
    <p>This is the about page of your Nuxt application.</p>
    
    <section>
      <h2>About This App</h2>
      <p>This Nuxt 3 application demonstrates:</p>
      <ul>
        <li>File-based routing with the pages directory</li>
        <li>Layout system for consistent page structure</li>
        <li>Component organization</li>
        <li>Modern Vue 3 Composition API</li>
      </ul>
    </section>

    <section>
      <h2>Technologies Used</h2>
      <ul>
        <li>Nuxt 3</li>
        <li>Vue 3</li>
        <li>TypeScript</li>
        <li>Modern CSS</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'About Page',
  layout: 'default'
})
</script>

<style scoped>
h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

h2 {
  color: #34495e;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

section {
  margin-top: 2rem;
}

ul {
  margin-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}
</style> -->
<script setup>
import { ref } from 'vue'
import CalculatorForm from '~/components/CalculatorForm.vue'
import CalculationHistory from '~/components/CalculationHistory.vue'

const calculationHistory = ref([])
const recallCalculation = ref(null)

function handleCalculate(data) {
  calculationHistory.value.unshift(data)
  recallCalculation.value = null // reset after calculation
}

function handleDelete(id) {
  calculationHistory.value = calculationHistory.value.filter(item => item.id !== id)
}

function handleRecall(item) {
  recallCalculation.value = { ...item }
}
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="mx-auto mb-6" max-width="800" elevation="2">
          <v-card-title class="text-h4 text-center text-primary">
            <v-icon left color="primary" size="large">mdi-calculator-variant</v-icon>
            Calculator
          </v-card-title>
          <v-card-subtitle class="text-center text-grey-darken-1">
            Basic calculation system with operation history
          </v-card-subtitle>
        </v-card>
        
        <CalculatorForm
          :on-calculate="handleCalculate"
          :recall-calculation="recallCalculation"
        />
        
        <CalculationHistory
          :history="calculationHistory"
          :on-delete="handleDelete"
          :on-recall="handleRecall"
        />
      </v-col>
    </v-row>
  </v-container>
</template>