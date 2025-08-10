import users from '../fixtures/users.json';

describe('Login no SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Login com sucesso', () => {
       cy.get('[data-test="username"]').type(users.validUser.username);
       cy.get('[data-test="password"]').type(users.validUser.password);
       cy.get('[data-test="login-button"]').click();
       cy.screenshot('User logado');

       cy.url().should('include', '/inventory.html');
       cy.get('.title').should('contain', 'Products');
    });

    it('Login com falha', () => {
        cy.get('[data-test="username"]').type(users.invalidUser.username);
        cy.get('[data-test="password"]').type(users.invalidUser.password);
        cy.get('[data-test="login-button"]').click();
        cy.screenshot('User com falha no Login');

        cy.get('[data-test="error"]').should('be.visible');
    });
});