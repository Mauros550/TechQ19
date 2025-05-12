import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // your end-to-end tests
    specPattern: 'cypress/e2e/**/*.cy.ts',
    baseUrl: 'http://127.0.0.1:3000',
    supportFile: 'cypress/support/e2e.ts',
  },

  component: {
    // your component tests
    specPattern: 'cypress/component/**/*.cy.tsx',

    // tell Cypress where your component support file lives
    supportFile: 'cypress/support/component.ts',

    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
