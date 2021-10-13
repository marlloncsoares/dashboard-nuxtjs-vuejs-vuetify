<template>
  <v-breadcrumbs
    :items="items"
    large
  />
</template>

<script lang="ts">
// Libs
import { defineComponent } from '@nuxtjs/composition-api'

// Types
import { BreadcrumbsItem } from '~/types/ComponentsTypes'

export default defineComponent({
  props: {
    items: {
      type: Array as () => BreadcrumbsItem[],
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
  @import './css/style.scss';
</style>
