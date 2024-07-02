/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import path from 'path'
// https://vitest.dev/config/
export default defineConfig({
    test: {},
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
        },
    },
})
