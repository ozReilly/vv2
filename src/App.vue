<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue'

import { init } from './tools'
const state = reactive({
  mnoc: '',
  btcoin: null,
  eth: null,
  tron: null,
  xrpl: null,
  nervos: null,
  Polkadot:null,
  Kusama:null,
  Cosmos:null,
})
const btnhandle = async () => {
  console.log('btnhandlebtnhandlebtnhandlebtnhandle----');
  const res = await init(state.mnoc)
  state.btcoin = res?.btc
  state.mnoc = res?.btc?.mnoc
  state.eth = res?.eth
  state.tron = res?.tron
  state.xrpl = res?.xrpl
  state.nervos = res?.nervos
  state.Polkadot = res?.Polkadot
  state.Kusama = res?.Kusama
  state.Cosmos = res?.Cosmos
  console.log('btnhandlebtnhandlebtnhandlebend----', res);
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
  <table v-if="state.btcoin">
    <thead>
      <tr>
        <td :colspan="Object.keys(state?.btcoin).length">
          btc信息:
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state?.btcoin)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state?.btcoin)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <table v-if="state.eth">
    <thead>
      <tr>
        <td :colspan="Object.keys(state?.eth).length">
          eth信息:
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state?.eth)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state?.eth)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <table v-if="state.tron">
    <thead>
      <tr>
        <td :colspan="Object.keys(state?.tron).length">
          tron信息:
        </td>
      </tr>

    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state?.tron)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state?.tron)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <table v-if="state.xrpl">
    <thead>
      <tr>
        <td :colspan="Object.keys(state?.xrpl).length">
          xrpl信息:
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state?.xrpl)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state?.xrpl)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>
  
  <table v-if="state.nervos">
    <thead>
      <tr>
        <td :colspan="Object.keys(state.nervos).length">
         nervos信息:
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state.nervos)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state.nervos)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <table v-if="state.Polkadot">
    <thead>
      <tr>
        <td :colspan="Object.keys(state.Polkadot).length">
          Polkadot信息:
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state.Polkadot)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state.Polkadot)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="state.Kusama">
    <thead>
      <tr>
        <td :colspan="Object.keys(state.Kusama).length">
          Kusama信息:
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state.Kusama)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state.Kusama)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>

  <table v-if="state.Cosmos">
    <thead>
      <tr>
        <td :colspan="Object.keys(state.Cosmos).length">
          Cosmos信息:
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="item in Object.keys(state.Cosmos)" :key="item">
          {{ item }}
        </td>
      </tr>
      <tr>
        <td v-for="item in Object.values(state.Cosmos)" :key="item">{{ item }}</td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped lang="scss">
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

table {
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: 15px;

  thead {
    background-color: aqua;
    color: #000;
    font-weight: 900;
  }

  td {
    border: 1px solid #DDD;
    word-break: break-all;
    padding: 10px;
  }

  tr {
    &:nth-child(even) {
      background-color: chartreuse;
    }

    &::nth-child(odd) {
      background-color: beige;
    }
  }
}
</style>
