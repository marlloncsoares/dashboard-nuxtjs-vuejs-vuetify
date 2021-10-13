<template>
  <section class="page-index">
    <div>
      <Breadcrumbs :items="itemsForBreadcrumbs" />
    </div>
  </section>
</template>

<script lang="ts">
// Imports
import { defineComponent } from '@nuxtjs/composition-api'
// Types
import { BreadcrumbsItem } from '@/types/ComponentsTypes'

// UI Components
import { Breadcrumbs } from '@/components/UI'

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
    Breadcrumbs
  },

  setup () {
    return {
      itemsForBreadcrumbs
    }
  }
})
</script>
