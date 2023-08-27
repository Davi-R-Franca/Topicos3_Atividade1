/// <reference types = "cypress" />
import tela_login from "../support/pages/tela_login"

describe('Testes da tela de login', () => {
 
  beforeEach(() => {
    cy.viewport(1500,900)
    cy.on('uncaught:exception', (err, runnable) => {
      if(err.message.includes('twttr.ready is not a function')){
        console.log('Application Error Javascript Token')
        return false;
      }else if(err.message.includes("Cannot read properties of null")){
        console.log('Application Error Javascript Token')
        return false;
      }
      
       return true
      
    })
    tela_login.Acessar_Tela_Login()
  })

  it('Fazer login válido', () => {
    tela_login.loginValido()
  })

  it('Fazer login com usuario inválido', () =>{
    tela_login.usuarioInvalido()
  })

  
  it('Fazer login com usuario errado', () =>{
    tela_login.usuarioErrado()
  })
  
  
  it('Fazer login com campo usuário vazio', () =>{
    tela_login.usuarioVazio()
  })

  
  
  it('Fazer login com senha inválida', () =>{
    tela_login.senhaInvalida()
  })


  it('Fazer login com senha sem regras de negócio', () =>{
    tela_login.senhaErrada()
  })


  it('Fazer login com campo senha vazio', () =>{
    tela_login.senhaVazia()
  })

  it('Fazer login por meio do botão do fim da página', () =>{
    tela_login.loginFinalPagina()
  })
})