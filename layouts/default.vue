<template>
  <!-- App -->
  <v-app>
    <!-- Navegação do usuário (Navegação lateral) -->
    <NavigationDrawer :items="itemsForNavigationDrawer" />
    <!-- Conteúdo -->
    <v-main class="main-content">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
// Imports / Libs / components
import { defineComponent } from '@nuxtjs/composition-api'
// Components
import { NavigationDrawer } from '@/components/UI'
// Types
import { SideBarItem } from '@/types/ComponentsTypes'

// Variables / constants / data
const itemsForNavigationDrawer: SideBarItem[] = [
  {
    title: 'Menu 1',
    name: 'Menu',
    to: '',
    icon: '$asterisk'
  }
]

// Define component
export default defineComponent({
  // Components
  components: {
    NavigationDrawer
  },

  // Setup
  setup () {
    return {
      // Dados
      itemsForNavigationDrawer
    }
  }
})
</script>

<style lang="scss">
  @import './default.scss';
</style>
