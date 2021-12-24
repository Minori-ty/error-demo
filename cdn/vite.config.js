import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'
import html from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        html({
            minify: true,
        }),
    ],
    build: {
        // 取消计算文件大小，加快打包速度
        brotliSize: false,
        rollupOptions: {
            // 配置CDN
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
