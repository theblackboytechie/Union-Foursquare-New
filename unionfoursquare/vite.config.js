import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/publicpages.css',
                'resources/css/backendcss.css',
                'resources/js/app.js',
                'resources/js/buildjs.js',
                'resources/js/backendcrud.js'
            ],
            refresh: true,
        }),
    ],
});
