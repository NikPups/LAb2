import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // Убедитесь, что сервер использует UTF-8
        charset: 'utf-8',
    },
    build: {
        // Убедитесь, что сборка использует UTF-8
        charset: 'utf-8',
    },
});