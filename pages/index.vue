<script setup>
useHead({
  title: 'Home'
})

const { t } = useI18n()

const features = [
  {
    title: t('home.features.pages.title'),
    icon: 'mdi-file-document-outline',
    color: 'primary',
    description: t('home.features.pages.description')
  },
  {
    title: t('home.features.components.title'),
    icon: 'mdi-puzzle-outline',
    color: 'success',
    description: t('home.features.components.description')
  },
  {
    title: t('home.features.layouts.title'),
    icon: 'mdi-palette-outline',
    color: 'info',
    description: t('home.features.layouts.description')
  }
]

const technologies = [
  { name: 'Nuxt 3', icon: 'mdi-nuxt', color: 'success' },
  { name: 'Vue 3', icon: 'mdi-vuejs', color: 'success' },
  { name: 'Vuetify', icon: 'mdi-vuetify', color: 'primary' },
  { name: 'TypeScript', icon: 'mdi-language-typescript', color: 'info' }
]
</script>

<template>
  <v-container fluid>
    <!-- Hero Section -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="10" lg="8">
        <v-card
          class="text-center pa-8"
          elevation="0"
          color="transparent"
        >
          <v-card-text>
            <div class="text-h2 text-primary font-weight-bold mb-4">
              {{ $t('home.welcome') }}
            </div>
            <div class="text-h5 text-grey-darken-1 mb-6">
              {{ $t('home.description') }}
            </div>
            <v-btn
              to="/tasks"
              color="primary"
              size="large"
              variant="elevated"
              prepend-icon="mdi-clipboard-text"
              class="ma-2"
            >
              {{ $t('home.tryTasks') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Features Section -->
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card elevation="2">
          <v-card-title class="text-h4 text-center text-primary">
            {{ $t('home.gettingStarted') }}
          </v-card-title>
          <v-card-subtitle class="text-center mb-4">
            {{ $t('home.editPage') }} <code class="bg-grey-lighten-2 pa-1 rounded">pages/index.vue</code>
          </v-card-subtitle>
          
          <v-card-text>
            <v-row>
              <v-col
                v-for="feature in features"
                :key="feature.title"
                cols="12"
                md="4"
              >
                <v-card
                  class="h-100 text-center"
                  elevation="1"
                  hover
                >
                  <v-card-text class="pa-6">
                    <v-avatar
                      size="80"
                      :color="feature.color"
                      class="mb-4"
                    >
                      <v-icon size="40" color="white">{{ feature.icon }}</v-icon>
                    </v-avatar>
                    <div class="text-h6 font-weight-bold mb-3">{{ feature.title }}</div>
                    <p class="text-body-2 text-grey-darken-1">{{ feature.description }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Technology Section -->
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10" lg="8">
        <v-card elevation="2">
          <v-card-title class="text-h4 text-center text-primary">
            <v-icon left>mdi-rocket-launch</v-icon>
            {{ $t('home.technologies') }}
          </v-card-title>
          
          <v-card-text>
            <v-row justify="center">
              <v-col
                v-for="tech in technologies"
                :key="tech.name"
                cols="12"
                sm="6"
                md="3"
              >
                <v-chip
                  size="large"
                  :color="tech.color"
                  variant="tonal"
                  class="ma-1"
                  block
                >
                  <v-icon left>{{ tech.icon }}</v-icon>
                  {{ tech.name }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>