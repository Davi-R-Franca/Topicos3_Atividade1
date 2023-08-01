import compra from "../support/pages/tela_principal/compra"

describe('template spec', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if(err.message.includes('twttr.ready is not a function')){
        console.log('Application Error Javascript Token')
        return false;
      }else if(err.message.includes("Cannot read properties of null")){
        console.log('Application Error Javascript Token')
        return false;
      }else if(err.message.includes("Cannot read properties of undefined")){
        console.log('Application Error Javascript Token')
        return false;
      }
      
       return true
      
    })
  })

  it('Comprar camisa do Fluminense', () => {
    cy.viewport(1500,900)
    compra.acessarTelaPrincipal()
    compra.pesquisa("fluminense")
    cy.wait(8000)
    compra.selecionarItem()
    cy.wait(8000)
    compra.selecionarTamanho()
    cy.wait(8000)
    compra.finalizarCompra()
  }),
  it('Comprar 2 camisas do Fluminense', () => {
    cy.viewport(1500,900)
    compra.acessarTelaPrincipal()
    compra.pesquisa("fluminense")
    cy.wait(8000)
    compra.selecionarItem()
    cy.wait(8000)
    compra.selecionarTamanho()
    cy.wait(8000)
    compra.quantidadeDeBlusas()
    cy.wait(8000)
    compra.finalizarCompra()
  })
  it('Comprar camisa do Fluminense sem selecionar o tamanho', () => {
    cy.viewport(1500,900)
    compra.acessarTelaPrincipal()
    compra.pesquisa("fluminense")
    cy.wait(8000)
    compra.selecionarItem()
    cy.wait(8000)
    compra.finalizarCompra()
  }),
  it.only('Comprar camisa do Fluminense e calcular o frete', () => {
    cy.viewport(1500,900)
    compra.acessarTelaPrincipal()
    compra.pesquisa("fluminense")
    cy.wait(8000)
    compra.selecionarItem()
    cy.wait(8000)
    compra.calculaFrete()
    cy.wait(8000)
    // compra.finalizarCompra()
  })
})