<script setup>
const { locale, setLocale } = useI18n()
const drawer = ref(true)

const navigationItems = [
  {
    title: 'navigation.dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard',
    color: 'primary'
  },
  {
    title: 'navigation.tasks',
    icon: 'mdi-clipboard-text',
    to: '/tasks',
    color: 'orange'
  },
  {
    title: 'Hasura Test',
    icon: 'mdi-database',
    to: '/hasura-test',
    color: 'green'
  },
  {
    title: 'navigation.settings',
    icon: 'mdi-cog',
    to: '/settings',
    color: 'info'
  }
]

const changeLanguage = async (newLocale) => {
  await setLocale(newLocale)
}
</script>

<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      width="280"
      color="grey-lighten-5"
    >
      <!-- Drawer Header -->
      <v-list-item class="px-2 py-4">
        <template #prepend>
          <v-icon size="40" color="primary">mdi-octopus</v-icon>
        </template>
        <v-list-item-title class="text-h6 font-weight-bold">
          {{ $t('app.title') }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ $t('app.subtitle') }}
        </v-list-item-subtitle>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Navigation Items -->
      <v-list nav>
        <v-list-item
          v-for="item in navigationItems"
          :key="item.title"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="$t(item.title)"
          rounded="xl"
          class="mx-2 mb-2"
          :color="item.color"
        ></v-list-item>
      </v-list>

      <v-divider class="mt-4"></v-divider>

      <!-- Additional Links -->
      <v-list nav>
        <v-list-item
          to="/"
          prepend-icon="mdi-home"
          :title="$t('navigation.home')"
          rounded="xl"
          class="mx-2 mb-2"
        ></v-list-item>
      </v-list>

      <!-- Drawer Footer -->
      <template #append>
        <div class="pa-4 text-center">
          <v-chip
            color="primary"
            variant="tonal"
            size="small"
          >
            {{ $t('app.version') }}
          </v-chip>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar color="primary" dark elevation="4">
      <v-app-bar-nav-icon 
        variant="text" 
        @click="drawer = !drawer"
      />
      
      <v-app-bar-title>
        <NuxtLink to="/" class="text-decoration-none text-white">
          <v-icon left>mdi-octopus</v-icon>
          {{ $t('app.title') }}
        </NuxtLink>
      </v-app-bar-title>

      <v-spacer />

      <!-- Language Selector -->
      <v-menu offset-y>
        <template #activator="{ props }">
          <v-btn
            variant="text"
            v-bind="props"
            prepend-icon="mdi-translate"
            class="mr-2"
          >
            <span class="d-none d-sm-inline">{{ locale === 'en' ? 'English' : 'ລາວ' }}</span>
            <span class="d-sm-none">{{ locale === 'en' ? '🇺🇸' : '🇱🇦' }}</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="changeLanguage('en')"
            :class="{ 'v-list-item--active': locale === 'en' }"
          >
            <template #prepend>
              <span class="mr-2">🇺🇸</span>
            </template>
            <v-list-item-title>{{ $t('languages.english') }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="changeLanguage('lo')"
            :class="{ 'v-list-item--active': locale === 'lo' }"
          >
            <template #prepend>
              <span class="mr-2">🇱🇦</span>
            </template>
            <v-list-item-title>{{ $t('languages.lao') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Profile Button -->
      <v-btn
        to="/settings"
        variant="text"
        prepend-icon="mdi-account-circle"
        class="ml-1"
      >
        <span class="d-none d-sm-inline">{{ $t('navigation.profile') }}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer color="primary" dark class="text-center">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          <p>&copy; 2025 KrakenTasks. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
/* Remove all old CSS since we're using Vuetify */
</style>
