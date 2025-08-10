import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SauceDemoLoginPage from '../pageObjects/SauceDemoLoginPage';

const loginPage = new SauceDemoLoginPage();

Given('que estou na página de login da SauceDemo', () => {
    cy.visit('https://www.saucedemo.com/');
});

When('faço login com usuário {string} e senha {string}', (username, password) => {
    loginPage.login(username, password);
});

Then('devo ser redirecionado para a página de inventário', () => {
    cy.url().should('include', '/inventory.html');
});