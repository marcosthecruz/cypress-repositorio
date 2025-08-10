Projeto de Automação de Testes com Cypress + Cucumber
Visão Geral
Este projeto automatiza testes end-to-end para sites, usando Cypress com integração Cucumber (BDD). Atualmente, contém testes para login em dois sites:

Login em SauceDemo (exemplo)

Login na Amazon Brasil

Tecnologias Utilizadas
Cypress: framework de testes E2E moderno para web.

Cucumber (BDD): escrita de cenários em linguagem natural (.feature) para melhor comunicação.

@badeball/cypress-cucumber-preprocessor: plugin para integração do Cucumber com Cypress.

esbuild: para pré-processamento e bundling dos testes.

Mochawesome: reporter para gerar relatórios HTML e JSON.

Node.js e npm para gerenciamento de pacotes.

Estrutura do Projeto
bash
Copiar
Editar
/cypress
  /e2e
    login.feature            # arquivo feature do login
    loginAmazon.feature      # arquivo feature para login Amazon
    /step_definitions
      loginSteps.js          # implementações dos steps
      loginAmazonSteps.js    # implementações dos steps Amazon
      hooks.js               # hooks Before e After para setup/teardown
  /support
    e2e.js                   # arquivo de suporte global que importa hooks e comandos
    commands.js              # comandos customizados do Cypress
/cypress.config.js           # configuração do Cypress e do preprocessor Cucumber
package.json                 # dependências e scripts npm
README.md                   # este arquivo
Instalação
Clone o repositório

bash
Copiar
Editar
git clone <https://github.com/marcosthecruz/cypress-repositorio>
cd <cypress-repositorio>
Instale as dependências

bash
Copiar
Editar
npm install
Instale o plugin esbuild (necessário para o preprocessor)

bash
Copiar
Editar
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
Configuração Importante
No arquivo cypress.config.js configure:

specPattern para localizar arquivos .feature

supportFile para importar hooks e comandos

Setup do preprocessor do Cucumber e esbuild

Exemplo:

js
Copiar
Editar
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com.br/",
    specPattern: '**/*.feature',
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    setupNodeEvents: async (on, config) => {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      });
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', bundler);
      return config;
    },
  },
});
Como Rodar os Testes
Modo interativo (visualizando o navegador)
bash
Copiar
Editar
npx cypress open
Selecione o teste .feature para rodar.

O navegador abrirá e mostrará a execução.

Modo headless (ideal para CI/CD)
bash
Copiar
Editar
npx cypress run --headless
Os testes rodam sem abrir navegador visível.

Ao fim, o Cypress encerra automaticamente.

Relatórios são gerados na pasta cypress/reports.

Organização dos Testes com BDD
Os arquivos .feature contêm os cenários escritos em Gherkin.

Os arquivos step_definitions/*.js implementam os passos (steps) dos cenários.

O arquivo hooks.js define ações antes e depois de cada cenário (ex: logs, limpeza).

O arquivo commands.js pode conter comandos personalizados do Cypress.

Hooks (Before e After)
No hooks.js:

js
Copiar
Editar
const { Before, After } = require('@badeball/cypress-cucumber-preprocessor');

Before(() => {
  cy.log('>>> Iniciando cenário...');
});

After(() => {
  cy.log('>>> Cenário finalizado com sucesso!');
  // Aqui você pode adicionar limpeza de cookies, localStorage, etc
  cy.clearCookies();
  cy.clearLocalStorage();
});
Dicas e Observações
O Cypress gerencia o navegador, portanto não é necessário fechar manualmente no After.

Logs e requisições de rede do site (como da Amazon) aparecerão no console durante o teste, isso é normal.

Para testes confiáveis, utilize comandos de espera explícita (cy.wait(), cy.get(...).should(...)) para garantir a sincronização.

Use dados de teste no arquivo JSON ou variáveis para organizar usuários válidos e inválidos.

Configure o reporter Mochawesome para gerar relatórios HTML legíveis.

Próximos Passos
Implementar testes adicionais e outras funcionalidades da aplicação.

Integrar o projeto com pipelines CI/CD para execução automatizada.

Melhorar os relatórios e adicionar screenshots em falhas.

Adicionar testes para outras áreas, como fluxo de compra, cadastro, etc.

Contato
Para dúvidas e sugestões, entre em contato:
Marcos Cruz
Email: marcosthecruz@gmail.com