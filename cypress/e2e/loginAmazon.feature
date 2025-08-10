
Feature: Login Amanzon

    Scenario: Login no site da Amazon
        Given que estou na pagina inicial da Amanzon Brasil
        When clico no botao para login
        And preencho o campo usuario com "marcosthecruz@gmail.com"
        And clico para continuar
        And preencho o campo senha com "Mvcs#o10."
        And clico para entrar
        Then devo ver a mensagem de boas-vindas com "Olá"
        # Then devo ver a mensagem de boas-vindas com "Enviar para Marcos"