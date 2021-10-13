<template>
  <section class="page">
    <div class="page-header">
      <!-- Breadcrumbs -->
      <Breadcrumbs class="page-header__breadcrumbs" :items="itemsForBreadcrumbs" />

      <!-- Campo de pesquisa -->
      <SearchCard class="page-header__search-card" />

      <!-- Notificações -->
      <NotificationBell class="page-header__notification" />

      <!-- Profile Menu -->
      <ProfileMenu class="page-header__profile-menu" />
    </div>
  </section>
</template>

<script lang="ts">
// Imports
import { defineComponent } from '@nuxtjs/composition-api'
// Types
import { BreadcrumbsItem } from '@/types/ComponentsTypes'

// UI Components
import {
  Breadcrumbs,
  SearchCard,
  NotificationBell,
  ProfileMenu
} from '@/components/UI'

const itemsForBreadcrumbs: BreadcrumbsItem[] = [
  {
    text: 'Dashboard',
    disabled: false,
    href: '#'
  },
  {
    text: 'Página',
    disabled: false,
    href: '#'
  }
]

export default defineComponent({
  components: {
    Breadcrumbs,
    SearchCard,
    NotificationBell,
    ProfileMenu
  },

  setup () {
    return {
      itemsForBreadcrumbs
    }
  }
})
</script>

<style lang="scss">
  @import '@/assets/css/global.scss';
  @import './index.scss';
</style>
