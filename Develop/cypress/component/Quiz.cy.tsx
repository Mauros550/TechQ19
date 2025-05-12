import { mount } from 'cypress/react18'
import Quiz from '../../client/src/components/Quiz'

describe('Quiz Component', () => {
  beforeEach(() => {
    // stub the GET /api/questions/random to return your fixture array
    cy.intercept('GET', '/api/questions/random*', { fixture: 'questions.json' })
  })

  it('renders the start button', () => {
    mount(<Quiz />)
    cy.contains('Start Quiz').should('be.visible')
  })

  it('shows the first question when started', () => {
    mount(<Quiz />)
    cy.contains('Start Quiz').click()
    cy.fixture('questions.json').then((qs) => {
      cy.contains(qs[0].question).should('be.visible')
    })
  })
})

