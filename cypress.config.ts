import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'results/mochawesome',
    overwrite: false,
    html: false,
    json: true
  },
  video: false,
  retries: 3,
  e2e: {
    baseUrl: 'http://localhost:4173'
  }
});
