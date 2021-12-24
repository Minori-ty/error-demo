import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import externalGlobals from 'rollup-plugin-external-globals'
import html from 'vite-plugin-html'
import viteCompression from 'vite-plugin-compression'
import vueJsx from '@vitejs/plugin-vue-jsx'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import ElementPlus from 'element-plus'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vueJsx(),
        importToCDN({
            modules: [
                autoComplete('vue'), // vue2 使用 autoComplete('vue2')
                // autoComplete('@vueuse/shared'),
                // autoComplete('@vueuse/core'),
                // {
                //     name: 'element-plus',
                //     var: 'ElementPlus',
                //     path: `/lib/index.full.js`,
                // },
            ],
        }),
        // AutoImport({
        //     resolvers: [ElementPlusResolver()],
        // }),
        // Components({
        //     resolvers: [ElementPlusResolver()],
        // }),
        html({
            minify: true,
        }),
        viteCompression({
            //生成压缩包gz
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    build: {
        brotliSize: false,
        rollupOptions: {
            external: ['element-plus', 'vue'],
            plugins: [
                externalGlobals({
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                }),
            ],
        },
    },
})
