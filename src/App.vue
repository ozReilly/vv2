<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {reactive} from 'vue'

import {init} from './tools'
const state = reactive({
  mnoc:'',
  btcoin:null,
  eth:null
})
const btnhandle = () => {
  console.log('btnhandlebtnhandlebtnhandlebtnhandle----');
  const res = init(state.mnoc)
  state.btcoin = res?.btc
  state.mnoc = res?.btc?.mnoc
  state.eth = res?.eth
  console.log('btnhandlebtnhandlebtnhandlebend----',res);
}
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
   <button @click="btnhandle">test init btcoin、eth</button>
   <div>我的助记词呢: {{ state.mnoc }}</div>
   <div>btc信息: {{ state.btcoin }}</div>
   <hr>
   <div>eth信息: {{ state.eth }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
