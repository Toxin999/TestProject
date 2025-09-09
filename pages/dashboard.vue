<script setup>
useHead({
  title: 'Dashboard'
})

const { t } = useI18n()

const stats = [
  {
    title: t('dashboard.stats.totalTasks'),
    value: '24',
    icon: 'mdi-clipboard-text',
    color: 'primary',
    change: '+8%'
  },
  {
    title: t('dashboard.stats.activeSessions'),
    value: '3',
    icon: 'mdi-account-multiple',
    color: 'success',
    change: '+5%'
  },
  {
    title: t('dashboard.stats.appUsage'),
    value: '24h',
    icon: 'mdi-clock',
    color: 'info',
    change: '+8%'
  },
  {
    title: t('dashboard.stats.featuresUsed'),
    value: '6',
    icon: 'mdi-feature-search',
    color: 'warning',
    change: '+2%'
  }
]

const recentActivity = [
  {
    action: t('dashboard.activity.taskCreated'),
    time: `2 ${t('dashboard.activity.minutesAgo')}`,
    icon: 'mdi-plus-circle',
    color: 'primary'
  },
  {
    action: t('dashboard.activity.taskCompleted'),
    time: `15 ${t('dashboard.activity.minutesAgo')}`,
    icon: 'mdi-check-circle',
    color: 'success'
  },
  {
    action: t('dashboard.activity.settingsUpdated'),
    time: `1 ${t('dashboard.activity.hourAgo')}`,
    icon: 'mdi-cog',
    color: 'info'
  },
  {
    action: t('dashboard.activity.appLaunched'),
    time: `2 ${t('dashboard.activity.hoursAgo')}`,
    icon: 'mdi-rocket-launch',
    color: 'success'
  }
]
</script>

<template>
  <v-container fluid>
    <!-- Page Header -->
    <v-row class="mb-6">
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between">
          <div>
            <h1 class="text-h3 font-weight-bold text-primary">{{ $t('dashboard.title') }}</h1>
            <p class="text-h6 text-grey-darken-1 mt-2">{{ $t('dashboard.subtitle') }}</p>
          </div>
          <v-btn
            color="primary"
            variant="elevated"
            prepend-icon="mdi-refresh"
          >
            {{ $t('dashboard.refresh') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Stats Cards -->
    <v-row class="mb-6">
      <v-col
        v-for="stat in stats"
        :key="stat.title"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card elevation="2" hover>
          <v-card-text>
            <div class="d-flex align-center justify-space-between">
              <div>
                <p class="text-caption text-grey-darken-1 mb-1">{{ stat.title }}</p>
                <p class="text-h4 font-weight-bold mb-0">{{ stat.value }}</p>
                <div class="d-flex align-center mt-2">
                  <v-chip
                    size="small"
                    color="success"
                    variant="tonal"
                  >
                    {{ stat.change }}
                  </v-chip>
                </div>
              </div>
              <v-avatar
                size="60"
                :color="stat.color"
                variant="tonal"
              >
                <v-icon size="30">{{ stat.icon }}</v-icon>
              </v-avatar>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main Content Row -->
    <v-row>
      <!-- Recent Activity -->
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title class="d-flex align-center">
            <v-icon left color="primary">mdi-clock-outline</v-icon>
            {{ $t('dashboard.recentActivity') }}
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(activity, index) in recentActivity"
                :key="index"
                class="px-0"
              >
                <template #prepend>
                  <v-avatar
                    size="40"
                    :color="activity.color"
                    variant="tonal"
                  >
                    <v-icon>{{ activity.icon }}</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title>{{ activity.action }}</v-list-item-title>
                <v-list-item-subtitle>{{ activity.time }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Quick Actions -->
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title class="d-flex align-center">
            <v-icon left color="primary">mdi-lightning-bolt</v-icon>
            {{ $t('dashboard.quickActions') }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-btn
                  to="/tasks"
                  color="primary"
                  variant="tonal"
                  block
                  size="large"
                  prepend-icon="mdi-clipboard-text"
                  class="mb-3"
                >
                  {{ $t('dashboard.actions.openTasks') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  to="/settings"
                  color="info"
                  variant="tonal"
                  block
                  size="large"
                  prepend-icon="mdi-cog"
                  class="mb-3"
                >
                  {{ $t('dashboard.actions.settings') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  color="success"
                  variant="tonal"
                  block
                  size="large"
                  prepend-icon="mdi-download"
                  class="mb-3"
                >
                  {{ $t('dashboard.actions.exportData') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  color="warning"
                  variant="tonal"
                  block
                  size="large"
                  prepend-icon="mdi-help-circle"
                  class="mb-3"
                >
                  {{ $t('dashboard.actions.helpCenter') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Info Row -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title class="d-flex align-center">
            <v-icon left color="primary">mdi-information</v-icon>
            {{ $t('dashboard.systemInfo') }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <div class="text-center">
                  <v-icon size="40" color="success" class="mb-2">mdi-check-circle</v-icon>
                  <p class="text-h6 font-weight-bold">{{ $t('dashboard.system.status') }}</p>
                  <p class="text-body-2 text-success">{{ $t('dashboard.system.operational') }}</p>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="text-center">
                  <v-icon size="40" color="info" class="mb-2">mdi-update</v-icon>
                  <p class="text-h6 font-weight-bold">{{ $t('dashboard.system.lastUpdated') }}</p>
                  <p class="text-body-2 text-grey-darken-1">Today at 10:30 AM</p>
                </div>
              </v-col>
              <v-col cols="12" md="4">
                <div class="text-center">
                  <v-icon size="40" color="primary" class="mb-2">mdi-speedometer</v-icon>
                  <p class="text-h6 font-weight-bold">{{ $t('dashboard.system.performance') }}</p>
                  <p class="text-body-2 text-grey-darken-1">{{ $t('dashboard.system.excellent') }}</p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>