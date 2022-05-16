<template>
  <div>
    <headerComponent :isLogin="false" title="パスワード変更" />
    <v-main>
      <v-container>
        <v-row align="center" justify="center" class="mt-7">
          <v-col xl="4" lg="6" md="7" sm="8" cols="12">
            <v-card
              elevation="3"
              color="#f6f6f6"
              class="pa-2"
            >
              <v-card-text
                class="pb-0 px-15" 
              >
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
                  />
                  <p class="ma-0 ml-1 mb-1 text-h5">
                    仮パスワード（現在のパスワード）
                  </p>
                  <v-text-field
                    :type="temporaryPasswordShow ? 'text' : 'password'"
                    :append-icon="temporaryPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="temporaryPassword"
                    outlined
                    solo
                    required
                    class="text-border text-h6"
                    @click:append="temporaryPasswordShow = !temporaryPasswordShow"
                  />
                  <p class="ma-0 ml-1 mb-1 text-h5">
                    新しいパスワード
                  </p>
                  <v-text-field
                    :type="newPasswordShow ? 'text' : 'password'"
                    :append-icon="newPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="newPassword"
                    outlined
                    flat
                    solo
                    required
                    class="text-border text-h6"
                    @click:append="newPasswordShow = !newPasswordShow"
                  />
                  <p class="ma-0 ml-1 mb-1 text-h5">
                    パスワード再入力
                  </p>
                  <v-text-field
                    :type="rePasswordShow ? 'text' : 'password'"
                    :append-icon="rePasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="rePassword"
                    outlined
                    flat
                    solo
                    required
                    class="text-border text-h6"
                    @click:append="rePasswordShow = !rePasswordShow"
                  />
                </v-form>
              </v-card-text>

              <v-card-text align="center">
                <v-row justify="center" align-content="center">
                  <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                    <v-btn
                      dark
                      rounded
                      elevation="0"
                      color="#0091ac"
                      width="250"
                      height="60"
                      class="text-border text-h6"
                      :loading="isLoading"
                      @click="doChange()"
                    >
                      パスワードを変更する
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                    <v-btn
                      dark
                      rounded
                      required
                      elevation="0"
                      color="#90A4AE"
                      width="250"
                      height="60"
                      class="text-border text-h6"
                      @click="doCancel()"
                    >
                      キャンセル
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>  
  </div>  
</template>

<script>
  import headerComponent from "@/components/headerComponent.vue";
  
  export default {
    name: 'change',
    components: {
      headerComponent
    },
    data: function() {
      return {
        userId: '',
        temporaryPassword: '',
        temporaryPasswordShow: false,
        newPassword: '',
        newPasswordShow: false,
        rePassword: '',
        rePasswordShow: false,
        isLoading: false
      }
    },
    methods: {
      doChange() {
        console.log(1)
      },
      doCancel() {
        this.$router.replace({ name: 'login' })
      }
    }
  }
</script>