// cypress/support/e2e.ts
// ignore any uncaught exception from the app
Cypress.on('uncaught:exception', () => false)
