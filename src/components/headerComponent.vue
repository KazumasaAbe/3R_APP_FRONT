<template>
<div class="header">
  <v-app-bar
    app
    dense
    flat
    elevation="1"
    hide-on-scroll
    color="#ffffff"
  >
    <v-app-bar-nav-icon
      v-if="isLogin"
      @click="drawer = true"
      :disabled="isPageMove || isMenuUse"
    >
    </v-app-bar-nav-icon>

    <span class="ml-2 text-h6">
      {{ title }}
    </span>
    <v-spacer />
    <span v-if="isLogin">
      安部
      <v-btn
        depressed
        color="#0091ac"
        rounded
        dark
        class="ml-3 body-1 text-color-white"
        @click="doLogout(userInfo, token, userInfo.id)"
        :disabled="isPageMove"
      >
        ログアウト
      </v-btn>
    </span>
  </v-app-bar>
  
  <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    dark
    width="400"
    :expend-on-hover="expandOnHover"
    app
  >
    <v-list nav expand>
      <v-list-item>
        <v-img
        :src="require('../assets/logo.png')"
          height="80"
          contain
        />
      </v-list-item>

      <v-divider />
      <v-list-item
        link to="./menu"
      >
        <v-list-item-icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="text-h6">ホーム</v-list-item-title>
      </v-list-item>
       <v-list-item
        link to="./test"
      >
        <v-list-item-icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="text-h6">testPage</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>

export default {
  name: 'headerComponent',
  props: {
    isLogin: {
      type: Boolean
    },
    title: {
      type: String
    },
    isPageMove: {
      type: Boolean,
      default: false
    },
    isMenuUse: {
      type: Boolean,
      default: false
    }
  },

  data: function() {
    return {
      userName: 'ログインユーザー',
      drawer: false,
      barColor: false,
      expandOnHover: false
    }
  }
}
</script>
