<script setup>
useHead({
  title: 'Settings & Profile'
})

const { t } = useI18n()

const user = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: '',
  role: 'User',
  joinDate: 'January 2025'
})

const preferences = ref({
  theme: 'light',
  notifications: true,
  autoSave: true,
  language: 'English',
  calculatorHistory: 50,
  soundEffects: false
})

const themes = [
  { title: t('settings.themes.light'), value: 'light' },
  { title: t('settings.themes.dark'), value: 'dark' },
  { title: t('settings.themes.auto'), value: 'auto' }
]

const languages = [
  { title: t('languages.english'), value: 'English' },
  { title: t('languages.lao'), value: 'Lao' }
]

const saveProfile = () => {
  // Simulate saving
  console.log('Profile saved:', user.value)
}

const savePreferences = () => {
  // Simulate saving
  console.log('Preferences saved:', preferences.value)
}

const exportData = () => {
  // Simulate data export
  console.log('Exporting user data...')
}

const deleteAccount = () => {
  // Simulate account deletion
  console.log('Account deletion requested...')
}
</script>

<template>
  <v-container fluid>
    <!-- Page Header -->
    <v-row class="mb-6">
      <v-col cols="12">
        <div class="d-flex align-center">
          <div>
            <h1 class="text-h3 font-weight-bold text-primary">{{ $t('settings.title') }}</h1>
            <p class="text-h6 text-grey-darken-1 mt-2">{{ $t('settings.subtitle') }}</p>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <!-- Profile Section -->
      <v-col cols="12" md="6">
        <v-card elevation="2" class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon left color="primary">mdi-account</v-icon>
            {{ $t('settings.profile.title') }}
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="saveProfile">
              <div class="text-center mb-4">
                <v-avatar size="100" color="primary">
                  <v-icon size="50" color="white">mdi-account</v-icon>
                </v-avatar>
                <div class="mt-2">
                  <v-btn variant="text" color="primary">{{ $t('settings.profile.changeAvatar') }}</v-btn>
                </div>
              </div>

              <v-text-field
                v-model="user.name"
                :label="$t('settings.profile.fullName')"
                prepend-icon="mdi-account"
                variant="outlined"
                class="mb-3"
              ></v-text-field>

              <v-text-field
                v-model="user.email"
                :label="$t('settings.profile.email')"
                prepend-icon="mdi-email"
                type="email"
                variant="outlined"
                class="mb-3"
              ></v-text-field>

              <v-text-field
                v-model="user.role"
                :label="$t('settings.profile.role')"
                prepend-icon="mdi-badge-account"
                variant="outlined"
                readonly
                class="mb-3"
              ></v-text-field>

              <v-text-field
                v-model="user.joinDate"
                :label="$t('settings.profile.memberSince')"
                prepend-icon="mdi-calendar"
                variant="outlined"
                readonly
                class="mb-4"
              ></v-text-field>

              <v-btn
                type="submit"
                color="primary"
                variant="elevated"
                prepend-icon="mdi-content-save"
                block
              >
                {{ $t('settings.profile.saveProfile') }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Preferences Section -->
      <v-col cols="12" md="6">
        <v-card elevation="2" class="mb-6">
          <v-card-title class="d-flex align-center">
            <v-icon left color="primary">mdi-cog</v-icon>
            {{ $t('settings.preferences.title') }}
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="savePreferences">
              <v-select
                v-model="preferences.theme"
                :items="themes"
                :label="$t('settings.preferences.theme')"
                prepend-icon="mdi-palette"
                variant="outlined"
                class="mb-3"
              ></v-select>

              <v-select
                v-model="preferences.language"
                :items="languages"
                :label="$t('settings.preferences.language')"
                prepend-icon="mdi-translate"
                variant="outlined"
                class="mb-3"
              ></v-select>

              <v-text-field
                v-model.number="preferences.calculatorHistory"
                :label="$t('settings.preferences.calculatorHistory')"
                prepend-icon="mdi-history"
                type="number"
                variant="outlined"
                class="mb-3"
              ></v-text-field>

              <v-switch
                v-model="preferences.notifications"
                :label="$t('settings.preferences.notifications')"
                color="primary"
                class="mb-2"
              ></v-switch>

              <v-switch
                v-model="preferences.autoSave"
                :label="$t('settings.preferences.autoSave')"
                color="primary"
                class="mb-2"
              ></v-switch>

              <v-switch
                v-model="preferences.soundEffects"
                :label="$t('settings.preferences.soundEffects')"
                color="primary"
                class="mb-4"
              ></v-switch>

              <v-btn
                type="submit"
                color="success"
                variant="elevated"
                prepend-icon="mdi-check"
                block
              >
                {{ $t('settings.preferences.savePreferences') }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Security & Privacy Section -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="d-flex align-center">
            <v-icon left color="primary">mdi-shield-account</v-icon>
            {{ $t('settings.security.title') }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-btn
                  color="info"
                  variant="outlined"
                  block
                  prepend-icon="mdi-lock-reset"
                  class="mb-3"
                >
                  {{ $t('settings.security.changePassword') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-btn
                  color="warning"
                  variant="outlined"
                  block
                  prepend-icon="mdi-two-factor-authentication"
                  class="mb-3"
                >
                  {{ $t('settings.security.twoFactor') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-btn
                  color="success"
                  variant="outlined"
                  block
                  prepend-icon="mdi-download"
                  class="mb-3"
                  @click="exportData"
                >
                  {{ $t('settings.security.exportData') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-btn
                  color="error"
                  variant="outlined"
                  block
                  prepend-icon="mdi-delete-forever"
                  class="mb-3"
                  @click="deleteAccount"
                >
                  {{ $t('settings.security.deleteAccount') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Support Section -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="d-flex align-center">
            <v-icon left color="primary">mdi-help-circle</v-icon>
            {{ $t('settings.support.title') }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <div class="text-center">
                  <v-icon size="40" color="info" class="mb-2">mdi-book-open</v-icon>
                  <p class="text-h6 font-weight-bold">{{ $t('settings.support.documentation') }}</p>
                  <p class="text-body-2 text-grey-darken-1">{{ $t('settings.support.docDescription') }}</p>
                  <v-btn variant="text" color="info">{{ $t('settings.support.viewDocs') }}</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="text-center">
                  <v-icon size="40" color="success" class="mb-2">mdi-email</v-icon>
                  <p class="text-h6 font-weight-bold">{{ $t('settings.support.contactSupport') }}</p>
                  <p class="text-body-2 text-grey-darken-1">{{ $t('settings.support.supportDescription') }}</p>
                  <v-btn variant="text" color="success">{{ $t('settings.support.contactUs') }}</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="text-center">
                  <v-icon size="40" color="warning" class="mb-2">mdi-information</v-icon>
                  <p class="text-h6 font-weight-bold">{{ $t('settings.support.appVersion') }}</p>
                  <p class="text-body-2 text-grey-darken-1">{{ $t('settings.support.versionDescription') }}</p>
                  <v-btn variant="text" color="warning">{{ $t('settings.support.checkUpdates') }}</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>