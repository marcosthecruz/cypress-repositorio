// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import AmazonLoginPage from '../pageObjects/AmazonLoginPage';

const amazonLoginPage = new AmazonLoginPage();

Given('que estou na pagina inicial da Amanzon Brasil', () => {
    cy.visit('/');
});

When('clico no botao para login', () => {
    amazonLoginPage.clickLoginButton();
});

When('preencho o campo usuario com {string}', (username) => {
    amazonLoginPage.fillUsername(username);
});

When('clico para continuar', () => {
    amazonLoginPage.clickContinue();
});

When('preencho o campo senha com {string}', (password) => {
    amazonLoginPage.fillPassword(password);
});

When('clico para entrar', () => {
    amazonLoginPage.clickSignIn();
});

Then('devo ver a mensagem de boas-vindas com {string}', (welcomeText) => {
    amazonLoginPage.checkWelcomeMessage(welcomeText);
});