// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })


import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import wasm from 'vite-plugin-wasm';
export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills(),
    wasm()
  ],
  resolve: {
    alias: {
      process: 'vite-plugin-node-polyfills/shims/process',
      buffer: 'vite-plugin-node-polyfills/shims/buffer',
      crypto: 'vite-plugin-node-polyfills/shims/crypto',
    },
  },
  build: {
    target: ['esnext'],  // 或者直接用 es2022 或更高
  },
});
