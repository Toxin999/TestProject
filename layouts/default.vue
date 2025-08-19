<template>
  <v-app>
    <v-app-bar color="primary" dark elevation="4">
      <v-app-bar-nav-icon variant="text" />
      
      <v-app-bar-title>
        <NuxtLink to="/" class="text-decoration-none text-white">
          <v-icon left>mdi-calculator-variant</v-icon>
          My Nuxt App
        </NuxtLink>
      </v-app-bar-title>

      <v-spacer />

      <v-btn
        to="/"
        variant="text"
        prepend-icon="mdi-home"
      >
        Home
      </v-btn>

      <v-btn
        to="/calculatorApp"
        variant="text"
        prepend-icon="mdi-calculator"
      >
        Calculator
      </v-btn>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>

    <v-footer color="primary" dark class="text-center">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          <p>&copy; 2025 My Nuxt App. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
/* Remove all old CSS since we're using Vuetify */
</style>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand .brand-link {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: #3498db;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
}

.app-footer {
  background-color: #34495e;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

.app-footer p {
  margin: 0;
}
</style>
