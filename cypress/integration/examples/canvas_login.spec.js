describe('Acessa o Canvas', function() {
    it('Visita a página Canvas e loga', function () {
        cy.visit('https://unisinos.instructure.com/login/canvas')
        cy.get('.asav_button_login').click()
        cy.get('.fullWidth').type('joseane@edu.unisinos.com.br').should('have.value', 'joseane@edu.unisinos.com.br')
       // cy.contains('type').click()
       // cy.url().should('include', 'commands/actions')
       // cy.get('.fullWidth').type('joseane@edu.unisinos.com.br').should('have.value', 'joseane@edu.unisinos.com.br')
    })
})