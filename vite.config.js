import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import stylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    react(), // Add this if using React
    stylelintPlugin({
      include: ['src/scss/**.scss'], // Adjust for your project
    }),
  ],
  build: {
    rollupOptions: {
      // Optional: Customize Rollup options for the production build
    },
  },
  server: {
    open: true
  },
});
