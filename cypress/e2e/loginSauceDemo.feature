Feature: Login Sauce Demo

  Scenario: Login com usuário padrão
    Given que estou na página de login da SauceDemo
    When faço login com usuário "standard_user" e senha "secret_sauce"
    Then devo ser redirecionado para a página de inventário