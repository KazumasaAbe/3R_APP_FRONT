<template>
<div>
  <headerComponent :isLogin="true" title="test" />
    <v-main style="background-color: #ffffff">
      <v-container fluid>
        <v-row align="center" justify="center" class="mt-7" align-content="center">
          <v-col cols="12">
            <v-img
              :src="require('../assets/logo.png')"
              contain
              height="146"
            />
          </v-col>
        </v-row>
        
        <v-row align="center" justify="center">
          <v-col xl="4" lg="4" md="6" sm="8" cols="12">
            <v-alert
              v-model="showErrorMsg"
              text
              color="red"
              transition="scale-transition"
              dismissible
              elevation="1"
            >
              {{ errMsg }}
            </v-alert>
            <v-card
              elevation="3"
              color="#f5f5f5"
              class="pa-2"
            >
              <v-card-text class="pb-0">
                <v-form>
                  <p class="ma-0 ml-1 mb-1 text-h5">
                    ユーザーID
                  </p>
                  <v-text-field
                    type="text"
                    v-model="userId"
                    outlined
                    flat
                    solo
                    required
                    class="text-border text-h6"
                    @keydown.enter="doLogin()"
                  />
                  <p class="ma-0 ml-1 mb-1 text-h5">
                    パスワード
                  </p>
                  <v-text-field
                    :type="passwordShow ? 'text' : 'password'"
                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="userPassword"
                    outlined
                    flat
                    solo
                    required
                    class="text-border text-h6"
                    @click:append="passwordShow = !passwordShow"
                    @keydown.enter="doLogin()"
                  />
                </v-form>
              </v-card-text>

              <v-card-actions class="mt-0">
                <v-spacer />
                  <v-btn
                    text
                    dark
                    rounded
                    elevation="0"
                    color="#0091ac"
                    class="body-1 text-decoration-underline text-border"
                    @click="doChangePassword()"
                  >
                    パスワードを忘れた方、変更したい方はこちら
                  </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-8">
          <v-col align="center" justify="center">
            <v-btn
              dark
              rounded
              elevation="0"
              color="#0091ac"
              width="250"
              height="60"
              class="text-h5 text-border"
              :loading="isLoading"
              @click="doLogin()"
            >
              ログイン
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'

export default {
  name: 'Home',
  components: {
    headerComponent
  },
  data: function() {
    return {
      userId: '',
      userPassword: '',
      passwordShow: false,
      showErrorMsg: false,
      isLoading: false,
      errMsg: "error"
    }
  },

  methods: {
    doLogin: async function() {
      console.log(1)
    },
    doChangePassword: function() {
      this.$router.replace({ name: 'change'})
    }
  }
}
</script>
