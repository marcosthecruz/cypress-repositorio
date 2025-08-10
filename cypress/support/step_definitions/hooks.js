const { Before, After } = require('@badeball/cypress-cucumber-preprocessor');

Before(() => {
  // Se precisar preparar algo antes de cada cenário, coloca aqui
  cy.log('>>> Iniciando cenário...');
});

After(() => {
  // Fecha o navegador se existir
  console.log('✅ [HOOK] after() - Início do hook'); // Aparece no terminal
  cy.log('Mensagem visível no Dashboard do Cypress'); // Aparece no GUI

  cy.clearCookies();
  cy.clearLocalStorage();

});
