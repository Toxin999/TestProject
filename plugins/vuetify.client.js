import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#667eea',
            secondary: '#764ba2',
            accent: '#e83e8c',
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196f3',
            success: '#4caf50'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
