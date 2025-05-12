// cypress/support/component.ts
// same global exception handler for component tests
Cypress.on('uncaught:exception', () => false)
