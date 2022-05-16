<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- ごちゃごちゃしていたのを全て消して、ボタンを配置 -->
    <button @click='post'>click me</button>
  </div>
</template>

<script>
import axios from 'axios';
import config from '@/plugins/appConfig.js';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // サーバーから返ってくる値をログに出力したいのでasyncとawaitを行う
    async post() {
      await axios.request({
        method: "GET",
        url: config.API_URL + '/test'
      })
      .then(async(response) => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>