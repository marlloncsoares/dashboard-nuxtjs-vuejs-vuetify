<template>
  <div class="profile-menu">
    <div class="profile-menu__avatar">
      <v-avatar>
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="Nome do usuário"
        >
      </v-avatar>
    </div>

    <div class="profile-menu__dropdown">
      <v-menu
        transition="slide-y-transition"
        bottom
        offset-y
        :close-on-content-click="false"
        :nudge-width="300"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            icon
            v-on="on"
          >
            <v-icon>$chevronDown</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Nome do usuário</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  :class="''"
                  icon
                  @click="false"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider />

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch
                  color="purple"
                />
              </v-list-item-action>
              <v-list-item-title>Enable messages</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-switch
                  color="purple"
                />
              </v-list-item-action>
              <v-list-item-title>Enable hints</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer />

            <v-btn
              text
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="menu = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './css/style.scss';
</style>
