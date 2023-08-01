import { elements } from "./elements"

const elem = elements

class Login{

    Acessar_Tela_Login(){
        cy.visit('https://www.umbro.com.br/')
    }

    loginValido(){
        cy.get(elem.botao_login).eq(1).click()
        cy.get(elem.email).type('EmailTest@gmail.com')
        cy.get(elem.password).type('Ll123456')
        cy.get(elem.botao_enviar_dados).click()
    }

    usuarioInvalido(){
        cy.get(elem.botao_login).eq(1).click()
        cy.get(elem.email).type('EmailTest@gmail.com')
        cy.get(elem.password).type('Ll123456')
        cy.get(elem.botao_enviar_dados).click()
        cy.get(elem.mensagem_erro).should('be.visible')
    }

    usuarioErrado(){
        cy.get(elem.botao_login).eq(1).click()
        cy.get(elem.email).type('teste.com')
        cy.get(elem.password).type('Ll123456')
        cy.get(elem.botao_enviar_dados).click()
        cy.get(elem.mensagem_erro_email_invalido).should('be.visible')
    }

    usuarioVazio(){
        cy.get(elem.botao_login).eq(1).click()
        cy.get(elem.email).type(' ')
        cy.get(elem.password).type('Ll123456')
        cy.get(elem.botao_enviar_dados).click()
        cy.get(elem.mensagem_erro_email_invalido).should('be.visible')
    }

    senhaInvalida(){
        cy.get(elem.botao_login).eq(1).click()
        cy.get(elem.email).type('EmailTest@gmail.com')
        cy.get(elem.password).type('Jj123456')
        cy.get(elem.botao_enviar_dados).click()
        cy.get(elem.mensagem_erro).should('be.visible')
    }

    senhaErrada(){
        cy.get(elem.botao_login).eq(1).click()
        cy.get(elem.email).type('EmailTest@gmail.com')
        cy.get(elem.password).type('123456')
        cy.get(elem.botao_enviar_dados).click()
        cy.get(elem.mensagem_erro).should('be.visible')
    }

    senhaVazia(){
        cy.get(elem.botao_login).eq(1).click()
        cy.get(elem.email).type('EmailTest@gmail.com')
        cy.get(elem.password).type(' ')
        cy.get(elem.botao_enviar_dados).click()
        cy.get(elem.mensagem_erro).should('be.visible')
    }

} export default new Login();