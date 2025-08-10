class AmazonLoginPage {
    clickLoginButton(){
        cy.get("#nav-link-accountList").click();
    }

    fillUsername(usernameAmazon){
        // cy.get('input#ap_email_login').type(usernameAmazon);
        cy.get('#ap_email_login').type(usernameAmazon);
    }

    clickContinue() {
        cy.get('input.a-button-input').click();
    }

    fillPassword(passwordAmazon) {
        cy.get('input#ap_password').type(passwordAmazon, { log: false});
    }

    clickSignIn() {
        cy.get('input#signInSubmit').click();
    }

    checkWelcomeMessage(text) {
        cy.get('#nav-link-accountList-nav-line-1', { timeout: 10000}).should('contain.text', text);
        // cy.get('#glow-ingress-line1', { timeout: 10000}).should('contain.text', text);
    }
}

export default AmazonLoginPage;