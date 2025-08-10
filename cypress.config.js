const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  video: true,             // ativa gravação de vídeo
  screenshotOnRunFailure: true, // print em falha
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    // baseUrl: "https://www.saucedemo.com", // exemplo
    baseUrl: "https://www.amazon.com.br/", // exemplo
    specPattern: '**/*.feature',
    supportFile: "cypress/support/e2e.js",
    // stepDefinitions: "cypress/support/step_definitions/**/*.{js,ts}",
    stepDefinitions: 'cypress/support/step_definitions/**/*.js',
    experimentalMemoryManagement: true, // Reduz uso de memória
    numTestsKeptInMemory: 5, // Limita testes armazenados

    chromeWebSecurity: false, 
    
    setupNodeEvents(on, config) {
      // Aqui vão event listeners se precisar
      const bundler = createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      });

      addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', bundler);

      return config;
    },
  },
});
