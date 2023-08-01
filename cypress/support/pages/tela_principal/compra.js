class compra{
    acessarTelaPrincipal(){
        cy.visit('https://www.umbro.com.br/')
    }

    pesquisa(valor){
        cy.get('#downshift-0-input').type(valor).type("{enter}")
    }

    selecionarItem(){
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-stack-layout-0-x-stackContainer > .vtex-stack-layout-0-x-stackItem--first > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal', { timeout: 10000 }).should('be.visible')
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-stack-layout-0-x-stackContainer > .vtex-stack-layout-0-x-stackItem--first > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .vtex-product-summary-2-x-imageWrapper > .vtex-store-components-3-x-discountContainer > .dib > .vtex-product-summary-2-x-imageNormal').click()
    }

    selecionarTamanho(){
        cy.get('.vtex-store-components-3-x-skuSelectorItem--p > .vtex-store-components-3-x-skuSelectorInternalBox > .vtex-store-components-3-x-valueWrapper').click()
    }

    finalizarCompra(){
        cy.get('.pr0.items-stretch > .vtex-button > .vtex-button__label')
    }
}

export default new compra();