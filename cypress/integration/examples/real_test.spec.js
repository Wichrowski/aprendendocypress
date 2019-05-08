/// <reference types="Cypress" />

describe('Primeiro teste real', function() {
    it('Visita a página Kitchen Sink e acha a palavra "type", clica nela e preenche o e-mail', function () {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()
        cy.url().should('include', 'commands/actions')
        cy.get('.action-email').type('joseane@a.com').should('have.value', 'joseane@a.com')
    })
})