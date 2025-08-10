import users from '../fixtures/users.json';

describe('Teste login Amazon', () => {
    it('Tenta fazer login', () => {
        cy.visit('/');

        // Clicar em "Fazer Login"
        cy.get("#nav-link-accountList").click();

        // Preencher usuário (email ou celular)
        cy.get("input#ap_email_login").type("marcosthecruz@gmail.com");

        // Clicar em continuar
        cy.get("input.a-button-input").click();

        // Preencher senha
        cy.get("input#ap_password").type("Mvcs#o10.", { log: false }); // log: false para não mostrar no log

        // Clicar em Entrar
        cy.get("input#signInSubmit").click();

        // Validar se fez login verificando elemento da página do usuário logado
        cy.get("#nav-link-accountList-nav-line-1", { timeout: 10000 }).should("contain.text", "Olá");


        // cy.get('[data-test="username"]').type(users.validUser.username);
        // cy.get('[data-test="password"]').type(users.validUser.password);
        // cy.get('[data-test="login-button"]').click();
        // cy.screenshot('User logado');

        // cy.url().should('include', '/inventory.html');
        // cy.get('.title').should('contain', 'Products');
    });
});