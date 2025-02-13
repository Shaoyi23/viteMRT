import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
    reporters: ['default', 'html'],
		coverage: {
			enabled: true,
			provider: 'v8',
			cleanOnRerun: true,
			reporter: ['text', 'json', 'html'],
		},
  },
});