// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })


import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {nodePolyfills} from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [vue(), nodePolyfills()],
  resolve: {
    alias: {
      process: 'vite-plugin-node-polyfills/shims/process',
      buffer: 'vite-plugin-node-polyfills/shims/buffer',
      crypto: 'vite-plugin-node-polyfills/shims/crypto',
    },
  },
});