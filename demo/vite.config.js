import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/isometric-css',
    plugins: [
        svgr(),
        react()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    build: {
        assetsInlineLimit: 0,
    },
    server: {
        open: true,
        port: 3000,
    },
});