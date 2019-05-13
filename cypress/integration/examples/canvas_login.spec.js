describe('Acessa o Canvas', function() {
    it('Visita a página Canvas e loga', function () {
        cy.visit('https://adfs.asav.org.br/adfs/ls/?SAMLRequest=fZJdT8IwFIbv%2FRVL7%2FcNRJptCUKMJKgEphfemK47gyZbiz0t6r%2B3GxrxQm7fvs95z0czZF17oDNr9nIDbxbQeB9dK5EODzmxWlLFUCCVrAOkhtPt7H5FkyCiB62M4qolZ8hlgiGCNkJJ4i0XOXmtalaNJ1XqN1A3%2Foiz2L%2BeNonP4zhJqsmkaTgQ7xk0OiYnroQDES0sJRomjZOieOpHYz9OyyimaUpHkxfiLdwcQjIzUHtjDkjDkNUNBgzZMVB6F1R6EMIWQ%2BLNfvqaK4m2A70FfRQcnjarX95KgUIqDIQL15YbqyHgqgtbtRMy7Kcn3vp7JzdC1kLuLq%2BjOpmQ3pXl2l8%2FbktSZH0dOgypiz76UnLvTbLwHMlOF31wYcvFWrWCf3q3SnfM%2FN9LHMSDImq%2FGazUSjwAF42A2m2nbdX7XAMzkBOXDyQsTqF%2Ff05x9QU%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=62rw8%2B%2BAvm6WrCp8LWhlDBi3fhssns%2FfNIzJqXxGA8LM2gsVJomQV1eEB1pcSVPU326YDCG7gwQJO6iM3A1fayP9OREuWyqozxq9HazNs7uqjB2NdUA4CUwQzNaA1SGP5GYsYqIGwaTfMRMMEFjzkYN1QaNHhBRp6qEaPVfcjqkSm0J27eLgZx2wX6ELNuqQNOPN%2FYIg1Oj2D%2BZV5PvE7T%2BkWtgkFB3tZZhDOGT4ZeIP2WTwF%2BXuQnq6jOblE2jWOZK8XJp%2FJRZsI%2F5g5r%2F%2FuTmqj%2B%2FxQ%2BCYG4z0SYE603wjmou5uz2UkSvdK%2FkiWbuhkVAShaFaXDkO90nJTTYWSw%3D%3D')
        cy.get('#userNameInput').type('joseane@edu.unisinos.br').should('have.value', 'joseane@edu.unisinos.br')
        cy.get('#passwordInput').type('Huntress%4')
        cy.get('#submitButton').click()
    })
})