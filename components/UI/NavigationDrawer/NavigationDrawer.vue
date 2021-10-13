<template>
  <v-navigation-drawer
    ref="drawer"
    permanent
    fixed
    width="240"
    class="list-menu"
    :mini-variant.sync="activeMiniVariant"
    @mouseleave.native="mouseLeave"
    @mouseenter.native="activeMiniVariant = false, menuIn = true"
  >
    <v-list-item class="header">
      <v-list-item-avatar v-if="activeMiniVariant" class="menu-logo">
        <img src="" alt="Brand Logo">
      </v-list-item-avatar>
      <v-menu
        v-model="showMenu"
        offset-y
        open-on-hover
        class="ml-2"
      >
        <template #activator="{ on: onMenu, attrs, value }">
          <button
            class="d-flex align-center"
            v-bind="attrs"
            v-on="onMenu"
          >
            <img
              width="160px"
              src=""
              alt="brand logo"
            >
            <v-icon
              size="18"
              :class="{'menu-icon--active': value}"
              class="ml-3"
              color="#FFFFFF"
            >
              $chevronDown
            </v-icon>
          </button>
        </template>
        <v-list>
          <v-list-item>
            <a
              :href="shiftUrl"
              target="_blank"
            >
              <img
                width="140px"
                src=""
                alt="brand logo"
              >
            </a>
          </v-list-item>
          <v-list-item>
            <a
              :href="gopayUrl"
              target="_blank"
            >
              <img
                width="137px"
                src=""
                alt="brand logo"
              >
            </a>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
    <v-list>
      <template v-for="item in items">
        <v-list-item
          :key="item.title"
          :to="!item.disabled ? item.to : undefined"
          :link="!item.disabled"
          active-class="menu--active"
        >
          <v-list-item-icon>
            <v-icon :disabled="item.disabled" class="main-navigation__icon" size="20">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-title class="main-navigation__title" :class="{ 'grey--text': item.disabled }">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
// Libs
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'

// Types
import { SideBarItem } from '@/types'
// import { logout } from '@/helpers'

export default defineComponent({
  props: {
    items: {
      type: Array as () => SideBarItem[],
      required: true
    }
  },
  setup () {
    const activeMiniVariant = ref(true)
    const item = ref([])
    const showMenu = ref(false)
    const menuIn = ref(false)
    const shiftUrl = process.env.SHIFT_URL
    const gopayUrl = process.env.GOPAY_URL

    watch(showMenu, (value) => {
      if (!menuIn.value && !value) {
        activeMiniVariant.value = true
      }
    })

    const mouseLeave = () => {
      if (!showMenu.value) {
        activeMiniVariant.value = true
      }
      menuIn.value = false
    }

    return {
      showMenu,
      activeMiniVariant,
      item,
      // logout,
      mouseLeave,
      menuIn,
      shiftUrl,
      gopayUrl
    }
  }
})
</script>

<style lang="scss" scoped>
  @import '@/assets/css/global.scss';
  @import './css/style.scss';
</style>
