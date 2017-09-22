<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{hello}}</h2>
    <h2>{{hello + '加上的字'}}</h2>
    <input type="text" v-model="hello" />
    <input type="checkbox" v-model="toggle"/>{{ toggle }}

    <h2>Essential Links</h2>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      // 1. data 這裡就是 model 存放一些資料
      // 這邊的資料與 tmplate 可以做雙向綁定
      msg: 'Welcome to Your Vue.js App',
      hello: 'Hello Vue 2.0 !',
      toggle: true
    }
  }
}
</script>


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
