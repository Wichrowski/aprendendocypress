describe('Acessa o Canvas', function() {
    it('Visita a página Canvas e loga', function () {
        cy.visit('http://www.unisinos.br/component/autenticador/')
        cy.get('#txtUsuario').type('Joseane').should('have.value', 'Joseane')
        cy.get('#txtSenha').type('Huntress%4')
        cy.get('#btnLogin').click()

       // cy.contains('type').click()
       // cy.url().should('include', 'commands/actions')
       // cy.get('.fullWidth').type('joseane@edu.unisinos.com.br').should('have.value', 'joseane@edu.unisinos.com.br')
    })
})