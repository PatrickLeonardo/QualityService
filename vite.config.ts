import { defineConfig } from 'vite'
// @ts-ignore:next-line
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                about: './sobre.html',
            },
        },
    },
    server: {
        port: 5173,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }, 
})
