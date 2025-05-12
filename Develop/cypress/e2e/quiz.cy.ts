/// <reference types="cypress" />

import type { Question } from '../../client/src/models/Question'

describe('Tech Quiz App e2e', () => {
  it('lets me complete the quiz and restart', () => {
    cy.fixture<Question[]>('questions.json').then((allQs) => {
      const firstQ = allQs[0]

      // Stub the single quiz fetch to return your full array
      cy.intercept('GET', '**/api/questions/random*', {
        statusCode: 200,
        body: allQs,
      }).as('getQuiz')

      // Start the flow
      cy.visit('/')
      cy.contains('Start Quiz').click()
      cy.wait('@getQuiz')

      // Walk through each question (q is inferred as Question, a as your Answer type)
      allQs.forEach((q) => {
        cy.contains(q.question).should('be.visible')
        const correctIndex = q.answers.findIndex((a) => a.isCorrect) + 1
        cy.contains('button', correctIndex.toString()).click()
      })

      // Completion screen and restart
      cy.contains('Quiz Completed').should('be.visible')
      cy.contains('Your score:').should('exist')
      cy.contains('button', 'Take New Quiz').click()
      cy.wait('@getQuiz')
      cy.contains(firstQ.question).should('be.visible')
    })
  })
})
